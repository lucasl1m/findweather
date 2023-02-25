import React, { useCallback, useState } from "react";

import { useFocusEffect } from "@react-navigation/native";

import { Box, Container, useTheme, View, Text, ScrollView, Image, HStack, VStack } from "native-base";
import { ActivityIndicator, Platform, StatusBar } from "react-native";

import DropMiniaturePNG from "../assets/drop-miniature.png";
import WindMiniaturePNG from "../assets/wind-miniature.png";
import RainingCloudMiniaturePNG from "../assets/raining-cloud-miniature.png";

import { Header } from "../components/Header";
import { Temperature } from "../components/Temperature";
import { WeatherDetailsCard } from "../components/WeatherDetailsCard";
import { WeekDayTemperature } from "../components/WeekDayTemperature";

import { formatAPIDate } from "../utils/formatDate";
import { IForecastData } from "../utils/search.interface";
import { IForecastDay } from "../utils/forecast5days.interface";
import { forecastConditionsIcons } from "../utils/forecastIcon";

type Props = {
    route: {
        params: {
            forecast: {
                forecastday: Array<IForecastData>;
            };
            forecast5Days: Array<IForecastDay>;
        };
    };
};

export function Next5Days({ route: { params } }: Props) {
    const { forecast, forecast5Days } = params;

    const theme = useTheme();

    const [filteredDaysForecast, setFilteredDaysForecast] = useState<
        Array<IForecastDay>
    >([]);

    const isAndroid = Platform.OS === "android";

    const filterForecastDays = () => {
        let filteredList = [];
        let previousDate = "";
        let maxTemp = -Infinity;
        let minTemp = Infinity;

        forecast5Days.forEach((item) => {
            const date = item.dt_txt.split(" ")[0];
            if (date !== previousDate) {
                if (previousDate !== "") {
                    filteredList[filteredList.length - 1].maxTemp = maxTemp;
                    filteredList[filteredList.length - 1].minTemp = minTemp;
                }
                filteredList.push(item);
                maxTemp = -Infinity;
                minTemp = Infinity;
            }

            previousDate = date;
            maxTemp = Math.max(maxTemp, item.main.temp_max);
            minTemp = Math.min(minTemp, item.main.temp_min);
        });

        filteredList[filteredList.length - 1].maxTemp = maxTemp;
        filteredList[filteredList.length - 1].minTemp = minTemp;

        setFilteredDaysForecast(filteredList);
    };

    const firstLetterUpperCase = (description: string) => {
        return description.charAt(0).toLocaleUpperCase() + description.slice(1);
    };

    useFocusEffect(
        useCallback(() => {
            filterForecastDays();
        }, [])
    );

    if (!filteredDaysForecast[0]) {
        return <ActivityIndicator size="large" color={theme.colors.white} />;
    }

    const { weather, maxTemp, minTemp, main, wind } = filteredDaysForecast[1];
    const { daily_chance_of_rain } = forecast.forecastday[0].day;

    const dataWeatherDescription = [
        {
            id: 1,
            icon: DropMiniaturePNG,
            value: `${main.humidity}%`,
            text: "Umidade",
        },

        {
            id: 2,
            icon: WindMiniaturePNG,
            value: `${Math.round(wind.speed)}km/h`,
            text: "Veloc. Vento",
        },
        {
            id: 3,
            icon: RainingCloudMiniaturePNG,
            value: `${daily_chance_of_rain}%`,
            text: "Chuva",
        },
    ];

    return (
        <VStack flex={1} bg={theme.colors.dark[500]}>
            <Header title="Próximos 5 dias" showBackButton />

            <ScrollView showsVerticalScrollIndicator={false} >
                <VStack flex={1}>
                    <HStack flex={1} space={4} mt={4}>
                        <Image
                            source={forecastConditionsIcons(
                                firstLetterUpperCase(
                                    weather[0].description
                                )
                            )}
                            alt="Weather Icon"
                            resizeMode="contain"
                            flex={1}
                            size="100%"
                        />

                        <VStack flex={1} w="100%">
                            <Text
                                fontSize={theme.fontSizes["2xl"]}
                                color={theme.colors.gray[100]}
                                style={{ textAlign: "left" }}
                            >
                                Amanhã
                            </Text>

                            <Temperature
                                maxTemp={Math.round(maxTemp)}
                                minTemp={Math.round(minTemp)}
                                maxTempFontSize={theme.fontSizes["6xl"]}
                                minTempFontSize={theme.fontSizes["2xl"]}
                            />

                            <Box h={isAndroid ? -10 : 0} />

                            <Text
                                fontSize={theme.fontSizes["2xl"]}
                                color={theme.colors.gray[100]}
                                style={{
                                    textAlign: "left",
                                    width: 180,
                                }}
                            >
                                {firstLetterUpperCase(
                                    weather[0].description
                                )}
                            </Text>
                        </VStack>
                    </HStack>

                    <WeatherDetailsCard data={dataWeatherDescription} />
                </VStack>

                <VStack mt={8} space={5}>
                    {filteredDaysForecast.map((item, index) => {
                        const { description, icon } = item.weather[0];

                        if (index === 0) {
                            return <React.Fragment key={index} />;
                        } else {
                            return (
                                <WeekDayTemperature
                                    key={index}
                                    date={formatAPIDate(item.dt_txt)}
                                    icon={icon}
                                    condition={firstLetterUpperCase(
                                        description
                                    )}
                                    maxTemp={Math.round(item.maxTemp)}
                                    minTemp={Math.round(item.minTemp)}
                                />
                            );
                        }
                    })}
                </VStack>
            </ScrollView >
        </VStack>
    );
};
