import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton'

import './Kalkulator.css'

class Kalkulator extends Component {
    constructor() {
        super();
        this.state = {
            hasil: 0,
            operator: ''
        }
        this.handleOperator = this.handleOperator.bind(this)
        this.handleNumber = this.handleNumber.bind(this)
        this.clear = this.clear.bind(this)
    }
    clear (){
        this.setState({
            hasil: 0,
            operator: ''
        })
    }

    handleNumber(number) {
        const operator = this.state.operator
        let hasil    = this.state.hasil
        if (operator) {
            hasil = operator(hasil, number)
            this.setState({
                hasil: hasil,
                operator: ''
            })
        } else {
            this.setState({hasil: number})
        }
    }
    handleOperator(operator) {
        let parsedOperator
        switch (operator) {
            case '+' : 
                parsedOperator = (a,b) => a + b
                break
            case '-' :
                parsedOperator = (a,b) => a - b
                break;
            case '*' :
                parsedOperator = (a,b) => a * b
                break;
            case '/' :
                parsedOperator = (a,b) => a / b
                break;
            default:
                console.log('error parsing operator')
        }
        this.setState({ operator: parsedOperator })
    }

    render() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        let operators = ['+', '-', '*', '/']
        return (
            <div className="Kalkulator">
                <div className="Kalkulator-NumberPlaceholder">
                    {numbers.map(
                        (number) => <FlatButton key={number} label={String(number)} value={number} 
                        onClick={() => this.handleNumber(number)} />
                    )}
                </div>
                <div className="Kalkulator-OperatorPlaceholder">
                    {operators.map(
                        (operator) => <FlatButton key={operator} label={operator} value={operator} 
                        onClick={() => this.handleOperator(operator)} />
                    )}
                </div>
                <FlatButton key={'clear'} label={'clear'}
                onClick={this.clear} />
                <h3>{this.state.hasil}</h3>
            </div>
        )
    }
}

export default Kalkulator