import {createTheme} from '@material-ui/core/styles';

const CustomTheme = createTheme({
    typography: {
        fontFamily: [
            "'Lexend Deca', sans-serif"
        ].join(','),
        h6: {
            fontFamily: "'Inter', sans-serif"
        },
    },
});

export default CustomTheme;