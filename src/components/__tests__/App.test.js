import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('show a comment box', () => {
    const div = document.createElement('div');
    ReactDOM.render( < App / > , div);

    // Looks inside the div
    // and checks to see if the CommentBox is in there
    expect(div.innerHTML).toContain('Comment Box 2');
    // expect(div).toHaveAnInstanceOf(CommentBox);
    ReactDOM.unmountComponentAtNode(div);
});