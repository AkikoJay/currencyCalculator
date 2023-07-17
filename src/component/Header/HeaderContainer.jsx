import React from "react";
import axios from "axios";
import Header from "./Header";
import { connect } from "react-redux";
import { setUSD, setEUR, setIsFetching } from './store/header-reducer'

class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.setIsFetching(true);
        axios
        .get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then(res=>{
            this.props.setEUR(res.data)
            this.props.setUSD(res.data)
            this.props.setIsFetching(false);
        })
    }

    render(){
        return <Header 
        USDname = {this.props.USD.cc} 
        USDrate = {this.props.USD.rate} 
        EURname = {this.props.EUR.cc} 
        EURrate = {this.props.EUR.rate}/>
    }
}

const mapStateToProps = state =>({
    USD: state.header.USD,
    EUR: state.header.EUR
})
const mapDispatchToProps ={
    setEUR,
    setUSD,
    setIsFetching
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)