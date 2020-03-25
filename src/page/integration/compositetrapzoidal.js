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
class CompositeTrapezoidal extends Component {
    constructor() {
        super();
        this.state = {
            fx: "",
            a: 0,
            b: 0,
            n: 0,
            showOutputCard: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    compositetrapezoidal(a, b, n) {
        var h = (b-a)/n
        I = (h / 2) * (this.func(a) + this.func(b) + 2*this.summationFunction(n, h))
        exact = this.exactIntegrate(a, b)
        error = Math.abs((I - exact) / I) * 100
        this.setState({
            showOutputCard: true
        })
    }
    exactIntegrate(a, b) {
        var expr = compile(Algebrite.integral(Algebrite.eval(this.state.fx)).toString())
        return expr.eval({x:b}) - expr.eval({x:a})

    }
    summationFunction(n, h) {
        var sum = 0
        var counter = h
        for (var i=1 ; i<n ; i++) {
            sum += this.func(counter)
            counter += h
        }
        return sum
    }
    func(X) {
        var expr = compile(this.state.fx);
        let scope = {x:parseFloat(X)};
        return expr.eval(scope);        
    }

    data = async() =>{
        var response = await axios.get('http://localhost:3001/api/users/showcompositetrapezoidalmodel').then(res => {return res.data});
            this.setState({
                fx:response['data'][0]['fx'],
                a:response['data'][0]['a'],
                b:response['data'][0]['b'],
                n:response['data'][0]['n']
            })
            this.compositetrapezoidal(this.state.a,this.state.b,this.state.n);
    }

    render() {
        return(
            <div style={{padding: "30px" }}>
                <h2 style={{color: "black", fontWeight: "bold"}}>Composite Trapezoidal</h2>
                <div style={{float:"left"}}>
                    <Card
                    bordered={true}
                    style={{ width: 280, height: 480, background: "#3F3931", color: "#FFFFFFFF" }}
                    onChange={this.handleChange}
                    id="inputCard"
                    >
                        <h2 style={{color:'white'}}>f(x)</h2><Input size="large" name="fx" style={InputStyle}></Input>
                        <h2 style={{color:'white'}}>a</h2><Input size="large" name="a" style={InputStyle}></Input>
                        <h2 style={{color:'white'}}>b</h2><Input size="large" name="b" style={InputStyle}></Input>
                        <h2 style={{color:'white'}}>n</h2><Input size="large" name="n" style={InputStyle}></Input><br/><br/>
                        <Button id="submit_button" onClick= {
                                ()=>this.compositetrapezoidal(parseInt(this.state.a), parseInt(this.state.b), parseInt(this.state.n))
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
export default CompositeTrapezoidal;