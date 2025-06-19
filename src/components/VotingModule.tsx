// import React from 'react';

interface VotingModuleProps {
  score: number
}
const VotingModule = ({ score }: VotingModuleProps) => {
  return (
    <div className="comment-votes">
      <button className="votingInc">+</button>
      {score}
      <button className="votingDec">-</button>
    </div>
  );
};

export default VotingModule;
