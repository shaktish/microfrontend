import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mount function 
const mount = (el) => ReactDOM.render(<App />, el);

// standalone
if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#root');
    if(el) {
        mount(el);
    }
}

// container 
export {mount}
