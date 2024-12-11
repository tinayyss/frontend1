import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles.css';

const Layout = ({ children }) => {
  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <aside className="bg-dark text-light p-3"  style={{ width: '2051px', fontSize: '3rem' }}> 
        <h2 className="text-light">Christine Flor</h2>
        </aside>

        

        <nav className="ml-auto" style={{ fontSize: '2rem',  }}> 
          <Link to="/" className="d-block text-light py-2">Home</Link>
          <Link to="/about" className="d-block text-light py-2">About</Link>
          <Link to="/education" className="d-block text-light py-2">Education</Link>
          <Link to="/hobbies" className="d-block text-light py-2">Hobbies</Link>
          <Link to="/contact" className="d-block text-light py-2">Contact</Link>
        </nav>


      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column">
        <header className="bg-light text-dark text-center py-3">
          <h1>Welcome to My Personal Website</h1>
        </header>

        <main className="container my-4 flex-grow-1">{children}</main>

        <footer className="bg-light text-dark text-center py-3">
          <p>&copy; 2024 Christine Flor. All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  );
};

export default Layout;