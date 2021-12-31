import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ResultDetail({ result }) {
	return (
		<View>
			<Image source={{ uri: result.image_url }} style={styles.image} />
			<Text style={styles.firstTitle}>{result.name}</Text>
			<Text style={styles.secondeTitle}>{`${result.rating}, Stars ${result.review_count} Review`}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 280,
		height: 150,
		borderRadius: 7,
		marginHorizontal: 5,
		marginBottom: 5,
	},
	firstTitle: {
		fontWeight: 'bold',
	},
	secondeTitle: {
		fontSize: 10,
		color: '#AAAAAA',
	},
});
