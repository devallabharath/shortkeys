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
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginBottom: 20,
		height: 150,
		width: 150,
		borderRadius: 17,
	},
	img: {
		margin: 25,
	},
	name: {
		fontSize: 20,
		fontWeight: '400',
		padding: 10,
		color: '#fff',
		borderRadius: 17,
		backgroundColor: '#454545',
		width: '100%',
		textAlign: 'center',
	}
})
