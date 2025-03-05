import React,{Component} from 'react';

class Second1 extends Component{
    render(){
        return <div>Second Class Component</div>
    }
}

function Second2() {
  return <div>Second Component</div>;
}

export {Second1,Second2};