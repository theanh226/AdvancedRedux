import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => {
    return (
        <div className="container">
            <div className="part-component">
                <CommentBox></CommentBox>
                <CommentList></CommentList>
            </div>
        </div>
    );

};