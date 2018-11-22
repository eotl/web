const styles = theme => ({
  '@global': {
    h1: theme.typography.h1,
    h2: theme.typography.h2,
    h3: theme.typography.h3,
    h4: theme.typography.h4,
    h5: theme.typography.h5,
    h6: theme.typography.h6,
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
  }
});

export default styles;
