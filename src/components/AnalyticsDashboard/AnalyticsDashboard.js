import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import './AnalyticsDashboard.css';  // Import the CSS

const AnalyticsDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const calculateRegistrations = (days) => {
    const now = new Date();
    const cutoff = new Date(now.setDate(now.getDate() - days));
    return users.filter(user => new Date(user.createdAt) >= cutoff).length;
  };

  const registrationData = [
    { period: 'Last 24 hours', count: calculateRegistrations(1) },
    { period: 'Last 7 days', count: calculateRegistrations(7) },
    { period: 'Last 15 days', count: calculateRegistrations(15) },
    { period: 'Last 30 days', count: calculateRegistrations(30) },
  ];

  const roleData = [
    { name: 'User', value: users.filter(user => user.role === 'user').length },
    { name: 'Admin', value: users.filter(user => user.role === 'admin').length },
  ];

  const COLORS = ['#8884d8', '#82ca9d'];

  return (
    <div className="dashboard-container">
      <h2>Analytics Dashboard</h2>
      <div className="charts-container">
        {/* Bar Chart for Registrations */}
        <div className="chart">
          <h3>Registrations Over Time</h3>
          <BarChart width={600} height={300} data={registrationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </div>

        {/* Pie Chart for Role Distribution */}
        <div className="chart">
          <h3>User Role Distribution</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={roleData}
              cx={200}
              cy={200}
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {roleData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const AnalyticsDashboard = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const calculateRegistrations = (days) => {
//     const now = new Date();
//     const cutoff = new Date(now.setDate(now.getDate() - days));
//     return users.filter(user => new Date(user.createdAt) >= cutoff).length;
//   };

//   const registrationData = [
//     { period: 'Last 24 hours', count: calculateRegistrations(1) },
//     { period: 'Last 7 days', count: calculateRegistrations(7) },
//     { period: 'Last 15 days', count: calculateRegistrations(15) },
//     { period: 'Last 30 days', count: calculateRegistrations(30) },
//   ];

//   return (
//     <div>
//       <h2>Analytics Dashboard</h2>
//       <BarChart width={600} height={300} data={registrationData}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="period" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="count" fill="#8884d8" />
//       </BarChart>
//     </div>
//   );
// };

// export default AnalyticsDashboard;