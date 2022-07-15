import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';

import { App } from './components';
import reducer from './reducer';

const store = createStore(reducer);

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
