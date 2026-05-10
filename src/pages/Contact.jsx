function Contact() {
  return (
    <div style={{ maxWidth: '580px', margin: '0 auto', padding: '4rem 2.5rem' }}>
      <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '0.5rem'
      }}>Get in touch</h1>

      <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '2.5rem' }}>
        Have a question, collaboration idea, or just want to say hi? I'd love to hear from you.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '13px', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Your name</label>
          <input type="text" placeholder="Sumit Khatri" style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '0.5px solid #ddd',
            fontSize: '14px',
            outline: 'none',
            fontFamily: 'inherit'
          }} />
        </div>

        <div>
          <label style={{ fontSize: '13px', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Email</label>
          <input type="email" placeholder="you@example.com" style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '0.5px solid #ddd',
            fontSize: '14px',
            outline: 'none',
            fontFamily: 'inherit'
          }} />
        </div>

        <div>
          <label style={{ fontSize: '13px', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Message</label>
          <textarea placeholder="Your message here..." rows={5} style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '0.5px solid #ddd',
            fontSize: '14px',
            outline: 'none',
            fontFamily: 'inherit',
            resize: 'vertical'
          }} />
        </div>

        <button style={{
          background: '#0F6E56',
          color: '#fff',
          border: 'none',
          padding: '13px 30px',
          borderRadius: '100px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          alignSelf: 'flex-start'
        }}>Send message →</button>
      </div>
    </div>
  )
}

export default Contact