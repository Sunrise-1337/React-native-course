import { View, FlatList, Image, Dimensions, NativeSyntheticEvent, NativeScrollEvent, Alert, Share } from "react-native";
import { CustomTouchable } from "../../../../shared/components/CustomTouchable/CustomTouchable";
import { SliderStyle } from "./Slider.styles";
import { PromoInterface } from "../../../../interfaces/promo.interface";

import { useEffect, useRef, useState } from "react";
import { promos } from "../../../../server-mock/promos.mock";

export const Slider: React.FC<FavouritesModalProps> = ({data}) => {
    const {width} = Dimensions.get('window'),
        [activePicId, setActivePicId] = useState<number>(0),
        [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>(null),
        flatListRef = useRef<FlatList>(null);

    useEffect(() => {
        toScrollWithDelay()
    }, [])

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
        clearTimeout(timeoutId)
        setTimeoutId(null);

        const {contentOffset, layoutMeasurement} = event.nativeEvent

        setActivePicId(Math.round(contentOffset.x / layoutMeasurement.width))
        
        toScrollWithDelay()
    },

    toScrollWithDelay = (): void => {
        const whereToScroll = promos.length - 1 > activePicId ? activePicId + 1 : 0;

        setTimeoutId(
            setTimeout(() => {
                toScrollToItem(whereToScroll)
            }, 3000)
        )
    },

    toScrollToItem = (index: number): void => {
        flatListRef?.current?.scrollToIndex({
            index: index,
            animated: true,
            viewPosition:  1,
        });
    },

    toShareTheLink = async (link: string): Promise<void> => {
        try {
            const result = await Share.share({
                message: link,
            });
        } catch (error: any) {
            Alert.alert(error.message);
        }
    }

    return (
        <View style={SliderStyle.slider_container}>
            <FlatList data={data}
                    renderItem={({item}) => {
                        return <View style={{
                                ...SliderStyle.slide,
                                width: width,
                            }}
                            onTouchEnd={() => toShareTheLink(item.link)}>
                                <Image source={{uri: item.link}}
                                    style={SliderStyle.slide_image}/>
                        </View>
                    }}
                    horizontal
                    pagingEnabled
                    keyExtractor={(item) => item.link}
                    onScroll={onScroll}
                    ref={flatListRef}
                    showsHorizontalScrollIndicator={false}
                />
            <FlatList data={data}
                renderItem={({item, index}) => {
                    return <CustomTouchable onPress={() => toScrollToItem(index)} radius={15}>
                        <View style={[
                                SliderStyle.dot,
                                index === activePicId 
                                    ? SliderStyle.active_dot
                                    : null
                            ]}
                            key={item.link}/>
                    </CustomTouchable>
                }}
                contentContainerStyle={SliderStyle.dots_container}
                horizontal
                keyExtractor={(item) => item.link}
            />
        </View>
    )
}

interface FavouritesModalProps {
    data: PromoInterface[]
}