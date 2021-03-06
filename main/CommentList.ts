///<reference path="../typings/tsd.d.ts" />

import React = require('react/addons')
import Comment = require('./Comment')

class CommentList extends React.Component<{data: {author: string, text: string}[]}, void> {
    render() {
        var commentNodes = this.props.data.map(comment => {
                 return React.jsx(`
                        <Comment author={comment.author}>
                                  {comment.text}
                        </Comment>
                `)
        })
        return React.jsx(`
                <div className="commnetList">
                         {commentNodes}
                </div>
        `)
    }
}

export = CommentList;
