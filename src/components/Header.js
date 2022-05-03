//React imports
import React from 'react';

//MUI imports
import {
  AppBar,
  CssBaseline,
  GlobalStyles,
  Link,
  Toolbar
} from '@mui/material';

function Header(props) {
    return (
    <React.Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ flexWrap: 'wrap' }}>
              <Link href="/" style={{ textDecoration: 'none' }} variant="h6" color="secondary" noWrap sx={{ flexGrow: 1 }}>
                { props.title }
              </Link>
            <nav>
                {props.pages.map( (page) => 
                    (
                    <Link variant="button"
                        color="text.primary"
                        href= {page.url}
                        sx={{ my: 1, mx: 1.5 }}>
                        {page.title}
                      </Link>
                    )
                )}
            </nav>
          </Toolbar>
        </AppBar>
    </React.Fragment>
    )
};

export default Header;