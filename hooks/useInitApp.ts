import { useEffect, useState } from "react";
import UserStore from "../stores/UserStore";

export const useInitApp = (): boolean => {
    const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

    useEffect(() => {
      UserStore.toInitStore().finally(() => {
        setIsDataLoaded(true)
      })
    }, [])

    return isDataLoaded
}