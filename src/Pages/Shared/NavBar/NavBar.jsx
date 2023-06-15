import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { AuthContext } from '../../../providers/AuthProvider';
import { app } from '../../../firebase/firebase.config';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  console.log("User ", user);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const navOptions = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/allinstructors"> Instructors</Link></li>
      <li><Link to="/allclasses">Classes</Link></li>

      {
        user ?
          <li><Link to="/dashboard">Dashboard</Link></li>
          :
          <></>
      }
      {/* <li><Link to="/allclasses">Classes</Link></li> */}
    </>
  );

  const auth = getAuth(app);

  const handleSignOut = () => {
    signOut(auth)
      .then()
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="navbar bg-base-100 lg:h-24">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>

          <Link to="/" className="lg:text-3xl font-bold ">
            <div className="flex items-center text-center mt-0">

              <Link >
                <small > PolyLingual</small> <br />
                <small className='text-xl'> Summer Quest</small>
              </Link>

            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {user.photoURL && (
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} alt="" />
                    </div>
                    {isHovered && (
                      <span className="username">
                        {user.displayName ? user.displayName : <></>}
                      </span>
                    )}
                  </label>
                )}
                <button onClick={handleSignOut} className="btn">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <span className="btn">Login</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
