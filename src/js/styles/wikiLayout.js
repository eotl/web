
const drawerWidth = 180;

const styles = theme => {
  let toolbarMixin = { ...theme.mixins.toolbar };
  return {
    root: {
      display: 'flex',
      width: '100%',
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...toolbarMixin,
      justifyContent: 'flex-end',
    },
    drawerSubHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...toolbarMixin,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      paddingTop: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
    menuList: {
      paddingLeft: 15,
    },
    menuItem: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& $primary, & $icon': {
          color: theme.palette.common.white,
        },
      },
    },
    menuItemSelected: {
      fontWeight: 'bold'
    },
    menuLink: {
      textDecoration: 'none'
    },
    grow: {
      flexGrow: 1,
    },
    primary: {},
    icon: {},
  };
};

export default styles;