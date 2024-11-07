import { Helmet } from "react-helmet";
import LineChartExample from "./Chart/LineChat";
const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>Statistics|| Gadget Heaven </title>
      </Helmet>
      <div className=" bg-purple-700 rounded-2xl  px-4">
        <div className="hero pt-12 pb-12">
          <div className="hero-content text-center">
            <div className="max-w-[65rem]">
              <h1 className="text-5xl font-bold text-white">Statistics</h1>
              <p className="py-6 text-white">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>{/* <LineChartExample /> */}</div>
    </div>
  );
};

export default Statistics;
