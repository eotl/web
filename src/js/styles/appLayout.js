import { fade } from '@material-ui/core/styles/colorManipulator';
import { SpoilerLevels } from '../helpers/spoilerHelper';
import BackgroundImage from '../../img/parchment.jpg';

const drawerWidth = 200;

const styles = theme => {
  let toolbarMixin = { ...theme.mixins.toolbar };

  return {
    root: {
      display: 'flex',
      width: '100%',
      minHeight: '100%',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      zIndex: theme.zIndex.drawer + 1,
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
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
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    suggestionsContainer: {
      position: 'relative',
    },
    suggestionsContainerOpen: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0,
    },
    suggestion: {
      display: 'block',
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
    },
    searchInputRoot: {
      color: 'inherit',
      width: '100%',
    },
    searchInputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      }
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },    
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
      backgroundImage: `url(${BackgroundImage})`,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    menuItem: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& $primary, & $icon': {
          color: theme.palette.common.white,
        },
      },
    },
    menuLink: {
      textDecoration: 'none'
    },
    grow: {
      flexGrow: 1,
    },
    primary: {},
    icon: {},
    lightTooltip: {
      background: theme.palette.common.white,
      color: theme.palette.text.primary,
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
    noneSpoiler: {
      color: SpoilerLevels.none.color,
    },
    newbieSpoiler: {
      color: SpoilerLevels.newbie.color,
    },
    regularSpoiler: {
      color: SpoilerLevels.regular.color,
    },
    veteranSpoiler: {
      color: SpoilerLevels.veteran.color,
    },
    wizardSpoiler: {
      color: SpoilerLevels.wizard.color,
    },
  };
};

export default styles;