import React from "react";

const Navbar = props => {
  const handleChange = e => {
    e.preventDefault();
    props.updateSearchText(e.target.value);
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <img className="ml-5" height="50px" src="/logo.png" alt="Logo" />
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          id="search"
          value={props.search}
          onChange={handleChange}
          placeholder="Search for people e.g. John Doe"
        />
        <select className="custom-select mr-5" onChange={props.handleChange}>
          <option value=" " selected>
            Sort by
          </option>
          <option value="price">Name</option>
          <option value="age">Age</option>
        </select>
      </form>
    </nav>
  );
};

export default Navbar;
