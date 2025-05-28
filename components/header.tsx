import { Text, View } from 'react-native';
type HeaderProps = {
	title: String;
};

export default function Header({ title }: HeaderProps) {
	return (
		<View className="my-2 flex flex-col items-center justify-center">
			<Text className="font-bold">{title}</Text>
			<Text>Food Everyday 🍔🍴</Text>
			<View className="mt-2 w-full border-2 border-black "></View>
		</View>
	);
}
