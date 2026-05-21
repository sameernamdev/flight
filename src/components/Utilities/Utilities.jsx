import "./Utilities.css";
import { MdGasMeter } from "react-icons/md";
const utilitiesData = [

  {
    icon: <MdGasMeter />,
    title: "LPG Gas Booking",
  },

  {
    icon: "📋",
    title: "Life Insurance",
  },

  {
    icon: "👨‍👩‍👧",
    title: "Clubs & Association",
  },

  {
    icon: "📢",
    title: "Subscription",
  },

];

function Utilities() {

  return (
    <div className="utilities-section">

      {/* HEADER */}

      <div className="section-header">

        <h2>Utilities</h2>

        <button>View All →</button>

      </div>

      {/* GRID */}

      <div className="utilities-grid">

        {utilitiesData.map((item, index) => (

          <div className="utilities-card" key={index}>

            <div className="utilities-icon">
              {item.icon}
            </div>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Utilities;