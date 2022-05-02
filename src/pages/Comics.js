import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FeaturedComic from '../components/FeaturedComic';

//Import local
import ComicsList from '../queries/ComicsList';

function FeaturedComicsList(props) {
    const { comics } = props;

    return (
        <Container maxWidth="lg" sx={{ pt: 5 }}>
            <Grid container spacing={4} direction="column">
            { comics.map((comic) => (
            <FeaturedComic key={comic.id} comic={comic} />
            ))}
            </Grid>
        </Container>  
    );
}

function Comics(props) {
    return (
        <ComicsList>
            <FeaturedComicsList/>
        </ComicsList>
    )
}

export default Comics;