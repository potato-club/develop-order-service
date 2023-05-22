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
    geumju: true,
    haeyeon: true,
    cheongjo: false,
    junhyung: false,
  },
});
