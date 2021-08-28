import {Parallax} from 'react-scroll-parallax'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles';

const SPLIT = 65;

const useStyles = makeStyles({
    fullWidth: {
        width: '100%',
    },
    left: {
        flex: `0 1 ${SPLIT}%`,
    },
    right: {
        flex: `0 1 calc(100% - ${SPLIT}%)`,
        paddingRight: '40px',
    },
    whiteFont: {
        // color: 'white',
    },
});

export default function LandingPage() {
    const classes = useStyles();
    return (
        <Parallax className={classes.fullWidth} y={[-100, 60]}>
            <Grid container >
                <Grid item className={classes.left}>
                    {/* empty */}
                </Grid>
                <Grid item className={classes.right} container justifyContent="center" direction="column" >
                    <h3 className={classes.whiteFont}>Hello 👋</h3>
                    <h1 className={classes.whiteFont}>I'm Hans </h1>
                    <h4 className={`${classes.whiteFont}`}>Welcome To My About Me Page!</h4>
                </Grid>
            </Grid>
        </Parallax >
    )
}
