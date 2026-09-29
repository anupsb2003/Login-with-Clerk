import students from "../StudentRecords";
import "./StudentList.css"; // Import your new stylesheet

function StudentList() {
  return (
    <div className="student-container">
      <h2>Student Records</h2>
      <div className="table-responsive">
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Department</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td className="student-name">{student.name}</td>
                <td>{student.course}</td>
                <td>{student.department}</td>
                <td>
                  <span className="percentage-badge">
                    {student.percentage}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
