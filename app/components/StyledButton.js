import { Button as MuiButton, ThemeProvider, styled, useMediaQuery, useTheme } from '@mui/material';

const Button = styled(MuiButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
  backgroundColor: theme.palette.mode === 'dark' ? '#111827' : '#f3f4f6',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
  },
}));

export default function StyledButton({ href, text, icon }) {
  const theme = useTheme();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const appliedTheme = {
    ...theme,
    palette: {
      ...theme.palette,
      mode: prefersDarkMode ? 'dark' : 'light',
    },
  };

  return (
    <ThemeProvider theme={appliedTheme}>
      <Button variant='contained' href={href} target='_blank' size='small' startIcon={icon}>
        {text}
      </Button>
    </ThemeProvider>
  );
}
