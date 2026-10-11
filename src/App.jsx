import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import Footer from './components/Footer';

function App() {
  const students = [
    { id: "101", name: "Farhan Aman", major: "Computer Science", year: "2", gpa: "3.4" },
    { id: "102", name: "Khizran Zubair", major: "Software Eng.", year: "2", gpa: "3.6" },
    { id: "103", name: "Muhammad Hussain", major: "Data Science", year: "3", gpa: "2.9" },
    { id: "104", name: "Sufiyan Saleem", major: "Cyber Security", year: "1", gpa: "3.2" },
  ];

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between" style={{ backgroundColor: "#f4f4f5" }}>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Breadcrumb */}
        <div className="container my-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 py-1 px-3 bg-white rounded shadow-sm small">
              <li className="breadcrumb-item"><a href="#" className="text-decoration-none" style={{ color: "#dc2626" }}>Home</a></li>
              <li className="breadcrumb-item"><a href="#" className="text-decoration-none" style={{ color: "#dc2626" }}>Students</a></li>
              <li className="breadcrumb-item active text-muted" aria-current="page">Directory</li>
            </ol>
          </nav>
        </div>

        <div className="container">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center my-2 pb-2 border-bottom">
            <h4 className="fw-bold mb-0 text-dark">Student Directory</h4>
            <button className="btn text-white btn-sm px-3 shadow-sm" style={{ backgroundColor: "#dc2626" }}>
              + Add New Student
            </button>
          </div>

          {/* Student Cards Grid */}
          <div className="row g-3 mb-3">
            {students.map((student) => (
              <div className="col-md-3" key={student.id}>
                <StudentCard 
                  id={student.id}
                  name={student.name}
                  major={student.major}
                  year={student.year}
                  gpa={student.gpa}
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav className="d-flex justify-content-center mb-2">
            <ul className="pagination pagination-sm shadow-sm mb-0">
              <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item active"><a className="page-link" href="#" style={{ backgroundColor: "#dc2626", borderColor: "#dc2626" }}>1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>

          {/* Alert */}
          <div className="alert alert-dismissible fade show py-2 mb-2 shadow-sm small border-0" role="alert" style={{ backgroundColor: "#fee2e2", color: "#991b1b" }}>
            Student records have been successfully updated.
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;