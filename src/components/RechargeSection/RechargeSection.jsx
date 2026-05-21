import "./RechargeSection.css";

import {
  FaMobileAlt,
  FaBolt,
  FaCarSide,
  FaTv
} from "react-icons/fa";

const rechargeData = [
  {
    icon: <FaMobileAlt />,
    title: "Mobile Recharge",
  },

  {
    icon: <FaBolt />,
    title: "Electricity Billpay",
  },

  {
    icon: <FaCarSide />,
    title: "Fastag Recharge",
  },

  {
    icon: <FaTv />,
    title: "Cable TV Recharge",
  },
];

function RechargeSection() {
  return (
    <div className="recharge-section">

      <div className="section-header">

        <h2>Recharge & Pay Bills</h2>

        <button>View All →</button>

      </div>

      <div className="recharge-grid">

        {rechargeData.map((item, index) => (

          <div className="recharge-card" key={index}>

            <div className="recharge-icon">
              {item.icon}
            </div>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RechargeSection;