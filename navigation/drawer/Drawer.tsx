import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStack } from "../stacks/MainStack";

const DrawerRef = createDrawerNavigator();

export const Drawer = () => {
  return (
    <DrawerRef.Navigator>
      <DrawerRef.Screen
        name="Feed"
        component={MainStack}
        options={{ headerShown: false }}
      />
      {/* <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{ drawerLabel: 'Updates' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      /> */}
    </DrawerRef.Navigator>
  );
}