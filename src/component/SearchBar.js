import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function SearchBar({ term, onTermChange, onTermSubmitting }) {
	return (
		<View style={styles.backgroundBar}>
			<EvilIcons name='search' color='black' style={styles.styleIcon} />
			<TextInput
				placeholder='Search'
				style={styles.inputText}
				value={term}
				onChangeText={(value) => onTermChange(value)}
				autoCapitalize='none'
				autoCorrect={false}
				onEndEditing={onTermSubmitting}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	backgroundBar: {
		height: 53,
		borderRadius: 5,
		margin: 15,
		marginLeft: 0,
		backgroundColor: '#DDDDDD',
		flexDirection: 'row',
		marginBottom: 7,
	},
	inputText: {
		marginLeft: 8,
		fontSize: 20,
		flex: 1,
	},
	styleIcon: {
		fontSize: 40,
		marginLeft: 10,
		alignSelf: 'center',
	},
});
