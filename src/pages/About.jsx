function About() {
  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '4rem 2.5rem' }}>
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: '#E1F5EE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.5rem',
        marginBottom: '1.5rem'
      }}>🧳</div>

      <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '0.5rem'
      }}>Hi, I'm Sumit</h1>

      <p style={{ color: '#1D9E75', fontWeight: '500', marginBottom: '2rem' }}>
        Travel writer · Explorer · Storyteller
      </p>

      <p style={{ lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
        I've been travelling since I was 22 with nothing but a backpack and a one-way ticket. 
        This blog is my way of sharing the places, people, and moments that changed how I see the world.
      </p>

      <p style={{ lineHeight: '1.8', color: '#444', marginBottom: '2.5rem' }}>
        I write honestly — about the beautiful parts and the hard parts. No sponsored content, 
        no perfect Instagram moments. Just real travel stories.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        marginBottom: '2.5rem'
      }}>
        {[
          { number: '34', label: 'Countries visited' },
          { number: '6', label: 'Years travelling' },
          { number: '80+', label: 'Stories written' },
        ].map((stat, i) => (
          <div key={i} style={{
            background: '#f7f7f5',
            borderRadius: '12px',
            padding: '1.25rem',
            textAlign: 'center'
          }}>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: '700', color: '#1D9E75' }}>{stat.number}</div>
            <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <a href="/contact" style={{
        display: 'inline-block',
        background: '#0F6E56',
        color: '#fff',
        padding: '13px 30px',
        borderRadius: '100px',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: '500'
      }}>Get in touch →</a>
    </div>
  )
}

export default About