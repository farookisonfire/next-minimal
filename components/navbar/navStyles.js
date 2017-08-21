export const mobileNavOpen = {
  height: '100vh',
};

export const defaultStyle = {
  transition: `opacity ${300}ms ease-in-out`,
  opacity: 0,
  width: 0,
  height: 0,
  position: 'absolute',
  top: '-5px',
  left: 0,
  zIndex: 1,
  backgroundColor: 'black',
};

export const transitionStyles = {
  entering: { opacity: 1, width: '100%', height: '100vh' },
  entered: { opacity: 1, width: '100%', height: '100vh' },
  exiting: { opacity: 0, width: 0, height: 0 },
  exited: { opacity: 0, width: 0, height: 0 },
};

export const mobileNavCloseIcon = {
  position: 'absolute',
  right: '15px',
  top: '20px',
  cursor: 'pointer',
  zIndex: '2',
};

export const mobileNavOpenLogo = {
  marginLeft: '15px',
  marginTop: '10px',
  width: '50px',
};

export const mobileNavLinks = {
  marginTop: '24px',
  paddingLeft: '24px',
};

export const mobileNavLink = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '24px',
  lineHeight: 1.33,
  fontWeight: 300,
};

export const mobileNavLinkLittle = {
  textDecoration: 'none',
  color: 'rgba(255,255,255,.8)',
  fontSize: '16px',
  lineHeight: 1.5,
  fontWeight: 300,
};

export const mobileNavLinkContainer = {
  marginBottom: '22px',
};

export const mobileNavLinkLittleContainer = {
  marginBottom: '16px',
};
