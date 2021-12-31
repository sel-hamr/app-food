import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [result, setResult] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const searchApi = async (name) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: name,
					location: 'san jose',
				},
			});
			setResult(response.data.businesses);
		} catch (error) {
			setErrorMessage('something went wrong');
		}
	};
	useEffect(() => {
		searchApi('pasta');
	}, []);
	return [errorMessage, searchApi, result];
};
