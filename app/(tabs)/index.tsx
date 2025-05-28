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
				<View className="flex flex-row justify-evenly items-center">
					{/* Image */}
					<View className="">
						<Image
							className="rounded-full"
							style={{
								width: 100,
								height: 100,
							}}
							source={require('../../assets/images/icon.jpeg')}
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
					<Text>Food Everyday 🍔🍴</Text>
					<Text>Mouth watering goodness!</Text>
				</View>

				{/* Member Button */}
				<TouchableOpacity
					className="flex flex-row justify-center border border-slate-400 p-1 m-4"
					onPress={handleClick}
				>
					<Text className="font-semibold">Click Me</Text>
				</TouchableOpacity>

				{/* Carousel of Images */}
				<FlatList
					data={food_pictures}
					numColumns={3}
					renderItem={({ item }) => (
						<Image
							key={key++}
							className=""
							style={{
								width: 125,
								height: 125,
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
