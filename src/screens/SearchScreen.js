import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../component/SearchBar';
import yelp from '../api/yelp';
import useResult from '../hooks/useResult';
import ResultList from '../component/ResultList';

export default function SearchScreen({ navigation }) {
	const [term, setTerm] = useState('');
	const [errorMessage, searchApi, result] = useResult();

	const filterResultByPrice = (price) => {
		return result.filter((item) => item.price === price);
	};

	return (
		<View style={style.container}>
			<SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} onTermSubmitting={() => searchApi(term)} />
			{errorMessage !== null ? <Text>{errorMessage}</Text> : null}
			{/* <Text>we have found {result.length} results</Text> */}
			<ScrollView>
				<ResultList title='Cost Effective' result={filterResultByPrice('$')} navigation={navigation} />
				<ResultList title='Bit Pricier' result={filterResultByPrice('$$')} navigation={navigation} />
				<ResultList title='Big Spender' result={filterResultByPrice('$')} navigation={navigation} />
			</ScrollView>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		marginLeft: 15,
		flex: 1,
	},
});
