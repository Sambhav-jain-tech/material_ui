import {
  Typography,
  AppBar,
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  Toolbar,
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className={classes.icons} />
          <Typography variant="h6">Photo Albumm</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container className={classes.container} maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
              magni blanditiis ipsa excepturi provident doloremque, cupiditate
              repellendus nam, nobis ad, iste nostrum rem cumque voluptate. In
              dolores repellat modi qui?
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    see my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography varient="h5" gutterBottom>
                      Heading
                    </Typography>
                    <Typography>This is a media card.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      view
                    </Button>
                    <Button size="small" color="secondary">
                      edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something to give footer
        </Typography>
      </footer>
    </>
  );
};

export default App;
