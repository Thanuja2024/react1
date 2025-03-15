import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>Dashboard</h3>
      <p>Track disasters in real-time and coordinate emergency responses.</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px', width: '30%' }}>
          <h4>Total Disasters</h4>
          <p>15</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px', width: '30%' }}>
          <h4>Critical Disasters</h4>
          <p>5</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px', width: '30%' }}>
          <h4>Resolved Disasters</h4>
          <p>10</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;