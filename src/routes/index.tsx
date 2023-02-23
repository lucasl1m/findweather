import { NavigationContainer } from "@react-navigation/native";

import { Box, useTheme } from "native-base";
import { AppRoutes } from "./app.routes";

export function Routes() {
    const theme = useTheme();

    return (
        <Box flex={1} bg={theme.colors.dark[500]} px={4} safeArea>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </Box>
    );
}
