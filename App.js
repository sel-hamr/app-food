import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './src/screens/DetailScreen';

import SearchScreen from './src/screens/SearchScreen';

const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator screenOptions={{ title: 'Food app' }}>
			<Stack.Screen name='Home' component={SearchScreen} />
			<Stack.Screen name='show detail' component={DetailScreen} />
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}
