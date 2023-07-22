import React from "react";
import preloader from '../../../img/Ball-1s-141px.svg'


class Preloader extends React.Component{
    render(){
        return <img src={preloader} alt='preloader'/>
    }
}

export default Preloader;