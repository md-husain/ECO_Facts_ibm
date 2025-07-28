import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formState);
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form
    setFormState({
      name: '',
      email: '',
      message: ''
    });
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-success">Get In Touch</h2>
          <p className="lead">Have questions or suggestions? Let us know!</p>
        </motion.div>
        
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white p-4 p-md-5 shadow-sm rounded">
                {showSuccess && (
                  <Alert variant="success" className="mb-4">
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      required 
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Your email" 
                      required 
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4} 
                      placeholder="Your message"
                      required 
                    />
                  </Form.Group>
                  
                  <Button variant="success" type="submit" className="w-100 py-2">
                    Send Message
                  </Button>
                </Form>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;