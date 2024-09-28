// // // src/components/UserList/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchSort from '../SearchSort/SearchSort';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
      setFilteredUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleSort = (sortBy) => {
    const sorted = [...filteredUsers].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    setFilteredUsers(sorted);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`http://localhost:3001/users/${id}`);
        fetchUsers(); // Refresh the user list after deletion
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete user.'); // User feedback
      }
    }
  };

  return (
    <div className="user-list-container">
      <div className="user-list-header">
        <h2>User List</h2>
        <SearchSort onSearch={handleSearch} onSort={handleSort} />
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="user-actions">
                <Link to={`/user/${user.id}`} className="view-link">View</Link>
                <Link to={`/user/edit/${user.id}`} className="edit-link">Edit</Link>
                <button className="delete-button" onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import SearchSort from '../SearchSort/SearchSort';
// import './UserList.css';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/users');
//       setUsers(response.data);
//       setFilteredUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleSearch = (searchTerm) => {
//     const filtered = users.filter(user => 
//       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredUsers(filtered);
//   };

//   const handleSort = (sortBy) => {
//     const sorted = [...filteredUsers].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
//     setFilteredUsers(sorted);
//   };

//   return (
//     <div className="user-list-container">
//       <div className="user-list-header">
//         <h2>User List</h2>
//         <SearchSort onSearch={handleSearch} onSort={handleSort} />
//       </div>
//       <table className="user-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.map(user => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.role}</td>
//               <td className="user-actions">
//                 <Link to={`/user/${user.id}`} className="view-link">View</Link>
//                 <Link to={`/user/edit/${user.id}`} className="edit-link">Edit</Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserList; 