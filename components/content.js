import React from 'react';
import Shortcut from './shortcut'
import {
	StyleSheet,View,Text,
	FlatList,SectionList,
	ScrollView,Dimensions} from 'react-native';


export default function Content(props) {
	const {Data} = props;
	return (
		<View style={styles.container}>
			<FlatList
				data={Data}
				renderItem={({item}) => (
					<View style={styles.items}>
						<Text style={styles.item}>{item.text1}</Text>
						<Text style={styles.item}>{item.text2}</Text>
					</View>
				)}
			/>
		</View>
	);
};


const styles = StyleSheet.create ({
	container: {
		width: '100%',
		height: '100%',
		paddingVertical: 15,
		backgroundColor: '#252525',
	},
	items: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	item: {
		fontSize: 20,
		color: '#fff',
		fontWeight: '400',
		marginVertical: 9,
	}
});
