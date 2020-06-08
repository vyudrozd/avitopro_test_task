import React from 'react';
import ReactMedia from 'react-media';
import {Box} from 'reflexbox';
import {QUERIES} from './constant';

export default function Media({
  mobile,
  tablet,
  pc,
  hd,
  as: Component = Box,
  ...props
}) {
  /* eslint-disable complexity */
  return (
    <ReactMedia
      queries={QUERIES}
    >
      {(matches) => {
        const content = (
          (matches.mobile && mobile) ||
          (matches.tablet && (tablet || mobile)) ||
          (matches.pc && (pc || tablet || mobile)) ||
          (matches.hd && (hd || pc || tablet || mobile))
        );

        if (!content) return null;

        return (
          <Component {...props}>
            {content}
          </Component>
        );
      }}
    </ReactMedia>
  );
  /* eslint-enable complexity */
}
