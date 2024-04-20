import React from 'react';
import Container from '@mui/material/Container';
import GifsComponent from './components/GifsComponent';

import '../src/App.scss';

const App = () => {
    return (
        <Container id="root" >
            <GifsComponent />
        </Container>
    );
}

export default App;