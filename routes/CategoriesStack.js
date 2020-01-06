import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import Header from '../components/Header';
import Categories from '../screens/Categories';
import Articles from '../screens/Articles'
import Article from '../screens/Article';

const screens = {
    Categories: {
        screen: Categories,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Categories' navigation={navigation} />
            }
        }
    },
    Articles: {
        screen: Articles,
        navigationOptions: {
            title: 'Articles'
        }
    },
    Article: {
        screen: Article,
        navigationOptions: {
            title: 'Article'
        }
    }
};

const CategoriesStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        title: "Categories"
    }
});

export default CategoriesStack;