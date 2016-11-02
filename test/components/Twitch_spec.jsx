import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import {Twitch} from '../../src/components/Twitch';
import {expect} from 'chai';

describe('Twitch', () => {
    it('renders the list of twitch users', () => {
        const component = renderIntoDocument(
            <Twitch list={["freecodecamp", "medrybw"]} />
        );
        const headers = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(headers.length).to.equal(2);
        expect(headers[0].textContent).to.equal('freecodecamp');
        expect(headers[1].textContent).to.equal('medrybw');
    });
});