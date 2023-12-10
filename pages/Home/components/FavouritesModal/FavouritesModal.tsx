import { Modal, View, Text } from "react-native";
import { CustomTouchable } from "../../../../shared/components/CustomTouchable/CustomTouchable";
import { FavouritesModalStyle } from "./FavouritesModal.styles";
import { Slider } from "./Slider/Slider";
import { promos } from "../../../../server-mock/promos.mock";

export const FavouritesModal: React.FC<FavouritesModalProps> = ({isVisible, setIsVisible}) => {
    const hideModal = (): void => {
        setIsVisible(false)
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={hideModal}>
            <View style={FavouritesModalStyle.inner_container}>
                <Slider data={promos}/>
                <View style={FavouritesModalStyle.close_button}>
                    <CustomTouchable onPress={hideModal} rippleFullCoverage borderless={false}>
                        <Text>
                            Close modal
                        </Text>
                    </CustomTouchable>
                </View>
            </View>
        </Modal>
    )
}

interface FavouritesModalProps {
    isVisible: boolean,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}