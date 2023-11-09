import { Anton, Roboto } from "next/font/google";

// Google Font initalize Start

const anton = Anton({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
});

// Google Font initalize end

const ExploreOthersSaasPage = () => {
  return (
    <div className="px-14 py-6">
      {/* Heading Section Start  */}
      <h1
        className={`${anton.className} text-xl text-center text-[--primaryColer] md:text-3xl lg:text-6xl `}
      >
        Explore My Others SaaS Products
      </h1>
      {/* Heading Section End */}
    </div>
  );
};

export default ExploreOthersSaasPage;
