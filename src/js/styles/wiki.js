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
      borderWidth: '20px',
      borderColor: 'red',
//      flexGrow: 1,
    },
    paper: {
      borderWidth: 20,
      borderColor: 'red',
      padding: theme.spacing.unit * 2,
      color: theme.palette.text.secondary,
      minHeight: '100px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
 }
});

export default styles;
