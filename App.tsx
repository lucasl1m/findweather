import {
    useFonts,
    Overpass_300Light,
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold,
} from "@expo-google-fonts/overpass";

import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider, Text, useTheme } from "native-base";
import { Routes } from "./src/routes";
import { theme } from "./src/theme";

export default function App() {
    const [fontsLoaded] = useFonts({
        Overpass_300Light,
        Overpass_400Regular,
        Overpass_600SemiBold,
        Overpass_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NativeBaseProvider theme={theme}>
            <Routes />

            <StatusBar
                style="light"
                backgroundColor="transparent"
                translucent
            />
        </NativeBaseProvider>
    );
}
