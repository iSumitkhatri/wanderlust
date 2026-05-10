import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blog' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.2rem 2.5rem',
      background: '#fff',
      borderBottom: '0.5px solid #eee',
      position: 'sticky',
      top: '0',
      zIndex: '100'
    }}>
      <Link to="/" style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '1.4rem',
        fontWeight: '700',
        textDecoration: 'none',
        color: '#1a1a18'
      }}>
        wander<span style={{ color: '#1D9E75', fontStyle: 'italic' }}>lust</span>
      </Link>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.to}
            style={{
              fontSize: '14px',
              fontWeight: '500',
              textDecoration: 'none',
              color: location.pathname === link.to ? '#1D9E75' : '#666',
              borderBottom: location.pathname === link.to ? '2px solid #1D9E75' : '2px solid transparent',
              paddingBottom: '2px',
              transition: 'color 0.2s'
            }}
          >{link.label}</Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar