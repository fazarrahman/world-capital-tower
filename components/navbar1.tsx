import type { NextPage } from "next";

const Navbar1: NextPage = () => {
  return (
    <div className="flex-1 flex flex-row items-start justify-center py-0 px-5 box-border gap-[759px] max-w-full text-center text-13xl text-darkgoldenrod font-section-title lg:gap-[379px] mq450:gap-[95px] mq750:gap-[190px]">
      <img
        className="h-[111px] w-[147px] relative object-cover"
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <div className="flex flex-col items-start justify-start pt-[30.5px] px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[30px]">
          <div className="h-[50px] relative [text-decoration:underline] font-medium flex items-center min-w-[67px]">
            <span className="[line-break:anywhere]">
              <span>H</span>
              <span className="text-white">ome</span>
            </span>
          </div>
          <div className="h-[50px] relative [text-decoration:underline] font-medium flex items-center min-w-[84px]">
            <span className="[line-break:anywhere]">
              <span>C</span>
              <span className="text-white">ontact</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
