import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">

      {/* LOGO SECTION */}
      <div className="logo-container">

        <img
          src="/img/new-logo.png"
          alt="logo"
          className="logo-img"
        />

        {/* <h2 className="logo-text">
          Flight And Cars
        </h2> */}

      </div>

      {/* BUTTON */}
      <button className="signin-btn">
        Sign In
      </button>

    </div>
  );
}

export default Navbar;