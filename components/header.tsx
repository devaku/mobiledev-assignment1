import { Text, View } from 'react-native';
type HeaderProps = {
	title: String;
};

export default function Header({ title }: HeaderProps) {
	return (
		<View className="my-2 flex flex-col items-center justify-center">
			<Text className="font-bold">{title}</Text>
			<Text className="text-sm text-gray-500">Food Everyday 🍔🍴</Text>
			<View className="mt-2 w-full border border-gray-300 "></View>
		</View>
	);
}
