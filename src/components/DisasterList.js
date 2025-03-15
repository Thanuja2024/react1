import React from 'react';

const DisasterList = () => {
  const disasters = [
    { id: 1, name: 'Flood in City A', severity: 'High' },
    { id: 2, name: 'Earthquake in City B', severity: 'Critical' },
    { id: 3, name: 'Wildfire in City C', severity: 'Moderate' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h3>Disaster List</h3>
      <ul>
        {disasters.map((disaster) => (
          <li key={disaster.id}>
            {disaster.name} - Severity: {disaster.severity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisasterList;