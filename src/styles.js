import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icons: {
    marginRight: theme.spacing(2),
  },
  button: {
    marginTop: "40px",
  },
  cardGrId: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "20px",
  },
}));

export default useStyles;
