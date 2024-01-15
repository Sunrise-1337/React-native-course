import { NavigationProp } from "@react-navigation/native";
import { RoutesConstants } from "../constants/routes.constants";

export type RootStackParamList<dataType> = Record<RoutesConstants, dataType>;
export type StackDataType<dataType = void> = NavigationProp<RootStackParamList<dataType>>;