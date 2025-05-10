import React, { useState } from 'react';
import './InstructorDashboard.css';

const InstructorDashboard = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState('');
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState('');
  const [grades, setGrades] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [studentGrade, setStudentGrade] = useState('');

  const handleAddCourse = () => {
    if (newCourse.trim()) {
      setCourses([...courses, newCourse]);
      setNewCourse('');
    }
  };

  const handleAddAssignment = () => {
    if (newAssignment.trim()) {
      setAssignments([...assignments, newAssignment]);
      setNewAssignment('');
    }
  };

  const handleGradeSubmit = () => {
    if (studentName.trim() && studentGrade.trim()) {
      setGrades([...grades, { studentName, grade: studentGrade }]);
      setStudentName('');
      setStudentGrade('');
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Instructor Dashboard</h1>
      <div className="tabs">
        <button
          className={activeTab === 'courses' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('courses')}
        >
          Add Courses
        </button>
        <button
          className={activeTab === 'assignments' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('assignments')}
        >
          Create Assignments
        </button>
        <button
          className={activeTab === 'grades' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('grades')}
        >
          Evaluate Students
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'courses' && (
          <div>
            <h2>Add New Course</h2>
            <input
              type="text"
              placeholder="Course Name"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
              className="input-field"
            />
            <button onClick={handleAddCourse} className="action-button blue">
              Add Course
            </button>
            <ul>
              {courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'assignments' && (
          <div>
            <h2>Create Assignment</h2>
            <textarea
              placeholder="Enter assignment details"
              value={newAssignment}
              onChange={(e) => setNewAssignment(e.target.value)}
              className="textarea-field"
            />
            <button onClick={handleAddAssignment} className="action-button green">
              Create Assignment
            </button>
            <ul>
              {assignments.map((a, index) => (
                <li key={index}>{a}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'grades' && (
          <div>
            <h2>Evaluate Students</h2>
            <input
              type="text"
              placeholder="Student Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Grade"
              value={studentGrade}
              onChange={(e) => setStudentGrade(e.target.value)}
              className="input-field"
            />
            <button onClick={handleGradeSubmit} className="action-button purple">
              Submit Grade
            </button>
            <ul>
              {grades.map((g, idx) => (
                <li key={idx}>{g.studentName}: {g.grade}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorDashboard;
