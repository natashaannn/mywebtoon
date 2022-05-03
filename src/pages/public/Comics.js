import React from 'react';

//Import local components
import FeaturedComicsList from '../../components/FeaturedComicsList';

//Import api
import GetComicsList from '../../api/GetComicsList';

function Comics(props) {
    return (
        <GetComicsList>
            <FeaturedComicsList subdirectory='/comics/'/>
        </GetComicsList>
    )
}

export default Comics;