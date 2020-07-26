import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import Color from '../assets/styles/color';

import { setFilter } from '../store/action/action';

const FilterComponent = (props) => {
    return (
        <View style={Styles.filterContainer}>
            <DefaultText> {props.label} </DefaultText>
            <Switch trackColor={{ true: Color.accent }} thumbColor={Color.primary} value={props.value} onValueChange={props.onChange} />
        </View>
    );
}

const FilterFoodCategoryScreen = (props) => {
    const { navigation } = props;

    const [isGluttenFree, setGluttenFree] = useState(false);
    const [isLactoseFree, setLactose] = useState(false);
    const [isVegan, setVegan] = useState(false);
    const [isVegetarian, setVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const filters = {
            gluttenFree: isGluttenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
        };
        dispatch(setFilter(filters));

    }, [isGluttenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

    return (
        <View style={Styles.screen}>
            <Text style={Styles.title}>Available Filters :</Text>
            <FilterComponent label="Glutten-free" value={isGluttenFree} onChange={newValue => setGluttenFree(newValue)} />
            <FilterComponent label="Lactosee-free" value={isLactoseFree} onChange={newValue => setLactose(newValue)} />
            <FilterComponent label="Vegan" value={isVegan} onChange={newValue => setVegan(newValue)} />
            <FilterComponent label="Vegetarian" value={isVegetarian} onChange={newValue => setVegetarian(newValue)} />
        </View>
    );
}

FilterFoodCategoryScreen.navigationOptions = (navData) => {
    return {
        title: 'Filter',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Menu'
                    iconName='ios-menu'
                    onPress={() => navData.navigation.toggleDrawer()}
                />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Save'
                    iconName='ios-save'
                    onPress={navData.navigation.getParam('save')}
                />
            </HeaderButtons>
        ),
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
        width: '80%',
        marginVertical: 15,
    },

    title: {
        fontFamily: 'openSansBold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
    },
});

export default FilterFoodCategoryScreen;