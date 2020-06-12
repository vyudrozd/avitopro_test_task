import React from 'react';
import { Flex } from 'reflexbox';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/all';

export default function StarsRating({ className, ratingCount, forkCount }) {
  return (
    <Flex
      css={`
                display: inline;
                margin-left: auto;
            `}
      className={className}
      alignItems="center"
    >
      <AiOutlineStar size="1.5em" />
      {ratingCount}
      <AiOutlineFork size="1.5em" />
      {forkCount}
    </Flex>
  );
}
