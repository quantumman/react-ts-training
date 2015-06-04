///<reference path="../typings/tsd.d.ts" />
///<reference path="./CommentList.ts" />
///<reference path="./CommentForm.ts" />

import React = require('react/addons')
import CommentList = require('./CommentList')
import CommentForm = require('./CommentForm')

class CommentBox extends React.Component<{}, {}> {
    render() {
        return React.jsx(`
                <div className="commentBox">
                        <h1>Comments</h1>
                        <CommentList />
                        <CommentForm />
                </div>
        `)
    }
}
React.render(
    React.createElement(CommentBox),
    document.getElementById('content')
)
