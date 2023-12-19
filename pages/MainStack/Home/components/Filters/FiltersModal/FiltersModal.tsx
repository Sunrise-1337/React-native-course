import { Modal, View, Text } from "react-native";
import { CustomTouchable } from "../../../../../../shared/components/CustomTouchable/CustomTouchable";
import { FiltersModalStyle } from "./FiltersModal.styles";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useContext } from "react";
import { FiltersContext } from "../../../../../../contexts/filters-context/filters-context";

export const FiltersModal: React.FC<FavouritesModalProps> = ({isVisible, setIsVisible}) => {
    const {filtersState, setFiltersState} = useContext(FiltersContext)

    const hideModal = (): void => {
        setIsVisible(false)
    },

    updateIsNewValue = (value: boolean) => {
        setFiltersState(prev => {
            return {...prev, isNew: value}
        })
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={hideModal}>
            <View style={FiltersModalStyle.inner_container}>
                <Text>
                   Filters
                </Text>
                <View style={FiltersModalStyle.filter_section}>
                    <BouncyCheckbox onPress={updateIsNewValue}
                            isChecked={filtersState?.isNew} />
                    <Text>
                        Only new
                    </Text>
                </View>
            </View>
            <CustomTouchable onPress={hideModal}
                        style={FiltersModalStyle.close_area} 
                        rippleFullCoverage/>
        </Modal>
    )
}

interface FavouritesModalProps {
    isVisible: boolean,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}