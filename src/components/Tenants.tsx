import React from "react";
import TenantLogo from "./ui/TenantLogo";

const Tenants = () => {
    //const [recentNews, setRecentNews] = useState();
    const tenants = [
        { id: 1, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", url: "/#", ImageUrl: "/images/logo_2306634.png", ImageAlt: "image 1", publishedDate: "2024-05-05" },
        { id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", url: "/#", ImageUrl: "/images/logo2.png", ImageAlt: "image 2", publishedDate: "2024-05-04" },
        { id: 3, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", url: "/#", ImageUrl: "/images/logo_2306634.png", ImageAlt: "image 3", publishedDate: "2024-05-03" },
        { id: 1, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", url: "/#", ImageUrl: "/images/logo2.png", ImageAlt: "image 1", publishedDate: "2024-05-02" },
        { id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", url: "/#", ImageUrl: "/images/logo_2306634.png", ImageAlt: "image 2", publishedDate: "2024-05-01" },
        { id: 3, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", url: "/#", ImageUrl: "/images/logo2.png", ImageAlt: "image 3", publishedDate: "2024-05-01" },
    ];
    //setRecentNews(news);
    return (
        <section className="w-full mt-32 px-48 flex flex-col items-center justify-center">
            <h2 className="text-4xl pb-5 md:text-5xl text-center bg-clip-text text-gray-700">
                Our Tenants
            </h2>
            <TenantLogo tenants={tenants} />
        </section>
    );
}

export default Tenants;