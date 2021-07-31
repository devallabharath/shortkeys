import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default function Shortcut(props) {
	const {text1, text2} = props;
	return(
		<View style={styles.container}>
	      <Text style={styles.text}>{text1}</Text>
	      <Text style={styles.text}>{text2}</Text>
	    </View>
	);
}


const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	    alignItems: 'center',
	    marginVertical: 0,
	    height: 50,
	    width: '100%',
	},
	text: {
		fontSize: 20,
		fontWeight: '500',
	}
});
