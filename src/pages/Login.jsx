import { useState } from 'react'
import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleLogin() {
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('Invalid email or password')
    } else {
      navigate('/admin')
    }
    setLoading(false)
  }

  return (
    <div style={{ maxWidth: '400px', margin: '6rem auto', padding: '2.5rem', background: '#fff', borderRadius: '16px', border: '0.5px solid #eee' }}>
      <h1 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>Admin login</h1>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '2rem' }}>Only for the blog owner</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '13px', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '0.5px solid #ddd', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }}
          />
        </div>

        <div>
          <label style={{ fontSize: '13px', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '0.5px solid #ddd', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }}
          />
        </div>

        {error && <p style={{ color: 'red', fontSize: '13px' }}>{error}</p>}

        <button onClick={handleLogin} style={{
          background: '#0F6E56',
          color: '#fff',
          border: 'none',
          padding: '13px',
          borderRadius: '100px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          fontFamily: 'inherit'
        }}>{loading ? 'Logging in...' : 'Log in →'}</button>
      </div>
    </div>
  )
}

export default Login