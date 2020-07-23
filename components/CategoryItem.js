import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Platform, TouchableNativeFeedback } from 'react-native';


const CategoryItem = (props) => {

    let TouchableComponent = TouchableNativeFeedback

    if (Platform === "android" && Platform.Version >= 21) {
        TouchableComponent = TouchableOpacity
    }

    return (
        <View style={Styles.CategoryItem}>
            <TouchableComponent style={Styles.touchable} onPress={props.onSelect}>
                <View style={{ ...Styles.categoryCard, ...{ backgroundColor: props.color } }}>
                    <Text style={Styles.title} numberOfLines={2}>
                        {props.title}
                    </Text>
                </View >
            </TouchableComponent>
        </View>
    );
}

const Styles = StyleSheet.create({
    CategoryItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 15,
        overflow: Platform === "android" && Platform.Version >= 21 ? 'hidden' : 'visible',

        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },

    touchable: {
        flex: 1,
    },

    categoryCard: {
        flex: 1,
        borderRadius: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 15,
    },

    title: {
        fontFamily: 'openSansBold',
        fontSize: 18,
        textAlign: 'right',
    }
});

export default CategoryItem;
