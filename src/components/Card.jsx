import React, { useEffect, useState } from "react";
import check from "../assets/images/icon-check.svg";
import "../card.css";

const sliderMapping = {
  0: { pageView: "10K", amount: 8 },
  25: { pageView: "50K", amount: 12 },
  50: { pageView: "100K", amount: 16 },
  75: { pageView: "500K", amount: 24 },
  100: { pageView: "1M", amount: 36 },
};

const Card = () => {
  const [sliderValue, setSliderValue] = useState("50");
  const [pageview, setPageView] = useState(sliderMapping[sliderValue].pageView);
  const [amount, setAmount] = useState(sliderMapping[sliderValue].amount);
  const [monthlyBilling, setMonthlyBilling] = useState(true);

  useEffect(() => {
    const mapping = sliderMapping[sliderValue];
    if (mapping) {
      setPageView(mapping.pageView);
      setAmount(mapping.amount);
    }
  }, [sliderValue]);

  const calculateSliderGradient = () => {
    const percentage = (Number(sliderValue) / 100) * 100;
    return `linear-gradient(to right, hsl(174, 86%, 45%) ${percentage}%, hsl(224, 65%, 95%) 0% , hsl(224, 65%, 95%) 100%)`;
  };

  const sliderGradient = calculateSliderGradient();

  return (
    <div className="flex justify-center font-display">
      <div className="relative -top-20 md:-top-24 bg-cyan-white dark:bg-gray-600 flex flex-col items-center w-10/12 py-10 rounded-2xl shadow-2xl md:w-7/12 lg:w-[30%]">
        <div className="w-full px-4 md:flex md:justify-between md:flex-wrap md:px-9 md:items-center">
          <div className="text-bluish-grayish dark:text-gray-300 tracking-widest mb-12 text-center md:mb-0">
            {pageview} PAGEVIEWS
          </div>

          <div className="relative w-full mb-12 flex justify-center md:order-3 mt-10">
            <input
              type="range"
              min="0"
              max="100"
              step="25"
              value={sliderValue}
              onChange={(e) => setSliderValue(e.target.value)}
              className="range-slider"
              style={{ background: sliderGradient }}
            />
          </div>

          <div className="flex items-center justify-center mb-8 md:order-2 md:mb-0">
            <span className="text-4xl mr-2 font-bold text-bluish-dark dark:text-gray-100">
              {monthlyBilling
                ? `$${amount}.00`
                : `$${(amount * 0.75).toFixed(2)}`}
            </span>
            <span className="text-sm text-bluish-grayish dark:text-gray-300">
              / {!monthlyBilling ? "month" : "year"}
            </span>
          </div>
        </div>

        <div className="relative flex items-center justify-center w-full mx-auto mb-10 pl-0 md:pl-12 gap-2 sm:gap-6">
          <div className="text-sm text-bluish-grayish pl-10 dark:text-gray-300">
            Monthly Billing
          </div>
          <label className="switch min-w-[50px]">
            <input
              type="checkbox"
              checked={monthlyBilling}
              onChange={() => setMonthlyBilling(!monthlyBilling)}
            />
            <span className="slider round hover:bg-cyan-soft"></span>
          </label>
          <div className="text-bluish-grayish dark:text-gray-300 text-sm">
            Yearly Billing
          </div>
          <div className="bg-reddish-grayish text-reddish-light rounded-full hidden text-center lg:block lg:mr-5 lg:px-1.5 py-0.5 lg:py-1.5 text-sm">
            25% discount
          </div>
          <div className="bg-reddish-grayish text-reddish-light rounded-full px-3 text-center mr-7 lg:hidden py-0.5 text-sm">
            -25%
          </div>
        </div>

        <hr className="w-full dark:border-gray-200" />

        <div className="flex flex-col font-semibold items-center mt-6 md:flex-row md:justify-between md:w-full md:px-9">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <img src={check.toString()} className="size-4" alt="icon-check" />
              <div className="text-bluish-grayish dark:text-gray-300 text-md">
                Unlimited Websites
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <img src={check.toString()} className="size-4" alt="icon-check" />
              <div className="text-bluish-grayish dark:text-gray-300 text-md">
                100% data ownership
              </div>
            </div>
            <div className="flex items-center gap-2 mb-8">
              <img src={check.toString()} className="size-4" alt="icon-check" />
              <div className="text-bluish-grayish dark:text-gray-300 text-md">
                Email reports
              </div>
            </div>
          </div>
          <button className="text-bluish-lightGrayish dark:text-white dark:hover:text-gray-400 hover:text-cyan-white bg-bluish-dark px-12 py-3 rounded-full">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
