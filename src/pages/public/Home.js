//MUI imports
import {
  Box,
  Container,
  Typography
} from '@mui/material';

const website = {
    title: 'Momonoko',
    description: "Hey there! Welcome to my page. I'm a coder by day and comic writer by night. Feel free to check out my comics!"
}

function Home() {
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
            {website.title}
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
              {website.description}
          </Typography>
          </Container>
        </Box>
    )
}
export default Home;