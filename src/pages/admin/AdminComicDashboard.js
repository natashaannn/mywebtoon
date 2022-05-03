//MUI imports
import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material';

function AdminComicDashboard(props) {
     const { comic } = props;

     return (
        <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
        >
            <Container>
                <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                >
                {comic.title}
                </Typography>

                <Typography variant="h4">
                This is an admin page.
                </Typography>

                <Container>
                    <Button variant='contained' href={'/admin/new-episode/' + comic.title.toLowerCase().replace(/\s/g, '-')}>New Episode</Button>
                </Container>

                <Typography variant="subtitle">
                    {comic.description}
                </Typography>
            </Container>
        </Box>
     );
         
}

export default AdminComicDashboard;