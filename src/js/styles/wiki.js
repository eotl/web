const styles = theme => ({
  '@global': {
    h1: theme.typography.h1,
    h2: theme.typography.h2,
    h3: theme.typography.h3,
    h4: theme.typography.h4,
    h5: theme.typography.h5,
    h6: theme.typography.h6,
  }, 
  headerWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  articleHeader: {
    flex: 1,
    order: 1
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
  articleGridLink: {
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
  textSection: {
    whiteSpace: 'pre-wrap',
  },
  createIcon: {
    marginLeft: 15,
  },
  hide: {
    display: 'none',
  },
});

export default styles;
