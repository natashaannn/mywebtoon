import React from 'react';

function ReadComic(props) {
    function importAll(r) {
        let images = [];
        r.keys().map((item, index) => { images.push(require(props.url + item.substring(1))) });
        return images;
        }
        
    const images = importAll(require.context(props.url));
        
    return (
        <div>
        {images.map( (image, index) => {
            return <img alt="Comic" src={image}></img>            
        })}
        </div>  
        );
}

export default ReadComic;
