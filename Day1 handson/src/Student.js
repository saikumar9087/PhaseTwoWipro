import React,{Component} from "react";

class StudentFunction1 extends Component{
    render(){
        const{name, address, score}=this.props;
        return <div>
            <h2>Student info from class comp</h2>
            <p>Name: {name}</p>
            <p>Address: {address}</p>
            <p>Score: {score}</p>
        </div>
    }
}

function StudentFunction2({name,address,score}){

    return(
        <div>

            <h2>Student info from function comp</h2>
            <p>Name: {name}</p>
            <p>Address: {address}</p>
            <p>Score: {score}</p>

        </div>

    );

}

export {StudentFunction1,StudentFunction2};