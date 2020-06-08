export const MOBILE_WIDTH = 599;
export const TABLET_WIDTH = 1199;
export const PC_WIDTH = 1599;
export const HD_WIDTH = 2099;


export const MEDIA_MOBILE_WIDTH = `(max-width: ${MOBILE_WIDTH}px)`;
export const MEDIA_TABLET_WIDTH = `(min-width: ${MOBILE_WIDTH + 1}px) and (max-width: ${TABLET_WIDTH}px)`;
export const MEDIA_PC_WIDTH = `(min-width: ${TABLET_WIDTH + 1}px) and (max-width: ${PC_WIDTH}px)`;
export const MEDIA_HD_WIDTH = `(min-width: ${PC_WIDTH + 1}px)`;


export const QUERIES = {
  mobile: MEDIA_MOBILE_WIDTH,
  tablet: MEDIA_TABLET_WIDTH,
  pc: MEDIA_PC_WIDTH,
  hd: MEDIA_HD_WIDTH,
};
