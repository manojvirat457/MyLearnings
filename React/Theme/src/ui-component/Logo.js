// material-ui
import { useTheme } from '@mui/material/styles';

import logoDark from 'assets/images/logo-dark.svg';
import logo from 'assets/images/logo.svg';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return <img src={logo} alt="shlokerp" height="20px" />;
};

export default Logo;
