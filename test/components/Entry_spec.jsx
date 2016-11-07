import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import Entry from '../../src/components/Entry';
import {expect} from 'chai';

describe('Entry', () => {
    it('renders the entry for a twitch user', () => {
        const component = renderIntoDocument(
            <Entry user={{"display_name": "FreeCodeCamp", "bio": "We help you learn to code, then practice by building projects for nonprofits. Learn Full-stack JavaScript, build a portfolio, and get a coding job by joining our open source community at https://freecodecamp.com"}} />
        );

        const headers = scryRenderedDOMComponentsWithTag(component, 'h3');

        expect(headers.length).to.equal(1);
        expect(headers[0].textContent).to.equal('FreeCodeCamp');
    });
});
