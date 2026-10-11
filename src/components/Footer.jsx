function Footer() {
  return (
    <footer className="text-white py-3 border-top w-100" style={{ backgroundColor: "#18181b", borderColor: "#27272a" }}>
      <div className="container">
        <div className="row g-3">
          <div className="col-md-6">
            <h6 className="fw-bold mb-2" style={{ color: "#ef4444" }}>Links</h6>
            <ul className="list-unstyled small mb-0">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">Computer Science</a></li>
              <li><a href="#" className="text-light text-decoration-none">Courses</a></li>
              <li><a href="#" className="text-light text-decoration-none">Reports</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h6 className="fw-bold mb-2" style={{ color: "#ef4444" }}>Contact Info</h6>
            <p className="text-light small mb-1">Contact Us</p>
            <p className="text-light small mb-1">+92: 123 456 7890</p>
            <p className="text-light small mb-0">khizi@studentportal.com</p>
          </div>
        </div>
        <div className="text-center text-light small mt-2 pt-2 border-top border-secondary opacity-75">
          © 2026 StudentPortal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;