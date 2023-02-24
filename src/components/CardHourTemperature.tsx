import { Center, HStack, Text, Image, useTheme } from "native-base";

interface ICardHourTemperature {
    id: number;
    temperatureValue: number;
    icon: string;
    hour: string;
}

interface ICardHourTemperatureData {
    data: ICardHourTemperature[];
}

export function CardHourTemperature({ data }: ICardHourTemperatureData) {
    const theme = useTheme();

    return (
        <HStack mt={4}>
            {data.map((item) => (
                <Center
                    key={item.id}
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
                        {`${item.temperatureValue}°`}
                    </Text>
                    <Image source={{ uri: `https:${item.icon}` }} alt="" size={8} my={2} />
                    <Text
                        color={theme.colors.gray[100]}
                        fontSize="xs"
                        fontWeight="bold"
                    >
                        {item.hour}
                    </Text>
                </Center>
            ))}
        </HStack>
    );
}
