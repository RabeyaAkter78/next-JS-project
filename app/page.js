import Banner from "./Components/Banner/Banner";
import TrendingMenu from "./Components/TrendingMenu/TrendingMenu";
import WhySimplyFood from "./Components/WhySimplyFood/WhySimplyFood";

export default function Home() {
  return (
   <main>
    <div>
     <Banner></Banner>
     <WhySimplyFood></WhySimplyFood>
     <TrendingMenu></TrendingMenu>
    </div>
   </main>
  );
}
