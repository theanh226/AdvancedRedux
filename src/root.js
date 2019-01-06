import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
    /* eslint-disable no-underscore-dangle */
    const store = createStore(
        reducers,
        initialState
    );
    /* eslint-enable */

    return <Provider store={store}>{children}</Provider>;
};