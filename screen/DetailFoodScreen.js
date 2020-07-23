import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { CATEGORIES, FOODS } from '../assets/dummy-data';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = (props) => {
  return (
    <View style={Styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const DetailFoodScreen = (props) => {
    const foodID = props.navigation.getParam('foodID');
    const getFood = FOODS.find(data => data.id === foodID);

    return (
        <ScrollView>
          <Image source={{uri : getFood.imageUrl}} style={Styles.image}/>
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
    const foodID = props.navigation.getParam('foodID');
    const getFood = FOODS.find(data => data.id === foodID);

    return {
        title: getFood.title,
        headerRight : () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                  title='favorite'
                  iconName='ios-star'
                  onPress={
                      () => {console.log('add as fav!')}
                  }
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

    image : {
      width : '100%',
      height : 200
    },

    title : {
      fontFamily: 'openSansBold',
      fontSize: 22,
      textAlign: 'center',
      marginVertical:10,
    },

    listItem : {
      padding: 10,
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#ccc',
      borderWidth: 1,
    }
});

export default DetailFoodScreen;
