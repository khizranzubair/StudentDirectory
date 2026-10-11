function StudentCard({ id, name, major, year, gpa }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text text-muted mb-1">ID: {id}</p>
        <p className="card-text mb-1">Major: {major}</p>
        <p className="card-text mb-1">Year: {year}</p>
        <p className="card-text mb-3">GPA: {gpa}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-primary btn-sm">View Profile</button>
          <button className="btn btn-outline-danger btn-sm">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;