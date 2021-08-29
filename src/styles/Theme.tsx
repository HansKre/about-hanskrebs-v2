import {createTheme} from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({});

declare module "@material-ui/core/styles/createBreakpoints" {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        phone: true;
    }
}

const CustomTheme = createTheme({
    // https://material-ui.com/customization/breakpoints/#custom-breakpoints
    breakpoints: {
        values: {
            ...breakpoints.values,
            phone: 765
        },
    },
});

export default CustomTheme;