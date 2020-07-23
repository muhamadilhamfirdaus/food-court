import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../assets/dummy-data';
import CategoryItem from '../components/CategoryItem';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const CategoryFoodScreen = (props) => {

    const renderCategoryItem = (itemData) => {
        return (
            <CategoryItem title={itemData.item.title}
                onSelect={
                    () => {
                        props.navigation.navigate({
                            routeName: 'ListFoods', params: {
                                categoryID: itemData.item.id
                            }
                        });
                    }
                }
                color={itemData.item.color} />
        );
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            numColumns={2} />
    );
}

CategoryFoodScreen.navigationOptions = (props) => {
  return{
    title: 'Food Category',
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

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CategoryFoodScreen;