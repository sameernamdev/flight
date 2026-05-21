import "./MyAccounts.css";

import { FaSuitcase, FaWallet, FaFileAlt, FaReceipt } from "react-icons/fa";

const accountsData = [
  {
    image: "/img/mybooking.png",
    title: "My Booking",
  },

  {
    image: "/img/wallet.png",
    title: "Wallet Balance",
  },

  {
    image: "/img/mydocuments.png",
    title: "My Documents",
  },

  {
    image: "/img/invoice.png",
    title: "My Invoices",
  },
];

function MyAccounts() {
  return (
    <div className="accounts-section">
      {/* HEADER */}

      <div className="section-header">
        <h2>My Accounts</h2>

        <button>View All →</button>
      </div>

      {/* GRID */}

      <div className="accounts-grid">
        {accountsData.map((item, index) => (
          <div className="accounts-card" key={index}>
            <div className="accounts-icon">
              <img src={item.image} alt={item.title} />
            </div>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAccounts;
