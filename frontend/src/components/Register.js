import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.REACT_APP_API_URL + '/users/register', { email, password });
      setMessage('Usuário registrado com sucesso!');
      navigate('/login');
    } catch (err) {
      setMessage('Erro ao registrar usuário. Tente novamente.');
    }
  };

  return (
    <div>
      <h1>Registrar</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Registrar</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default Register;
