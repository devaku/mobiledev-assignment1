import { Pressable, Button } from 'react-native';
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
						<Text className="font-bold">Posts</Text>
					</View>
					<View>
						<Text className="text-center">420</Text>
						<Text className="font-bold">Members</Text>
					</View>
					<View>
						<Text className="text-center">-1</Text>
						<Text className="font-bold">Admins</Text>
					</View>
				</View>
			</View>

			{/* Text */}
			<View className="ml-5 my-2">
				<Text>OOTD Everyday</Text>
				<Text>Fit Check! 👚</Text>
				<Text>You know we'll hype you up.</Text>
			</View>

			{/* Member Button */}
			<View className="flex flex-row justify-center border border-slate-400 p-1 m-4">
				<Pressable>
					<View>
						<Text className="font-semibold">Member v</Text>
					</View>
				</Pressable>
			</View>

			{/* Carousel of Images */}
			<View>
				<Image
					className="rounded-full"
					style={{
						width: 100,
						height: 100,
					}}
					source={require('../assets/images/deadserver.gif')}
				></Image>
			</View>
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
