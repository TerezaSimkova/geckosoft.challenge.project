import React from 'react';
import Container from '@mui/material/Container';
import WrapperComponent from './components/WrapperComponent';

import '../src/App.scss';

const App = () => {
    return (
        <Container id="root" >
            <WrapperComponent />
        </Container>
    );
}

export default App;