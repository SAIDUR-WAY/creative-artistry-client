
import LiveOnlineWork from "./OnlineWork/LiveOnlineWork";
import PopularCasses from "./PopularClasses/PopularCasses";
import PopularIns from "./PopularInstructor/PopularIns";
import Banner from "./banner/Banner";


const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <PopularCasses></PopularCasses>
               <PopularIns></PopularIns>
               <LiveOnlineWork></LiveOnlineWork>
               
          </div>
     );
};

export default Home;