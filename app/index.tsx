import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import '../assets/css/global.css';

export default function App() {
	return (
		<View className="">
			{/* Profile Area */}
			<View className="flex flex-row justify-evenly items-center">
				{/* Image */}
				<View className="">
					<Image
						className="rounded-full"
						style={{
							width: 100,
							height: 100,
						}}
						source={require('../assets/images/icon.jpeg')}
					></Image>
				</View>
				{/* Text */}
				<View className="flex flex-row gap-2">
					<View>
						<Text className="text-center">69</Text>
						<Text>Posts</Text>
					</View>
					<View>
						<Text className="text-center">420</Text>
						<Text>Members</Text>
					</View>
					<View>
						<Text className="text-center">-1</Text>
						<Text>Admins</Text>
					</View>
				</View>
			</View>

			{/* Text */}

			{/* Member Button */}

			{/* Carousel of Images */}

			<Text className="bg-sky-900 text-white">
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
