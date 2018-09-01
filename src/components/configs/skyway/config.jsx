import Peer from 'skyway-js';
import skywayKey from './key.jsx';

export const peer = new Peer({ key: skywayKey, debug: 3 });
