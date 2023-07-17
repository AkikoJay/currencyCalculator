import React from "react";
import CalculateContainer from "./component/Calculate/CalculateContainer";
import HeaderContainer from './component/Header/HeaderContainer'
import style from './css/style.module.css'
import { rootReducer } from './store/reducers'
import { legacy_createStore as createStore} from 'redux'
import { Provider } from "react-redux";

const store = createStore(rootReducer)

class App extends React.Component {
  render(){
    return<Provider store ={store}>
      <div className={style.card}>
        <HeaderContainer />
        <CalculateContainer />
      </div>
    </Provider>
  }
}

export default App;
