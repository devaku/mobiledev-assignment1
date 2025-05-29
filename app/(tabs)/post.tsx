import {
	Pressable,
	FlatList,
	Text,
	View,
	Image,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function Post() {
	return (
		<SafeAreaProvider>
			<SafeAreaView
				style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}
			>
				<View className='flex flex-row'>
					<Image className='w-10 h-10 ml-5 rounded-full' source={require('../../assets/images/food/chickfilletsandwich.jpg')}></Image>
					<View className='flex flex-col'>
						<Text className='ml-5'>THIS IS THE POST</Text>
						<Text className='ml-5 flex flex-col'>THIS IS THE POST</Text>
					</View>
					<View className="flex-1 items-end justify-center mr-10">
						<Text className="text-2xl">⋯</Text>
					</View>
				</View>
				<View className="w-full h-[400px] flex items-center justify-center mt-4">
					<Image
						source={require('../../assets/images/food/chickfilletsandwich.jpg')}
						className="w-full h-full"
						resizeMode="cover"
					/>
				</View>
				<View className="flex flex-row items-center justify-between px-6 py-4">
					<View className="flex flex-row space-x-6">
						<TouchableOpacity>
							<Text className="text-2xl">❤️</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text className="text-2xl ml-3">💬</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text className="text-2xl ml-3">↗️</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity>
						<Text className="text-2xl">🔖</Text>
					</TouchableOpacity>
				</View>
					<View className='flex flex-row'>
						<Image className='w-5 h-5 ml-5 rounded-full' source={require('../../assets/images/food/chickfilletsandwich.jpg')}></Image>
						<Image className='w-5 h-5 rounded-full' source={require('../../assets/images/food/chickfilletsandwich.jpg')}></Image>
						<Image className='w-5 h-5 rounded-full' source={require('../../assets/images/food/chickfilletsandwich.jpg')}></Image>
						<View className='flex flex-col'>
							<Text className='ml-4'>Liked by pedro_gameplays and 7 others</Text>
						</View>
					</View>
					<View className='mt-2 ml-5 '>
						<Text className=''>
							<Text className="font-bold">TJ</Text> Super cool post
						</Text>
					</View>
					<View className='mt-1'>
						<Text className='ml-5'>View all 12 comments</Text>
					</View>
					<View className='mt-1 ml-5 '>
						<Text className=''>
							<Text className="font-bold">Jonh</Text> 👌
						</Text>
					</View>
										<View className='mt-1 ml-5 '>
						<Text className=''>
							<Text className="font-bold">Jane</Text> 🔥🔥🔥🔥
						</Text>
					</View>

			</SafeAreaView>
		</SafeAreaProvider>
		

	);
}
