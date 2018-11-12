const styles = theme => ({
  bannerWrapper: {
    textAlign: 'center'
  },
  banner: {
    display: 'inline-block',
    lineHeight: '1em',
    color: 'white',
    textAlign: 'left'
  },
  bannerText: {
    display: 'block',
  },
  bannerCaption: {
    display: 'block',
    color: theme.palette.primary.light,
    fontWeight: 'bold',
    letterSpacing: '2px',
    textAlign: 'center'
  },
  bannerLink: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.light
    }
  },
});

export default styles;
