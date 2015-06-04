///<reference path="../typings/tsd.d.ts" />

import React = require('react/addons')
import Marked = require('marked')

interface CommentProps extends React.Props<void> {
    author: string;
}

class Comment extends React.Component<CommentProps, void> {
    render() {
        var rawMarkup = Marked(this.props.children.toString(), {sanitize: true})
        return React.jsx(`
                <div className="comment">
                        <h2 className="commentAuthor">
                                {this.props.author}
                        </h2>
                        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
                </div>
        `)
    }
}


export = Comment;
