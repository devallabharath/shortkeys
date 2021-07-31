import React from 'react';
import {
	StyleSheet,
	Image,View,
	Text,Pressable,
} from 'react-native';

export default function card(props) {
	const {img, name, press} = props
	return (
		<Pressable onPress={press}>
			<View style={styles.container}>
				<Image style={styles.img} source={img}/>
				<Text style={styles.name}>{name}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#353535',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 20,
		height: 140,
		width: 175,
		borderRadius: 10,
	},
	img: {
		margin: 30,
	},
	name: {
		fontSize: 20,
		fontWeight: '400',
		color: '#fff',
		backgroundColor: '#454545',
		width: '100%',
		height: '25%',
		textAlign: 'center',
		paddingVertical: 6,
	}
})
