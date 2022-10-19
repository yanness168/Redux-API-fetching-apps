import * as React from'react';
import RApp from './components/meme';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = ()=>{
    return(
        <Provider store={store}>  
            <RApp/>
        </Provider>
    )
}

export default App;
