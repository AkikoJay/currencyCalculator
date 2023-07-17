import React from "react";
import style from './css/style.module.css'

export default class Header extends React.Component{
    
    render(){
        return<header>
            <h3 className={style.rate}>{this.props.USDname}: 
                <span className={style.rate_number}>{this.props.USDrate}</span>
            </h3>
            <h3 className={style.rate}>{this.props.EURname}: 
                <span className={style.rate_number}>{this.props.EURrate}</span>
            </h3>
            <hr />
        </header>
    }
}