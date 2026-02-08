# Attendance Management System - React Frontend

A modern React application for managing student attendance. This frontend is built to work with the Spring Boot backend API.

## Features

- **Add Attendance Records**: Create new student attendance entries
- **View All Records**: Display all attendance records in a responsive table
- **Edit Records**: Update existing attendance information
- **Delete Records**: Remove attendance records
- **Status Tracking**: Automatically calculates percentage and status (Present/Absent)
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Data Structure

The application works with attendance records containing:
- `id`: Unique identifier (auto-generated)
- `studentName`: Name of the student
- `totalClasses`: Total number of classes
- `attendedClasses`: Number of classes attended
- `percentage`: Automatically calculated attendance percentage
- `status`: Attendance status (Present if >= 75%, Absent otherwise)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Spring Boot backend running on `http://localhost:8080`

## Installation

1. Navigate to the project directory:
```bash
cd attendance-react
```

2. Install dependencies:
```bash
npm install
```

## Configuration

The application is configured to communicate with the backend API at `http://localhost:8080`. The proxy is set in `package.json`:

```json
"proxy": "http://localhost:8080"
```

If your backend is running on a different URL, update this configuration.

## Running the Application

Start the development server:

```bash
npm start
```

The application will open automatically at `http://localhost:3000`.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Runs the test suite
- `npm eject`: Ejects the configuration (one-way operation)

## API Endpoints

The application connects to the following backend endpoints:

- `GET /attendance` - Retrieve all attendance records
- `POST /attendance` - Create a new attendance record
- `PUT /attendance/{id}` - Update an attendance record
- `DELETE /attendance/{id}` - Delete an attendance record

## Project Structure

```
src/
├── components/
│   ├── AttendanceForm.js       # Form for adding/editing records
│   └── AttendanceTable.js      # Table displaying records
├── services/
│   └── attendanceService.js    # API service layer
├── styles/
│   ├── App.css                 # Main app styles
│   ├── AttendanceForm.css      # Form styles
│   ├── AttendanceTable.css     # Table styles
│   └── index.css               # Global styles
├── App.js                      # Main app component
├── index.js                    # React entry point
└── index.css                   # Global CSS
```

## Technologies Used

- React 18.2.0
- Axios for HTTP requests
- CSS3 for styling
- React Scripts for tooling

## Styling

The application uses a modern gradient design with:
- Purple gradient header (`#667eea` to `#764ba2`)
- Clean, responsive layout
- Color-coded status badges
- Smooth transitions and hover effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Backend Connection Issues
If you see errors connecting to the backend:
1. Ensure the Spring Boot application is running on `http://localhost:8080`
2. Check network connectivity
3. Verify CORS is enabled on the backend if running on different ports

### Port Already in Use
If port 3000 is already in use:
```bash
npm start -- --port 3001
```

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please contact the development team.
