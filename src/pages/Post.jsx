import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabase'

function Post() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [comments, setComments] = useState([])
  const [form, setForm] = useState({ name: '', body: '' })
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchPost()
    fetchComments()
  }, [id])

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

  async function fetchComments() {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_id', id)
      .order('created_at', { ascending: false })
    if (error) console.error(error)
    else setComments(data || [])
  }

  async function handleComment() {
    if (!form.name || !form.body) return setMessage('Please fill in both fields!')
    setSubmitting(true)
    const { error } = await supabase.from('comments').insert([{
      post_id: parseInt(id),
      name: form.name,
      body: form.body
    }])
    if (error) {
      setMessage('Error posting comment!')
    } else {
      setMessage('Comment posted!')
      setForm({ name: '', body: '' })
      fetchComments()
    }
    setSubmitting(false)
  }

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
        alignItems: 'center',
        marginBottom: '3rem'
      }}>
        <Link to="/blog" style={{ fontSize: '14px', color: '#1D9E75', fontWeight: '500', textDecoration: 'none' }}>← All stories</Link>
        <Link to="/contact" style={{ fontSize: '14px', color: '#1D9E75', fontWeight: '500', textDecoration: 'none' }}>Get in touch →</Link>
      </div>

      {/* COMMENTS SECTION */}
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>
          Comments {comments.length > 0 && `(${comments.length})`}
        </h2>

        {/* COMMENT FORM */}
        <div style={{ background: '#f9f9f7', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>Leave a comment</h3>
          <input
            placeholder="Your name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '0.5px solid #ddd',
              fontSize: '14px',
              outline: 'none',
              fontFamily: 'inherit',
              marginBottom: '12px'
            }}
          />
          <textarea
            placeholder="Write your comment..."
            value={form.body}
            onChange={e => setForm({ ...form, body: e.target.value })}
            rows={4}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '0.5px solid #ddd',
              fontSize: '14px',
              outline: 'none',
              fontFamily: 'inherit',
              resize: 'vertical',
              marginBottom: '12px'
            }}
          />
          {message && <p style={{ fontSize: '13px', color: '#1D9E75', marginBottom: '12px' }}>{message}</p>}
          <button onClick={handleComment} style={{
            background: '#0F6E56',
            color: '#fff',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            fontFamily: 'inherit'
          }}>{submitting ? 'Posting...' : 'Post comment →'}</button>
        </div>

        {/* COMMENTS LIST */}
        {comments.length === 0 ? (
          <p style={{ color: '#999', fontSize: '14px' }}>No comments yet — be the first!</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {comments.map(comment => (
              <div key={comment.id} style={{
                background: '#fff',
                border: '0.5px solid #eee',
                borderRadius: '12px',
                padding: '1.25rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontWeight: '600', fontSize: '14px' }}>{comment.name}</span>
                  <span style={{ fontSize: '12px', color: '#999' }}>
                    {new Date(comment.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <p style={{ fontSize: '14px', color: 'inherit', lineHeight: '1.6' }}>{comment.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Post