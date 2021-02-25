import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile209325Navigator from '../features/UserProfile209325/navigator';
import Settings209324Navigator from '../features/Settings209324/navigator';
import Settings209322Navigator from '../features/Settings209322/navigator';
import SignIn2209320Navigator from '../features/SignIn2209320/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile209325: { screen: UserProfile209325Navigator },
Settings209324: { screen: Settings209324Navigator },
Settings209322: { screen: Settings209322Navigator },
SignIn2209320: { screen: SignIn2209320Navigator },

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
