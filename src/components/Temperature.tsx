import { Box, HStack, Text, useTheme } from "native-base";

interface ITemperature {
    minTemp: number;
    maxTemp: number;
    minTempFontSize: number;
    maxTempFontSize: number;
    roundSize?: number;
}

export function Temperature({
    minTemp,
    maxTemp,
    minTempFontSize,
    maxTempFontSize,
    roundSize,
}: ITemperature) {
    const theme = useTheme();

    return (
        <HStack alignItems="center">
            <HStack>
                <Text fontSize={maxTempFontSize} color={theme.colors.white}>
                    {Math.floor(maxTemp)}
                </Text>
                <Text
                    fontSize={roundSize ? roundSize : theme.fontSizes["3xl"]}
                    color={theme.colors.white}
                    style={{
                        paddingTop: roundSize ? 0 : 8,
                    }}
                >
                    º
                </Text>
            </HStack>

            <HStack>
                <Text
                    fontSize={minTempFontSize}
                    color={theme.colors.gray[100]}
                >
                    {""} / {""} {Math.floor(minTemp)}
                </Text>
                <Text
                    fontSize={roundSize ? roundSize : theme.fontSizes.xl}
                    color={theme.colors.gray[100]}
                    style={{ paddingBottom: roundSize ? 10 : 24 }}
                >
                    º
                </Text>
            </HStack>
        </HStack>
    );
}
