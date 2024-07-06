import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import serviceErm from '../../../assets/images/service-icon/erp-icon.svg';
import serviceCrm from '../../../assets/images/service-icon/crm-icon.svg';
import serviceDrms from '../../../assets/images/service-icon/drms-icon.svg';
import mobileApp from '../../../assets/images/service-icon/mobileapp-icon.svg';
import engineering from '../../../assets/images/service-icon/engineering-icon.svg';
import pos from '../../../assets/images/service-icon/pos-icon.svg';
import Readmore from '../../../assets/images/service-icon/read-more.png';
import videoLine from '../../../assets/images/home-video/video-line.svg';
import videoBtn from '../../../assets/images/home-video/video-btn.svg';
import industryErp from '../../../assets/images/service-icon/best-erp.png';
import aboutErp from '../../../assets/images/about-img/about-mg1.png';
import lineSvg from '../../../assets/images/service-icon/Line.svg';
import LocationSvg from '../../../assets/images/service-icon/location-track-icon.svg';
import learnAbout from '../../../assets/images/about-img/about.png';
import topSun from '../../../assets/images/client_images/topsun.png';
import clientPoster from '../../../assets/images/client_images/0501202313102022topsun-testimo.webp';
import elicSlider from '../../../assets/images/client_images/EIC-lg.png'
const Home = () => {
    const sliderRef = useRef(null);
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    const homeSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const homeSliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
    const clientImages = [
        "src/assets/images/client_images/27042023GOKUL.jpg",
        "src/assets/images/client_images/05082022Pharma_Renova.png",
        "src/assets/images/client_images/15042024Rangoli.png",
        "src/assets/images/client_images/05082022Engineering_Armstrong.png",
        "src/assets/images/client_images/05082022Glass_Gopal.png",
        "src/assets/images/client_images/15042022adk.jpg",
        "src/assets/images/client_images/15042022ak-bansal.png",
        "src/assets/images/client_images/15042022bhagwati.jpg",
        "src/assets/images/client_images/15042022flowjet.jpg",
        "src/assets/images/client_images/15042022jk.jpg",
        "src/assets/images/client_images/15042022modison.jpg",
        "src/assets/images/client_images/15042022suncity.jpg",
        "src/assets/images/client_images/15042022tales.jpg",
        "src/assets/images/client_images/15042022topsun.jpg",
        "src/assets/images/client_images/27042023Razco.jpg",
        "src/assets/images/client_images/15042022blue-buddha.png",
        "src/assets/images/client_images/15042022lalbaba.png",
        "src/assets/images/client_images/15042022techflow.png",
        "src/assets/images/client_images/15042024Aveon.png",
        "src/assets/images/client_images/27042023BRADY.jpg",
        "src/assets/images/client_images/15042022kabhib.jpg",
        "src/assets/images/client_images/05082022Engineering_Natraj.png",
        "src/assets/images/client_images/15042022multiplast.png",
        "src/assets/images/client_images/15042022zenith.jpg",
        "src/assets/images/client_images/15042024Heavy Metal_Metal.png",
        "src/assets/images/client_images/15042022air-control.png",
        "src/assets/images/client_images/15042024GlobalSeamless_Metal.jpg",
        "src/assets/images/client_images/15042022austin.jpg",
        "src/assets/images/client_images/15042024AnandSeamless_Metal.jpg",
        "src/assets/images/client_images/05082022Food_Diamond.png",
        "src/assets/images/client_images/27042023ALLMARC.jpg",
        "src/assets/images/client_images/15042024Sanjoin.png",
        "src/assets/images/client_images/15042022sah.jpg",
        "src/assets/images/client_images/15042024Bhagwati_Engineering.jpg",
        "src/assets/images/client_images/05082022Chemical_Remik.jpg",
        "src/assets/images/client_images/27042023GOKUL.jpg",
        "src/assets/images/client_images/05082022Pharma_Renova.png",
        "src/assets/images/client_images/15042024Rangoli.png",
        "src/assets/images/client_images/05082022Engineering_Armstrong.png",
        "src/assets/images/client_images/05082022Glass_Gopal.png",
        "src/assets/images/client_images/15042022adk.jpg",
        "src/assets/images/client_images/15042022ak-bansal.png",
        "src/assets/images/client_images/15042022bhagwati.jpg",
        "src/assets/images/client_images/15042022flowjet.jpg",
        "src/assets/images/client_images/15042022jk.jpg",
        "src/assets/images/client_images/15042022modison.jpg",
        "src/assets/images/client_images/15042022suncity.jpg",
        "src/assets/images/client_images/15042022tales.jpg",
        "src/assets/images/client_images/15042022topsun.jpg",
        "src/assets/images/client_images/27042023Razco.jpg",
        "src/assets/images/client_images/15042022blue-buddha.png",
        "src/assets/images/client_images/15042022lalbaba.png",
        "src/assets/images/client_images/15042022techflow.png",
        "src/assets/images/client_images/15042024Aveon.png",
        "src/assets/images/client_images/27042023BRADY.jpg",
        "src/assets/images/client_images/15042022kabhib.jpg",
        "src/assets/images/client_images/05082022Engineering_Natraj.png",
        "src/assets/images/client_images/15042022multiplast.png",
        "src/assets/images/client_images/15042022zenith.jpg",
        "src/assets/images/client_images/15042024Heavy Metal_Metal.png",
        "src/assets/images/client_images/15042022air-control.png",
        "src/assets/images/client_images/15042024GlobalSeamless_Metal.jpg",
        "src/assets/images/client_images/15042022austin.jpg",
        "src/assets/images/client_images/15042024AnandSeamless_Metal.jpg",
        "src/assets/images/client_images/05082022Food_Diamond.png",
        "src/assets/images/client_images/27042023ALLMARC.jpg",
        "src/assets/images/client_images/15042024Sanjoin.png",
        "src/assets/images/client_images/15042022sah.jpg",
        "src/assets/images/client_images/15042024Bhagwati_Engineering.jpg",
        "src/assets/images/client_images/05082022Chemical_Remik.jpg",
        "src/assets/images/client_images/27042023GOKUL.jpg"
    ];
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(0); // Example method call
        }
    }, []);

    return (
        <>
            <section className="client_slider_wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3 col-sm-12 px-3 py-4" style={{ backgroundColor: '#F5F5FF', borderRadius: '28px' }}>
                            <h2 className="client_slider_title"><span>Trusted by 50000+ </span> <br />Businesses Worldwide</h2>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <Slider {...settings}>
                                {clientImages.map((item, index) => (
                                    <div className="item" key={index}>
                                        <img src={item} className="text-center " height="94px" alt={`Client ${clientImages}`} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <section className="comman_space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <h2 className="comman_title text-left mb-4"> <span>
                                <img src="{{ URL::to('/') }}{{ MYHOST }}frontend/img/new-icon/service-img.svg" alt="" className="img-fluid" />
                            </span> Our <span>Services</span></h2>
                            <p className="custom_title">Streamline sales processes and enhance customer relationship management through centralized data management with Datanote ERP.</p>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 ">
                            <div className="row justify-content-end mb-3">
                                <div className="col-lg-5 col-md-6 col-sm-12 mb-3">
                                    <a href="{{url ('erp') }}">
                                        <div className="service_inner">
                                            <div className="d-flex align-items-center">
                                                <img src={serviceErm} alt="service ERM" className="img-fluid" />
                                                <h2>ERP <br /> Framework</h2>
                                            </div>
                                            <img src={Readmore} alt="Readmore" className="img-fluid" />
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-12">
                                    <a href="{{url ('crm') }}">
                                        <div className="service_inner">
                                            <div className="d-flex align-items-center">
                                                <img src={serviceCrm} alt="service CRM" className="img-fluid" />
                                                <h2>CRM <br /> Framework</h2>
                                            </div>
                                            <img src={Readmore} alt="Readmore" className="img-fluid" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-5 col-md-6 col-sm-12 mb-3">
                                    <a href="{{url ('dms') }}">
                                        <div className="service_inner">
                                            <div className="d-flex align-items-center">
                                                <img src={serviceDrms} alt="service DRMS" className="img-fluid" />
                                                <h2>DRMS <br /> Framework</h2>
                                            </div>
                                            <img src={Readmore} alt="Readmore" className="img-fluid" />
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-12">
                                    <a href="{{url ('pos') }}">
                                        <div className="service_inner">
                                            <div className="d-flex align-items-center">
                                                <img src={pos} alt="Pos" className="img-fluid" />
                                                <h2>DataNote <br /> POS</h2>
                                            </div>
                                            <img src={Readmore} alt="Readmore" className="img-fluid" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-md-6 col-sm-12">
                                    <a href="{{url ('mobile-app-development-services') }}">
                                        <div className="service_inner">
                                            <div className="d-flex align-items-center">
                                                <img src={mobileApp} alt="mobileApp" className="img-fluid" />
                                                <h2>Mobile Apps</h2>
                                            </div>
                                            <img src={Readmore} alt="Readmore" className="img-fluid" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="comman_space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <h2 className="comman_title text-left mb-4">Take your business <br /> <span>further with DataNote ERP &
                                CRM</span></h2>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <p className="custom_title">DataNote is India's most leading enterprise solution that helps businesses
                                to implement cloud-based ERP solutions and leads towards scalability while also ensuring the
                                confidentiality of their data without sharing to any third-party including implementation
                                partner. Our modern technology offers OpenLogic Framework where the enterprise doesn't need to
                                share all the data/business logic/trade secrets/operation logic and formulas, that's not
                                possible in the case of traditional ERP implementation.</p>
                            <p className="custom_title"> Here, we handle the Structure Engine part while Logic Engine is free to
                                manage by the client. In that way, the client can execute & monitor the framework along with
                                making it confidential from the rest of the world.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video_bg">
                <div className="drow_line">
                    <img src={videoLine} alt="videoLine" className="img-fluid" />
                </div>
                <div className="container">
                    <div className="video_inner">
                        <p className="custom_title text-center">DataNote ERP Vs <br /> Other ERP</p>
                        <img src={videoBtn} alt="videoBtn" className="img-fluid" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <iframe src="https://www.youtube.com/embed/your_video_id_here" height="500" width="100%" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="best_erps after-img comman_space">
                <div class="container">
                    <div class="row my-5">
                        <div class="col-lg-6 col-md-6 col=sm-12">
                            <h2 class="comman_title text-left mb-4">Industries <span> Best ERP</span></h2>
                            <p class="custom_title">DataNote develops and implements vertical-specific business management
                                software that
                                improves operational efficiency and drives business growth. Our goal is to provide you with the
                                best and the most robust ERP software; and to do so, we have dedicated our expertise to all
                                sizes and industries in India and abroad.</p>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <img src={industryErp} alt="industry-ERP" class="img-fluid" />
                        </div>
                    </div>
                    <div class="row border-bottom border-line">
                        {[1, 2, 3, 4].map((index) =>
                            <div class="col-lg-3 col-md-6 col-sm-12 pb-4" key={index}>
                                <div class="our_erp">
                                    <img src={engineering} alt="engineering" class="img-fluid" />
                                </div>
                                <h3 class="best_erp_titles">Engineering</h3>
                                <p class="custom_title">DataNote ERP for the engineering industry means to grow maximum with minimum
                                    efforts.</p>
                                <a class="more_read" href="{{url ('industries/engineering-industry') }}">Read More <span><img src={Readmore} alt="Readmore" /></span></a>
                            </div>
                        )}
                    </div>
                    <div class="row border-line mt-4">
                        {[1, 2, 3, 4].map((index) =>
                            <div class="col-lg-3 col-md-6 col-sm-12 pb-4" key={index}>
                                <div class="our_erp">
                                    <img src={engineering} alt="engineering" class="img-fluid" />
                                </div>
                                <h3 class="best_erp_titles">Engineering</h3>
                                <p class="custom_title">DataNote ERP for the engineering industry means to grow maximum with minimum
                                    efforts.</p>
                                <a class="more_read" href="{{url ('industries/engineering-industry') }}">Read More <span><img src={Readmore} alt="Readmore" /></span></a>
                            </div>
                        )}
                    </div>
                    <div class="content__item my-5">
                        <a href="{{ url('all-industry') }}" class="button button--calypso"><span>Explore All Industries</span></a>
                    </div>
                    <div class="row mt-5">
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <h2 class="comman_title text-left mb-4">About <span> <br />DataNote ERP</span></h2>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-12">
                            <p class="custom_title">DataNote ERP is the one-stop shop for all your business needs. Manage
                                inventory, track sales, engage customers, analyze trends, and optimize operations – all in one
                                powerful platform. Increase profitability, improve customer satisfaction, and gain a competitive
                                edge.</p>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <img src={aboutErp} alt="about-ERP" class="img-fluid" />
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="row">
                                {[1, 2, 3, 4, 5, 6].map((index) =>
                                    <div class="col-lg-4 col-md-6 mb-3" key={index}>
                                        <div class="count_boxs">
                                            <div class="" data-inview-showup="showup-translate-up">
                                                <div class="count">30</div>
                                            </div>
                                        </div>
                                        <p class="count_title text-center">Industry Domain</p>
                                    </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="our_erps">
                {/* <div class="drow_line">
                    <img src={lineSvg} class="img-fluid" alt="lineSvg" />
                </div> */}
                <div class="container">
                    <h2 class="comman_title mb-4">OUR ERP <span> <br />Features & Capabilities</span></h2>
                    <div class="row border-line ">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) =>
                            <div class="col-lg-2 col-md-3 col-sm-12 text-center" key={index}>
                                <div class="our_erp">
                                    <img src={LocationSvg} alt="Location" class="img-fluid" />
                                </div>
                                <p class="erp_feature_title">Location <br /> Tracking</p>
                            </div>)}
                    </div>
                </div>
            </section>
            <section>
                <div class="home_about container">
                    <img class="ab_mg" src={learnAbout} alt="learnAbout" />
                    <h2 class="comman_title mb-4">Learn More About<span> <br />OpenLogic ERP Framework</span></h2>
                    <div id="accordion" class="accordion">
                        <div class="card mb-4">
                            <div class="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                                <a class="card-title hm_about">
                                    Structure Engine
                                </a>
                            </div>
                            <div id="collapseOne" class="card-body collapse show" data-parent="#accordion">
                                <p>
                                    Accordian 1
                                </p>
                            </div>
                        </div>

                        <div class="card mb-0">
                            <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                <a class="card-title hm_about">
                                    Logic Engine
                                </a>
                            </div>
                            <div id="collapseTwo" class="card-body collapse" data-parent="#accordion">
                                <p>
                                    Accordian 1
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="client_points">
                <div class="container">
                    <h2 class="comman_title mb-4">Building<span> Happy Clients</span></h2>
                    <div className="client_speak">
                        <Slider {...homeSettings}>
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div key={item} className="speak_box">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <img className="client_logo" src={topSun} alt="topSun" />
                                            <p className="custom_title"></p>
                                            <p>DataNote ERP system enhances customer experience and provides complete visibility across the supply chain, which is exactly what TOPSUN ENERGY LTD. has been missing in the previous ERP system. We are very fully implemented DataNote since 2008.</p>
                                            <div className="speak_name">
                                                <h3>Mr. Chanakya Patel</h3>
                                                <p>Director, Topsun Energy Ltd.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="video_poster">
                                                <img src={clientPoster} className='img-fluid' alt="clientPoster" data-toggle="modal" data-target={`#testimonial${item.id}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <ol className="logo_for_speak">
                        <Slider {...homeSliderSettings}>
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item}>
                                    <img src={elicSlider} alt="Elic" className='img-fluid' />
                                </div>
                            ))}
                        </Slider>
                    </ol>
                </div>
            </section>
        </>
    )
}

export default Home;