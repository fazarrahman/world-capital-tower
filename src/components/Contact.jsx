const Contact = () => {
    return (
        <section className="w-full mb-32 flex flex-col justify-center items-center">
            <h2 className="text-4xl m-20 text-center bg-clip-text text-gray-700">
                Contact Us
            </h2>
            <div className="container">
                <div className="mx-20">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="map-container">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.260510637964!2d106.8266465!3d-6.229345899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4fd52bf17%3A0x9c255197f768e3ad!2sWorld%20Capital%20Tower%2C%20Jl.%20Mega%20Kuningan%20Barat%20No.3%2C%20Kuningan%2C%20Karet%20Kuningan%2C%20Setiabudi%2C%20South%20Jakarta%20City%2C%20Jakarta%2012950!5e0!3m2!1sen!2sid!4v1715999486094!5m2!1sen!2sid" width="360" height="270" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <address class="text-gray-700 inline-block">
                                <p><strong>Address:</strong>Collins Street West, Victoria 8007 Australia</p>
                                <p><strong>Phone:</strong>(208) 333 9296</p>
                                <p><strong>Fax:</strong>(208) 333 9298</p>
                                <p><strong>Email:</strong><a href="mailto:contact@buildpro.com">contact@buildpro.com</a></p>
                                <p><strong>Web:</strong><a href="#test">http://buildpro-construction.com</a></p>
                                <p><strong>Open</strong>Sunday - Friday 08:00 - 18:00</p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;