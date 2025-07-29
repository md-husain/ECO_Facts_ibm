import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  // 👇 Only show success message once
  useEffect(() => {
    if (location.state?.successMsg) {
      setSuccessMsg(location.state.successMsg);

      // Clear the state from history so it doesn't show again
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container glass-card">
        <h3 className="text-center mb-3">Login to EcoFacts</h3>

        {/* ✅ Show success message */}
        {successMsg && (
          <Alert variant="success" onClose={() => setSuccessMsg('')} dismissible>
            {successMsg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="text-white">Email Address</Form.Label>
            <Form.Control
              type="email"
              className="input"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              className="input"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Check
            type="checkbox"
            label="Show Password"
            className="text-white mb-3"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />

          {error && <p className="text-danger text-center">{error}</p>}

          <Button type="submit" variant="primary" className="w-100 rounded-pill">
            Login
          </Button>

          <p className="mt-3 text-center text-white">
            Don&apos;t have an account? <a href="/register" className="link-light">Register here</a>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Login;
