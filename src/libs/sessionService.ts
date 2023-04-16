const key = {
  idSession: 'ID_SESSION',
};

export const sessionService = {
  /** ID session */
  getIdSession: () => localStorage.getItem(key.idSession) ?? '',
  setIdSession: (session: string) =>
    localStorage.setItem(key.idSession, `Bearer ${session}`),
  resetIdSession: () => localStorage.setItem(key.idSession, ''),
};
