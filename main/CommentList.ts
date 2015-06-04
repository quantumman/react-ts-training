///<reference path="../typings/tsd.d.ts" />
///<reference path="./Comment.ts" />

import React = require('react/addons')
import Comment = require('./Comment')

class CommentList extends React.Component<{}, {}> {
    render() {
        return React.jsx(`
                <div className="commnetList">
                        <Comment author="Pete Hunt">This is one comment</Comment>
                        <Comment author="Jordan Walke">This is *author* comment</Comment>
                </div>
        `)
    }
}

export = CommentList;
