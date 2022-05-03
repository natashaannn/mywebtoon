//React imports
import React, { useState } from 'react';

//import for uuid
import {v4 as uuid} from 'uuid';

//MUI imports
import { 
    Button
} from '@mui/material';

// Import of Storage from Amplify
import { Storage } from 'aws-amplify';

function UploadImage(props) {
    const { comic, episodeid } = props;

    const [uploading, setUploading] = useState(false);

    async function onChange(e) {
        const file = e.target.files[0];
        const fileName = uuid();
        setUploading(true);
        const result = await Storage.put(
            fileName,
            file,
            {
                customPrefix: { public: 'uploads/' },
                metadata: { comicid: comic.id, episodeid: episodeid }
            }
        );
        console.log('Uploaded file: ', result);
        setUploading(false);
    }

    return (
            <Button 
            variant="contained"
            onClick={() => document.getElementById('add-image-file-input').click()}
            disabled={ uploading }
            >
                <input
                id='add-image-file-input'
                type="file" 
                accept="image/*"
                multiple
                style={{ display: 'none' }}
                onChange={ onChange() }
                />
                { uploading ? 'Uploading...' : 'Add Image'}
            </Button>
    );
}

export default UploadImage;
