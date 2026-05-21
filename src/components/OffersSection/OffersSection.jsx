import "./OffersSection.css";

function OffersSection() {
  return (
    <div className="offers-section">

      <h1>Latest Offers</h1>

      <div className="tabs">
        <button className="active">Flights</button>
        <button>Hotels</button>
        <button>Buses</button>
        <button>Stays</button>
      </div>

      <p className="offer-text">
        Discover unbeatable deals on flights, hotels, bus tickets and holiday packages.
      </p>

      <div className="offer-cards">

        <div className="offer-card">

          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
            alt=""
          />

          <h3>Take Off with Big Savings</h3>

          <p>Fly smarter and save big on your next trip.</p>

          <a href="/">Read More</a>

        </div>

        <div className="offer-card">

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt=""
          />

          <h3>Exclusive Holiday Deals</h3>

          <p>Grab amazing vacation packages at low prices.</p>

          <a href="/">Read More</a>

        </div>

      </div>

    </div>
  );
}

export default OffersSection;