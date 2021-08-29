import {Parallax} from 'react-scroll-parallax'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles';
import useBreakPoint from '../hooks/useBreakPoint';
import hansImgMobile from '../assets/IMG_9921_matte_look_672.jpeg'

const SPLIT = 65;
const OFFSETS = {
    desktop: [-80, 40],
    mobile: [-30, 20],
}

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
});

export default function LandingPage() {
    const classes = useStyles();
    const downSm = useBreakPoint('down', 'sm');

    return (
        <>
            {downSm
                ? <Parallax className={classes.fullWidth} y={downSm ? OFFSETS.mobile : OFFSETS.desktop}>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <h3 >Hello 👋</h3>
                        <h1 >I'm Hans </h1>
                        <h2 style={{paddingBottom: '60px'}}>Welcome To My About Me Page!</h2>
                        <div style={{backgroundImage: `url(${hansImgMobile})`, boxShadow: '0 0 15px 15px #48484a inset', backgroundSize: 'cover', borderRadius: '10px'}}>
                            <img style={{filter: 'opacity(0%)', height: '60vmax'}} src={hansImgMobile} alt="Hans" />
                        </div>
                    </Grid>
                </Parallax >
                : <Parallax className={classes.fullWidth} y={downSm ? OFFSETS.mobile : OFFSETS.desktop}>
                    <Grid container >
                        <Grid item className={classes.left}>
                            {/* empty */}
                        </Grid>
                        <Grid item className={classes.right} container justifyContent="center" direction="column" >
                            <h3 >Hello 👋</h3>
                            <h1 >I'm Hans </h1>
                            <h2>Welcome To My About Me Page!</h2>
                        </Grid>
                    </Grid>
                </Parallax >
            }
        </>
    )
}
