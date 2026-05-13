import { Link, useLocation } from 'react-router-dom'

function Navbar({ dark, setDark }) {
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
      background: dark ? '#1a1a1a' : '#fff',
      borderBottom: `0.5px solid ${dark ? '#333' : '#eee'}`,
      position: 'sticky',
      top: '0',
      zIndex: '100',
      transition: 'background 0.3s'
    }}>
      <Link to="/" style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '1.4rem',
        fontWeight: '700',
        textDecoration: 'none',
        color: dark ? '#fff' : '#1a1a18'
      }}>
        wander<span style={{ color: '#1D9E75', fontStyle: 'italic' }}>lust</span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {links.map((link, i) => (
          <Link key={i} to={link.to} style={{
            fontSize: '14px',
            fontWeight: '500',
            textDecoration: 'none',
            color: location.pathname === link.to ? '#1D9E75' : dark ? '#aaa' : '#666',
            borderBottom: location.pathname === link.to ? '2px solid #1D9E75' : '2px solid transparent',
            paddingBottom: '2px',
            transition: 'color 0.2s'
          }}>{link.label}</Link>
        ))}

        {/* DARK MODE TOGGLE */}
        <button onClick={() => setDark(!dark)} style={{
          background: dark ? '#333' : '#f0f0f0',
          border: 'none',
          borderRadius: '100px',
          padding: '6px 12px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background 0.2s'
        }}>
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar