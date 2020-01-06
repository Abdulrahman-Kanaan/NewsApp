import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import HomeStack from './HomeStack';
import CategoriesStack from './CategoriesStack';
import AboutStack from './AboutStack';

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    Categories: {
        screen: CategoriesStack
    },
    About: {
        screen: AboutStack
    }
});

export default createAppContainer(MainNavigator);