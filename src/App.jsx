import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import FactCard from './components/FactCard';
import StatsSection from './components/StatsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Data
import factsData from './data/facts.json';
import statsData from './data/stats.json';

function App() {
  const [currentFact, setCurrentFact] = useState(null);

  useEffect(() => {
    // Get a random fact when the component mounts
    getRandomFact();
  }, []);

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * factsData.length);
    setCurrentFact(factsData[randomIndex]);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar />
      <Header />
      
      <section id="facts" className="py-5">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-4 fw-bold text-success">Daily Environmental Fact</h2>
              <p className="lead">Learn something new about our planet every day</p>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              {currentFact && (
                <FactCard fact={currentFact} onNextFact={getRandomFact} />
              )}
            </div>
          </div>
        </div>
      </section>
      
      <StatsSection stats={statsData} />
      <ContactForm />
      
      <Footer />
    </div>
  );
}

export default App;