import { Modal, View, Text } from "react-native";
import { CustomTouchable } from "../../../../../../shared/components/CustomTouchable/CustomTouchable";
import { FiltersModalStyle } from "./FiltersModal.styles";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import FiltersStore from "../../../../../../stores/FiltersStore";
import { observer } from "mobx-react";

const FiltersModal: React.FC<FavouritesModalProps> = ({isVisible, setIsVisible}) => {
    const hideModal = (): void => {
        setIsVisible(false)
    },

    updateIsNewValue = () => {
        FiltersStore.toToggleIsNewFilter()
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
                <BouncyCheckbox isChecked={FiltersStore.filters.isNew}  
                    style={FiltersModalStyle.filter_section} 
                    onPress={updateIsNewValue}
                    textComponent={        
                        <Text>
                            Only new
                        </Text>
                    }/>
            </View>
            <CustomTouchable onPress={hideModal}
                        style={FiltersModalStyle.close_area} 
                        rippleFullCoverage/>
        </Modal>
    )
}

export default observer(FiltersModal)

interface FavouritesModalProps {
    isVisible: boolean,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}