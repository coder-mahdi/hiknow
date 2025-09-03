import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import logo from '../data/logo.png';
import '../styles/layouts/header.scss';

export default function Header() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return null;
  }

  return (
    <header className="header">
      <nav className="nav-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="HiKnow Logo" />
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="nav-items">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
          {user && <Link to="/dashboard" className="nav-item">Dashboard</Link>}
        </div>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          {!user ? (
            <>
              <Link to="/login" className="auth-button login">Login</Link>
              <Link to="/signup" className="auth-button signup">Sign Up</Link>
            </>
          ) : (
            <button 
              onClick={() => auth.signOut()} 
              className="auth-button logout"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
} 