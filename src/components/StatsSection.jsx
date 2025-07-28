import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const StatsCard = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-100 text-center shadow-sm border-0 mb-4">
        <Card.Body>
          <div className="display-4 text-success mb-3">
            {/* Font Awesome icons would typically go here, but using emoji alternatives */}
            {stat.icon === 'temperature-high' && '🌡️'}
            {stat.icon === 'water' && '🌊'}
            {stat.icon === 'smog' && '💨'}
            {stat.icon === 'snowflake' && '❄️'}
          </div>
          <h3 className="h4 mb-2">{stat.title}</h3>
          <div className="display-5 fw-bold text-success mb-2">{stat.value}</div>
          <p className="text-muted mb-0">{stat.description}</p>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

const StatsSection = ({ stats }) => {
  return (
    <section id="stats" className="py-5 bg-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-success">Climate Change Stats</h2>
          <p className="lead">Real-time data about our changing planet</p>
        </motion.div>
        
        <Row>
          {stats.map((stat, index) => (
            <Col md={6} lg={3} key={stat.id}>
              <StatsCard stat={stat} index={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;