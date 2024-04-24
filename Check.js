import React from 'react';

class Check extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    dosum(){
        var a=this.state.text1;
        var b=this.state.text2;
        var c=parseInt(a)+parseInt(b);
        alert("sum ans" + c);
    }
    multiple(){
        var a=this.state.text1;
        var b=this.state.text2;
        var c=parseInt(a)*parseInt(b);
        alert("multiple ans" + c);
    }
    render() {
        return (
          <>
          <h1>Sum </h1>
            no1:<input type='text' name="name" onChange={(e)=>this.setState({text1:e.target.value})}/><br></br>
            no2:<input type='text' name="name" onChange={(e)=>this.setState({text2:e.target.value})}/><br></br>
            <input type="submit" value="Submit" onClick={this.dosum.bind(this)}/>
            <input type="submit" value="multiple" onClick={this.multiple.bind(this)}/>
           
            
          </>  
        );
    }
}

export default Check;