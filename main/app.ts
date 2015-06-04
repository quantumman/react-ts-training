///<reference path="../typings/tsd.d.ts" />
///<reference path="../typings/alloy-editor.d.ts" />

import React = require('react/addons')

class CommentBox extends React.Component<{}, {}> {
    render() {
        return React.jsx(`
                <div className="commentBox">
                         Hello, world! I am a CommentBox.
                </div>
        `)
    }
}
React.render(
    React.createElement(CommentBox),
    document.getElementById('content')
)
