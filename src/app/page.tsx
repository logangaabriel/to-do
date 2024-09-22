
export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <h1 style={{color: '#fff'}}>Today main focus</h1>
      <div style={{ marginTop: '20px' }}>
        <input 
          type="text" 
          placeholder="What is your next task?" 
          style={{
            padding: '15px',
            width: '600px',
            fontSize: '20px',
            borderRadius: '10px',
            border: '1px solid #ccc'
          }}
        />
      </div>
    </div>
  );
}