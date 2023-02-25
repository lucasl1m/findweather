import { useTheme, HStack, Center, Image, Text, Divider } from "native-base";
import React from "react";
import { ImageSourcePropType } from "react-native";

interface IWeatherDescriptionData {
    id: number;
    icon: ImageSourcePropType;
    value: string;
    text: string;
}

interface IWeatherData {
    data: IWeatherDescriptionData[];
}

export function WeatherDetailsCard({ data }: IWeatherData) {
    const theme = useTheme();

    return (
        <HStack
            w="100%"
            alignItems="center"
            justifyContent="space-around"
            mt={6}
            px={4}
            py={3}
            borderColor={theme.colors.dark[100]}
            borderWidth={1}
            rounded="18px"
        >
            {data.map((item, index) => (
                <React.Fragment key={item.id}>
                    <Center>
                        <Image source={item.icon} alt={item.text} mb={2} />
                        <Text
                            color={theme.colors.white}
                            fontSize="xl"
                            fontWeight="bold"
                        >
                            {item.value}
                        </Text>
                        <Text color="gray.400" fontSize="sm">
                            {item.text}
                        </Text>
                    </Center>
                    {index !== data.length - 1 && (
                        <Divider
                            orientation="vertical"
                            borderColor={theme.colors.dark[100]}
                            borderWidth={1}
                            h={10}
                        />
                    )}
                </React.Fragment>
            ))}
        </HStack>
    );
}
