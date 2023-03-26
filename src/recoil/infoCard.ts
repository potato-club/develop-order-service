import { atom } from 'recoil';

export interface PersonState {
  hyoseong: boolean;
  geumju: boolean;
  cheongjo: boolean;
  haeyeon: boolean;
  junhyung: boolean;
}

export const personState = atom<PersonState>({
  key: 'personState',
  default: {
    hyoseong: true,
    geumju: false,
    haeyeon: false,
    cheongjo: false,
    junhyung: false,
  },
});
