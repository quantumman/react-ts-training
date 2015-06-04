///<reference path="../typings/tsd.d.ts" />

import React = require('react/addons')

class CommentForm extends React.Component<{}, void> {
    render(): React.ReactElement<{}> {
        return React.jsx(`
                <div className="commentForm">
                        Hello, world! I am a CommentForm.
                </div>
        `);
    }
}

export = CommentForm;
