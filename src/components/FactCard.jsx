import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const FactCard = ({ fact, onNextFact }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="my-4"
    >
      <Card className="shadow border-0 h-100">
        <div style={{ maxHeight: '300px', overflow: 'hidden' }}>
          <Card.Img variant="top" src={fact.image} alt={fact.category} className="img-fluid" />
        </div>
        <Card.Body className="d-flex flex-column">
          <div className="mb-2">
            <span className="badge bg-success py-2 px-3 mb-2">{fact.category}</span>
          </div>
          <Card.Title className="fs-4">Did you know?</Card.Title>
          <Card.Text className="fs-5 mb-4">{fact.fact}</Card.Text>
          <div className="mt-auto">
            <Card.Text className="text-muted">
              <small>Source: {fact.source}</small>
            </Card.Text>
            <Button 
              variant="outline-success" 
              className="mt-2 w-100"
              onClick={onNextFact}
            >
              Next Fact
            </Button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default FactCard;