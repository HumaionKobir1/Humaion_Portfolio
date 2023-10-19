
import { BsAward } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import CountUp from "react-countup";
import styled from "styled-components";
import img from '../../Img/1688047511681.png'

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;

  @media (max-width: 840px) {
    width: 90%;
    padding: 2rem 0;
  }
`;
const Profile = styled.div`
img {
  width: 75rem;
  filter: drop-shadow(0px 10px 10px #01be9570);
  transition: transform 400ms ease-in-out;

  @media (max-width: 790px) {
    width: 20rem;
  }

  @media (max-width: 660px) {
    width: 25rem;
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 25rem;
    margin-top: 2rem;
  }
}

:hover img {
  transform: translateY(-10px);
}
`;
const About = () => {
  return (
    <Container id="about">
      <div className="cursor-pointer mb-8">
        <div data-aos="zoom-out-down" className="text-center mb-8 md:mb-20">
          <h2 className="mt-8">
            <>"Get to Know"</>
          </h2>
          <h2 className="text-2xl green">About Me</h2>
        </div>

        <div className="flex flex-col-reverse justify-evenly md:flex-row items-center">
         <Profile>
         <div className="w-full md:w-1/2 md:mr-16">
            <h1 className="text-2xl font-semibold text-[#01be96]">HumaionKobir.Dev</h1>
          </div>
         </Profile>

          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="bg-[#01be96] px-8 py-3 rounded-md flex flex-col justify-center items-center shadow-lg hover:bg-transparent hover:border-[#01be96] hover:border">
                <BsAward className="text-5xl" />
                <h3 className="mt-4">Experience</h3>
                <h5 className="text-3xl font-thin">
                  <CountUp end={6} duration={20} delay={1} />
                </h5>
                <span>Months+</span>
                <h6>Working</h6>
              </div>

              <div className="bg-[#01be96] px-8 py-3 rounded-md flex flex-col justify-center items-center shadow-lg hover:bg-transparent hover:border-[#01be96] hover:border">
                <AiFillProject className="text-5xl" />
                <h3 className="mt-4">Projects</h3>
                <h5 className="text-3xl font-thin">
                  <CountUp end={15} duration={20} delay={1} />
                </h5>
                <span>Done</span>
              </div>
            </div>

            <div className="mt-4 md:mt-5 text-start md:text-left w-full md:w-4/5">
             hey, I'm Masum. I want to gain confidence and fame using
              my potential in this position and express my innovative creative
              skills for self and company growth. I am a hardworking and quick
              learner person. I believe hard work is the only way to success.
              Love to learn new technology and try to improve myself.
            </div>

            <button className="mt-4 md:mt-5 mx-auto md:mx-0 w-full md:w-auto"><a href="#footer">Let's Talk</a></button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;

