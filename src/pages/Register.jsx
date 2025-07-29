import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap';
import '../styles/Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCred.user, { displayName: name });

      navigate('/login', {
        state: { successMsg: 'Registration successful! Please login.' },
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container glass-card">
        <h3 className="text-center mb-4">Create an Account</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter full name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Your Password</Form.Label>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              className="input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Re-enter password"
            />
          </Form.Group>

          <Form.Check
            type="checkbox"
            label="Show Password"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="mb-3 show-password-check"
          />

          {error && <p className="text-danger">{error}</p>}

          <Button type="submit" variant="primary" className="w-100 rounded-pill">
            Register
          </Button>

          <p className="mt-3 text-center text-white">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Register;
