// export const Navbar = () => {
//   return (
//     <nav className="navbar">
//      <div>
//     <ul>
//         <li><a href="/">Home</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a href="/contact">Contact</a></li>
//         <li><a href="/services">Services</a></li>
//         <li><a href="/login">Login</a></li>
//         <li><a href="/register">Register</a></li>
//     </ul>

//       </div>
//     </nav>
//   );
// }
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const navigation = useNavigate();

  const logout = () => {
    window.sessionStorage.removeItem('loggedIn');
    Navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/services">Services</NavLink>
          </li>

        </ul>
        <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
          <li className="nav-item">
            <NavLink className="nav-link" onClick={() => logout()}>Logout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}