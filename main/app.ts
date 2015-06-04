///<reference path="../typings/tsd.d.ts" />

import React = require('react/addons')
import $ = require('jquery')
import CommentList = require('./CommentList')
import CommentForm = require('./CommentForm')

class CommentBox extends React.Component<{url: string}, {data: {author: string, text: string}[]}> {
    constructor(props: {url: string}) {
        super(props)
        this.state = {data: [{author: "foobar", text: "hoge"}]}
    }

    componentDidMount() {
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

    render() {
        return React.jsx(`
                <div className="commentBox">
                        <h1>Comments</h1>
                        <CommentList data={this.state.data} />
                        <CommentForm />
                </div>
        `)
    }
}
React.render(
    React.createElement(CommentBox, {url: 'comments.json'}),
    document.getElementById('content')
)
