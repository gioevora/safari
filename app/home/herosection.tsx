"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@heroui/button";

export const HeroSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  return (
    <section className="relative">
      <div ref={sliderRef} className="keen-slider">
        {/* Slide 1 */}
        <div className="keen-slider__slide number-slide1 relative h-[600px] md:h-[850px]">
          <img
            src="/img/slider-1-1-B1INkHDV.jpg"
            className="absolute w-full h-full object-cover"
            alt=""
          />

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 container mx-auto h-full flex items-center px-6">
            <div className="max-w-4xl text-white">
              <p className="uppercase tracking-widest font-semibold text-4xl mb-2">
                YOUR BEST
              </p>

              <h1 className="text-5xl md:text-8xl font-bold leading-tight">
                CAR <span className="text-[#009c00]">BOOKING</span>
                <br />
                EXPERIENCE
              </h1>

              <div className="flex items-center gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-[#009c00] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#009c00]"
                >
                  Read More →
                </Button>

                <Button
                  size="lg"
                  variant="light"
                  className="flex items-center px-6 py-3 gap-3 rounded-md text-white font-semibold "
                >
                  ▶ Watch Video
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="keen-slider__slide number-slide2 relative h-[600px] md:h-[850px]">
          <img
            src="/img/slider-1-2-C9c-2HrM.jpg"
            className="absolute w-full h-full object-cover"
            alt=""
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 container mx-auto h-full flex items-center px-6">
            <div className="max-w-4xl text-white">
              <p className="uppercase tracking-widest font-semibold text-4xl mb-2">
                YOUR BEST
              </p>

              <h1 className="text-5xl md:text-8xl font-bold leading-tight">
                CAR <span className="text-[#009c00]">CHOOSING</span>
                <br />
                EXPERIENCE
              </h1>

              <div className="flex items-center gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-[#009c00] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#009c00]"
                >
                  Read More →
                </Button>

                <Button
                  size="lg"
                  variant="light"
                  className="flex items-center px-6 py-3 gap-3 rounded-md text-white font-semibold"
                >
                  ▶ Watch Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white border border-white/40 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20"
      >
        ←
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white border border-white/40 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20"
      >
        →
      </button>
    </section>
  );
};
