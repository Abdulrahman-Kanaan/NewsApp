import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation }) {

	const openMenu = () => {
		navigation.openDrawer();
	}

	return (
		<View style={styles.header}>
			<MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
			<Text style={styles.headerText}>{title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
	},
	headerText: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#333',
		letterSpacing: 1,
	},
	icon: {
		marginRight: 10
	}
});