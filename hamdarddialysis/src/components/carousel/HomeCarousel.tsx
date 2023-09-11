import React, { useState, useEffect, useMemo } from "react";
import carouselImages from "../../assets/static/carouselImages";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

// interface HomeCarouselProps {
//   images: string[];
// }

// interface HomeCarouselState {
//   activeSlide: number;
// }

const HomeCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const autoPlay = useMemo(() => {
    return () => {
      const newInterval = setInterval(
        () =>
          setActiveSlide((prev) =>
            prev >= carouselImages.length - 1 ? 0 : prev + 1
          ),
        3000
      );

      return newInterval;
    };
  }, []);

  useEffect(() => {
    const interval = autoPlay();

    return () => {
      clearInterval(interval);
    };
  }, [activeSlide, autoPlay]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const goToPreviousSlide = () => {
    const prevSlide =
      (activeSlide - 1 + carouselImages.length) % carouselImages.length;
    setActiveSlide(prevSlide);
  };

  const goToNextSlide = () => {
    const nextSlide = (activeSlide + 1) % carouselImages.length;
    setActiveSlide(nextSlide);
  };

  return (
    <React.Fragment>
      <section id="carouselExampleCaptions" className="relative shadow-lg">
        {/* Carousel indicators */}
        <div className="absolute bottom-0 left-0 right-0 z-[2] ml-[5%] mb-4 flex list-none justify-start p-0">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 ${
                activeSlide === index ? "opacity-100" : "opacity-50"
              }`}
              aria-current={activeSlide === index ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Carousel items */}
        <section className="relative w-full max-h-fit overflow-hidden bg-[#09608C] after:clear-both after:block after:content-[''] pb-10 md:pb-0 ">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`relative flex justify-center items-center flex-col-reverse sm:flex-row w-full h-fit transition-transform duration-[600ms] ease-in-out ${
                activeSlide === index
                  ? "opacity-100 transition-opacity duration-300"
                  : "hidden"
              } `}
            >
              {/* Content for each slide */}
              <section className="w-full md:w-[70%] text-white ">
                <div
                  className={`px-10 flex flex-col gap-10 ${
                    activeSlide === index ? "" : ""
                  } `}
                >
                  <div className="">
                    <h5 className="md:text-[3rem] text-[2.5rem] text-white text-center md:text-start">
                      {image.headingA}
                    </h5>
                    <h5 className="md:text-[3rem] text-[2.5rem] text-blue-300 text-center md:text-start">
                      {image.headingB}
                    </h5>
                  </div>
                  <p className="md:text-[1.5rem] text-[1.5rem]  ">
                    {image.para}
                  </p>

                  <button
                    type="button"
                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 mb-10 md:mb-0 "
                  >
                    Know More{" "}
                  </button>
                </div>
              </section>
              <div className="relative top-0 left-0 w-full h-full  ">
                <img
                  src={image.url}
                  className={`w-full h-96 object-cover md:h-full `}
                  alt={`Slide ${index + 1}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </section>

        {/* Carousel controls */}
        <button
          className="flex absolute bottom-0 left-0 top-0 z-[1] w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-30 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          onClick={goToPreviousSlide}
        >
          {/* Previous arrow SVG */}
          <GrCaretPrevious />
        </button>
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-30 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          onClick={goToNextSlide}
        >
          {/* Next arrow SVG */}
          <GrCaretNext />
        </button>
      </section>
    </React.Fragment>
  );
};

export default HomeCarousel;
