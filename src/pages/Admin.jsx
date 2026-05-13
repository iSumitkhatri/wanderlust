import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'

function Admin() {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [form, setForm] = useState({ title: '', region: '', category: '', date: '', time: '', description: '', body: '', image: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate('/login')
      else setUser(session.user)
    })
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const { data } = await supabase.from('posts').select('*').order('created_at', { ascending: false })
    setPosts(data || [])
  }

  async function handleSubmit() {
    if (!form.title || !form.body) return setMessage('Title and body are required!')
    setLoading(true)
    const { error } = await supabase.from('posts').insert([form])
    if (error) setMessage('Error publishing post!')
    else {
      setMessage('Post published!')
      setForm({ title: '', region: '', category: '', date: '', time: '', description: '', body: '', image: '' })
      fetchPosts()
    }
    setLoading(false)
  }

  async function handleDelete(id) {
    await supabase.from('posts').delete().eq('id', id)
    fetchPosts()
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    navigate('/')
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '0.5px solid #ddd',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'inherit',
    marginBottom: '12px'
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 2.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '700' }}>Admin Panel</h1>
        <button onClick={handleLogout} style={{
          background: 'transparent',
          border: '0.5px solid #ddd',
          padding: '8px 18px',
          borderRadius: '100px',
          fontSize: '13px',
          cursor: 'pointer',
          fontFamily: 'inherit'
        }}>Log out</button>
      </div>

      {/* NEW POST FORM */}
      <div style={{ background: '#fff', border: '0.5px solid #eee', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem' }}>Write a new post</h2>

        <input style={inputStyle} placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <input style={inputStyle} placeholder="Region (e.g. Japan · Asia)" value={form.region} onChange={e => setForm({ ...form, region: e.target.value })} />
        <input style={inputStyle} placeholder="Category (Asia / Europe / Americas / Middle East)" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
        <input style={inputStyle} placeholder="Date (e.g. May 2025)" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
        <input style={inputStyle} placeholder="Read time (e.g. 5 min read)" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} />
        <input style={inputStyle} placeholder="Short description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
        <input style={inputStyle} placeholder="Image URL (from Unsplash)" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
        <textarea
          placeholder="Write your full article here..."
          value={form.body}
          onChange={e => setForm({ ...form, body: e.target.value })}
          rows={8}
          style={{ ...inputStyle, resize: 'vertical' }}
        />

        {message && <p style={{ color: '#1D9E75', fontSize: '13px', marginBottom: '12px' }}>{message}</p>}

        <button onClick={handleSubmit} style={{
          background: '#0F6E56',
          color: '#fff',
          border: 'none',
          padding: '13px 28px',
          borderRadius: '100px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          fontFamily: 'inherit'
        }}>{loading ? 'Publishing...' : 'Publish post →'}</button>
      </div>

      {/* EXISTING POSTS */}
      <h2 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem' }}>Published posts</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {posts.map(post => (
          <div key={post.id} style={{
            background: '#fff',
            border: '0.5px solid #eee',
            borderRadius: '12px',
            padding: '1rem 1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontWeight: '600', fontSize: '15px' }}>{post.title}</div>
              <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>{post.region} · {post.date}</div>
            </div>
            <button onClick={() => handleDelete(post.id)} style={{
              background: 'transparent',
              border: '0.5px solid #ffcccc',
              color: '#cc0000',
              padding: '6px 14px',
              borderRadius: '100px',
              fontSize: '12px',
              cursor: 'pointer',
              fontFamily: 'inherit'
            }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Admin