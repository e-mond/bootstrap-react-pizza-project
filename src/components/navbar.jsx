import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light nav-color">
        <a className="navbar-brand link-item" href="#">PIZZAMANIA</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon custom-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a className="nav-link link-item" href="#">HOME <span className="sr-only">(current)</span></a></li>
            <li className="nav-item"><a className="nav-link link-item" href="#">ABOUT PIZZA</a></li>
            <li className="nav-item"><a className="nav-link link-item" href="#">PIZZA TYPE</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
