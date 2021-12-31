import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

export default function DetailScreen(props) {
	const [resultDetail, setResultDetail] = useState(null);
	const id = props.route.params.id;
	const getDetailById = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResultDetail(response.data);
	};
	useEffect(() => {
		getDetailById(id);
	}, []);

	if (!resultDetail) return null;
	return (
		<View style={style.contraire}>
			<Text style={style.title}>{resultDetail.name}</Text>
			<FlatList keyExtractor={(item) => item} data={resultDetail.photos} renderItem={({ item }) => <Image source={{ uri: item }} style={style.image} />} />
		</View>
	);
}
const style = StyleSheet.create({
	image: {
		height: 150,
		width: 300,
		marginVertical: 10,
		borderRadius: 7,
	},
	contraire: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10,
	},
});
