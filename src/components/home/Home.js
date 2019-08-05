import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0),
    marginTop: theme.spacing(-5),
    backgroundImage: 'url(./assets/cover.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: 500,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  colorWhite: {
    color: '#FFFFFF',
  },
  showcaseTitle: {
    marginTop: theme.spacing(3),
  }
}));

const cards = [0, 1, 2, 3];

export default function Album() {
  const classes = useStyles();

  function showcaseList(list) {
    return (
      <Grid container spacing={4}>
        {list.map(card => (
          <Grid item key={card} xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography>
                  This is a media card. You can use this.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Ver mais
                </Button>
                <Button size="small" color="primary">
                  Reservar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" className={classes.colorWhite} gutterBottom>
              Desapet!
            </Typography>
            <Typography variant="h5" align="center" className={classes.colorWhite} paragraph>
              Something short and leading about.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Typography className={classes.showcaseTitle} component="h1" variant="h5" align="left" gutterBottom>
            Cachorros
          </Typography>
          {showcaseList(cards)}

          <Typography className={classes.showcaseTitle} component="h1" variant="h5" align="left" gutterBottom>
            Gatos
          </Typography>
          {showcaseList(cards)}

          <Typography className={classes.showcaseTitle} component="h1" variant="h5" align="left" gutterBottom>
            Outros
          </Typography>
          {showcaseList(cards)}
        </Container>
      </main>
    </>
  );
}
