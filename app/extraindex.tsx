import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import '../assets/css/global.css';

export default function App() {
	return (
		<View>
			{/* Top Bar */}
			<View className="w-4">
				<Image source={require('../assets/images/icon.jpeg')}></Image>
			</View>

			{/* Text */}

			{/* Member Button */}

			{/* Carousel of Images */}

			<Text className="bg-sky-50 text-white">
				Open up App.tsx to start working on your app!
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
