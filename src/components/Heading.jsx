import bgPattern from "../assets/images/bg-pattern.svg";
import patternCircle from "../assets/images/pattern-circles.svg";
import DarkModeToggle from "./DarkModeToggle";

const Heading = () => {
  return (
    <>
      <div className="absolute right-0 m-4 z-50 flex gap-2 items-center">
        <span className="dark:text-white font-semibold text-sm">Dark Mode</span>{" "}
        <DarkModeToggle />
      </div>
      <div className="text-center ">
        <div className="header relative flex flex-col items-center h-96 mb-6 ">
          <img
            src={bgPattern}
            className="bg-img absolute min-h-[100%] md:min-h-auto min-w-[100%] filter-none dark:filter grayscale-[100%] brightness-0 contrast-100"
          />

          <img
            src={patternCircle}
            alt="pattern-circles"
            className="absolute top-20 lg:top-16 w-[35%] md:w-[20%] lg:w-[15%] filter-none dark:filter invert-[10%] contrast-50"
          />

          <h2 className="font-display z-10 pt-32 md:pt-28 text-bluish-dark dark:text-bluish-very mb-4 font-bold text-[40px]">
            Simple, traffic-based pricing
          </h2>
          <div className="text-bluish-grayish dark:text-white font-semibold z-10 mb-1 text-center md:w-full">
            Sign-up for our 30-day trial. No credit card required.
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
