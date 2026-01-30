import React, { useState, useEffect } from 'react';
import AttendanceForm from './components/AttendanceForm';
import AttendanceTable from './components/AttendanceTable';
import { getAttendanceAPI } from './services/attendanceService';
import './styles/App.css';

function App() {
  const [records, setRecords] = useState([]);
  const [editingRecord, setEditingRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all records on component mount
  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      setLoading(true);
      const response = await getAttendanceAPI.getAll();
      setRecords(response.data);
      setError(null);
    } catch (err) {
          console.error('Error fetching records:', err);
      setError('Failed to fetch attendance records');
    } finally {
      setLoading(false);
     }
  };

   const handleFormSubmit = () => {
    fetchRecords();
    setEditingRecord(null);
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      try {
        await getAttendanceAPI.delete(id);
        fetchRecords();
      } catch (err) {
        console.error('Error deleting record:', err);
        alert('Failed to delete record');
      }
    }
  };

  const handleCancel = () => {
    setEditingRecord(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎓 Attendance Management System</h1>
        <p className="subtitle">Manage student attendance records easily</p>
      </header>

      <main className="app-main">
        {error && <div className="error-message">{error}</div>}

        <AttendanceForm
          onSubmit={handleFormSubmit}
          editingRecord={editingRecord}
          onCancel={handleCancel}
        />

        {loading ? (
          <div className="loading">Loading attendance records...</div>
        ) : (
          <AttendanceTable
            records={records}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Attendance Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
