import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[59px] box-border max-w-full shrink-0 text-center text-29xl text-darkgoldenrod font-section-title mq450:pb-[25px] mq450:box-border mq1050:pb-[38px] mq1050:box-border">
      <div className="flex-1 bg-dark-green flex flex-col items-center justify-start pt-[82px] px-5 pb-[132px] box-border gap-[49px] max-w-full mq750:gap-[24px] mq750:pt-[53px] mq750:pb-[86px] mq750:box-border">
        <div className="w-[1440px] h-[756px] relative bg-dark-green hidden max-w-full" />
        <h1 className="m-0 w-[1120px] relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq450:text-10xl mq1050:text-19xl">
          <span>High Class</span>
          <span className="text-white"> Office Space For Your Business</span>
        </h1>
        <div className="w-[1120px] flex flex-row items-start justify-center gap-[94px] max-w-full text-left text-xl text-white lg:gap-[47px] mq750:gap-[23px] mq1050:flex-wrap">
          <img
            className="w-[455px] relative max-h-full object-cover max-w-full z-[1] mq1050:flex-1"
            loading="lazy"
            alt=""
            src="/about-us-photo@2x.png"
          />
          <div className="flex-1 relative leading-[160.02%] inline-block min-w-[371px] max-w-full z-[1] mq450:text-base mq450:leading-[26px] mq450:min-w-full">
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada tellus mollis magna dignissim, quis auctor urna
              facilisis. In nec auctor turpis. Praesent sed bibendum tellus.
              Fusce sem elit, imperdiet molestie pharetra sed, porta at urna.
              Donec non imperdiet dolor, non dapibus sem. Aliquam sed erat
              viverra, suscipit nisi ut, aliquet augue. Donec non erat risus.
              Donec scelerisque, nunc vitae scelerisque tempor, erat nibh
              pulvinar ipsum, a tincidunt nibh nibh vitae justo.
            </p>
            <p className="m-0">
              Cras nec condimentum metus. Etiam mi nulla, gravida nec lobortis
              in, dapibus ut nisl. Donec nibh erat, posuere nec consequat ac,
              feugiat quis tortor. Ut fermentum sem id lectus ullamcorper
              maximus. Praesent sit amet feugiat arcu, quis tincidunt nisl.
              Pellentesque venenatis, ligula id imperdiet viverra, arcu nulla
              fermentum elit, ac fermentum nunc est ut massa. Suspendisse
              potenti. Donec convallis, metus vel accumsan dictum, neque nisi
              fringilla augue, non rhoncus metus justo eget ligula. Nunc leo
              arcu, ultricies ut gravida at, iaculis ac leo. Ut eu libero mi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
