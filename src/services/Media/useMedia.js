import {useContext} from 'react';
import {MediaContext} from './Provider';

export default function useMedia() {
  return useContext(MediaContext);
}
