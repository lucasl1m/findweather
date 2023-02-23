import {
    Text,
    useTheme,
    VStack,
    Image,
    Heading,
    Box,
    HStack,
    Link,
    Center,
    ScrollView,
} from "native-base";

import { useState } from "react";

import { CaretRight } from "phosphor-react-native";

import { EmptyCity } from "../components/EmptyCity";
import { Header } from "../components/Header";
import { WeatherDetailsCard } from "../components/WeatherDetailsCard";

export function Home() {
    const [city, setCity] = useState("A Coruña, Espanha");

    const theme = useTheme();

    return (
        <VStack flex={1} bg={theme.colors.dark[500]}>
            {city ? (
                <>
                    <Header
                        title="A Coruña, Espanha"
                        subtitle="Domingo, 01 Jan de 2023"
                    />

                    <ScrollView flex={1}>
                        <Image
                            source={require("../assets/heavy-raining-middle.png")}
                            alt="Logo"
                            mt={12}
                            size={200}
                            alignSelf="center"
                        />
                        <Heading
                            color="white"
                            fontSize="6xl"
                            textAlign="center"
                            mt={2}
                        >
                            20º
                        </Heading>
                        <Text
                            color={theme.colors.gray[100]}
                            fontSize="3xl"
                            textAlign="center"
                            mt={2}
                        >
                            Chuva Moderada
                        </Text>

                        <WeatherDetailsCard />

                        <VStack w="full" mt={6}>
                            <HStack
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Text color={theme.colors.white} fontSize="2xl">
                                    Hoje
                                </Text>
                                <Link
                                    onPress={() => {}}
                                    alignItems="center"
                                    _text={{
                                        color: theme.colors.gray[100],
                                        fontSize: "lg",
                                    }}
                                >
                                    Próximos 5 dias
                                    <CaretRight
                                        size={20}
                                        color={theme.colors.gray[100]}
                                    />
                                </Link>
                            </HStack>
                            <HStack mt={4} justifyContent="space-between">
                                <Center
                                    display="flex"
                                    bg={theme.colors.dark[300]}
                                    px={4}
                                    py={2}
                                    rounded="2xl"
                                    borderWidth={1}
                                    borderColor={theme.colors.dark[100]}
                                >
                                    <Text
                                        color={theme.colors.white}
                                        fontSize="lg"
                                        fontWeight="bold"
                                    >
                                        24°
                                    </Text>
                                    <Image
                                        source={require("../assets/raining-middle.png")}
                                        alt=""
                                        size={8}
                                        my={2}
                                    />
                                    <Text
                                        color={theme.colors.gray[100]}
                                        fontSize="xs"
                                        fontWeight="bold"
                                    >
                                        09:00
                                    </Text>
                                </Center>
                                <Center
                                    display="flex"
                                    bg={theme.colors.dark[300]}
                                    px={4}
                                    py={2}
                                    rounded="2xl"
                                    borderWidth={1}
                                    borderColor={theme.colors.dark[100]}
                                >
                                    <Text
                                        color={theme.colors.white}
                                        fontSize="lg"
                                        fontWeight="bold"
                                    >
                                        24°
                                    </Text>
                                    <Image
                                        source={require("../assets/raining-middle.png")}
                                        alt=""
                                        size={8}
                                        my={2}
                                    />
                                    <Text
                                        color={theme.colors.gray[100]}
                                        fontSize="xs"
                                        fontWeight="bold"
                                    >
                                        09:00
                                    </Text>
                                </Center>
                                <Center
                                    display="flex"
                                    bg={theme.colors.dark[300]}
                                    px={4}
                                    py={2}
                                    rounded="2xl"
                                    borderWidth={1}
                                    borderColor={theme.colors.dark[100]}
                                >
                                    <Text
                                        color={theme.colors.white}
                                        fontSize="lg"
                                        fontWeight="bold"
                                    >
                                        24°
                                    </Text>
                                    <Image
                                        source={require("../assets/raining-middle.png")}
                                        alt=""
                                        size={8}
                                        my={2}
                                    />
                                    <Text
                                        color={theme.colors.gray[100]}
                                        fontSize="xs"
                                        fontWeight="bold"
                                    >
                                        09:00
                                    </Text>
                                </Center>
                                <Center
                                    display="flex"
                                    bg={theme.colors.dark[300]}
                                    px={4}
                                    py={2}
                                    rounded="2xl"
                                    borderWidth={1}
                                    borderColor={theme.colors.dark[100]}
                                >
                                    <Text
                                        color={theme.colors.white}
                                        fontSize="lg"
                                        fontWeight="bold"
                                    >
                                        24°
                                    </Text>
                                    <Image
                                        source={require("../assets/raining-middle.png")}
                                        alt=""
                                        size={8}
                                        my={2}
                                    />
                                    <Text
                                        color={theme.colors.gray[100]}
                                        fontSize="xs"
                                        fontWeight="bold"
                                    >
                                        09:00
                                    </Text>
                                </Center>
                            </HStack>
                        </VStack>
                    </ScrollView>
                </>
            ) : (
                <EmptyCity />
            )}
        </VStack>
    );
}
