import HomeCarousel from "../../components/carousel/HomeCarousel";
import Counter from "../../components/counter/Counter";
import DoctorsInfo from "../../components/doctorsInfo/DoctorsInfo";
import Donate from "../../components/donationComponent/Donate";
import HealthCareServices from "../../components/healthCareServices/HealthCareServices";
import LocalNav from "../../components/localNav/LocalNav";
const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <Counter />
      <Donate />
      <LocalNav />
      <DoctorsInfo />
      <HealthCareServices />
    </div>
  );
};

export default Home;
