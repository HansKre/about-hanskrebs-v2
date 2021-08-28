import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


type Props = {
    backgroundColor: string;
    children?: React.ReactNode;
    backgroundImg?: string;
    height?: string;
}

type StyleProps = {
    backgroundColor: string;
    backgroundImg: string;
    height: string;
}

const useStyles = makeStyles({
    fullHeight: {
        height: (props: StyleProps) => props.height
    },
    background: {
        backgroundSize: 'cover',
        backgroundImage: (props: StyleProps) => {
            if (props.backgroundImg)
                return `url(${props.backgroundImg})`;
            return 'unset';
        },
        backgroundColor: (props: StyleProps) => props.backgroundColor,
    },
});

export default function FullHeightWrapper(props: Props) {
    const {backgroundColor, backgroundImg, height, children} = props;
    const classes = useStyles({
        backgroundColor,
        backgroundImg: backgroundImg || '',
        height: height || "100vh",
    });
    return <Grid container justifyContent="center" alignItems="center" className={`${classes.fullHeight} ${classes.background}`}>
        {children}
    </Grid>;
}