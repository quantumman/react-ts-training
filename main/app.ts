///<reference path="../typings/tsd.d.ts" />

import React = require('react/addons')
import $ = require('jquery')
import CommentList = require('./CommentList')
import CommentForm = require('./CommentForm')

class CommentBox extends React.Component<{url: string, pollInterval: number}, {data: {author: string, text: string}[]}> {
    constructor(props: {url: string, pollInterval: number}) {
        super(props)
        this.state = {data: [{author: "foobar", text: "hoge"}]}
    }

    loadCommentsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: data => {
                this.setState({data: data})
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString())
            }
        });
    }

    handleCommentSubmit() {
        // TODO: submit to the server and refresh the list
    }

    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(() => this.loadCommentsFromServer(), this.props.pollInterval);
    }

    render() {
        return React.jsx(`
                <div className="commentBox">
                        <h1>Comments</h1>
                        <CommentList data={this.state.data} />
                        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
                </div>
        `)
    }
}
React.render(
    React.createElement(CommentBox, {url: 'comments.json', pollInterval: 2000}),
    document.getElementById('content')

)
