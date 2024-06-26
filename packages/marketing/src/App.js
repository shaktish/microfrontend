import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {StylesProvider} from '@material-ui/core/styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';


const App = () => {
    return (
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing"><Pricing /></Route>
                    <Route path="/"><Landing /></Route>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    )
}

export default App;