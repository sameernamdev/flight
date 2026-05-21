import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import TravelSection from "../components/TravelSection/TravelSection";
import RechargeSection from "../components/RechargeSection/RechargeSection";
import OffersSection from "../components/OffersSection/OffersSection";
import MyAccounts from "../components/MyAccounts/MyAccounts";
import Footer from "../components/Footer/Footer";
// import Utilities from "../components/Utilities/Utilities";
// import BottomNav from "../components/BottomNav/BottomNav";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TravelSection />
      <RechargeSection />
      <MyAccounts />
      <OffersSection />
      <Footer/>
    </>
  );
}

export default Home;