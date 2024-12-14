import React, { useState } from 'react';

const users = [
  {
    id: "01",
    username: "curtis123",
    firstname: "Curtis",
    lastname: "Wiegand",
    email: "wiegand@hotmail.com",
    phone: "+1234567890",
    country: "Saucerize",
    status: "Active",
    verified: true,
  },
  {
    id: "02",
    username: "xavier456",
    firstname: "Xavier",
    lastname: "Tyrell",
    email: "tyrell86@company.com",
    phone: "+9876543210",
    country: "South Bradfordstad",
    status: "Pending",
  },
  {
    id: "03",
    username: "lola789",
    firstname: "Lola",
    lastname: "Aufderhar",
    email: "aufdernar56@yahoo.com",
    phone: "+1928374650",
    country: "North Tannermouth",
    status: "Rejected",
  },
  {
    id: "04",
    username: "milton101",
    firstname: "Milton",
    lastname: "Dickinson",
    email: "dickinson49@hotmail.com",
    phone: "+1098765432",
    country: "North Anika",
    status: "Pending",
  },
  {
    id: "05",
    username: "lysanne202",
    firstname: "Lysanne",
    lastname: "Turner",
    email: "zack.turner49@company.com",
    phone: "+5647382910",
    country: "Betteland",
    status: "Active",
    verified: true,
  },
  {
    id: "06",
    username: "bonita303",
    firstname: "Bonita",
    lastname: "Keebler",
    email: "keebler57@company.com",
    phone: "+6574839201",
    country: "Alexburgh",
    status: "Rejected",
  },
  {
    id: "07",
    username: "retta404",
    firstname: "Retta",
    lastname: "Mathew",
    email: "mathew92@yahoo.com",
    phone: "+7865432190",
    country: "East Bryceland",
    status: "Active",
    verified: true,
  },
];

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  searchInput: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  th: {
    backgroundColor: '#97C703',
    fontWeight: 'bold',
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #e0e0e0',
  },
  td: {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #e0e0e0',
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    backgroundColor: '#e0e0e0',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#555',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: '14px',
  },
  userEmail: {
    fontSize: '12px',
    color: '#666',
  },
  verifiedIcon: {
    color: '#1da1f2',
    marginLeft: '5px',
  },
  status: {
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  active: {
    backgroundColor: '#e6f4ea',
    color: '#1e7e34',
  },
  pending: {
    backgroundColor: '#fff3cd',
    color: '#856404',
  },
  rejected: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
  },
  actionButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '5px',
  },
};

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Registro de Usuarios administradores</h1>
        <input
          type="text"
          placeholder="Search"
          style={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>#</th>
            <th style={styles.th}>Usuarios</th>
            <th style={styles.th}>Nombre</th>
            <th style={styles.th}>Apellido</th>
            <th style={styles.th}>Teléfono</th>
            <th style={styles.th}>País</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td style={styles.td}>{user.id}</td>
              <td style={styles.td}>
                <div style={styles.userProfile}>
                  <div style={styles.avatar}>{user.firstname[0]}</div>
                  <div>
                    <div style={styles.userName}>
                      {user.firstname} {user.verified && <span style={styles.verifiedIcon}>✓</span>}
                    </div>
                    <div style={styles.userEmail}>{user.email}</div>
                  </div>
                </div>
              </td>
              <td style={styles.td}>{user.firstname}</td>
              <td style={styles.td}>{user.lastname}</td>
              <td style={styles.td}>{user.phone}</td>
              <td style={styles.td}>{user.country}</td>
              <td style={styles.td}>
                <span
                  style={{
                    ...styles.status,
                    ...(styles[user.status.toLowerCase()] || {}),
                  }}
                >
                  {user.status}
                </span>
              </td>
              <td style={styles.td}>
                <button style={styles.actionButton} aria-label="Message">
                  💬
                </button>
                <button style={styles.actionButton} aria-label="Delete">
                  🗑️
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
