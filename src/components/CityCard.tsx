import { Box, Text, Image, useTheme, Button, IButtonProps } from "native-base";

export interface ICardResult {
    location: {
        name: string;
        region: string;
        country: string;
    };
    current: {
        temp_c: number;
    };
    condition: {
        text: string;
        icon: string;
    };
}

interface ICardResultData extends IButtonProps {
    data: ICardResult;
}

export function CityCard({ data, ...rest }: ICardResultData) {
    const theme = useTheme();

    const { location, current, condition } = data;

    return (
        <Button
            width="50%"
            bg={theme.colors.dark[300]}
            px={3}
            py={4}
            rounded="20px"
            borderWidth={"1.5px"}
            borderColor={theme.colors.dark[100]}
            mt={10}
            {...rest}
        >
            <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box flexDirection="row">
                    <Text
                        fontSize={theme.fontSizes["3xl"]}
                        color={theme.colors.white}
                        textAlign="left"
                    >
                        {current && Math.floor(current.temp_c)}
                    </Text>
                    <Text
                        fontSize={theme.fontSizes["xl"]}
                        color={theme.colors.white}
                        textAlign="left"
                    >
                        º
                    </Text>
                </Box>

                <Image
                    source={{ uri: `https:${condition.icon}` }}
                    alt="Ícone da condição atual da cidade"
                    size="45px"
                />
            </Box>

            <Text
                fontSize={theme.fontSizes["lg"]}
                color={theme.colors.gray[100]}
                textAlign="left"
            >
                {condition.text}
            </Text>

            <Text
                fontSize={theme.fontSizes["lg"]}
                color={theme.colors.white}
                mt={4}
            >
                {location.name}, {location.region && location.region + ","}{" "}
                {location.country}
            </Text>
        </Button>
    );
}
