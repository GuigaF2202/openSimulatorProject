import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Altera o idioma
  };

  return (
    <header style={{
      padding: '1em',
      backgroundColor: '#2563eb',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <nav style={{ display: 'flex', gap: '1em' }}>
        <NavLink to="/" style={({ isActive }) => ({
          color: isActive ? '#f7f9fc' : '#fff',
          textDecoration: 'none',
          fontWeight: isActive ? 'bold' : 'normal',
        })}>
          {t('welcome')}
        </NavLink>
        <NavLink to="/login" style={({ isActive }) => ({
          color: isActive ? '#f7f9fc' : '#fff',
          textDecoration: 'none',
          fontWeight: isActive ? 'bold' : 'normal',
        })}>
          {t('login')}
        </NavLink>
        <NavLink to="/register" style={({ isActive }) => ({
          color: isActive ? '#f7f9fc' : '#fff',
          textDecoration: 'none',
          fontWeight: isActive ? 'bold' : 'normal',
        })}>
          {t('register')}
        </NavLink>
      </nav>
      <div style={{ display: 'flex', gap: '0.5em' }}>
        <button onClick={() => changeLanguage('en')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>EN</button>
        <button onClick={() => changeLanguage('pt')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>PT</button>
        <button onClick={() => changeLanguage('es')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>ES</button>
      </div>
    </header>
  );
}

export default Header;
