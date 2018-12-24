import { SpoilerLevels } from '../helpers/spoilerHelper';

const styles = theme => ({
  '@global': {
    h1: theme.typography.h1,
    h2: theme.typography.h2,
    h3: theme.typography.h3,
    h4: theme.typography.h4,
    h5: theme.typography.h5,
    h6: theme.typography.h6,
    table: {
      border: 'solid',
      borderWidth: 2,
      padding: 10,
      borderCollapse: 'collapse',
    },
    th: {
      border: 'solid',
      borderWidth: '0px 2px 0px 2px',
      padding: '0px 10px 0px 10px',
    },
    td: {
      border: 'solid',
      borderWidth: '0px 2px 0px 2px',
      padding: '0px 10px 0px 10px',
    },
  }, 
  headerWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  articleHeader: {
    flex: 1,
    order: 1,
  },
  headerIcon: {
    order: 2
  },
  articleGridRoot: {
    flexGrow: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  articleGridPaper: {
    minHeight: 52,
    padding: 5,
  },
  articleGridCopy: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  plainLink: {
    textDecoration: 'none',
  },
  sectionDivider: {
    marginTop: 10,
    marginBottom: 10,
  },
  sectionHeader: {
    marginTop: 10,
    marginBottom: 10,
  },
  breadcrumbs: {
    display: 'flex',
    listStyle: 'none',
    padding: 0
  },
  tableOfContents: {
    '@global': {
      'ol': {
        listStyleType: 'none',
        counterReset: 'item',
        margin: 0,
        padding: 0,
      },
      'ol > li': {
        display: 'table',
        counterIncrement: 'item',
        lineHeight: '1.4em',
      },
      'ol > li:before': {
        content: 'counters(item, ".") ". "',
        display: 'table-cell',
        paddingRight: '0.6em',
      },
      'li ol > li': {
        margin: 0,
      },
      'li ol > li:before': {
        content: 'counters(item, ".") " "',
      }
    }
  },
  tocPaper: {
    padding: 10,
    display: 'inline-block'
  },
  tocHeaderOpen: {
    textAlign: 'center',
  },
  tocHide: {
    background: 'none!important',
    color: 'inherit',
    border: 'none',
    padding: '0!important',
    font: 'inherit',
    cursor: 'pointer',
  },
  textSection: {
    whiteSpace: 'pre-wrap',
  },
  createIcon: {
    marginLeft: 15,
  },
  hide: {
    display: 'none',
  },
  headerFlexbox: {
    display: 'flex',
  },
  headerHeader: {
    flexGrow: 1,
  },
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
});

export default styles;
