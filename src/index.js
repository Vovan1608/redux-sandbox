import { legacy_createStore as createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions';
import Counter from './components';

const store = createStore(reducer);

const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);



const update = () => {

};

store.subscribe(update);