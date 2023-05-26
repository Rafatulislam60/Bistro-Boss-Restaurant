import { Parallax } from "react-parallax";

const Cover = ({ img, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[400px] md:h-[700px]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-black bg-opacity-20 py-6 px-10 md:py-12 md:px-20">
            <h1 className="mb-5 text-4xl font-bold uppercase font-serif">
              {title}
            </h1>
            <p className="mb-5 font-serif">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
