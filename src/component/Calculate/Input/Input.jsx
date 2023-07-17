import React from "react";
import style from '../css/style.module.css'

export default class Input extends React.Component{
    componentDidMount(){
        if(this.props.autoFocus){
            this.nameInput.focus();
        }
    }
    constructor(){
        super();
        this.changeCurency = this.changeCurency.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    changeCurency(event){
        this.props.changeSelector(event.target.value)
    }
    changeValue(event){
        this.props.changeValue(event.target.value)
    }

    render(){
        return<div>
        <select className={style.currency_selector} value={this.props.selectValue}
            onChange={this.changeCurency}>
            <option value='EUR'>EUR</option>
            <option value='USD'>USD</option>
            <option value='UAH'>UAH</option>
        </select>
        <input type="text" className={style.currency_input} 
        value={this.props.value} 
        onChange={this.changeValue} ref={(input) => {this.nameInput = input}}/>
        </div>
    }
}