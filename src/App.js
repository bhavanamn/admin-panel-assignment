import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserList from './components/UserList/UserList';
import UserDetails from './components/UserDetails/UserDetails';
import UserForm from './components/UserForm/UserForm';
import AnalyticsDashboard from './components/AnalyticsDashboard/AnalyticsDashboard';
import './App.css'; // Make sure to create this CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <nav className="sidebar">
          <div className="sidebar-header">
            <h1>User Management</h1>
          </div>
          <ul className="nav-links">
            <li><Link to="/">User List</Link></li>
            <li><Link to="/user/new">New User</Link></li>
            <li><Link to="/analytics">Analytics Dashboard</Link></li>
          </ul>
        </nav>

        {/* Main content */}
        <div className="main-content">
          <header className="main-header">
            <h1>Welcome to User Management</h1>
          </header>
          <main className="content">
            <Routes>
              <Route path="/" element={<UserList />} />
              <Route path="/user/:id" element={<UserDetails />} />
              <Route path="/user/new" element={<UserForm />} />
              <Route path="/user/edit/:id" element={<UserForm />} />
              <Route path="/analytics" element={<AnalyticsDashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

