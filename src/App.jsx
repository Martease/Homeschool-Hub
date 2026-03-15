import React from 'react'

function App() {
  const subjects = [
    { name: 'Full Stack Development', time: '6:00 AM - 8:00 AM', status: 'Upcoming' },
    { name: 'Computer Science', time: 'Tues/Thurs', status: 'Scheduled' },
    { name: 'Math / Science', time: 'Daily', status: 'Active' }
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <header style={{ borderBottom: '2px solid #3b82f6', marginBottom: '30px', paddingBottom: '10px' }}>
        <h1 style={{ color: '#1e3a8a', margin: 0 }}>🏠 Homeschool Hub</h1>
        <p style={{ color: '#64748b' }}>Weekend Build Session | Project Skeleton</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {subjects.map((item) => (
          <div key={item.name} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
            <h2 style={{ color: '#2563eb', marginTop: 0 }}>{item.name}</h2>
            <p><strong>Time:</strong> {item.time}</p>
            <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
