import Banner from "./Components/Banner/Banner";
import Faq from "./Components/Faq/Faq";
import Feedback from "./Components/FeedBack/Feedback";
import MealPlan from "./Components/MealPlan/MealPlan";
import TrendingMenu from "./Components/TrendingMenu/TrendingMenu";
import WhySimplyFood from "./Components/WhySimplyFood/WhySimplyFood";

export default function Home() {
  return (
    <main>
      <div>
        <Banner></Banner>
        <WhySimplyFood></WhySimplyFood>
        <TrendingMenu></TrendingMenu>
        <MealPlan></MealPlan>
        <Faq></Faq>
        <Feedback></Feedback>
      </div>
    </main>
  );
}
