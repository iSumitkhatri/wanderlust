function Blog() {
  const posts = [
    { emoji: '🏯', bg: '#E1F5EE', region: 'Japan · Asia', title: '48 hours in Kyoto', desc: "An honest guide to slowing down in Japan's most spiritual city.", date: 'Mar 2025', time: '6 min read' },
    { emoji: '🏖️', bg: '#FAECE7', region: 'Portugal · Europe', title: 'Why I keep returning to Lisbon', desc: "The city that keeps pulling me back every single year.", date: 'Feb 2025', time: '4 min read' },
    { emoji: '🏔️', bg: '#E6F1FB', region: 'South America', title: 'Trekking Patagonia on a budget', desc: "How I did the W Trek for under $500 all in.", date: 'Jan 2025', time: '8 min read' },
    { emoji: '🌿', bg: '#EAF3DE', region: 'Bali · Asia', title: "Finding quiet in Ubud's rice terraces", desc: "Escaping the crowds and finding real Bali.", date: 'Apr 2025', time: '5 min read' },
    { emoji: '🗼', bg: '#FBEAF0', region: 'Paris · Europe', title: 'Paris without the cliches', desc: "The neighbourhoods the guidebooks skip.", date: 'Feb 2025', time: '5 min read' },
    { emoji: '🏜️', bg: '#FAEEDA', region: 'Jordan · Middle East', title: 'Petra at sunrise: worth the 4am alarm', desc: "Yes, it really is that magical.", date: 'Jan 2025', time: '4 min read' },
  ]

  return (
    <div style={{ padding: '3rem 2.5rem' }}>
      <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '0.5rem'
      }}>All Stories</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>Honest travel writing from around the world</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {posts.map((post, i) => (
          <div key={i} style={{
            background: '#fff',
            border: '0.5px solid #eee',
            borderRadius: '12px',
            overflow: 'hidden',
            cursor: 'pointer'
          }}>
            <div style={{
              height: '160px',
              background: post.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem'
            }}>{post.emoji}</div>
            <div style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '11px', color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>{post.region}</div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px', lineHeight: '1.3' }}>{post.title}</div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', marginBottom: '12px' }}>{post.desc}</p>
              <div style={{ fontSize: '12px', color: '#999' }}>{post.time} · {post.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog