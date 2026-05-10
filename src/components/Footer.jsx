import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer style={{
      background: '#04342C',
      color: '#9FE1CB',
      padding: '3rem 2.5rem',
      marginTop: '4rem'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        <div>
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.4rem',
            fontWeight: '700',
            color: '#fff',
            marginBottom: '0.75rem'
          }}>wander<span style={{ fontStyle: 'italic', color: '#1D9E75' }}>lust</span></div>
          <p style={{ fontSize: '13px', lineHeight: '1.7', color: '#9FE1CB' }}>
            Honest travel writing from around the world. No sponsors, no filters — just real stories.
          </p>
        </div>

        <div>
          <div style={{ fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#1D9E75', marginBottom: '1rem', fontWeight: '500' }}>Pages</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { label: 'Home', to: '/' },
              { label: 'Blog', to: '/blog' },
              { label: 'About', to: '/about' },
              { label: 'Contact', to: '/contact' },
            ].map((link, i) => (
              <Link key={i} to={link.to} style={{ color: '#9FE1CB', textDecoration: 'none', fontSize: '14px' }}>{link.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#1D9E75', marginBottom: '1rem', fontWeight: '500' }}>Follow along</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['Instagram', 'Twitter', 'YouTube', 'Pinterest'].map((social, i) => (
              <a key={i} href="#" style={{ color: '#9FE1CB', textDecoration: 'none', fontSize: '14px' }}>{social}</a>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '0.5px solid rgba(255,255,255,0.1)',
        paddingTop: '1.5rem',
        fontSize: '12px',
        color: '#9FE1CB',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <span>© 2025 Sumit Khatri · Wanderlust</span>
        <span>Made with love & a carry-on bag ✈</span>
      </div>
    </footer>
  )
}

export default Footer