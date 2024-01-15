import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStyles } from "../../App.styles";
import { RoutesConstants } from "../../constants/routes.constants";
import { Profile } from "../../pages/ProfileStack/Profile/Profile";
import { Login } from "../../pages/ProfileStack/Login/Login";
import { CreateUser } from "../../pages/ProfileStack/CreateUser/CreateUser";
import UserStore from "../../stores/UserStore";
import { observer } from "mobx-react";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator
              screenOptions={{
                contentStyle: AppStyles.stackWrapper
              }}
              initialRouteName={
                UserStore.isUserLoggedIn
                  ? RoutesConstants.profilePage
                  : RoutesConstants.login
              }>
            {UserStore.isUserLoggedIn && 
              <Stack.Screen 
                  options={{
                    headerShown: false
                  }}
                  name={RoutesConstants.profilePage} 
                  component={Profile} />
            }
            <Stack.Screen 
              name={RoutesConstants.login} 
              component={Login}
              options={{
                headerBackVisible: false
              }} />
            <Stack.Screen name={RoutesConstants.createUser} component={CreateUser} />
        </Stack.Navigator>
    )
}

export default observer(ProfileStack)