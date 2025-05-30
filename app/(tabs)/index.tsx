import {
	Pressable,
	FlatList,
	Text,
	View,
	Image,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import '../../assets/css/global.css';

export default function App() {
	// Because React Native does not play
	// with dynamic file paths apparently >_>

	const picture_url = '../../assets/images/food';

	const food_pictures = [
		{
			file_path: require(`${picture_url}/chickfilletsandwich.jpg`),
		},
		{
			file_path: require(`${picture_url}/christmaspuddingflapjack.jpg`),
		},
		{
			file_path: require(`${picture_url}/crispyeggplant.jpg`),
		},
		{
			file_path: require(`${picture_url}/ecclescake.jpg`),
		},
		{
			file_path: require(`${picture_url}/fishfofos.jpg`),
		},
		{
			file_path: require(`${picture_url}/hotchocolatefudge.jpg`),
		},
		{
			file_path: require(`${picture_url}/krispykreme.jpg`),
		},
		{
			file_path: require(`${picture_url}/lambtzatzikiburgers.jpg`),
		},
		{
			file_path: require(`${picture_url}/lasagnasandwiches.jpg`),
		},
		{
			file_path: require(`${picture_url}/timbits.jpg`),
		},
	];
	let key = 0;

	function handleClick() {
		alert('Assignment 1 Completed');
	}
	return (
		<SafeAreaProvider>
			<SafeAreaView
				style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}
			>
				{/* Profile Area */}
				<View className="flex flex-row">
					{/* Image */}
					<View className="mr-auto ml-2 border-2 rounded-full">
						<Image
							className="rounded-full m-1"
							style={{
								width: 100,
								height: 100
							}}
							source={require('../../assets/images/icon.jpeg')}
						></Image>
					</View>
					{/* Text */}
					<View className="flex flex-row gap-8 items-center mr-auto">
						<View>
							<Text className="text-center font-bold">69</Text>
							<Text>Posts</Text>
						</View>
						<View>
							<Text className="text-center font-bold">420</Text>
							<Text>Members</Text>
						</View>
						<View>
							<Text className="text-center font-bold">-1</Text>
							<Text>Admins</Text>
						</View>
					</View>
				</View>

				{/* Text */}
				<View className="ml-5 mt-4">
					<Text className="font-bold">Food Everyday 🍔🍴</Text>
					<Text>Mouth watering goodness!</Text>
				</View>

				{/* Member Button */}
				<TouchableOpacity
					className="flex flex-row justify-center border border-slate-400 p-1 m-4 rounded"
					onPress={handleClick}
				>
					<Text className="font-semibold">Click Me</Text>
				</TouchableOpacity>

				{/* Carousel of Images */}
				<FlatList
					data={food_pictures}
					numColumns={3}
					contentContainerStyle={{gap: 3}}
					columnWrapperStyle={{gap: 3}}
					renderItem={({ item }) => (
						<Image
							key={key++}
							className=""
							style={{
								flex: 1 / 3,
								height: "auto",
								aspectRatio: 1,
							}}
							source={item.file_path}
						></Image>
					)}
					keyExtractor={(item) => (key++).toString()}
				/>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
