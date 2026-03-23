import React from 'react';
import '../styles/AttendanceTable.css';
import SmallPieChart from '../SmallPieChart';

function AttendanceTable({ records, onEdit, onDelete }) {
  const getStatusColor = (percentage) => {
    if (!percentage) return '';
    return percentage >= 75 ? 'status-present' : 'status-at-risk';
  };

  const getStatusLabel = (percentage) => {
    if (!percentage) return 'N/A';
    return percentage >= 75 ? 'SAFE' : 'AT RISK';
  };

  return (
    <div className="table-container">
      <h2>Attendance Records</h2>
      {records.length === 0 ? (
        <p className="no-records">No attendance records found. Add one to get started!</p>
      ) : (
        <table className="attendance-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Total Classes</th>
              <th>Attended Classes</th>
              <th>Attendance %</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.studentName}</td>
                <td>{record.totalClasses}</td>
                <td>{record.attendedClasses}</td>
                <td style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  {record.percentage?.toFixed(2) || 'N/A'}%
  <SmallPieChart
    total={record.totalClasses}
    attended={record.attendedClasses}
  />
</td>
                <td className={`status ${getStatusColor(record.percentage)}`}>
                  {getStatusLabel(record.percentage)}
                </td>
                <td className="actions">
                  <button
                    className="btn btn-edit"
                    onClick={() => onEdit(record)}
                    title="Edit record"
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-delete"
                    onClick={() => onDelete(record.id)}
                    title="Delete record"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AttendanceTable;
