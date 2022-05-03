//React imports
import React, { useState } from 'react';

//import for uuid
import {v4 as uuid} from 'uuid';

//MUI imports
import { 
    Container,
    FormControl,
    FormHelperText,
    InputLabel,
    Input,
    Typography
} from '@mui/material';

//Local imports
import UploadImage from '../../components/UploadImage';

//api function to get number of episodes
const episodeid = '';

function AdminNewEpisode(props) {
    const { comic } = props;

    return (
        <Container>
            <Typography variant="h2">
                { comic.title }
            </Typography>

            <FormControl>
                <InputLabel htmlFor="my-input">Episode Title</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">Less than 60 characters.</FormHelperText>
            </FormControl>

            <Typography variant="h4">
                Upload File
            </Typography>

            <UploadImage comic={comic} episodeid={episodeid}/>
        </Container>
    );
}

export default AdminNewEpisode;
