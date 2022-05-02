import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function ComicDashboard(props) {
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
                <Typography variant="subtitle">
                    {comic.description}
                </Typography>
            </Container>
        </Box>
     );
         
}

export default ComicDashboard;