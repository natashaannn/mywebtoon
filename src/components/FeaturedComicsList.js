import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FeaturedComic from './FeaturedComic';

function FeaturedComicsList(props) {
    const { comics, subdirectory } = props;

    return (
        <Container maxWidth="lg" sx={{ pt: 5 }}>
            <Grid container spacing={4} direction="column">
            { comics.map((comic) => (
            <FeaturedComic key={comic.id} comic={comic} subdirectory={subdirectory} />
            ))}
            </Grid>
        </Container>  
    );
}

export default FeaturedComicsList;