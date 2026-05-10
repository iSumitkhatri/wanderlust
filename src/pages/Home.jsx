import { Link } from 'react-router-dom'

function Home() {
  const posts = [
    { emoji: '🏯', bg: '#E1F5EE', region: 'Japan · Asia', title: '48 hours in Kyoto', desc: "An honest guide to slowing down in Japan's most spiritual city.", date: 'Mar 2025', time: '6 min read' },
    { emoji: '🏖️', bg: '#FAECE7', region: 'Portugal · Europe', title: 'Why I keep returning to Lisbon', desc: "The city that keeps pulling me back every single year.", date: 'Feb 2025', time: '4 min read' },
    { emoji: '🏔️', bg: '#E6F1FB', region: 'South America', title: 'Trekking Patagonia on a budget', desc: "How I did the W Trek for under $500 all in.", date: 'Jan 2025', time: '8 min read' },
  ]

  return (
    <div>
      {/* HERO */}
      <section style={{
        padding: '7rem 2.5rem',
        background: 'linear-gradient(135deg, #E1F5EE 0%, #9FE1CB 40%, #1D9E75 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', width: '300px', height: '300px',
          borderRadius: '50%', border: '50px solid rgba(255,255,255,0.15)',
          top: '-80px', right: '-80px'
        }} />
        <div style={{
          position: 'absolute', width: '400px', height: '400px',
          borderRadius: '50%', border: '50px solid rgba(255,255,255,0.1)',
          bottom: '-120px', left: '-120px'
        }} />

        <div style={{
          display: 'inline-block',
          fontSize: '11px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#085041',
          background: 'rgba(255,255,255,0.5)',
          padding: '4px 14px',
          borderRadius: '20px',
          marginBottom: '1.5rem',
          fontWeight: '500'
        }}>✈ A travel journal</div>

        <h1 style={{
          fontSize: '3.8rem',
          fontWeight: '700',
          lineHeight: '1.1',
          color: '#04342C',
          maxWidth: '620px',
          margin: '0 auto 1.2rem'
        }}>
          See the world <br />
          <em style={{ color: '#0F6E56' }}>one story</em> at a time
        </h1>

        <p style={{
          fontSize: '1.05rem',
          color: '#085041',
          maxWidth: '460px',
          margin: '0 auto 2.5rem',
          lineHeight: '1.8',
          fontWeight: '300'
        }}>
          Honest travel writing, hidden gems, budget tips, and postcards from places that still surprise me.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/blog" style={{
            background: '#0F6E56',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: '500',
            textDecoration: 'none'
          }}>Read the blog →</Link>

          <Link to="/about" style={{
            background: 'rgba(255,255,255,0.6)',
            color: '#085041',
            border: '0.5px solid rgba(15,110,86,0.3)',
            padding: '14px 32px',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: '500',
            textDecoration: 'none'
          }}>About me</Link>
        </div>
      </section>

      {/* STATS */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '0',
        borderBottom: '0.5px solid #eee',
        background: '#fff'
      }}>
        {[
          { number: '34', label: 'Countries visited' },
          { number: '6', label: 'Years travelling' },
          { number: '80+', label: 'Stories written' },
          { number: '12', label: 'Destinations this year' },
        ].map((stat, i) => (
          <div key={i} style={{
            padding: '2rem',
            textAlign: 'center',
            borderRight: i < 3 ? '0.5px solid #eee' : 'none'
          }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: '#1D9E75', fontFamily: 'Playfair Display, serif' }}>{stat.number}</div>
            <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* LATEST POSTS */}
      <section style={{ padding: '4rem 2.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Latest stories</h2>
          <Link to="/blog" style={{ fontSize: '13px', color: '#1D9E75', fontWeight: '500' }}>See all →</Link>
        </div>

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
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                height: '180px',
                background: post.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4.5rem'
              }}>{post.emoji}</div>
              <div style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '11px', color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontWeight: '500' }}>{post.region}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px', lineHeight: '1.3' }}>{post.title}</div>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', marginBottom: '12px' }}>{post.desc}</p>
                <div style={{ fontSize: '12px', color: '#999' }}>{post.time} · {post.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{
        background: '#04342C',
        padding: '4rem 2.5rem',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '0.75rem' }}>Never miss a story</h2>
        <p style={{ color: '#9FE1CB', marginBottom: '2rem', fontSize: '15px' }}>New travel stories straight to your inbox. No spam, ever.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              padding: '13px 20px',
              borderRadius: '100px',
              border: 'none',
              fontSize: '14px',
              width: '280px',
              outline: 'none',
              fontFamily: 'DM Sans, sans-serif'
            }}
          />
          <button style={{
            background: '#1D9E75',
            color: '#fff',
            border: 'none',
            padding: '13px 28px',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer'
          }}>Subscribe →</button>
        </div>
      </section>
    </div>
  )
}

export default Home