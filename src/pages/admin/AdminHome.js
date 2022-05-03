//React imports
import React from 'react';

//Amplify imports
import { withAuthenticator } from 'aws-amplify-react';

//MUI imports
import {
    Box,
    Container,
    Typography
} from '@mui/material';

//Import local components
import FeaturedComicsList from '../../components/FeaturedComicsList';

//Import api
import GetComicsList from '../../api/GetComicsList';

function AdminHome() {
    return (
        <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Welcome Admin!
            </Typography>

            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                This is the admin portal.
            </Typography>
        </Container>

        <Container>
        <GetComicsList>
            <FeaturedComicsList subdirectory='/admin/' />
        </GetComicsList>
        </Container>
        </Box>
    );
}

export default withAuthenticator(AdminHome, {includeGreetings: true});
