import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// mount function 
const mount = (el) => {
    ReactDom.render(
       <App />,
        el
    )   
}

// if we are in dev and in isolation call mount 

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    console.log(devRoot,"devRoot")
    if(devRoot) {
        mount(devRoot);
    }
} 

// when we are running through container, export mount, container can decide where to use mount function
export {mount};