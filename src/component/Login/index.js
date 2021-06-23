import React, { useState, useRef } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import {Link, useHistory} from 'react-router-dom'

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();

  const history = useHistory()

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push('/marketing')
    } catch (err) {
      setError("gagal login");
    }

    setLoading(false);
  };

  return (
    <>
      <Card className="bg-dark-custom">
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            <Form.Group id="password" className="mt-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required ref={passwordRef} />
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100 mt-5">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Belum punya Akun? <Link to="/signup">Buat Akun</Link></div>
    </>
  );
}

export default Login;
