import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import DefaultText from './DefaultText';
const FoodItem = (props) => {
	return (
		<View style={Styles.general}>
			<TouchableOpacity onPress={props.onSelect}>
				<View>
					<View style={{...Styles.row,...Styles.header}}>
						<ImageBackground source={{uri: props.image}} style={Styles.bgImage}>
							<View style={Styles.titleContainer}>
								<Text numberOfLines={1} style={Styles.title}>{props.title}</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={{...Styles.row,...Styles.detail}}>
						<DefaultText>{props.duration}m</DefaultText>
						<DefaultText>{props.complexity.toUpperCase()}</DefaultText>
						<DefaultText>{props.affordability.toUpperCase()}</DefaultText>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);	
};

const Styles = StyleSheet.create({
	general : {
		height : 200,
		width : '100%',
		backgroundColor: '#F5F5F5',
		marginVertical : 10,
		borderRadius: 15,
		overflow: 'hidden',
	},
	row : {
		flexDirection: 'row',
	},
	header : {
		height : '85%',
	},
	detail :{
		height : '15%',
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	bgImage:{
		height: '100%',
		width: '100%',
		justifyContent : 'center',
	},
	titleContainer : {
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingVertical: 5,
		paddingHorizontal: 12,
	},
	title : {
		fontFamily: 'openSansBold',
		fontSize: 20,
		color: 'white',
		textAlign: 'center',
	},
});

export default FoodItem;