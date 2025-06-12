// import React from 'react';
import type { ErrorsInterface } from '../App';
// import TicketSvg from './TicketSvg';
import CodingConfLogo from './CodingConfLogo';
import GithubLogo from './GithubLogo';

interface TicketScreenProps {
  file: File | null;
  errors: ErrorsInterface;
  fullName: string;
  email: string;
  github: string;
  previewUrl: string | undefined;
}

const TicketScreen = ({
  // file,
  // errors,
  fullName,
  email,
  github,
  previewUrl,
}: TicketScreenProps) => {
  return (
    <div className="ticketScreenContainer">
      <h1 className="ticketHeader">
        Congrats, {fullName}!<br></br>Your ticket is ready.
      </h1>
      <p className="weveEmailed">We've emailed your ticket to {email} and will send updates in the run up to the event.</p>
      <div className="ticketSvg">
        <CodingConfLogo />
        <p className="dateAndLocation">Jan 31, 2025  /  Austin, TX</p>
        <div className="middleContainer">
          <p className='ticketNumber'>#01609</p>
        </div>
        <div className="lowerContainer">
          <img className="ticketAvatar" src={previewUrl} />
          <div className="lowerContainer-text">
            <p className="lowerContainer-fullName">{fullName}</p>
            <div className="githubContainer">
              <GithubLogo /><span>{github}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketScreen;
