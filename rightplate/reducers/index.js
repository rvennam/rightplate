import {combineReducers} from 'redux';
import badges from './badges';
import visibilityFilter from './visibilityFilter';

const streetCredStore = combineReducers({badges, visibilityFilter});

export default streetCredStore;