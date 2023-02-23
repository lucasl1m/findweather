import { Box, Heading, Image, Text, useTheme, VStack } from "native-base";

import { Button } from "../components/Button";

export function Welcome({ navigation }) {
    const theme = useTheme();

    return (
        <VStack flex={1} bg={theme.colors.dark[500]}>
            <VStack alignItems="center" justifyContent="center" flex={1}>
                <Image
                    source={require("../assets/cloud-and-thunder.png")}
                    alt="Logo"
                />

                <Heading
                    color="white"
                    fontSize="4xl"
                    textAlign="center"
                    fontWeight="semibold"
                    mt={12}
                >
                    Descubra o Clima na sua Cidade
                </Heading>

                <Text
                    color={theme.colors.gray[100]}
                    fontSize="xl"
                    textAlign="center"
                    mt={6}
                >
                    Com o <Text bold>FindWeather</Text> nunca ficou tão fácil
                    ter a previsão do tempo na palma da sua mão
                </Text>
            </VStack>

            <Box>
                <Button
                    title="Iniciar"
                    h={16}
                    mt={7}
                    onPress={() => navigation.navigate("main", { screen: "home" })}
                />
            </Box>
        </VStack>
    );
}
