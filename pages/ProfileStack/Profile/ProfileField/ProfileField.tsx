import { Text, View } from "react-native"
import { ProfileStyles } from "../Profile.styles"

export const ProfileField: React.FC<ProfileFieldProps> = ({fieldName, fieldContent}) => {
    return (
        <View style={ProfileStyles.field}>
            <Text style={ProfileStyles.fieldTitle}>
                {fieldName}:
            </Text>
            <Text style={ProfileStyles.fieldContent}>
                {fieldContent}
            </Text>
        </View>
    )
}

interface ProfileFieldProps {
    fieldName: string,
    fieldContent: string | number
}