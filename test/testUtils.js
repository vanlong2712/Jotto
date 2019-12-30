import checkPropTypes from 'check-prop-types';
import {createStore} from 'redux';
import rootReducer from '../src/reducers';

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

/**
 *
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.PropTypes,
        conformingProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined();
};
