import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="self-stretch bg-dark-green flex flex-row items-start justify-center pt-[82px] pb-[59px] pr-5 pl-[30px] box-border [row-gap:20px] max-w-full shrink-0 text-left text-5xl text-white font-section-title lg:flex-wrap lg:justify-center mq750:pt-[53px] mq750:pb-[38px] mq750:box-border">
      <div className="h-[502px] w-[1440px] relative bg-dark-green hidden max-w-full z-[1]" />
      <div className="w-[425px] flex flex-col items-start justify-start gap-[127px] min-w-[425px] max-w-full lg:flex-1 mq450:gap-[63px] mq750:min-w-full">
        <div className="w-[235px] flex flex-row items-start justify-start py-0 px-[21px] box-border">
          <img
            className="h-[146px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            alt=""
            src="/logo-1@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[14px] max-w-full mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <img
              className="w-[30px] h-[30px] relative z-[1]"
              alt=""
              src="/-icon-download-circled-outline.svg"
            />
          </div>
          <div className="flex-1 relative font-medium inline-block min-w-[130px] max-w-full z-[1] mq450:text-lgi">
            Download Brochure
          </div>
        </div>
      </div>
      <div className="w-[824px] flex flex-col items-start justify-start gap-[28.5px] min-w-[824px] max-w-full ml-[-123px] lg:flex-1 lg:ml-0 mq1050:min-w-full">
        <div className="w-[797px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <img
            className="h-[255px] w-[255px] relative object-cover z-[1] mq1050:flex-1"
            loading="lazy"
            alt=""
            src="/-map-maker-wold-26427-holtgast-germany-standard@2x.png"
          />
          <div className="w-[454px] relative flex items-center shrink-0 min-w-[454px] max-w-full z-[1] mq450:text-lgi mq750:min-w-full mq1050:flex-1">
            <span className="w-full">
              <p className="m-0">
                <b className="font-section-title">Address:</b>
                <span> Collins Street West, Victoria 8007 Australia</span>
              </p>
              <p className="m-0">
                <b className="font-section-title">Phone:</b>
                <span> (208) 333 9296</span>
              </p>
              <p className="m-0">
                <b className="font-section-title">Fax:</b>
                <span> (208) 333 9298</span>
              </p>
              <p className="m-0">
                <b className="font-section-title">Email:</b>
                <span> contact@worldcapitaltower.com</span>
              </p>
              <p className="m-0">
                <b className="font-section-title">Open:</b>
                <span> Sunday - Friday 08:00 - 18:00</span>
              </p>
            </span>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end">
          <div className="flex flex-row items-start justify-start gap-[14px]">
            <img
              className="h-[31px] w-[31px] relative min-h-[31px] z-[1]"
              loading="lazy"
              alt=""
              src="/-icon-instagram.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <img
                className="w-[31px] h-[26px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/-icon-twitter.svg"
              />
            </div>
            <img
              className="h-[31px] w-[31px] relative min-h-[31px] z-[1]"
              loading="lazy"
              alt=""
              src="/-icon-facebook-squared.svg"
            />
          </div>
        </div>
        <div className="w-[516px] flex flex-row items-start justify-start py-0 px-20 box-border max-w-full text-sm font-poppins mq750:pl-10 mq750:pr-10 mq750:box-border">
          <div className="flex-1 relative leading-[18px] font-medium inline-block max-w-full z-[1]">
            All rights reserved@worldcapitaltower.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
