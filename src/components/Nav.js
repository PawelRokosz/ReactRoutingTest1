import React from 'react';
import {Link} from 'react-router-dom';

//Nav uses {Link} to redirect user to corresponding routes
//and corresponding views from Main

class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <div className="nav__links">
            <Link to='/'><button className="nav__link">Home</button></Link>
            <Link to='/about'><button className="nav__link">About</button></Link>
            <Link to='/login'><button className="nav__link">LogIn</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
