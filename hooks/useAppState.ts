import { useEffect, useState } from "react"
import { AppState, AppStateStatus } from "react-native"

export const useAppState = () => {
    const [isAppActive, setIsAppActive] = useState<boolean>(AppState.currentState === 'active')

    useEffect(() => {
        const subscription = AppState.addEventListener("change", onAppStateChange)

        return (
            () => subscription?.remove()
        )
    }, [])

    
    const onAppStateChange = () => {
        setIsAppActive(AppState.currentState === 'active')
    }

    return isAppActive
}