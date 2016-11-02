import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

    it('handles SET_STATE', () => {
        const initialState = {};
        const action = {
            type: 'SET_STATE',
            state: {
                list: ['freecodecamp', 'medrybw']
            }
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.deep.equal({
            list: ['freecodecamp', 'medrybw']
        });
    });

    it('handles SET_STATE without initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: {
                list: ['freecodecamp', 'medrybw']
            }
        };
        const nextState = reducer(undefined, action);

        expect(nextState).to.deep.equal({
            list: ['freecodecamp', 'medrybw']
        });
    });

});