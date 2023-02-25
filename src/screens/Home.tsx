import {
    Text,
    useTheme,
    VStack,
    Image,
    Heading,
    HStack,
    Link,
    FlatList,
    SectionList,
    Center,
    Box,
} from "native-base";

import React, { useCallback, useEffect, useState } from "react";

import { CaretRight } from "phosphor-react-native";

import { EmptyCity } from "../components/EmptyCity";
import { WeatherDetailsCard } from "../components/WeatherDetailsCard";
import { CardHourTemperature } from "../components/CardHourTemperature";

import RainingPNG from "../assets/raining.png";
import DropMiniaturePNG from "../assets/drop-miniature.png";
import WindMiniaturePNG from "../assets/wind-miniature.png";
import RainingCloudPNG from "../assets/raining-cloud-miniature.png";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { MapPin } from "phosphor-react-native";
import {
    ICurrent,
    IForecastData,
    ILocation,
    ISearchData,
} from "../utils/search.interface";
import { CITY_NAME, COUNTRY_CODE } from "../storage/storage.config";
import { FindWeatherAPI } from "../services/findweather-api";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { formatDate } from "../utils/formatDate";
import { IForecast5Days, IForecastDay } from "../utils/forecast5days.interface";
import { FindWeatherOpenWeatherAPI } from "../services/findweather-api-openweather";
import { forecastConditionsIcons } from "../utils/forecastIcon";

interface IFullContentData {
    location: ILocation;
    current: ICurrent;
    forecast: {
        forecastday: Array<IForecastData>;
    };
    forecast5Days: Array<IForecastDay>;
    date: string;
}

function FullContent({
    location,
    current,
    forecast,
    forecast5Days,
    date,
}: IFullContentData) {
    const { humidity, wind_kph } = current;
    const { daily_chance_of_rain } = forecast.forecastday[0].day;

    const dataWeatherDescription = [
        {
            id: 1,
            icon: DropMiniaturePNG,
            value: `${humidity}%`,
            text: "Umidade",
        },

        {
            id: 2,
            icon: WindMiniaturePNG,
            value: `${Math.floor(wind_kph)}km/h`,
            text: "Veloc. Vento",
        },

        {
            id: 3,
            icon: RainingCloudPNG,
            value: `${Math.floor(daily_chance_of_rain)}%`,
            text: "Chuva",
        },
    ];

    const theme = useTheme();
    const navigation = useNavigation();

    return (
        <VStack flex={1} bg={theme.colors.dark[500]}>
            <VStack alignItems="center">
                <HStack alignItems="center">
                    <MapPin size={20} color={theme.colors.white} />
                    <Text
                        fontSize={theme.fontSizes.xl}
                        color={theme.colors.white}
                    >
                        {""} {location.name}, {""}
                    </Text>

                    <Text
                        fontSize={theme.fontSizes.xl}
                        color={theme.colors.white}
                    >
                        {location.country}
                    </Text>
                </HStack>
                <Text
                    fontSize={theme.fontSizes.lg}
                    color={theme.colors.gray[100]}
                >
                    {date}
                </Text>
            </VStack>
            <Image
                source={forecastConditionsIcons(current.condition.text)}
                alt="Imagem referente ao clima"
                size={200}
                mt={12}
                alignSelf="center"
            />
            <Heading color="white" fontSize="6xl" textAlign="center" mt={2}>
                {Math.floor(current.temp_c)}°
            </Heading>
            <Text
                color={theme.colors.gray[100]}
                fontSize="3xl"
                textAlign="center"
                mt={2}
            >
                {current.condition.text}
            </Text>

            <WeatherDetailsCard data={dataWeatherDescription} />

            <VStack w="full" mt={6}>
                <HStack alignItems="center" justifyContent="space-between">
                    <Text color={theme.colors.white} fontSize="2xl">
                        Hoje
                    </Text>
                    <Link
                        onPress={() =>
                            navigation.navigate("next5Days", {
                                forecast: forecast,
                                forecast5Days: forecast5Days,
                            })
                        }
                        alignItems="center"
                        _text={{
                            color: theme.colors.gray[100],
                            fontSize: "lg",
                        }}
                    >
                        Próximos 5 dias
                        <CaretRight size={20} color={theme.colors.gray[100]} />
                    </Link>
                </HStack>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={forecast.forecastday[0].hour}
                    ItemSeparatorComponent={() => <Box w={theme.space[1]} />}
                    keyExtractor={(_, index) => String(index)}
                    renderItem={({ item, index }) => {
                        const dataCardHourTemperature = [
                            {
                                id: index,
                                icon: item.condition.icon,
                                temperatureValue: Math.floor(item.temp_c),
                                hour: item.time.substring(11, 16),
                            },
                        ];
                        return (
                            <CardHourTemperature
                                data={dataCardHourTemperature}
                                key={index}
                            />
                        );
                    }}
                />
            </VStack>
        </VStack>
    );
}

export function Home() {
    const theme = useTheme();

    const [city, setCity] = useState(null);
    const [countryCode, setCountryCode] = useState(null);
    const [response, setResponse] = useState<ISearchData>(null);
    const [currentDate, setCurrentDate] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [forecast5Days, setForecast5Days] = useState<IForecast5Days>(null);

    const getDate = () => {
        setCurrentDate(formatDate());
    };

    const getCityName = useCallback(async () => {
        const storedCity = await AsyncStorage.getItem(CITY_NAME);
        const storedCountryCode = await AsyncStorage.getItem(COUNTRY_CODE);

        setCountryCode(storedCountryCode);

        setCity(storedCity);

        setIsLoading(false);
    }, []);

    const getAPIData = async () => {
        setIsLoading(true);

        await FindWeatherAPI.getForecast(city)
            .then((response) => {
                const data = response.data;

                setResponse(data);
                setIsLoading(false);
            })
            .catch((error) => console.log("Error calling API: ", error));
    };

    const getForecast5Days = async () => {
        setIsLoading(true);

        await FindWeatherOpenWeatherAPI.getForecast(city, countryCode)
            .then((res) => {
                const data: IForecast5Days = res.data;

                setForecast5Days(data);
            })
            .catch((error) =>
                console.log("Error calling 5 next days forecast API: ", error)
            );
    };

    useFocusEffect(
        useCallback(() => {
            getCityName();
        }, [])
    );

    useEffect(() => {
        if (city) {
            getAPIData();
            getDate();
            getForecast5Days();
        } else {
            setIsLoading(false);
            setResponse(null);
            setForecast5Days(null);
        }
    }, [city]);

    if (isLoading) {
        return (
            <Center flex={1} bg={theme.colors.dark[500]}>
                <ActivityIndicator size="small" color={theme.colors.white} />
            </Center>
        );
    }
    return (
        <SectionList
            style={{
                backgroundColor: theme.colors.dark[500],
                paddingHorizontal: 16,
            }}
            sections={[
                {
                    title: "",
                    data: [
                        response ? (
                            <FullContent
                                current={response.current}
                                location={response.location}
                                forecast={response.forecast}
                                forecast5Days={
                                    forecast5Days && forecast5Days.list
                                }
                                date={currentDate}
                            />
                        ) : (
                            <EmptyCity />
                        ),
                    ],
                },
            ]}
            renderItem={({ item }) => item}
            keyExtractor={(_, index) => String(index)}
        />
    );
}
