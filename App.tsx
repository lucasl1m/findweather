import {
    useFonts,
    Overpass_300Light,
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold,
} from "@expo-google-fonts/overpass";

import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider, Text, useTheme } from "native-base";
import { Button } from "./src/components/Button";
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
            <Box
                flex={1}
                bg={theme.colors.dark[500]}
                alignItems="center"
                justifyContent="center"
            >
                <Text color={theme.colors.white}>
                    Open up App.js to start working on your app!
                </Text>

                <StatusBar
                    style="light"
                    backgroundColor="transparent"
                    translucent
                />
            </Box>
        </NativeBaseProvider>
    );
}
