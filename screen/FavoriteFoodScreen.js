import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import FoodList from '../components/FoodList';
import DefaultText from '../components/DefaultText';

const FavoriteFoodScreen = (props) => {
  //get data
  const getFavorite = useSelector(state => state.recipe.favoriteFood);
  if (getFavorite.length === 0 || !getFavorite) {
    return (
      <View style={Styles.content}>
        <DefaultText>No favorite found. Start adding some !</DefaultText>
      </View>
    );
  }

  return (
    <FoodList data={getFavorite} navigation={props.navigation} />
  );
}

FavoriteFoodScreen.navigationOptions = (props) => {
  return {
    title: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => props.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  }
}

const Styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default FavoriteFoodScreen;