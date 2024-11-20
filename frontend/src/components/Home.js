import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div style={{
      textAlign: 'center',
      marginTop: '2em',
      padding: '1em',
      background: '#f7f9fc',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <h1 style={{ color: '#2563eb' }}>{t('welcome')}</h1>
      <p>{t('home_description')}</p>
    </div>
  );
}

export default Home;
