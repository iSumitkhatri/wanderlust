import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Form state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    setLoading(true)
    setError(null)
    const { data, error } = await supabase.from('users').select('*').order('created_at', { ascending: false })
    if (error) setError(error.message)
    else setUsers(data)
    setLoading(false)
  }

  async function handleAdd(e) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setSubmitting(true)
    setSuccessMsg('')
    const { error } = await supabase.from('users').insert([{ name: name.trim(), email: email.trim() }])
    if (error) {
      setError(error.message)
    } else {
      setName('')
      setEmail('')
      setSuccessMsg('User added!')
      fetchUsers()
    }
    setSubmitting(false)
  }

  async function handleDelete(id) {
    const { error } = await supabase.from('users').delete().eq('id', id)
    if (error) setError(error.message)
    else fetchUsers()
  }

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '3rem 2rem' }}>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{
          display: 'inline-block',
          fontSize: '11px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#085041',
          background: '#E1F5EE',
          padding: '4px 14px',
          borderRadius: '20px',
          marginBottom: '1rem',
          fontWeight: '500'
        }}>🧪 Supabase test</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>Users table</h1>
        <p style={{ color: '#666', fontSize: '14px' }}>Live read/write test against your Supabase <code style={{ background: '#f0f0ee', padding: '2px 6px', borderRadius: '4px' }}>users</code> table.</p>
      </div>

      {/* Add user form */}
      <form onSubmit={handleAdd} style={{
        background: '#fff',
        border: '0.5px solid #eee',
        borderRadius: '12px',
        padding: '1.5rem',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#1a1a18' }}>Add a user</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" disabled={submitting} style={btnStyle}>
            {submitting ? 'Adding…' : 'Add user →'}
          </button>
        </div>
        {successMsg && <p style={{ marginTop: '10px', fontSize: '13px', color: '#1D9E75', fontWeight: '500' }}>✓ {successMsg}</p>}
      </form>

      {/* Error */}
      {error && (
        <div style={{
          background: '#FEF2F2', border: '0.5px solid #FECACA',
          borderRadius: '8px', padding: '12px 16px',
          color: '#B91C1C', fontSize: '13px', marginBottom: '1.5rem'
        }}>
          ⚠ {error}
        </div>
      )}

      {/* Table */}
      <div style={{ background: '#fff', border: '0.5px solid #eee', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr auto',
          padding: '12px 20px',
          background: '#f9f9f7',
          borderBottom: '0.5px solid #eee',
          fontSize: '11px', fontWeight: '600',
          textTransform: 'uppercase', letterSpacing: '1px', color: '#999'
        }}>
          <span>Name</span>
          <span>Email</span>
          <span>Action</span>
        </div>

        {loading ? (
          <div style={{ padding: '2.5rem', textAlign: 'center', color: '#999', fontSize: '14px' }}>Loading…</div>
        ) : users.length === 0 ? (
          <div style={{ padding: '2.5rem', textAlign: 'center', color: '#bbb', fontSize: '14px' }}>
            No users yet. Add one above.
          </div>
        ) : (
          users.map((user, i) => (
            <div key={user.id} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr auto',
              padding: '14px 20px',
              alignItems: 'center',
              borderBottom: i < users.length - 1 ? '0.5px solid #f0f0ee' : 'none',
              fontSize: '14px'
            }}>
              <span style={{ fontWeight: '500' }}>{user.name}</span>
              <span style={{ color: '#666' }}>{user.email}</span>
              <button
                onClick={() => handleDelete(user.id)}
                style={{
                  background: 'none', border: '0.5px solid #eee',
                  borderRadius: '6px', padding: '5px 10px',
                  fontSize: '12px', color: '#999', cursor: 'pointer'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#FECACA'; e.currentTarget.style.color = '#B91C1C' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#eee'; e.currentTarget.style.color = '#999' }}
              >Delete</button>
            </div>
          ))
        )}
      </div>

      <p style={{ marginTop: '1rem', fontSize: '12px', color: '#bbb', textAlign: 'right' }}>
        {users.length} {users.length === 1 ? 'user' : 'users'} total
      </p>
    </div>
  )
}

const inputStyle = {
  flex: '1',
  minWidth: '160px',
  padding: '10px 16px',
  borderRadius: '8px',
  border: '0.5px solid #ddd',
  fontSize: '14px',
  outline: 'none',
  fontFamily: 'DM Sans, sans-serif',
  background: '#fafafa'
}

const btnStyle = {
  background: '#0F6E56',
  color: '#fff',
  border: 'none',
  padding: '10px 22px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  fontFamily: 'DM Sans, sans-serif',
  whiteSpace: 'nowrap'
}

export default Users
