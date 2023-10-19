import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "https://i.ibb.co/Hhv2BQ4/project-1.png",
    disc: "This is My team project. This is mainly uses online trading and business. This website user can trade, analysis andsee trading view chartin this website. there have 2 type contact service. If anyone visit our site without account he can contact useby usin gmail service.There have two type dashboards with different section.User Dashboard and Admin Dashboard. admin: humaionkobir5001@gmail.com, pass: 177683",
    liveLink: "https://online-trading-and-business-five.vercel.app/",
    clientGit: "https://github.com/fensami/online_trading_and_business"
  },
  {
    img: "https://i.ibb.co/QrnzSrg/project-2.png",
    disc: "It is basically a summer camp web application of Dance Learning School. Here shows what Class and Instructors provided for Students. Student can Enrolled classes with manual payment system and get better ui/ux design. A instructor can make classes, see them and update them, An admin can approve/deny and send feedback, and student can payment",
    liveLink: "https://dance-a96c2.web.app/",
    clientGit: "https://github.com/HumaionKobir1/dance-learning-school-client",
    serverGit: "https://github.com/HumaionKobir1/dance-learning-school-server",
  },
  {
    img: "https://i.ibb.co/dmDmHWM/project-3.png",
    disc: "Here user can learn favorite recipes from favorite chefs.User Can Registration, Login, See Recipe when click View recipe button. This website has a generator PDF button on the blog page and user can download the blog page. and other new futures.",
    liveLink: "https://chef-recipe-hunter-2dfd9.web.app/",
    clientGit: "https://github.com/HumaionKobir1/chef-recipe-hunter-client",
    serverGit: "https://github.com/HumaionKobir1/chef-recipe-hunter-server",
  },

  {
    img: "https://i.ibb.co/L1tXDzY/project-4.png",
    disc: "EHeros is a Frontend Employee Management System that allows users to efficiently manage employee records and perform various administrative tasks. I have created an employee category section on the homepage. where Add search and filter options to help users find specific employees quickly.",
    liveLink: "https://ehero-1ceb0.web.app/",
    clientGit: "https://github.com/HumaionKobir1/EHeros",
    serverGit: "https://github.com/HumaionKobir1/EHero-server",
  },

  {
    img: "https://i.ibb.co/rt1B07s/project-5.png",
    disc: "It is basically an Ecommerce web application of Electronic Toy Market. MERN Stack project for Electronic toy buy and sale Ecommerce Web application.",
    liveLink: "https://toy-market-e6758.web.app/",
    clientGit: "https://github.com/HumaionKobir1/toy-market-client",
    serverGit: "https://github.com/HumaionKobir1/toy-market-server",
  },
  {
    img: "https://i.ibb.co/zffXxv7/project-6.png",
    disc: "Aircnc allows individuals to list their homes, apartments, rooms, or even unique spaces for short-term rentals. Travelers can search for accommodations based on location, dates, and other preferences. Once they find a suitable listing, they can book it through the Airbnb platform.",
    liveLink: "https://aircnc-client-5c97a.web.app/",
    clientGit: "https://github.com/HumaionKobir1/aircnc-client",
    serverGit: "https://github.com/HumaionKobir1/aircnc-server",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
