import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList195266Navigator from '../features/ArticleList195266/navigator';
import ArticleList195265Navigator from '../features/ArticleList195265/navigator';
import ArticleList195264Navigator from '../features/ArticleList195264/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList195266: { screen: ArticleList195266Navigator },
ArticleList195265: { screen: ArticleList195265Navigator },
ArticleList195264: { screen: ArticleList195264Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
