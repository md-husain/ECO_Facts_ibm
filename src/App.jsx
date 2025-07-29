import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // ✅ remove BrowserRouter here
import 'bootstrap/dist/css/bootstrap.min.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';

// Components
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import FactCard from './components/FactCard';
import StatsSection from './components/StatsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Pages
import Register from './pages/Register';
import Login from './pages/Login';

// Local Data
import factsData from './data/facts.json';

function App() {
  const [user, setUser] = useState(null);
  const [currentFact, setCurrentFact] = useState(null);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * factsData.length);
    setCurrentFact(factsData[randomIndex]);
  };

  useEffect(() => {
    getRandomFact();
    const interval = setInterval(getRandomFact, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [co2Res, tempRes, iceRes] = await Promise.all([
          fetch('https://global-warming.org/api/co2-api'),
          fetch('https://global-warming.org/api/temperature-api'),
          fetch('https://global-warming.org/api/arctic-api'),
        ]);

        const co2Data = await co2Res.json();
        const tempData = await tempRes.json();
        const iceData = await iceRes.json();

        const latestCo2 = co2Data?.co2?.[0]?.trend || 'N/A';
        const latestTemp = tempData?.result?.[0]?.station || 'N/A';
        const latestIce = iceData?.arcticData?.[0]?.extent || 'N/A';

        const updatedStats = [
          {
            id: 1,
            title: 'CO₂ Level',
            value: `${latestCo2} ppm`,
            description: 'Current atmospheric CO₂ concentration',
            icon: 'smog',
          },
          {
            id: 2,
            title: 'Sea Level Rise',
            value: `3.6 mm`,
            description: 'Average annual sea level rise (static fallback)',
            icon: 'water',
          },
          {
            id: 3,
            title: 'Temperature Rise',
            value: `${parseFloat(latestTemp).toFixed(2)} °C`,
            description: 'Global average temperature anomaly',
            icon: 'temperature-high',
          },
          {
            id: 4,
            title: 'Arctic Ice Extent',
            value: `${parseFloat(latestIce).toFixed(2)} million km²`,
            description: 'Latest Arctic sea ice extent',
            icon: 'snowflake',
          },
        ];

        setStats(updatedStats);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
    const intervalId = setInterval(fetchStats, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar />

      <Routes>
        {/* 🔐 Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ Protected/Home Page */}
        <Route
          path="/"
          element={
            user ? (
              <>
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
                      <div className="col-12 col-sm-10 col-md-8 col-lg-7">
                        {currentFact && (
                          <FactCard fact={currentFact} onNextFact={getRandomFact} />
                        )}
                      </div>
                    </div>
                  </div>
                </section>

                {stats.length === 0 ? (
                  <div className="text-center py-5 text-muted">
                    <h5>Loading real-time climate data...</h5>
                  </div>
                ) : (
                  <StatsSection stats={stats} />
                )}

                <ContactForm />
                <Footer />
                <ScrollToTopButton />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
