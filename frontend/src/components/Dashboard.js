import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
      } catch (err) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>Bem-vindo, {user.email}</p>
          <button onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }}>Sair</button>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default Dashboard;
