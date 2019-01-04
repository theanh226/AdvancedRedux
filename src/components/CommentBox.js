import React, { Component } from 'react'
class CommentBox extends Component {

    state = { comment: '' };
    handleChange = (event) => {
        this.setState({ comment: event.target.value });
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        // TODO - call an action creator
        // and save the comment
        this.setState({ comment: '' });
    }
    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <h4>Add a comment </h4>
                <textarea onChange={this.handleChange} value={this.state.comment}>

                </textarea>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}


export default CommentBox;
