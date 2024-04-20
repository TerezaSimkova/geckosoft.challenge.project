import React from 'react';
import Container from '@mui/material/Container';
import ImagesComponent from './components/ImagesComponent';

import '../src/App.scss';

const App = () => {
    return (
        <Container id="root" >
            <div>Images</div>
            <ImagesComponent/>
        </Container>
    );
}

export default App;