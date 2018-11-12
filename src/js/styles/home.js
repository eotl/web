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
    color: theme.palette.primary.main,
    letterSpacing: '2px',
    textAlign: 'center',
    whiteSpace: 'nowrap'
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
