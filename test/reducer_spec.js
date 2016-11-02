import {expect} from 'chai';
import reducer from '../src/reducer';
import {setState} from '../src/action_creators';

describe('reducer', () => {

    it('handles SET_STATE', () => {
        const initialState = {};
        const action = setState({
            list: ['freecodecamp', 'medrybw']
        });

        const nextState = reducer(initialState, action);

        expect(nextState).to.deep.equal({
            list: ['freecodecamp', 'medrybw']
        });
    });

    it('handles SET_STATE without initial state', () => {
        const action = setState({
            list: ['freecodecamp', 'medrybw']
        });

        const nextState = reducer(undefined, action);

        expect(nextState).to.deep.equal({
            list: ['freecodecamp', 'medrybw']
        });
    });

});