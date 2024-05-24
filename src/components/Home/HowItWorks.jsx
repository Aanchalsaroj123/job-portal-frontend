import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How EmployVista Works</h3>
          <div className="banner">
            <div className="card">
              <p>For Job Seekers:</p>
              <p>
              Discover a world of possibilities with our extensive database of job listings across various industries. Our user-friendly interface makes it easy to search, filter, and apply for positions that align with your skills and aspirations. Create a profile, upload your resume, and let our advanced matching algorithms highlight the best opportunities tailored to you. With EmployVista, your dream job is just a click away.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <FaUserPlus />
              <p>Create Account</p>
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>......</p>
            </div>
            <div className="card">
              <p>For Employers:</p>
              <p>
              Finding the right talent has never been easier. EmployVista provides a comprehensive suite of tools to post job openings, manage applications, and identify top candidates quickly. Our platform attracts a diverse pool of qualified professionals eager to contribute to your organization’s success. Leverage our intelligent recruitment solutions to streamline your hiring process and build a dynamic team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
