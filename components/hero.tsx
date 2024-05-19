import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <div className="self-stretch bg-black flex flex-col items-start justify-end pt-[476px] pb-[71px] pr-5 pl-[255px] box-border relative max-w-full mt-[-1px] text-left text-109xl text-white font-section-title lg:pl-[127px] lg:box-border mq450:pl-5 mq450:pb-[30px] mq450:box-border mq750:pl-[63px] mq750:box-border mq1050:pb-[46px] mq1050:box-border">
      <div className="w-[1440px] h-[807px] relative bg-black hidden max-w-full z-[1]" />
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover mix-blend-exclusion z-[1]"
        alt=""
        src="/header@2x.png"
      />
      <h1 className="m-0 w-[1122px] relative text-inherit leading-[188px] font-extrabold font-inherit inline-block max-w-full z-[2] text-darkgoldenrod mq450:text-13xl mq450:leading-[75px] mq1050:text-32xl mq1050:leading-[113px]">
        <span>World</span>
        <span className="text-white"> Capital Tower</span>
      </h1>
      <div className="w-[835px] flex flex-row items-start justify-between max-w-full gap-[20px] mt-[-18px] text-29xl mq750:flex-wrap">
        <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full z-[2] mq450:text-10xl mq1050:text-19xl">
          The New Highlights in the city
        </h1>
        <div className="flex flex-col items-start justify-start pt-[60px] px-0 pb-0">
          <img
            className="w-[30px] h-[30px] relative z-[2]"
            loading="lazy"
            alt=""
            src="/-icon-download-circled-outline.svg"
          />
        </div>
      </div>
      <div className="w-[381px] absolute !m-[0] right-[-45px] bottom-[66px] text-5xl font-medium flex items-center z-[2] mq450:text-lgi">
        Download Brochure
      </div>
    </div>
  );
};

export default Hero;
