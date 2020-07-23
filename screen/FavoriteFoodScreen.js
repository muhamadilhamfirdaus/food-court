import React from 'react';
import {FOODS } from '../assets/dummy-data';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import FoodList from '../components/FoodList';

const FavoriteFoodScreen = (props) => {
    const getFoods = FOODS.filter(data => data.id === "m1" || data.id === "m2");

    return (
        <FoodList data={getFoods} navigation={props.navigation}/>
    );
}

FavoriteFoodScreen.navigationOptions = (props) => {
  return{
    title: 'Your Favorites',
    headerLeft: ()=>(
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                  title= 'Menu'
                  iconName= 'ios-menu'
                  onPress={() => props.navigation.toggleDrawer()}
              />
          </HeaderButtons>
    )
  }
}

export default FavoriteFoodScreen;