import { useNavigation } from "@react-navigation/native";
import { Heading, Text, Link, Image, useTheme, Center } from "native-base";

export function EmptyCity() {
    const theme = useTheme();
    const navigation = useNavigation();

    return (
        <>
            <Center flexDir="row">
                <Text color="white" fontSize="4xl" textAlign="center">
                    Find
                </Text>
                <Heading
                    color="white"
                    fontSize="4xl"
                    textAlign="center"
                    fontWeight="semibold"
                >
                    Weather
                </Heading>
            </Center>

            <Image
                source={require("../assets/climate-change.png")}
                alt="Logo"
                mt={12}
                alignSelf="center"
            />

            <Link
                onPress={() => navigation.navigate("search")}
                _text={{
                    color: theme.colors.gray[100],
                    fontSize: theme.fontSizes.xl,
                    textAlign: "center",
                }}
                mt={12}
                alignSelf="center"
            >
                Selecione aqui um local e encontre o clima em tempo real
            </Link>
        </>
    );
}
