///<reference path="../typings/tsd.d.ts" />

import React = require('react/addons')

interface CommentProps extends React.Props<void> {
    author: string;
}

class Comment extends React.Component<CommentProps, void> {
    render() {
        return React.jsx(`
                <div className="comment">
                        <h2 className="commentAuthor">
                                {this.props.author}
                        </h2>
                        {this.props.children}
                </div>
        `)
    }
}


export = Comment;
