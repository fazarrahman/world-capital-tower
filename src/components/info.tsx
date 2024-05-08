const Info = () => {
    return (
        <div className="info">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="col"><span className="id-color"><i className="fa fa-map-marker"></i></span>Collins Street West, Victoria 8007 Australia </div>
                        <div className="col"><span className="id-color"><i className="fa fa-clock-o"></i></span>Monday - Friday 08:00-16:00</div>
                        <div className="col"><span className="id-color"><i className="fa fa-phone"></i></span>1800.899.900</div>
                        <div className="col">
                            <div id="lang-selector" className="dropdown">
                                <a href="#" className="btn-selector">English</a>
                                <ul>
                                    <li className="active"><a href="#">English</a></li>
                                    <li><a href="#">France</a></li>
                                    <li><a href="#">Germany</a></li>
                                    <li><a href="#">Spain</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 text-right">
                        <div className="col social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-rss"></i></a>
                            <a href="#"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;