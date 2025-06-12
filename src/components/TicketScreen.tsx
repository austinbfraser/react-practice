// import React from 'react';
import type { ErrorsInterface } from '../App';
import TicketSvg from './TicketSvg';

interface TicketScreenProps {
  file: File | null;
  errors: ErrorsInterface;
  fullName: string;
  email: string;
  github: string;
}

const TicketScreen = ({
  file,
  errors,
  fullName,
  email,
  github,
}: TicketScreenProps) => {
  return (
    <div className="ticketScreenContainer">
      <h1 className="ticketHeader">
        Congrats, {fullName}!<br></br>Your ticket is ready.
      </h1>
      <p className="weveEmailed">We've emailed your ticket to {email} and will send updates in the run up to the event.</p>
      {/* <TicketSvg /> */}
      <div className="ticketSvg"></div>
    </div>
  );
};

export default TicketScreen;
