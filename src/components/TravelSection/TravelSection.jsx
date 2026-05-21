import "./TravelSection.css";

import {
  FaPlane,
  FaPassport,
  FaUmbrellaBeach,
  FaTaxi,
  FaMapMarkedAlt,
  FaHotel,
} from "react-icons/fa";

const services = [
  {
    image: "/img/airplane.png",
    title: "Flight",
  },

  {
    image: "/img/visa.png",
    title: "Visa",
  },

  {
    image: "/img/holiday.png",
    title: "Holiday & Tour",
  },

  {
    image: "/img/cab.png",
    title: "Cab",
  },

  {
    image: "/img/activities.png",
    title: "Activities",
  },

  {
    image: "/img/hotel.png",
    title: "Hotel",
  },
];

function TravelSection() {
  return (
    <div className="travel-section">
      {/* HEADER */}

      <div className="section-header">
        <h2>Travel</h2>

        <button>View All →</button>
      </div>

      {/* SERVICES */}

      <div className="service-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              <img src={item.image} alt={item.title} />
            </div>

            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {/* BUTTONS */}

      {/* <div className="btn-row">
        <button>Register Business</button>

        <button>Latest Offers</button>
      </div> */}
    </div>
  );
}

export default TravelSection;
