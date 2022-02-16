import type { NextPage } from "next";
import { AboutItem, RecentPost } from "../components/About/About";
import Caroslider from "../components/caroSlider/Caroslider";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <AboutItem />
      <RecentPost />
      <Caroslider />
    </div>
  );
};

export default Home;
