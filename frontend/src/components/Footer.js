import React from 'react';

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1em', backgroundColor: '#f7f9fc', marginTop: '2em' }}>
      <p>&copy; {new Date().getFullYear()} OpenSimulator. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
