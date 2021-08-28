import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

// TODO: adopt iPhone viewport size when browser has adress bar
const useStyles = makeStyles({
    fullHeight: {
        height: "100vh"
    },
});

type Props = {
    color: string;
    children?: React.ReactNode;
}

export default function FullHeightWrapper(props: Props) {
    const {color, children} = props;
    const classes = useStyles();
    const styles = {
        backgroundColor: color
    }
    return <Grid style={styles} container justifyContent="center" alignItems="center" className={classes.fullHeight}>
        {children}
    </Grid>;
}