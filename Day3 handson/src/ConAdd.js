import React,{Component} from "react";

export default class ConAdd extends Component{

    state={
        num1:"",
        num2:""
    };

    HandleEvent=(e)=>{
        this.setState({[e.target.obj]:e.target.value})
    }

    SubmitAdd=(e)=>{
        e.preventDefault();

        const numm1=parseInt(this.num1.current.value);
        const numm2=parseInt(this.num2.current.value);

        const sum=numm1+numm2;

        console.log(sum);

    }




    render(){
        return(
            <div>
                <form onSubmit={this.SubmitAdd}>

                    <label>Num1:</label>
                    <input type="text" obj="num1" value={this.state.num1} onChange={this.HandleEvent}  />
                    <label>Num2:</label>
                    <input type="text" obj="num2" value={this.state.num2} onChange={this.HandleEvent} />


                </form>

            </div>
        )
    }
}