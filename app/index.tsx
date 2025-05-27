import { Text, View } from 'react-native';
import '../assets/css/global.css';

export default function MyComponent() {
	return (
		<View className="flex-1 items-center justify-center ">
			<Text className="font-bold text-4xl text-orange-600">
				Some text
			</Text>
		</View>
	);
}
