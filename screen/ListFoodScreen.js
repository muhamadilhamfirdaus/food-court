import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../assets/dummy-data';

import FoodList from '../components/FoodList';
import DefaultText from '../components/DefaultText';

const ListFoodScreen = (props) => {
    //get data
    const categoryID = props.navigation.getParam('categoryID');
    const availableFoods = useSelector(state => state.recipe.filteredFood);

    //start logic here
    const getFoods = availableFoods.filter(data => data.categoryId.indexOf(categoryID) >= 0);

    if (getFoods.length === 0 || !getFoods) {
        return (
          <View style={Styles.content}>
            <DefaultText>No food found, maybe check your filters ?</DefaultText>
          </View>
        );
      }

    return (
        <FoodList data={getFoods} navigation={props.navigation} />
    );
}

ListFoodScreen.navigationOptions = (props) => {
    const categoryID = props.navigation.getParam('categoryID');
    const getCategory = CATEGORIES.find(data => data.id === categoryID);

    return {
        title: getCategory.title,
    }
}

const Styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ListFoodScreen;