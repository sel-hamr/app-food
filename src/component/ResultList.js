import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultDetail';

function ResultList({ title, result, navigation }) {
	if (!result.length) return null;
	return (
		<View style={styles.container}>
			<Text style={styles.titleStyle}>{title}</Text>
			{/* <Text>{result.length}</Text> */}

			<FlatList
				data={result}
				horizontal
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('show detail', { id: item.id });
						}}>
						<ResultDetail result={item} />
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 19,
		fontWeight: '700',
		marginBottom: 5,
	},
	container: {
		marginBottom: 7,
	},
});

export default ResultList;
