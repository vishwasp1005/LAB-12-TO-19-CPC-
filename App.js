import { useState, useEffect } from 'react';

export default function App() {
  // ============ PAGE NAVIGATION STATE ============
  const [currentPage, setCurrentPage] = useState('users');
  const [editingUser, setEditingUser] = useState(null);

  // ============ REPLACE THIS API URL ============
  const API_URL = 'https://6970f6dc78fec16a63ffa3a5.mockapi.io/users';
  // =============================================

  // ============ NAVBAR COMPONENT ============
  const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => setCurrentPage('users')}>
          My CRUD App
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'users' ? 'active' : ''}`}
                href="#"
                onClick={() => setCurrentPage('users')}
              >
                User List
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'add' ? 'active' : ''}`}
                href="#"
                onClick={() => setCurrentPage('add')}
              >
                Add User
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'edit' ? 'active' : ''}`}
                href="#"
                onClick={() => setCurrentPage('edit')}
              >
                Edit User
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  // ============ RENDER PAGE ============
  const renderPage = () => {
    switch(currentPage) {
      case 'users':
        return <Users setCurrentPage={setCurrentPage} setEditingUser={setEditingUser} />;
      case 'add':
        return <AddUser setCurrentPage={setCurrentPage} />;
      case 'edit':
        return <EditUser editingUser={editingUser} setCurrentPage={setCurrentPage} />;
      default:
        return <Users setCurrentPage={setCurrentPage} setEditingUser={setEditingUser} />;
    }
  };

  return (
    <>
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      <Navbar />
      {renderPage()}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

// =====================================================
// ============ USERS.JS (USER LIST PAGE) ============
// =====================================================
function Users({ setCurrentPage, setEditingUser }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = 'https://6970f6dc78fec16a63ffa3a5.mockapi.io/users';

  // ============ GET ALL USERS ============
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ============ DELETE USER ============
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete?')) return;
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setData(data.filter(item => item.id !== id));
      alert('Deleted successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  // ============ GO TO EDIT PAGE ============
  const handleEdit = (user) => {
    setEditingUser(user);
    setCurrentPage('edit');
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>👥 User List</h2>
        <button 
          className="btn btn-primary"
          onClick={() => setCurrentPage('add')}
        >
          ➕ Add New User
        </button>
      </div>

      {error && (
        <div className="alert alert-danger">
          <strong>Error:</strong> {error}
        </div>
      )}

      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!loading && data.length > 0 && (
        <div className="card">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-striped table-hover mb-0">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                        <button 
                          className="btn btn-sm btn-warning me-2"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>
                        <button 
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {!loading && data.length === 0 && (
        <div className="alert alert-info text-center">
          No users found. Add your first user!
        </div>
      )}
    </div>
  );
}

// =====================================================
// ============ ADDUSER.JS (ADD USER PAGE) ============
// =====================================================
function AddUser({ setCurrentPage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://6970f6dc78fec16a63ffa3a5.mockapi.io/users';

  // ============ CREATE USER ============
  const handleSubmit = async () => {
    if (!name || !email) {
      alert('Please fill required fields (Name & Email)');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone })
      });
      const result = await response.json();
      alert('User created successfully!');
      setCurrentPage('users');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">➕ Add New User</h4>
            </div>
            <div className="card-body">
              {error && (
                <div className="alert alert-danger">
                  <strong>Error:</strong> {error}
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Name *</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email *</label>
                <input 
                  type="email" 
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Enter phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="d-flex gap-2">
                <button 
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? 'Creating...' : 'Create User'}
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setCurrentPage('users')}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================================================
// ============ EDITUSER.JS (EDIT USER PAGE) ============
// =====================================================
function EditUser({ editingUser, setCurrentPage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://6970f6dc78fec16a63ffa3a5.mockapi.io/users';

  // ============ LOAD USER DATA ============
  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setPhone(editingUser.phone || '');
    }
  }, [editingUser]);

  // ============ UPDATE USER ============
  const handleSubmit = async () => {
    if (!name || !email) {
      alert('Please fill required fields (Name & Email)');
      return;
    }

    if (!editingUser) {
      alert('No user selected for editing');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/${editingUser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone })
      });
      const result = await response.json();
      alert('User updated successfully!');
      setCurrentPage('users');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-warning">
              <h4 className="mb-0">✏️ Edit User</h4>
            </div>
            <div className="card-body">
              {!editingUser ? (
                <div className="alert alert-warning">
                  No user selected. Please go to User List and select a user to edit.
                  <button 
                    className="btn btn-sm btn-primary ms-3"
                    onClick={() => setCurrentPage('users')}
                  >
                    Go to User List
                  </button>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="alert alert-danger">
                      <strong>Error:</strong> {error}
                    </div>
                  )}

                  <div className="alert alert-info">
                    Editing User ID: <strong>{editingUser.id}</strong>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Name *</label>
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email *</label>
                    <input 
                      type="email" 
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="Enter phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="d-flex gap-2">
                    <button 
                      className="btn btn-success"
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      {loading ? 'Updating...' : 'Update User'}
                    </button>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => setCurrentPage('users')}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
=====================================================
    🎯 3-PAGE CRUD APPLICATION
=====================================================

📄 PAGES INCLUDED:
1. Users.js - User List (Default Home Page) ✅
2. AddUser.js - Add New User Form ✅
3. EditUser.js - Edit Existing User Form ✅

🎨 NAVBAR:
- User List (Home)
- Add User
- Edit User
- Active page highlighting

=====================================================
📝 HOW IT WORKS
=====================================================

1. App starts on Users.js (User List)
2. Click "Add User" → Goes to AddUser.js
3. Click "Edit" on any user → Goes to EditUser.js
4. All pages have working CRUD operations
5. Navigation through navbar or buttons

=====================================================
🔧 CUSTOMIZATION FOR EXAM
=====================================================

1️⃣ REPLACE API_URL in ALL 3 components:
   - In Users function
   - In AddUser function
   - In EditUser function
   
   Change to: const API_URL = 'YOUR_API_HERE';

2️⃣ UPDATE FIELD NAMES:
   Replace: name, email, phone
   With your API field names

3️⃣ ADD MORE NAVBAR LINKS:
   Copy this in Navbar component:
   
   <li className="nav-item">
     <a className={`nav-link ${currentPage === 'pagename' ? 'active' : ''}`}
        href="#"
        onClick={() => setCurrentPage('pagename')}>
       Page Name
     </a>
   </li>

4️⃣ ADD MORE FORM FIELDS:
   In AddUser.js and EditUser.js:
   
   // Add state
   const [newField, setNewField] = useState('');
   
   // Add input
   <div className="mb-3">
     <label className="form-label">New Field</label>
     <input 
       type="text" 
       className="form-control"
       value={newField}
       onChange={(e) => setNewField(e.target.value)}
     />
   </div>
   
   // Add to API call
   body: JSON.stringify({ name, email, phone, newField })

=====================================================
✅ FEATURES INCLUDED
=====================================================
✓ 3 Separate pages with routing
✓ Working navbar navigation
✓ Full CRUD operations
✓ Active page highlighting
✓ Loading states
✓ Error handling
✓ Form validation
✓ Cancel buttons
✓ Success messages
✓ Responsive design

=====================================================
🎯 EXAM READY
=====================================================
Just replace API_URL and field names!
Good luck! 🚀
*/