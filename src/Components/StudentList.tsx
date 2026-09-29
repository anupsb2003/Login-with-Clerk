import students from "../StudentRecords";

function StudentList() {
  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Course: {student.course}</p>
          <p>Department: {student.department}</p>
          <p>Percentage: {student.percentage}%</p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;