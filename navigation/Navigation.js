import React from 'react';
import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoryFoodScreen from '../screen/CategoryFoodScreen';
import DetailFoodScreen from '../screen/DetailFoodScreen';
import FavoriteFoodScreen from '../screen/FavoriteFoodScreen';
import ListFoodScreen from '../screen/ListFoodScreen';
import FilterFoodScreen from '../screen/FilterFoodScreen';

import Color from '../assets/styles/color';

const NavigationConfig ={
    title : 'FoodApp',
    headerTitleStyle: {
      fontFamily: 'openSansBold',
    }, 
    headerBackTitleStyle: {
      fontFamily: 'openSans',
    }, 
    headerTintColor: Platform.OS === "android" ? 'white' : Color.primary,
    headerStyle: {  
      backgroundColor: Platform.OS === "android" ? Color.primary : 'white',
    },
}

const FoodNavigation = createStackNavigator(
    {
        Category: CategoryFoodScreen,
        ListFoods: {
            screen: ListFoodScreen,
        },
        DetailFood: DetailFoodScreen,
    },
    {
        mode: "card",
        defaultNavigationOptions: NavigationConfig,
    }
);

const FavoriteNavigation = createStackNavigator(
    {
        Favorites : {
            screen: FavoriteFoodScreen,
            navigationOptions : {
                headerStyle: {  
                    backgroundColor: Platform.OS === "android" ? Color.accent : 'white',
                },
            }
        },
        DetailFood: {
            screen: DetailFoodScreen,
            navigationOptions : {
                headerStyle: {  
                    backgroundColor: Platform.OS === "android" ? Color.accent : 'white',
                },
            }
        }
    },
    {
        mode: "card",
        defaultNavigationOptions: NavigationConfig,
    }
);

const FilterNavigation = createStackNavigator({
    Filter : FilterFoodScreen
    },{
        defaultNavigationOptions: NavigationConfig,
    }
);

const tabConfig = {
    Main : {
            screen : FoodNavigation,
            navigationOptions : {
                tabBarIcon : (tabInfo) => {
                    return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
                },
                tabBarColor : Color.primary,
                tabBarLabel : Platform.OS === "android" ? <Text style={{fontFamily : 'openSansBold'}}>Foods</Text> : "Foods"
            }
        },
        Favorite : {
            screen : FavoriteNavigation,
            navigationOptions : {
                tabBarIcon : (tabInfo) => {
                    return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
                },
                tabBarColor : Color.accent,
                tabBarLabel : Platform.OS === "android" ? <Text style={{fontFamily : 'openSansBold'}}>Foods</Text> : "Foods"
            }
        }
}

const TabNavigation = 
    Platform.OS === "android" ? 
        createMaterialBottomTabNavigator(tabConfig,{
            activeTintColor : 'white',
            shifting : true,
            /*
            if shifting false 
            barStyle : {
                backgroundColor : Color.primary
            }
            */
        })
    : 
        createBottomTabNavigator(tabConfig,{
            tabBarOptions : {
                activeTintColor : Color.accent,   
                labelStyle: {
			      fontFamily: 'openSansBold',
			    },  
            }
        })

const MainNavigation = createDrawerNavigator(
    {
        Favorite :  {
            screen : TabNavigation,
            navigationOptions : {
                drawerLabel : 'Favorite',
            }
        },
        Filter : FilterNavigation
    },
    {
        contentOptions : {
            activeTintColor : Color.accent,
        }
    }
);

export default createAppContainer(MainNavigation);