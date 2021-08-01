import React from 'react';
import {
	StyleSheet,
	Image,View,
	Text,Pressable,
} from 'react-native';

export default function card(props) {
	const {img, name, press} = props
	return (
		<View style={styles.card}>
		<Pressable onPress={press}>
			<View style={styles.imgback}>
				<Image source={img}/>
			</View>
			<View style={styles.textback}>
				<Text style={styles.text}>{name}</Text>
			</View>
		</Pressable>
		</View>
	);
}

const styles = StyleSheet.create ({
	card: {
		display: 'flex',
		flexDirection: 'column',
		width: 175,
		marginBottom: 20,
	},
	imgback: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#353535',
		alignItems: 'center',
		paddingVertical: 30,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	textback: {
		backgroundColor: '#454545',
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	text: {
		fontSize: 20,
		fontWeight: '400',
		color: '#fff',
		textAlign: 'center',
		paddingVertical: 6,
	}
})
