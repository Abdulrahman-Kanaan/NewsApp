import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import Header from '../components/Header';
import About from '../screens/About';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='About' navigation={navigation} />
            }
        }
    }
};

const CategoriesStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        title: "About"
    }
});

export default CategoriesStack;