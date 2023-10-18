import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
	typography: {
    fontFamily: [
			'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'
    ].join(','),
  },
	palette: {
		primary: {
			main: '#13505B',
			contrastText: '#fff'
		},
		secondary: {
			main: '#0C7489',
			contrastText: '#fff'
		}
	},
});

export default theme;
