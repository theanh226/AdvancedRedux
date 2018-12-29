import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => {
    return (
        <div class="container">
            <div class="part-component">
                <CommentBox></CommentBox>
                <CommentList></CommentList>
            </div>
        </div>
    );

};