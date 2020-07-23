import React from 'react';
import {Text, StyleSheet} from 'react-native';

const DefaultText = (props) => {
	return (
		<Text style={{...Styles.text,...props.style}}>{props.children}</Text>
	);
};

const Styles = StyleSheet.create({
	text: {
		fontFamily : 'openSans',
	},
});

export default DefaultText;