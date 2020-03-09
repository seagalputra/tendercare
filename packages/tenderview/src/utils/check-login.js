const sessionStorageName = 'tendercare';

const isLoggedIn = () => localStorage.getItem(sessionStorageName);

export default isLoggedIn;
