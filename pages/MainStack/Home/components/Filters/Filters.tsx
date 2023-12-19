import { useState } from "react";
import { View, Image, TextInput} from "react-native";

import favourites from '../../../../../assets/images/favourite.png'
import search from '../../../../../assets/images/search.png'
import close_button from '../../../../../assets/images/close_button.png'
import filter from '../../../../../assets/images/filter.png'

import { CustomTouchable } from "../../../../../shared/components/CustomTouchable/CustomTouchable";
import { FiltersStyle } from "./Filters.styles";
import { useNavigation } from "@react-navigation/native";
import { RoutesConstants } from "../../../../../constants/routes.constants";
import { StackDataType } from "../../../../../interfaces/stack-navigation-data.type";
import { FiltersModal } from "./FiltersModal/FiltersModal";

export const Filters: React.FC<FiltersProps> = ({onRequestInput}) => {
    const [isSearchBarVisible, setIsSearchBarVisible] = useState<boolean>(false),
        [inputText, setInputText] = useState<string>(''),        
        [isFiltersModalVisible, setIsFiltersModalVisible] = useState<boolean>(false),
        navigation = useNavigation<StackDataType<{}>>();

    const toToggleSearchBarVisibility = (): void => {
        setIsSearchBarVisible(prev => !prev)
    },

    toOpenFavouritesModal = (): void => {
        navigation.navigate(RoutesConstants.promotions)
    },
    
    toOpenFiltersModal = (): void => {
        setIsFiltersModalVisible(true)
    },

    onTextInput = (text: string): void => {
        onRequestInput(text)
        setInputText(text)    
    },

    resetText = () => {
        setInputText('')
        onRequestInput('')
    }

    return (
        <>
            <View style={FiltersStyle.filter}>
                {isSearchBarVisible
                    && 
                        <>
                            <View style={FiltersStyle.input_wrapper}>
                                <TextInput 
                                    style={FiltersStyle.input}
                                    onChangeText={onTextInput}
                                    value={inputText}
                                    autoFocus/>
                                <CustomTouchable onPress={resetText} style={FiltersStyle.input_icon_wrapper}>
                                    <Image source={close_button} 
                                            style={FiltersStyle.input_icon} />
                                </CustomTouchable>
                            </View>
                            <View style={FiltersStyle.icon_wrapper}>
                                <CustomTouchable onPress={toOpenFiltersModal}>
                                    <Image source={filter} style={FiltersStyle.icon}/>
                                </CustomTouchable>
                            </View>
                        </>
                }
                <View style={FiltersStyle.icon_wrapper}>
                    <CustomTouchable onPress={toOpenFavouritesModal}>
                        <Image source={favourites} style={FiltersStyle.icon}/>
                    </CustomTouchable>
                </View>
                <View style={FiltersStyle.icon_wrapper}>
                    <CustomTouchable onPress={toToggleSearchBarVisibility}>
                        <Image source={search}  style={FiltersStyle.icon}/>
                    </CustomTouchable>
                </View>
            </View>
            <FiltersModal isVisible={isFiltersModalVisible} setIsVisible={setIsFiltersModalVisible} />
        </>
    )
}

interface FiltersProps {
    onRequestInput: React.Dispatch<React.SetStateAction<string>>
}