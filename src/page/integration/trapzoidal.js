import React, {Component} from 'react';
import {Card, Input, Button} from 'antd';
import 'antd/dist/antd.css';
import {compile , range} from 'mathjs'
import axios from 'axios';
var Algebrite = require('algebrite')

const InputStyle = {
    color: "black", 
    fontWeight: "bold", 
    fontSize: "24px"

};
var I, exact, error;
class Trapezoidal extends Component {
    constructor() {
        super();
        this.state = {
            fx: "",
            a: 0,
            b: 0,
            showOutputCard: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    trapezoidal(a, b) {
        I = ((b-a)/2) * (this.func(a) + this.func(b))
        exact = this.exactIntegrate(a, b)
        error = Math.abs((I-exact) / I) * 100
        this.setState({
            showOutputCard: true
        })
    }
    exactIntegrate(a, b) {
        var expr = compile(Algebrite.integral(Algebrite.eval(this.state.fx)).toString())
        return expr.eval({x:b}) - expr.eval({x:a})

    }

    func(X) {
        var expr = compile(this.state.fx);
        let scope = {x:parseFloat(X)};
        return expr.eval(scope);        
    }

    data = async() =>{
        var response = await axios.get('http://localhost:3001/api/users/showtrapezoidalmodel').then(res => {return res.data});
            this.setState({
                fx:response['data'][0]['fx'],
                a:response['data'][0]['a'],
                b:response['data'][0]['b']
            })
            this.trapezoidal(this.state.a,this.state.b);
    }

    render() {
        return(
            <div style={{padding: "30px" }}>
                <h2 style={{color: "black", fontWeight: "bold"}}>Trapezoidal</h2>
                <div style={{float:"left"}}>
                    <Card
                    bordered={true}
                    style={{ width: 280, height: 400, background: "#3F3931", color: "#FFFFFFFF" }}
                    onChange={this.handleChange}
                    id="inputCard"
                    >
                        <h2 style={{color:'white'}}>f(x)</h2><Input size="large" name="fx" style={InputStyle}></Input>
                        <h2 style={{color:'white'}}>a</h2><Input size="large" name="a" style={InputStyle}></Input>
                        <h2 style={{color:'white'}}>b</h2><Input size="large" name="b" style={InputStyle}></Input><br/><br/>
                        <Button id="submit_button" onClick= {
                                ()=>this.trapezoidal(parseInt(this.state.a), parseInt(this.state.b), parseInt(this.state.n))
                            }  
                        style={{background: "#4caf50", color: "white", fontSize: "20px"}}>Submit</Button>

                        <Button id="submit_button" onClick= {
                                ()=>this.data()
                            }  
                        style={{background: "#4caf50", color: "white", fontSize: "20px", marginLeft : "20px"}}>Data</Button>                       
                    </Card>  

                    {this.state.showOutputCard && 
                        <Card
                        title={"Output"}
                        bordered={true}
                        style={{width: "100%", background: "#1488C5", color: "#FFFFFFFF", float:"left"}}
                        id="outputCard"
                        >
                            <p style={{fontSize: "24px", fontWeight: "bold"}}>
                                I = {I}<br/>
                                Exact = {exact}<br/>
                                Error = {error}%
                            </p>
                        </Card>
                    }              
                </div>                
            </div>
        );
    }
}
export default Trapezoidal;