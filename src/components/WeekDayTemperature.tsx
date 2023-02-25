import { HStack, useTheme, Text, Image, Box } from "native-base";
import { Temperature } from "./Temperature";

interface IWeekDayTemperature {
    date: string;
    icon: string;
    condition: string;
    minTemp: number;
    maxTemp: number;
  }

export function WeekDayTemperature({
    date,
    icon,
    condition,
    minTemp,
    maxTemp,
  }: IWeekDayTemperature) {

    const theme = useTheme();

    return (
      <HStack flex={1} space={4}>
        <HStack flex={1} space={2}>
          <Text
            color={theme.colors.white}
            fontSize={theme.fontSizes.md}
          >
            {date.split(" ")[0]}
          </Text>
          <Text
            color={theme.colors.gray[100]}
            fontSize={theme.fontSizes.md}
          >
            {`${date.split(" ")[1]} ${date.split(" ")[2]}`}
          </Text>
        </HStack>

        <HStack flex={1}>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
            }}
            alt={`Ícone ${condition}`}
            size={30}
          />

          <Text
            color={theme.colors.gray[100]}
            fontSize={theme.fontSizes.md}
            style={{ width: 100 }}
          >
            {condition}
          </Text>
        </HStack>

        <Box flex={1} alignItems="flex-end">
          <Temperature
            maxTemp={maxTemp}
            maxTempFontSize={16}
            minTemp={minTemp}
            minTempFontSize={16}
            roundSize={10}
          />
        </Box>
      </HStack>
    );
  };
