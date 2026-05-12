import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div style={{ maxWidth: '580px', margin: '0 auto', padding: '4rem 2.5rem' }}>
      <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '0.5rem'
      }}>Create an account</h1>

      <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '2.5rem' }}>
        Join the Wanderlust community and never miss a story from the road.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '13px', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Sumit Khatri"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '0.5px solid #ddd',
              fontSize: '14px',
              outline: 'none',
              fontFamily: 'inherit',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div>
          <label style={{ fontSize: '13px', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '0.5px solid #ddd',
              fontSize: '14px',
              outline: 'none',
              fontFamily: 'inherit',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div>
          <label style={{ fontSize: '13px', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={form.password}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '0.5px solid #ddd',
              fontSize: '14px',
              outline: 'none',
              fontFamily: 'inherit',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            background: '#0F6E56',
            color: '#fff',
            border: 'none',
            padding: '13px 30px',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            alignSelf: 'flex-start'
          }}
        >Sign up →</button>
      </form>
    </div>
  )
}

export default SignUp
