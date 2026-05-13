import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../supabase'

function Blog() {
  const [posts, setPosts] = useState([])
  const [active, setActive] = useState('All')
  const [loading, setLoading] = useState(true)

  const categories = ['All', 'Asia', 'Europe', 'Americas', 'Middle East']

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase.from('posts').select('*')
      if (error) console.error(error)
      else setPosts(data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active)

  if (loading) return (
    <div style={{ padding: '4rem 2.5rem', textAlign: 'center', color: '#666' }}>
      Loading stories...
    </div>
  )

  return (
    <div style={{ padding: '3rem 2.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>All Stories</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>Honest travel writing from around the world</p>

      {/* CATEGORY FILTER */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActive(cat)} style={{
            padding: '8px 18px',
            borderRadius: '100px',
            border: '0.5px solid',
            borderColor: active === cat ? '#1D9E75' : '#ddd',
            background: active === cat ? '#1D9E75' : '#fff',
            color: active === cat ? '#fff' : '#666',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif',
            transition: 'all 0.2s'
          }}>{cat}</button>
        ))}
      </div>

      {/* POSTS GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {filtered.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id} style={{
            background: '#fff',
            border: '0.5px solid #eee',
            borderRadius: '12px',
            overflow: 'hidden',
            textDecoration: 'none',
            color: 'inherit',
            display: 'block',
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
            <img src={post.image} alt={post.title} style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover'
            }} />
            <div style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '11px', color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px', fontWeight: '500' }}>{post.region}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px', lineHeight: '1.3' }}>{post.title}</div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', marginBottom: '12px' }}>{post.description}</p>
              <div style={{ fontSize: '12px', color: '#999' }}>{post.time} · {post.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog