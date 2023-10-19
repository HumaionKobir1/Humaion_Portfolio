import React from "react";
import styled from "styled-components";

import { BsGithub } from "react-icons/bs";

const Project = (props) => {
  const { img, disc,liveLink,clientGit,serverGit } = props.item;
  return (
    <Container className="project">
      <img src={img} alt="project" />
      <div className="disc">
        <h1>Details</h1>
        <p className=" text-xs">
          {disc}
          <div className="flex gap-3 mt-2">
  <button className="rounded-lg px-2 py-2 text-xs">
    <a href={liveLink}>Live site</a>
  </button>
  <button className="rounded-lg px-2 py-2 text-xs flex gap-2">
    <a href={clientGit}>client</a> <BsGithub />
  </button>
  {serverGit && (
    <button className="rounded-lg px-2 py-2 text-xs flex gap-2">
      <a href={serverGit}>server</a> <BsGithub />
    </button>
  )}
</div>

        </p>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 10rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));




    transition: all 400ms ease-in-out;
    h1 {
      font-size: 0.7rem;
    }

    p {
      width: 90%;
      font-size: 0.6rem;
      color:black,
      
      
    }
  }

  :hover > img {
    transform: scale(1.3);
  }

  :hover > .disc {
    bottom: 0;
  }
`;
