import { useNavigation } from "@react-navigation/native";
import { StackDataType } from "../../../interfaces/stack-navigation-data.type";
import { RoutesConstants } from "../../../constants/routes.constants";
import UserStore from "../../../stores/UserStore";
import { useEffect, useState } from "react";
import { TextInput, Image, Text, View } from "react-native";

import passwordVisible from '../../../assets/images/passwordVisible.png'
import passwordHidden from '../../../assets/images/passwordHidden.png'

import { CustomTouchable } from "../../../shared/components/CustomTouchable/CustomTouchable";
import { FormStyles } from "../../../shared/styles/Form.styles";
import { LoginModel } from "../../../models/login.model";
import { Formik } from "formik";
import { ProfileStackInnerNavigationData } from "../../../interfaces/profile-stack-inner-navigation-data.interface";

export const Login = () => {
    const navigationHook = useNavigation<StackDataType<ProfileStackInnerNavigationData>>(),
        [isError, setIsError] = useState<boolean>(false),
        [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    useEffect(() => {
        if (UserStore.isUserLoggedIn) {
            navigationHook.navigate(RoutesConstants.profileStack, {screen: RoutesConstants.profilePage})
        }
    }, [])

    const togglePasswordVisibility = (): void => {
        setIsPasswordVisible(prev => !prev)
    },

    toLogin = (loginData: LoginModel, {setSubmitting, setErrors, setStatus, resetForm}): void => {
        const resultIsSuccess = UserStore.toLogIn(loginData)

        if (resultIsSuccess) {
            navigationHook.navigate(RoutesConstants.profileStack, {screen: RoutesConstants.profilePage})
            resetForm()
        }

        setIsError(!resultIsSuccess)
    },

    toGoCreateUser = (): void => {
        navigationHook.navigate(RoutesConstants.createUser)
    }

    return (
        <View style={FormStyles.wrap}>
            <Formik
                initialValues={{ 
                    login: '', 
                    password: '' 
                }}
                onSubmit={toLogin}
            >
                {({ handleChange, handleBlur, handleSubmit, handleReset, values }) => (
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
                        {isError &&
                            <Text>There is no such user</Text>
                        }
                        <View style={FormStyles.button_wrap}>
                            <CustomTouchable 
                                onPress={handleSubmit}
                                rippleFullCoverage
                                style={FormStyles.button}>
                                    <Text style={FormStyles.button_text}>
                                        Login
                                    </Text>
                            </CustomTouchable>
                        </View>
                    </>
                )}
            </Formik>
            <View style={FormStyles.button_wrap}>
                <CustomTouchable 
                    onPress={toGoCreateUser}
                    rippleFullCoverage>
                        <Text style={FormStyles.button_text}>
                            Dont have an account yet?
                        </Text>
                </CustomTouchable>
            </View>
        </View>
    )
}