import React from 'react';
import { CATEGORIES, FOODS } from '../assets/dummy-data';

import FoodList from '../components/FoodList';

const ListFoodScreen = (props) => {
    const categoryID = props.navigation.getParam('categoryID');
    const getFoods = FOODS.filter(data => data.categoryId.indexOf(categoryID) >= 0);

    return (
        <FoodList data={getFoods} navigation={props.navigation}/>
    );
}

ListFoodScreen.navigationOptions = (props) => {
    const categoryID = props.navigation.getParam('categoryID');
    const getCategory = CATEGORIES.find(data => data.id === categoryID);

    return {
        title: getCategory.title,
    }
}

export default ListFoodScreen;