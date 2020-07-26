import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

import { toogleFavorite } from '../store/action/action';

const ListItem = (props) => {
  return (
    <View style={Styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const DetailFoodScreen = (props) => {
  const foodID = props.navigation.getParam('foodID');
  const availableFoods = useSelector(state => state.recipe.foods);
  const getFood = availableFoods.find(food => food.id === foodID);
  const checkFavorite = useSelector(state => state.recipe.favoriteFood.some(food => food.id === foodID));
  const dispatch = useDispatch();

  const favoriteHandler = useCallback(() => {
    dispatch(toogleFavorite(foodID));
  }, [dispatch, foodID]);

  useEffect(() => {
    props.navigation.setParams({ actionFavorite: favoriteHandler })
  }, [favoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFavorite: checkFavorite })
  }, [checkFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: getFood.imageUrl }} style={Styles.image} />
      <View style={Styles.detail}>
        <DefaultText>{getFood.duration}m</DefaultText>
        <DefaultText>{getFood.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{getFood.affordability.toUpperCase()}</DefaultText>
      </View>

      <Text style={Styles.title}>Ingredients</Text>
      {getFood.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}

      <Text style={Styles.title}>Steps</Text>
      {getFood.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
}

DetailFoodScreen.navigationOptions = (props) => {
  const action = props.navigation.getParam('actionFavorite');
  const title = props.navigation.getParam('foodTitle');
  const isFavorite = props.navigation.getParam('isFavorite');

  return {
    title: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='favorite'
          iconName={isFavorite ? 'ios-star':'ios-star-outline'}
          onPress={action}
        />
      </HeaderButtons>
    ),
  }
}

const Styles = StyleSheet.create({
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  image: {
    width: '100%',
    height: 200
  },

  title: {
    fontFamily: 'openSansBold',
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 10,
  },

  listItem: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
  }
});

export default DetailFoodScreen;
