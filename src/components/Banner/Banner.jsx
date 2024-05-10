// import bannerImg from "./../../assets/banner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner_image  h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-3xl flex items-center">
      <div className="text-center px-2 md:px-16 lg:px-32">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold  mb-3 md:mb-6 mx-auto">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-sm md:text-lg text-white mb-4 md:mb-10">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex gap-5 justify-center">
          <button className="bg-green-400 py-2 md:py-3 px-4 md:px-6 rounded-3xl font-medium">
            Explore Now
          </button>
          <button className="text-white border py-2 md:py-3 px-4 md:px-6 rounded-3xl font-medium">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
