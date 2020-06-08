import React, {createContext} from 'react';
import ReactMedia from 'react-media';
import {QUERIES} from './constant';

export const MediaContext = createContext();

export default function MediaProvider({children}) {
  return (
    <ReactMedia
      queries={QUERIES}
    >
      {(matches) => (
        <MediaContext.Provider
          value={{
            ...matches,
            overMobile: !matches.mobile,
            overTablet: !matches.mobile && !matches.tablet,
            overPC: !matches.mobile && !matches.tablet && !matches.pc,
            overHD: !matches.mobile && !matches.tablet && !matches.pc && !matches.hd,
          }}
        >
          {children}
        </MediaContext.Provider>
      )}
    </ReactMedia>
  );
}
