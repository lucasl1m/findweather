import { useState } from "react";
import { useTheme, VStack, Button, Box } from "native-base";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { NotFoundSearch } from "../components/NotFoundSearch";
import { CityCard, ICardResult } from "../components/CityCard";

import { MagnifyingGlass } from "phosphor-react-native";

import { FindWeatherAPI } from "../services/FindWeatherAPI";
import { ISearchData } from "../utils/search.interface";
import { ActivityIndicator } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { CITY_NAME } from "../storage/storage.config";
import { useNavigation } from "@react-navigation/native";

export function Search() {
    const theme = useTheme();
    const navigator = useNavigation();

    const [isError, setIsError] = useState(false);
    const [textTyped, setTextTyped] = useState("");
    const [response, setResponse] = useState<ISearchData>(null);
    const [dataCard, setDataCard] = useState({} as ICardResult);

    const [isLoading, setIsLoading] = useState(false);

    const handleSelectCity = async (city: string) => {
        await AsyncStorage.setItem(CITY_NAME, city);

        setTextTyped("");

        navigator.navigate("home");
    };

    const handleCallAPI = async () => {
        FindWeatherAPI.getForecast(textTyped)
            .then(async (res) => {
                setIsLoading(true);
                setResponse(res.data);

                const { location, current } = res.data;

                setDataCard({
                    location: {
                        name: location.name,
                        region: location.region,
                        country: location.country,
                    },
                    current: {
                        temp_c: current.temp_c,
                    },
                    condition: {
                        text: current.condition.text,
                        icon: current.condition.icon,
                    },
                });
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("Error to get api data: ", error);

                setIsError(true);
                setTextTyped("");
                setIsLoading(false);
            });
    };
    return (
        <VStack flex={1} bg={theme.colors.dark[500]}>
            <Header title="Busca" showBackButton />
            <Box w="full" mt={10} flexDir="row" alignItems="center">
                <Input
                    width="100%"
                    placeholder="Digite o nome de uma cidade"
                    onChangeText={setTextTyped}
                    value={textTyped}
                    onSubmitEditing={handleCallAPI}
                    InputRightElement={
                        <Button
                            bg={theme.colors.dark[100]}
                            onPress={handleCallAPI}
                            _pressed={{
                                bg: theme.colors.dark[200],
                            }}
                        >
                            <MagnifyingGlass
                                size={24}
                                color={theme.colors.white}
                            />
                        </Button>
                    }
                />
            </Box>

            {isLoading && (
                <>
                    <ActivityIndicator
                        style={{ marginTop: 40 }}
                        size="small"
                        color={theme.colors.white}
                    />
                </>
            )}

            {isError && <NotFoundSearch />}
            {response && !isError && !isLoading && (
                <CityCard
                    data={dataCard}
                    onPress={() => handleSelectCity(dataCard.location.name)}
                />
            )}
        </VStack>
    );
}
