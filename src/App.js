import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";
import About from "./components/AboutMe/AboutMe";
import { Copyright } from "./components/Footer/Copyright";

function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <About />
      <LightColor>
        <Services />
      </LightColor>
      <Projects />

      <LightColor>
        <Footer />
        <Copyright />
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
