import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './UserDetails.css'

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-details-container">
  <h2>User Details</h2>
  <p><strong>Name:</strong> {user.name}</p>
  <p><strong>Email:</strong> {user.email}</p>
  <p><strong>Role:</strong> {user.role}</p>
  <p><strong>Created At:</strong> {new Date(user.createdAt).toLocaleString()}</p>
  <p><strong>Updated At:</strong> {new Date(user.updatedAt).toLocaleString()}</p>
  <div className="user-links">
    <Link to={`/user/edit/${user.id}`} className="edit-link">Edit User</Link>
    <Link to="/" className="back-link">Back to User List</Link>
  </div>
</div>

  );
};

export default UserDetails;