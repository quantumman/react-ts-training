///<reference path="../typings/tsd.d.ts" />
///<reference path="./CommentList.ts" />
///<reference path="./CommentForm.ts" />

import React = require('react/addons')
import CommentList = require('./CommentList')
import CommentForm = require('./CommentForm')

var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
]

class CommentBox extends React.Component<{data: {author: string, text: string}[]}, {}> {
    render() {
        return React.jsx(`
                <div className="commentBox">
                        <h1>Comments</h1>
                        <CommentList data={this.props.data} />
                        <CommentForm />
                </div>
        `)
    }
}
React.render(
    React.createElement(CommentBox, {data: data}),
    document.getElementById('content')
)
