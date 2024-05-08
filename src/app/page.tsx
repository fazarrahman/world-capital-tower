import Info from "@/components/info";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className={styles.main}>
        <header>
          <Navbar />
        </header>
        <div id="content" className="no-bottom no-top">
            <section id="section-hero-6" className="full-height text-light relative" data-stellar-background-ratio=".2">

                <div className="center-y fadeScroll text-center relative" data-scroll-speed="2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="spacer-double"></div>
                                <div className="spacer-double"></div>
                                <h1 className="very-big wow fadeInUp" data-wow-delay=".5s">welcome<span className="id-color">.</span></h1>
                                <br />
                                <div className="h2_title wow fadeInUp" data-wow-delay=".8s">
                                    <div className="text-slider id-color">
                                        <span className="text-item">High Inovation, Strong Foundations</span>
                                        <span className="text-item">We Are Awards Winning Company</span>
                                    </div>
                                </div>
                                <p><a href="services.html" className="btn btn-custom wow fadeInUp" data-wow-delay="1s">View Services</a></p>

                            </div>
                        </div>
                    </div>
                </div>

                <a href="#section-gallery" className="scroll-to">
                    <span className="mouse fadeScroll relative" data-scroll-speed="2">
                        <span className="scroll"></span>
                    </span>
                </a>

            </section>
            <section id="section-about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>Who We Are<span className="tiny-border"></span></h2>
                        </div>

                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-6 wow fadeInRight">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
                                </div>
                                <div className="col-md-6 wow fadeInRight" data-wow-delay=".2s">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    </main>
  );
}
