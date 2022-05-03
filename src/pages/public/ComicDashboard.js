//MUI imports
import {
  Box,
  Container,
  Typography
} from '@mui/material';

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