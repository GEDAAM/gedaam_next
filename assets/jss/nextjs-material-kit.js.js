// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = 260;

const transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
};

const conatinerFluid = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%'
};

const container = {
  ...conatinerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '540px'
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px'
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px'
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px'
  }
};

const boxShadow = {
  boxShadow:
    '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
};

const card = {
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  margin: '25px 0',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  borderRadius: '3px',
  color: 'rgba(0, 0, 0, 0.87)',
  background: '#fff'
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em'
};

const primaryColor = '#34D09E';
const warningColor = '#F0E22A';
const dangerColor = '#F3785E';
const successColor = '#9CD654';
const infoColor = '#78ADDD';
const roseColor = '#CC648A';
const grayColor = '#999999';

const primaryBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(55, 222, 169, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(40, 158, 121, 0.2)'
};
const infoBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(127, 182, 235, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(92, 133, 171, 0.2)'
};
const successBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(175, 221, 119, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(117, 179, 43, 0.2)'
};
const warningBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(242, 232, 90, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(252, 238, 43, 0.2)'
};
const dangerBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(245, 133, 110, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(247, 85, 52, 0.2)'
};
const roseBoxShadow = {
  boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(168, 66, 103, 0.4)'
};

const warningCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #F2E85A, #FCEE2B)',
  ...warningBoxShadow
};
const successCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #AFDD77, #75B32B)',
  ...successBoxShadow
};
const dangerCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #F5856E, #F75534)',
  ...dangerBoxShadow
};
const infoCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #7FB6EB, #5C85AB)',
  ...infoBoxShadow
};
const primaryCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #37DEA9, #289E79)',
  ...primaryBoxShadow
};
const roseCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #D47296, #A84267)',
  ...roseBoxShadow
};
const cardActions = {
  margin: '0 20px 10px',
  paddingTop: '10px',
  borderTop: '1px solid #eeeeee',
  height: 'auto',
  ...defaultFont
};

const cardHeader = {
  margin: '-30px 15px 0',
  borderRadius: '3px',
  padding: '15px'
};

const defaultBoxShadow = {
  border: '0',
  borderRadius: '3px',
  boxShadow:
    '0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s'
};

const title = {
  color: '#3C4858',
  margin: '1.75rem 0 0.875rem',
  textDecoration: 'none',
  fontWeight: '700',
  fontFamily: '"Roboto Slab", "Times New Roman", serif'
};

const cardTitle = {
  ...title,
  marginTop: '.625rem'
};

const cardLink = {
  '& + $cardLink': {
    marginLeft: '1.25rem'
  }
};

const cardSubtitle = {
  marginBottom: '0',
  marginTop: '-.375rem'
};

export {
  // variables
  drawerWidth,
  transition,
  container,
  conatinerFluid,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardLink,
  cardSubtitle
};
