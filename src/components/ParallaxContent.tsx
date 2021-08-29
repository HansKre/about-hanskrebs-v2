import {makeStyles} from '@material-ui/core/styles';
import {Parallax} from 'react-scroll-parallax'

const useStyles = makeStyles({
    margins: {
        marginLeft: "70px",
        marginRight: "40px",
    }
});

export default function ParallaxContent(props: {children: React.ReactNode; yOffset: number[]}) {
    const classes = useStyles();
    return (
        <Parallax className={classes.margins} y={props.yOffset} >
            {props.children}
        </Parallax>
    )
}
