import React from 'react';
import {
    shallow
} from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapper;
beforeEach(() => {
    wrapper = shallow( < App / > );
});

it('show a comment box', () => {

    expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('show a comment List', () => {

    expect(wrapper.find(CommentList).length).toEqual(1);
});