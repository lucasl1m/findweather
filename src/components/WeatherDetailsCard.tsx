import { useTheme, HStack, Center, Image, Text, Divider } from "native-base";

export function WeatherDetailsCard() {
    const theme = useTheme();

    return (
        <HStack
            w="full"
            alignItems="center"
            justifyContent="space-around"
            mt={6}
            px={4}
            py={3}
            borderColor={theme.colors.gray[600]}
            borderWidth={1}
            rounded="3xl"
        >
            <Center>
                <Image
                    source={require("../assets/drop-miniature.png")}
                    alt="Imagem de uma gota de água"
                    mb={2}
                />
                <Text
                    color={theme.colors.white}
                    fontSize="xl"
                    fontWeight="bold"
                >
                    24%
                </Text>
                <Text color="gray.400" fontSize="sm">
                    Umidade
                </Text>
            </Center>
            <Divider orientation="vertical" bg="gray.600" h="1/2" />
            <Center>
                <Image
                    source={require("../assets/wind-miniature.png")}
                    alt="Imagem de vento"
                    mb={2}
                />
                <Text
                    color={theme.colors.white}
                    fontSize="xl"
                    fontWeight="bold"
                >
                    20km/h
                </Text>
                <Text color="gray.400" fontSize="sm">
                    Vento
                </Text>
            </Center>
            <Divider orientation="vertical" bg="gray.600" h="1/2" />
            <Center>
                <Image
                    source={require("../assets/raining-cloud-miniature.png")}
                    alt="Imagem de uma nuvem com chuva"
                    mb={2}
                />
                <Text
                    color={theme.colors.white}
                    fontSize="xl"
                    fontWeight="bold"
                >
                    76%
                </Text>
                <Text color="gray.400" fontSize="sm">
                    Chuva
                </Text>
            </Center>
        </HStack>
    );
}
