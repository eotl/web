const styles = theme => ({
  '@global': {
    h1: theme.typography.h1,
    h2: theme.typography.h2,
    h3: theme.typography.h3,
    h4: theme.typography.h4,
    h5: theme.typography.h5,
    h6: theme.typography.h6,
  }, 
  articleGrid: {
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      color: theme.palette.text.secondary,
      minHeight: '100px'
    },
    grid: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
 }
});

export default styles;
