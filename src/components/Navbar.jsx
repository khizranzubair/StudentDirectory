function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4 py-2 w-100" style={{ backgroundColor: "#18181b" }}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#" style={{ color: "#ef4444" }}>StudentPortal</a>
        <div className="navbar-nav ms-auto">
          <a className="nav-link active" href="#">Dashboard</a>
          <a className="nav-link" href="#">Students</a>
          <a className="nav-link" href="#">Courses</a>
          <a className="nav-link" href="#">Reports</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;