import React from "react";
import Typist from "react-typist";
import { FaRegPaperPlane } from "react-icons/fa";
import "./company.css";

const Company = () => {
  const [typing, setTyping] = React.useState(false);

  return (
    <div className='company-container'>
      <div className='company-heading'>
        <p className='company-logo'>
          <FaRegPaperPlane color='white' className='paper-logo' />
        </p>
        <h1 className='company-start'>GO</h1>
        <div className='company-end'>influencer</div>
      </div>
      <div className='company-subheading'>
        <p className='company-light-heading'>
          {!typing ? (
            <Typist onTypingDone={() => setTyping(true)} className='typist'>
              Give your brand a rocket boost with <Typist.Delay ms={100} />
              <span className='company-dark-heading'>Influencer Marketing</span>
            </Typist>
          ) : (
            <React.Fragment>
              Give your brand a rocket boost with
              <span className='company-dark-heading'>Influencer Marketing</span>
            </React.Fragment>
          )}
        </p>
      </div>
    </div>
  );
};

export default Company;
