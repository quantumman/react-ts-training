///<reference path="../typings/tsd.d.ts" />

import React = require('react/addons')

class CommentForm extends React.Component<{}, void> {
    render(): React.ReactElement<{}> {
        return React.jsx(`
                <form className="commentForm">
                        <input type="text" placeholder="Your name" />
                        <input type="text" placeholder="Say something..." />
                        <input type="submit" value="Post" />
                </form>
        `);
    }
}

export = CommentForm;
