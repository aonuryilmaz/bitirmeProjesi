import React,{Component} from 'react';
import {View} from 'react-native';
import AppContainer from './AppContainer';
import createStore from './store/createStore';
import firebase from 'firebase';

export default class Root extends Component {
    renderApp(){
        const initialState=window.__INITIAL_STATE__;
        const store=createStore(initialState);
        
        return(
            <AppContainer store={store} />
        ) 
    }
    render() {
              return this.renderApp()
    }
}