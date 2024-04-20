import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const errorPage = () => {
    return <p>Ci dispiace ce stato un errore durante il caricamento del sito.</p>
}


var root = document.getElementById('root');
if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    )
} else {
    errorPage();
}
