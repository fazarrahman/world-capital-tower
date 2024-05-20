const DownloadBrochure = () => {
    return (
        <div className="self-stretch flex flex-row items-start justify-start gap-[14px] max-w-full mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <img
                    className="w-[30px] h-[30px] relative z-[1]"
                    alt=""
                    src="/-icon-download-circled-outline.svg"
                />
            </div>
            <div className="flex-1 text-xl relative font-medium inline-block min-w-[130px] max-w-full z-[1] mq450:text-lgi">
                Download Brochure
            </div>
        </div>
    );
}

export default DownloadBrochure;