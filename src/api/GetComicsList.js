import React from 'react';

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


//"Connection failed: {"errors":[{"message":"Validation error of type FieldUndefined: Field 'OnCreateComic' in type 'Subscription' is undefined @ 'OnCreateComic'"}]}"

// Add a string to store a subcription query for new comics
const SubscribeToNewComics = `
    subscription OnCreateComic {
        OnCreateComic {
            id
            title
            description
        }
    }`;

function GetComicsList(props) {
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

                return <>{React.cloneElement(props.children, {comics: data.listComics.items})}</>;
            }}
        </Connect>
    );
}

export default GetComicsList;