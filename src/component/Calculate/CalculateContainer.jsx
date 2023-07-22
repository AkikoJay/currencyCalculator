import React from "react";
import Input from "./Input/Input";
import Preloader from "../common/Preloader/Preloader";
import style from './css/style.module.css'
import { connect } from "react-redux";
import { setFirstSelector, changeValue, setSecondSelector, currentSelector } from './store/input-action';

class CalculateContainer extends React.Component{
    constructor(props) {
        super(props);
        this.convert = this.convert.bind(this);
        this.activeFirst = this.activeFirst.bind(this);
        this.activeSecond = this.activeSecond.bind(this);
    }

    convert(value){
        let activeRate;
        let nonactiveRate;
        if(this.props.current === '1'){
            activeRate = this.props[this.props.firstCC]
            nonactiveRate = this.props[this.props.secondCC]
        } else {
            activeRate = this.props[this.props.secondCC]
            nonactiveRate = this.props[this.props.firstCC]
        }
        if(isNaN(value))return ' ';
        const num = Math.round((value * (activeRate/nonactiveRate))*1000)/1000;
        return num;
    }
    
    activeFirst(e){
        this.props.changeValue(e);
        this.props.currentSelector('1');
    }
    activeSecond(e){
        this.props.changeValue(e);
        this.props.currentSelector('2')
    }


    render(){
        const value = this.props.value;
        const first = this.props.current === '2'? this.convert(value): value;
        const second = this.props.current === '1'? this.convert(value): value;
        return<div className={style.preloader}>
            {this.props.isFetching ? <Preloader />
                :
                <>
                    <Input 
                    value={first} 
                    autoFocus ={true}
                    selectValue={this.props.firstCC} 
                    changeSelector ={this.props.setFirstSelector} 
                    changeValue={this.activeFirst}
                    />
                    <Input 
                    value={second} 
                    autoFocus ={false} 
                    selectValue={this.props.secondCC} 
                    changeSelector={this.props.setSecondSelector} 
                    changeValue={this.activeSecond}
                    />
                </>
            }
        </div>
    }
}

const mapStateToProps = state =>({
    value: state.input.value,
    firstCC: state.input.firstCC,
    secondCC: state.input.secondCC,
    current: state.input.current,

    USD: state.header.USD.rate,
    EUR: state.header.EUR.rate,
    UAH: state.header.UAH.rate,
    isFetching: state.header.isFetching
})

const mapDispatchToProps = {
    setFirstSelector,
    changeValue,
    setSecondSelector,
    currentSelector
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculateContainer)