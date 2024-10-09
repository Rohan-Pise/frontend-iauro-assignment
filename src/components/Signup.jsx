import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/signup', { email, password });
      if (response.status === 200) {
        alert('Signup successful! You can now login.');
        navigate('/login'); // Redirect to the login page after successful signup
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Signup failed. Please try again.';
      alert(errorMessage);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSignup} className="bg-sky-500 p-6 rounded-md w-80">
        <h2 className="text-white text-xl mb-4">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="block w-full p-2 mb-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="block w-full p-2 mb-4 rounded-md"
        />
        <button type="submit" className="bg-white text-sky-500 py-2 rounded-md w-full">
          Sign Up
        </button>
        <p className="text-white text-center mt-4">
          Already have an account?{' '}
          <button 
            className="text-blue-500 hover:underline ml-1"
            onClick={() => navigate('/login')}
          >
            Login here
          </button>
        </p>
      </form>
    </div>
  );
};

export default Signup;