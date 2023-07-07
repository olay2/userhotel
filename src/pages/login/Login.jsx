import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                bgcolor: '#cfe8fc',
                height: '100vh',
                py: 15,
                px: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{mb: 2}} alt="Remy Sharp" src="https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/273589692_314695404011363_3274835079483426366_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG24Ywj7ecZEabFBpnM6Ku7UhmUklhWPwhSGZSSWFY_CIsCmdLk0iWA2dHYPHR7NsnYN3OE2IJ34xTZvXpH8kbU&_nc_ohc=t4UvukjbZy0AX_imFjk&_nc_ht=scontent.fvte2-2.fna&oh=00_AfDaSX5kOsMnaTWRicNIlHzg8wGmciA-Ndj0LkHQ2WlzeA&oe=64AAC0AF" />
              <Typography component="h1" variant="h5">
               ລົງຊື່ເຂົ້າໃຊ້ລະບົບ
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      ໜ້າຫຼັກ
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      ລົງທະບຽນ
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://scontent.fvte2-3.fna.fbcdn.net/v/t39.30808-6/273684872_314696920677878_981182515492059267_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHJmWb8cUwMJ-VHJvhLMuWbYBmM9gh_LF1gGYz2CH8sXdb0fOyN0YvaUzzN_eKnkQv0IwlOhGN33yFb_jjRYFV1&_nc_ohc=xIpdN68U8foAX-Hpwv6&_nc_ht=scontent.fvte2-3.fna&oh=00_AfBmJhW8snshUI1tfs0Cuos4vih9TCpeU2WTW2bXG06JMg&oe=64ABA6C8)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: "0.7"
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}