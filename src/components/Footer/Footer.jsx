import "./Footer.css";

function Footer() {
  return (

    <footer className="footer">

      <div className="footer-container">

        {/* LOGO */}

        <div className="footer-logo">

          <img
            src="/img/logo.png"
            alt="logo"
          />

        </div>

        {/* PRODUCTS */}

        <div className="footer-column">

          <h3>Products</h3>

          <a href="/">Flights</a>

          <a href="/">Hotels</a>

          <a href="/">Holidays</a>

          <a href="/">Buses</a>

          <a href="/">Travel Insurance</a>

        </div>

        {/* PROFILE */}

        <div className="footer-column">

          <h3>Profile</h3>

          <a href="/">About Us</a>

          <a href="/">Contact Us</a>

          <a href="/">Offers</a>

          <a href="/">Blogs</a>

        </div>

        {/* MORE */}

        <div className="footer-column">

          <h3>More...</h3>

          <a href="/">Privacy Policy</a>

          <a href="/">User Agreement</a>

          <a href="/">Terms & Conditions</a>

          <a href="/">Cancel, Refund & Shipping Policy</a>

          <a href="/">Make Payment</a>

        </div>

        {/* BUSINESS */}

        <div className="footer-column">

          <h3>For Business</h3>

          <a href="/">Partner Login</a>

          <a href="/">Channel Partner Registration</a>

          <a href="/">Register Your Business</a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;