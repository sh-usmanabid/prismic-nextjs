import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <span className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <PrismicRichText field={slice.primary.title} />
          </span>
          <span className="mb-8 leading-relaxed">
            <PrismicRichText field={slice.primary.description} />
          </span>
          <span className="mb-8"></span>
          <div className="flex justify-center">
            <PrismicNextLink field={slice.primary.buttonlink}>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {slice.primary.buttontext}
              </button>
            </PrismicNextLink>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <PrismicNextImage className="object-cover object-center rounded" field={slice.primary.bgimage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
