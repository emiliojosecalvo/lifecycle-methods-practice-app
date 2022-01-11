import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuotes.css'

class ZenQuotes extends Component {
    constructor(props) {
        super(props);
        this.state = { quote: '', isLoaded: false }
        console.log('Hi From constructor')
    }
    //runs after the render
    componentDidMount() {
        console.log('Hi From componentDidMount')
        //load data
        axios.get('https://api.github.com/zen').then(response => (
            // console.log(response)
            setTimeout(
                function () {
                    this.setState({ quote: response.data, isLoaded: true });
                }.bind(this),
                3000
            )
        ))
    }

    componentDidUpdate() {
        console.log('Hi From componentDidUpdate')
    }
    render() {
        console.log('Hi From render')
        return (
            <div className='ZenQuotes'>
                {this.state.isLoaded ? (
                    <div>
                        <h1>ZenQuotes says...</h1>
                        <p>{this.state.quote}</p>
                    </div>
                ) : (
                    <div className='container alignment'>
                        <div className='box alignment'></div>
                    </div>
                )}
            </div>
        )
    }
}


export default ZenQuotes;

