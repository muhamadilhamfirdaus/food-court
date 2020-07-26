import React from 'react';
import {FlatList, StyleSheet,View} from 'react-native';
import { useSelector } from 'react-redux';
import FoodItem from '../components/FoodItem';

const FoodList = (props) =>{
    const favoriteFoods = useSelector(state => state.recipe.favoriteFood);

	const renderItem = (itemData) => {
        const checkFavorite = favoriteFoods.some(food => food.id === itemData.item.id)
        return (
            <FoodItem 
                title={itemData.item.title} 
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelect={
                    () => {
                        props.navigation.navigate({
                            routeName: 'DetailFood', params: {
                                foodID : itemData.item.id,
                                foodTitle : itemData.item.title,
                                isFavorite : checkFavorite
                            }
                        });
                    }
                }
            />
        );
    }

	return (
		<View style={Styles.container}>
            <FlatList 
            	data={props.data} 
            	style={Styles.list} 
            	keyExtractor={(item, index) => item.id} 
            	renderItem={renderItem} 
            />
        </View>
	);
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding : 10,
    },
    list: {
    	width : '100%'
    }
});

export default FoodList;