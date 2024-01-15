import { useNavigation } from "@react-navigation/native";
import { StackDataType } from "../../../interfaces/stack-navigation-data.type";
import { TextInput, View, Image, Text, ScrollView } from "react-native";
import { Formik } from "formik";
import { CustomTouchable } from "../../../shared/components/CustomTouchable/CustomTouchable";
import { FormStyles } from "../../../shared/styles/Form.styles";

import passwordVisible from '../../../assets/images/passwordVisible.png'
import passwordHidden from '../../../assets/images/passwordHidden.png'
import { useState } from "react";
import UserStore from "../../../stores/UserStore";
import { UserModel } from "../../../models/user.model";
import { RoutesConstants } from "../../../constants/routes.constants";
import { ProfileStackInnerNavigationData } from "../../../interfaces/profile-stack-inner-navigation-data.interface";

export const CreateUser = () => {
    const navigationHook = useNavigation<StackDataType<ProfileStackInnerNavigationData>>(),
        [isError, setIsError] = useState<boolean>(false),
        [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const togglePasswordVisibility = (): void => {
        setIsPasswordVisible(prev => !prev)
    },

    toCreateUser = (loginData: UserModel): void => {
        const result = UserStore.toCreateUser(loginData);

        if (result) {
            UserStore.toLogIn(loginData)

            navigationHook.navigate(RoutesConstants.profileStack, {screen: RoutesConstants.profilePage})
        }

        setIsError(!result)
    }

    return (
        <ScrollView contentContainerStyle={FormStyles.wrap}>
            <Formik
                initialValues={{ 
                    login: '', 
                    password: '',
                    realName: '',
                    gender: '',
                    age: '',
                }}
                onSubmit={(values) => toCreateUser({...values, age: +values.age} as UserModel)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <>
                        <TextInput
                            style={FormStyles.input}
                            placeholder="Login" 
                            onChangeText={handleChange('login')}
                            onBlur={handleBlur('login')}
                            value={values.login}/>
                        <View
                            style={FormStyles.passwordWrap}>
                            <TextInput
                                style={
                                    [
                                        FormStyles.input,
                                        FormStyles.passwordInput
                                    ]
                                }
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                placeholder="Password" 
                                secureTextEntry={!isPasswordVisible}/>
                            <CustomTouchable 
                                onPress={togglePasswordVisibility}
                                radius={15}
                                style={FormStyles.passwordVisibility}>
                                    <Image 
                                        source={isPasswordVisible ? passwordVisible : passwordHidden}
                                        style={FormStyles.passwordToggler}/>
                            </CustomTouchable>
                        </View>
                        
                        <TextInput
                            style={FormStyles.input}
                            placeholder="Your real name" 
                            onChangeText={handleChange('realName')}
                            onBlur={handleBlur('realName')}
                            value={values.realName}/>

                        <TextInput
                            style={FormStyles.input}
                            placeholder="Gender" 
                            onChangeText={handleChange('gender')}
                            onBlur={handleBlur('gender')}
                            value={values.gender}/>
                            
                        <TextInput
                            style={FormStyles.input}
                            placeholder="Age"
                            onChangeText={handleChange('age')}
                            onBlur={handleBlur('age')}
                            value={values.age}
                            keyboardType="number-pad"/>

                        {isError &&
                            <Text>There is already such user</Text>
                        }
                        
                        <View style={FormStyles.button_wrap}>
                            <CustomTouchable 
                                onPress={handleSubmit}
                                rippleFullCoverage
                                style={FormStyles.button}>
                                    <Text style={FormStyles.button_text}>
                                        Create account
                                    </Text>
                            </CustomTouchable>
                        </View>
                    </>
                )}
            </Formik>
            
        </ScrollView>
    )
}