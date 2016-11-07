import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import {Twitch} from '../../src/components/Twitch';
import Entry from '../../src/components/Entry';
import {expect} from 'chai';

describe('Twitch', () => {
    it('renders the header for twitch users', () => {
        const component = renderIntoDocument(
            <Twitch list={["freecodecamp", "medrybw"]} />
        );

        const headers = scryRenderedDOMComponentsWithClass(component, 'users');

        expect(headers.length).to.equal(1);
        expect(headers[0].textContent).to.equal('Users:');
    });
});
