import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import {SocialIcon} from 'react-social-icons';
// import does not work for .pdf
const pdfLink = require('../assets/resume.pdf').default;

const useStyles = makeStyles({
    hoverable: {
        transition: 'all .2s ease-in-out',
    },
    onHover: {
        "&:hover": {
            transform: 'scale(1.04)',
        },
    },
    onHoverSocial: {
        "&:hover": {
            transform: 'scale(1.15)',
        },
    },
    button: {
        backgroundColor: '#2d2c30',
        border: 'none',
        borderRadius: '10px',
        color: 'white',
        width: '100%',
        cursor: 'pointer',
    },
});

export default function Contact() {
    const classes = useStyles();
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}} >
            <h1>Contact Hans 🎙</h1>
            <Grid container>
                <Grid item container direction='column' xs={12} md={6} >
                    <h2 style={{color: "#48484a"}}>Social Networks</h2>
                    <div style={{display: 'flex', flex: 1}}>
                        <div style={{flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '4rem'}}>
                            <SocialIcon style={{height: 58, width: 58}} className={`${classes.hoverable} ${classes.onHoverSocial}`} url="https://github.com/hanskre" target="_blank" rel="noopener noreferrer" />
                            <SocialIcon style={{height: 58, width: 58}} className={`${classes.hoverable} ${classes.onHoverSocial}`} url="https://www.linkedin.com/in/hans-krebs-63b35034/" target="_blank" rel="noopener noreferrer" />
                            <SocialIcon style={{height: 58, width: 58}} className={`${classes.hoverable} ${classes.onHoverSocial}`} url="https://www.instagram.com/hanso711/" target="_blank" rel="noopener noreferrer" />
                        </div>
                    </div>
                </Grid>
                <Grid item container direction='column' xs={12} md={6} >
                    <h2 style={{color: "#48484a"}}>Curriculum Vitae</h2>
                    <a href={pdfLink} target='_blank' rel='noreferrer'
                    >
                        <button className={`${classes.hoverable} ${classes.onHover} ${classes.button}`}><h2 style={{paddingTop: 0}} >Download CV</h2></button>
                    </a>
                </Grid>
            </Grid>
        </div>
    )
}
