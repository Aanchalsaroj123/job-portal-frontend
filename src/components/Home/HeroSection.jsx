import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "2,40,111",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "9220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "1,94,900",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
        <div className="image">
            <img src="/heroS.png" alt="hero" />
          </div>
          <div className="title">
            <h1>Welcome!</h1>
            <h1>Your Gateway to Career Success</h1>
            <p>
            At EmployVista, we believe in connecting talented individuals with exceptional opportunities. Our platform is designed to be your ultimate resource for navigating the job market, whether you’re seeking your next big career move or looking to find the perfect candidate for your organization!
            </p>
          </div>
          
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
