import React from 'react';

class TheDate extends React.Component {
    constructor(props){
        super(props)
        this.state={ datetime: new Date() };
        console.log('constructor')
    }
    componentDidMount(){
        console.log('componentDidMount')
        this.interval=setInterval(()=>{
            console.log('setInterval')
            this.setState({
                datetime: new Date()
            })
        }, 10000)
    }
    componentWillMount(){
        clearInterval(this.interval)
    }
    render (){
        console.log('render')
        return <div>{this.state.datetime.toLocaleString()}</div> 
    }
}

export default TheDate 