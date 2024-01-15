import { ScrollView, Text, View, Image } from "react-native"
import UserStore from "../../../stores/UserStore"
import { useNavigation } from "@react-navigation/native"
import { RoutesConstants } from "../../../constants/routes.constants"
import { StackDataType } from "../../../interfaces/stack-navigation-data.type"
import { observer } from "mobx-react"
import { CustomTouchable } from "../../../shared/components/CustomTouchable/CustomTouchable"
import { ProfileStyles } from "./Profile.styles"
import { ProfileField } from "./ProfileField/ProfileField"
import * as ImagePicker from 'expo-image-picker';

export const Profile = observer(() => {
    const navigationHook = useNavigation<StackDataType>();

    const toLogOut = (): void => {
        UserStore.toLogOut()
        navigationHook.navigate(RoutesConstants.login)
    },

    openPics = async (): Promise<void> => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            base64: true
        });
    }

    return (
        UserStore.isUserLoggedIn
            ? 
                <ScrollView contentContainerStyle={ProfileStyles.wrap}>
                    <CustomTouchable onPress={openPics} radius={100}>
                        {/* {!!profilePicture?.length
                                ? <Image source={{uri: "data:image/png;base64,"+profilePicture}} />
                                : <View style={ProfileStyles.profile_pic}/>
                        } */}
                        <View style={ProfileStyles.profile_pic}/>
                    </CustomTouchable>                    
                    <Text style={ProfileStyles.title}>
                        Hello, <Text>{UserStore.userData.login}!</Text>
                    </Text>
                    <ProfileField fieldName="Name" fieldContent={UserStore.userData.realName} />
                    <ProfileField fieldName="Age" fieldContent={UserStore.userData.age} />
                    <ProfileField fieldName="Gender" fieldContent={UserStore.userData.gender} />
                    <View style={ProfileStyles.button_wrap}>
                        <CustomTouchable 
                            onPress={toLogOut}
                            rippleFullCoverage
                            style={ProfileStyles.button}>
                                <Text style={ProfileStyles.button_text}>
                                    Log Out
                                </Text>
                        </CustomTouchable>
                    </View>
                </ScrollView>
            : 
                <></>
    )
})