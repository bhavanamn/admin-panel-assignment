# Admin Panel with User Management and Analytics

A fully functional and responsive admin panel designed for user management and analytics on user registration trends. This application utilizes JSON Server to simulate a backend API with a provided `db.json` file.

## Objective

The primary goal of this project is to provide an interface that allows administrators to manage users efficiently and visualize user registration data.

---

## Features

### User Management

- **Display User List**: A table displays all users retrieved from the API, including key information such as name, email, and role.
- **Search and Sort**: 
  - Search bar for filtering users by any field (e.g., name, email).
  - Ability to sort users by various attributes (e.g., alphabetically by name, by date of registration).
- **CRUD Operations**:
  - **Create**: Admins can add new users via a form, collecting user details such as name, email, and role.
  - **Read**: View detailed information about a specific user by clicking on them from the user list.
  - **Update**: Edit user information with an intuitive form.
  - **Delete**: Remove users with a confirmation prompt.

## Technologies Used

- **Frontend**: React, Axios, React Router
- **Backend**: JSON Server (for simulating API)
- **Database**: JSON file (`db.json`)
Please have a look at this : https://admin-panel-assignment.vercel.app/
## Getting Started


### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/USERNAME/REPO_NAME.git
   cd REPO_NAME
2.npm install
3.npm install -g json-server
json-server --watch db.json --port 3001
4.npm start
5.Open your browser and go to http://localhost:3000.


Results:

<img width="931" alt="image" src="https://github.com/user-attachments/assets/ad2d67be-8f51-4a27-99b2-bf9b96c6dd79">
<img width="959" alt="image" src="https://github.com/user-attachments/assets/1e77cda7-9b9d-48f2-be81-5dcf36772625">
<img width="958" alt="image" src="https://github.com/user-attachments/assets/4f66c386-ecd9-4e23-b0b6-0c73e162b2ec">




