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
				<View style={styles.subcontainer}>
					<Image
						source={img}
					/>
					<Text style={styles.name}>{name}</Text>
				</View>
				<Text style={styles.arrow}>❯</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create ({
	container: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#fbfbfb',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 20,
		marginVertical: 5,
		paddingHorizontal: 20,
		height: 90,
		borderRadius: 17,
		shadowColor: '#616161',
		shadowRadius: 5,
		shadowOffset: {width:0, height:1},
		shadowOpacity: 0.35,
	},
	subcontainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	name: {
		fontSize: 20,
		fontWeight: '400',
		paddingHorizontal: 50,
	},
	arrow: {
		paddingHorizontal: 12,
		fontSize: 18,
	},
})
