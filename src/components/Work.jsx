import { useMotionValueEvent, useScroll } from "motion/react";
import React, { useState } from "react";

const Work = () => {
  const [images, setImages] = useState([
    { url: "/first.png", top: "50%", left: "50%", isActive: false },
    { url: "/second.png", top: "56%", left: "44%", isActive: false },
    { url: "/third.webp", top: "43%", left: "54%", isActive: false },
    { url: "/fourth.png", top: "59%", left: "47%", isActive: false },
    { url: "/five.webp", top: "52%", left: "46%", isActive: false },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) == -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 5:
        imagesShow([0, 1, 2, 3]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3, 4]);
        break;
    }
  });

  return (
    <div className="w-full py-4 mt-8">
      <div className="relative max-w-screen-xl min-h-[50vh]  text-center mx-auto ">
        <h1 className="text-[34rem] leading-none tracking-tight font-normal">
          work
        </h1>
        <div className="w-full absolute top-0 h-full">
          {images.map(
            (elm) =>
              elm.isActive && (
                <img
                  src={elm.url}
                  className="w-72 absolute  rounded-lg -translate-1/2"
                  style={{ top: elm.top, left: elm.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
