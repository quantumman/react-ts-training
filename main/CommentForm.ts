///<reference path="../typings/tsd.d.ts" />

import React = require('react/addons')

class CommentForm extends React.Component<{onCommentSubmit: any}, void> {
    handleSubmit(event) {
        event.preventDefault()
        var author = React.findDOMNode(this.refs["author"])["value"].trim()
        var text = React.findDOMNode(this.refs["text"])["value"].trim()
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text})
        React.findDOMNode(this.refs["author"])["value"] = '';
        React.findDOMNode(this.refs["text"])["value"] = '';
        return;
    }

    render(): React.ReactElement<{}> {
        return React.jsx(`
                <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                        <input type="text" placeholder="Your name" ref="author" />
                        <input type="text" placeholder="Say something..." ref="text" />
                        <input type="submit" value="Post" />
                </form>
        `);
    }
}

export = CommentForm;
