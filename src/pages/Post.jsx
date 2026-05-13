import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabase'

function Post() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single()
      if (error) console.error(error)
      else setPost(data)
      setLoading(false)
    }
    fetchPost()
  }, [id])

  if (loading) return (
    <div style={{ padding: '4rem 2.5rem', textAlign: 'center', color: '#666' }}>
      Loading...
    </div>
  )

  if (!post) return (
    <div style={{ padding: '4rem 2.5rem', textAlign: 'center' }}>
      <h2>Post not found</h2>
      <Link to="/blog" style={{ color: '#1D9E75' }}>← Back to blog</Link>
    </div>
  )

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '3rem 2.5rem' }}>

      <Link to="/blog" style={{
        fontSize: '13px',
        color: '#1D9E75',
        fontWeight: '500',
        textDecoration: 'none',
        display: 'inline-block',
        marginBottom: '2rem'
      }}>← Back to all stories</Link>

      <div style={{ fontSize: '11px', color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '500', marginBottom: '1rem' }}>
        {post.region}
      </div>

      <h1 style={{
        fontSize: '2.8rem',
        fontWeight: '700',
        lineHeight: '1.15',
        marginBottom: '1rem',
        color: 'inherit'
      }}>{post.title}</h1>

      <div style={{ fontSize: '13px', color: '#999', marginBottom: '2rem' }}>
        {post.time} · {post.date}
      </div>

      <img src={post.image} alt={post.title} style={{
        width: '100%',
        height: '420px',
        objectFit: 'cover',
        borderRadius: '12px',
        marginBottom: '2.5rem'
      }} />

      <p style={{
        fontSize: '1.2rem',
        color: 'inherit',
        lineHeight: '1.8',
        marginBottom: '1.5rem',
        fontStyle: 'italic',
        borderLeft: '3px solid #1D9E75',
        paddingLeft: '1.25rem'
      }}>{post.description}</p>

      <p style={{
        fontSize: '1.05rem',
        color: 'inherit',
        lineHeight: '1.9',
        marginBottom: '3rem'
      }}>{post.body}</p>

      <div style={{
        borderTop: '0.5px solid #eee',
        paddingTop: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/blog" style={{ fontSize: '14px', color: '#1D9E75', fontWeight: '500', textDecoration: 'none' }}>← All stories</Link>
        <Link to="/contact" style={{ fontSize: '14px', color: '#1D9E75', fontWeight: '500', textDecoration: 'none' }}>Get in touch →</Link>
      </div>
    </div>
  )
}

export default Post