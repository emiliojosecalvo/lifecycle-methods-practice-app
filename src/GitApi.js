import React, { Component } from 'react';
import axios from 'axios';
import './GitApi.css'

class GitApi extends Component {
    constructor(props) {
        super(props);

        this.state = { avatar: '', name: '', bio: '', url: '' }
    }
    async componentDidMount() {
        const URL = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(URL);
        this.setState({ avatar: response.data.avatar_url, name: response.data.name, bio: response.data.bio, url: response.data.html_url })
    }
    render() {
        return (
            <div className='GitApi'>
                <h1>GitHub Name: {this.state.name}</h1>
                <img alt='profile' src={this.state.avatar}></img>
                <p>{this.state.bio}</p>
                <a target='_blank' rel="noreferrer" href={this.state.url}>{this.state.url}</a>
            </div>
        )
    }
}

export default GitApi;
