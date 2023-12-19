import { Image, ImageSourcePropType } from "react-native"

export const TabIcon: React.FC<TabIconProps> = ({source, width, height}) => {
    return (
        <Image source={source} 
            style={{
                width,
                height
            }}/>
    )
}

interface TabIconProps {
    source: ImageSourcePropType,
    width: number,
    height: number
}