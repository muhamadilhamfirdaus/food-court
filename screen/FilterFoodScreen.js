import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
const FilterFoodCategoryScreen = (props) => {
    return (
        <View style={Styles.screen}>
            <Text style={Styles.title}>Filter :</Text>
            <View style={Styles.filterContainer}>
              <DefaultText> Glutten Free </DefaultText>
              <Switch/>
            </View>
        </View>
    );
}

FilterFoodCategoryScreen.navigationOptions = (props) => {
  return{
    title: 'Filter',
    headerLeft: () => (
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
      alignItems: 'center'
    },

    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%'
    },

    title: {
      fontFamily: 'openSansBold',
      fontSize: 22,
      margin: 20,
      textAlign: 'center',
    },
});

export default FilterFoodCategoryScreen;