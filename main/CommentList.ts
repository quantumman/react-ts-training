///<reference path="../typings/tsd.d.ts" />

import React = require('react/addons')

class CommentList extends React.Component<{}, {}> {
    render() {
        return React.jsx(`
                <div className="commnetList">
                        Hello, world! I am a CommentList.
                </div>
        `)
    }
}

export = CommentList;
