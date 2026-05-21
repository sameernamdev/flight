import "./TravelSection.css";

const services = [
  { icon: "✈️", title: "Flights" },
  { icon: "🏨", title: "Hotels" },
  { icon: "🚌", title: "Bus" },
  { icon: "🏖️", title: "Holidays" },
];

function TravelSection() {
  return (
    <div className="travel-section">

      <div className="section-header">

        <h2>Travel</h2>

        <button>View All →</button>

      </div>

      <div className="service-grid">

        {services.map((item, index) => (
          <div className="service-card" key={index}>

            <span>{item.icon}</span>

            <p>{item.title}</p>

          </div>
        ))}

      </div>

      <div className="btn-row">

        <button>Register Business</button>

        <button>Latest Offers</button>

      </div>

     <div className="login-grid">

  <div className="login-card">

    <img
      src="/img/admin.png"
      alt="admin"
      className="login-icon"
    />

    <p>Admin Login</p>

  </div>

  <div className="login-card">

    <img
      src="/img/partner.png"
      alt="partner"
      className="login-icon"
    />

    <p>Partner Login</p>

  </div>

  <div className="login-card">

    <img
      src="/img/corporate.png"
      alt="corporate"
      className="login-icon"
    />

    <p>Corporate Login</p>

  </div>

</div>

    </div>
  );
}

export default TravelSection;