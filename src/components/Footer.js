import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          { props.website }
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function Footer(props) {
    return (
        <React.Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <Container
        maxWidth="md"
        component="footer"
        sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            py: [3, 6],
        }}
        >
            <Grid container spacing={5} justifyContent="space-evenly">
                {props.socials.map((social) => (
                <Grid item xs={6} sm={1}>
                    <ul>
                        <li key={social.title}>

                        <Stack direction="row"spacing={1} alignItems="center">
                            <Link href={ social.url } variant="subtitle1" color="text.secondary">
                                <IconButton>
                                    <social.icon />
                                </IconButton>
                                <span>{ social.title }</span>
                            </Link>
                        </Stack>

                        </li>
                    </ul>
                </Grid>
                ))}
            </Grid>
            
            <Copyright sx={{ mt: 5 }} website={ props.website }/>
    
        </Container>

        </React.Fragment>

    );
}

export default Footer;