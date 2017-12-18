import React from 'react';
import HomeContainer from './Home/containers/HomeContainer';
import ProgramContainer from './Program/containers/ProgramContainer';
import Favorites from './favorites';
import Calls from './calls';
import SideBar from './SideBar/components/SideBar';

import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, DrawerNavigator, DrawerItems, TabNavigator } from 'react-navigation';

export const Home=StackNavigator({
    Home:{
        screen:HomeContainer
    }
},{
    headerMode:'none'
});

export const Program=StackNavigator({
    Program:{
        screen:ProgramContainer
    }
},{
    headerMode:'none'
})

export const Tabs = TabNavigator({
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            title: 'Favorites',
            tabBarIcon: ({focused}) => <Ionicons name="star" label="Calls" selected={focused}/>  
        },
    },
    Calls: {
        screen: Program,
        navigationOptions: {
            title: 'Calls',
            tabBarIcon: ({focused}) => <Ionicons name="phone" label="Calls" selected={focused}/>              
            
        },
    }
}, {
    initialRouteName: 'Calls',
    tabBarPosition: 'bottom'
});

const Drawer=DrawerNavigator({
    Home:{screen:Home},
    Program:{screen:Program}
},{
    initialRouteName:'Home',
    contentOptions: {
        activeTintColor: "#e91e63"
    },
    contentComponent: props => <DrawerItems {...props} />
})


export const Router = StackNavigator({       
    Drawer:{
        screen:Drawer
    },
    Home:{
        screen:Home
    },
    Program:{
        screen:Program
    }
},{
    initialRouteName:'Drawer',
    headerMode:'none'
})
