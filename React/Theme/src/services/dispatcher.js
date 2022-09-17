import { store } from '../stores';

export const dispatch = (reducerValue) => {
    store.dispatch(reducerValue);
};
