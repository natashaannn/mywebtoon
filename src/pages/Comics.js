import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FeaturedComic from '../components/FeaturedComic';

//Import Amplify
import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';

//Add a new string to query all comics
const ListComics = `query ListComics {
    listComics(limit: 10) {
        items {
            id
            title
            description
        }
    }
}`;

// Add a string to store a subcription query for new comics
const SubscribeToNewComics = `
    subscription OnCreateComic {
        OnCreateComic {
            id
            title
            description
        }
    }`;

function ComicsList(props) {
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

//Add a Comics component that will use the
//the Connect component from Amplify to provide data to ComicsList

function Comics() {
    // function to get data on new comics
    const onNewComic = (prevQuery, newData) => {
        let updatedQuery = Object.assign({}, prevQuery);
        updatedQuery.listComics.items = prevQuery.listComics.items.concat([newData.onCreateComic]);
        return updatedQuery;
    }

    return (
        <Connect query={graphqlOperation(ListComics)}
                subscription={graphqlOperation(SubscribeToNewComics)}
                onSubscriptionMsg={ onNewComic }>
            {({ data, loading, errors }) => {
                if (loading) {return <div>Loading...</div>; }
                if (errors.length > 0) {return <div>{JSON.stringify(errors)}</div>}
                if (!data.listComics) return;

                return <ComicsList comics={data.listComics.items} />;
            }}
        </Connect>
    );
}

export default Comics;