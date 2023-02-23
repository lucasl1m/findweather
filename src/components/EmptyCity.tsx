import { Heading, Link, Image, useTheme} from "native-base";

export function EmptyCity() {
    const theme = useTheme();

    return (
        <>
            <Heading color="white" fontSize="4xl" textAlign="center">
                FindWeather
            </Heading>

            <Image
                source={require("../assets/climate-change.png")}
                alt="Logo"
                mt={12}
            />

            <Link
                onPress={() => {}}
                _text={{
                    color: theme.colors.gray[100],
                    fontSize: theme.fontSizes.xl,
                    textAlign: "center",
                }}
                mt={12}
            >
                Selecione aqui um local e encontre o clima em tempo real
            </Link>
        </>
    );
}
