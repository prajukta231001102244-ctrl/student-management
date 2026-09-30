
function StudentCard(props) {
  return (
    <div className="student-card">
      <img
        src={props.photo}
        alt={props.name}
        className="student-photo"
      />

      <h2>{props.name}</h2>

      <p>
        <strong>Roll Number:</strong> {props.rollNumber}
      </p>

      <p>
        <strong>Department:</strong> {props.department}
      </p>

      <p>
        <strong>Semester:</strong> {props.semester}
      </p>

      <p>
        <strong>CGPA:</strong> {props.cgpa}
      </p>
    </div>
  );
}

export default StudentCard;