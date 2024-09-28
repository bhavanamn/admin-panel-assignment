import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './UserForm.css';

const UserForm = () => {
  const [user, setUser] = useState({ name: '', email: '', role: 'user' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
      alert('Failed to fetch user data.'); // User feedback
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentTime = new Date().toISOString(); // Get current date and time in ISO format

    const userWithTimestamps = {
      ...user,
      createdAt: id ? user.createdAt : currentTime, // Preserve createdAt if editing
      updatedAt: currentTime, // Always update the updatedAt timestamp
    };

    try {
      if (id) {
        await axios.put(`http://localhost:3001/users/${id}`, userWithTimestamps);
      } else {
        await axios.post('http://localhost:3001/users', userWithTimestamps);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving user:', error);
      alert('Failed to save user data.'); // User feedback
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`http://localhost:3001/users/${id}`);
        navigate('/'); // Redirect to the home page after deletion
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete user.'); // User feedback
      }
    }
  };

  return (
    <div className="user-form-container">
      <h2>{id ? 'Edit User' : 'Create User'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <select name="role" value={user.role} onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="submit-button">{id ? 'Update' : 'Create'}</button>
      </form>
      {id && (
        <button className="delete-button" onClick={handleDelete}>
          Delete User
        </button>
      )}
    </div>
  );
};

export default UserForm;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import './UserForm.css';

// const UserForm = () => {
//   const [user, setUser] = useState({ name: '', email: '', role: 'user' });
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id) {
//       fetchUser();
//     }
//   }, [id]);

//   const fetchUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/users/${id}`);
//       setUser(response.data);
//     } catch (error) {
//       console.error('Error fetching user:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const currentTime = new Date().toISOString(); // Get current date and time in ISO format

//     const userWithTimestamps = {
//       ...user,
//       createdAt: id ? user.createdAt : currentTime, // Preserve createdAt if editing
//       updatedAt: currentTime, // Always update the updatedAt timestamp
//     };

//     try {
//       if (id) {
//         await axios.put(`http://localhost:3001/users/${id}`, userWithTimestamps);
//       } else {
//         await axios.post('http://localhost:3001/users', userWithTimestamps);
//       }
//       navigate('/');
//     } catch (error) {
//       console.error('Error saving user:', error);
//     }
//   };

//   const handleDelete = async () => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       try {
//         await axios.delete(`http://localhost:3001/users/${id}`);
//         navigate('/'); // Redirect to the home page after deletion
//       } catch (error) {
//         console.error('Error deleting user:', error);
//       }
//     }
//   };

//   return (
//     <div className="user-form-container">
//       <h2>{id ? 'Edit User' : 'Create User'}</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name:</label>
//           <input type="text" name="name" value={user.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" name="email" value={user.email} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Role:</label>
//           <select name="role" value={user.role} onChange={handleChange}>
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>
//         <button type="submit" className="submit-button">{id ? 'Update' : 'Create'}</button>
//       </form>
//       {id && (
//         <button className="delete-button" onClick={handleDelete}>
//           Delete User
//         </button>
//       )}
//     </div>
//   );
// };

// export default UserForm;
