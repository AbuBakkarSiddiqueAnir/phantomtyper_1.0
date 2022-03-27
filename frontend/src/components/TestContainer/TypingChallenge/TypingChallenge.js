import React from 'react';
import ChallengeArea from './ChallengeArea/ChallengeArea';
import TypingChalengeHeaderArea from './TypingChallengeHeaderArea/TypingChallengeHeaderArea'



const TypingChallenge = () => {
    return (
      <div>
        <TypingChalengeHeaderArea />
        <ChallengeArea />
      </div>
    );
}

export default TypingChallenge;