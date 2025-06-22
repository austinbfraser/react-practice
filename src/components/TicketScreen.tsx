// import React from 'react';
import type { ErrorsInterface } from '../App';
import CodingConfLogo from './CodingConfLogo';
import GithubLogo from './GithubLogo';
import type { FormTextProps } from './Form';

interface TicketScreenProps {
  file: File | null;
  errors: ErrorsInterface;
  formTextProps: {fullName: FormTextProps, email: FormTextProps, github: FormTextProps};
  previewUrl: string | undefined;
}

const TicketScreen = ({
  formTextProps,
  previewUrl,
}: TicketScreenProps) => {

  const { fullName, email, github } = formTextProps;

  return (
    <div className="ticketScreenContainer">
      <h1 className="ticketHeader">
        Congrats, {fullName.value}!<br></br>Your ticket is ready.
      </h1>
      <p className="weveEmailed">We've emailed your ticket to {email.value} and will send updates in the run up to the event.</p>
      <div className="ticketSvg">
        <CodingConfLogo />
        <p className="dateAndLocation">Jan 31, 2025  /  Austin, TX</p>
        <div className="middleContainer">
          <p className='ticketNumber'>#01609</p>
        </div>
        <div className="lowerContainer">
          <img className="ticketAvatar" src={previewUrl} />
          <div className="lowerContainer-text">
            <p className="lowerContainer-fullName">{fullName.value}</p>
            <div className="githubContainer">
              <GithubLogo /><span>{github.value}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketScreen;
