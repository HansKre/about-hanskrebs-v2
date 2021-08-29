import {Parallax} from 'react-scroll-parallax'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    fullWidth: {
        width: '100%',
    },
    left: {
        flex: '0 1 calc(100% - 64%)',
        backgroundColor: 'blue'
    },
    right: {
        flex: '0 1 64%',
        backgroundColor: 'green'
    },
    whiteFont: {
        color: 'white',
    },
    centerVisually: {
        paddingRight: '25px'
    },
});

export default function AboutMe() {
    const classes = useStyles();
    return (
        <Parallax className={classes.fullWidth} y={[-120, 120]}>
            <Grid container >
                <Grid item className={classes.left}>
                    {/* empty */}
                </Grid>
                <Grid item className={classes.right} container justifyContent="center" >
                    <h1 className={classes.whiteFont}>About Me</h1>
                    <h2 className={`${classes.whiteFont} ${classes.centerVisually} `}>Lorem Ipsum</h2>
                </Grid>
            </Grid>
        </Parallax>
    )
}
