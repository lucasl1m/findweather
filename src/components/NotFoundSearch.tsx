import { Center, Image, Text } from "native-base";

export function NotFoundSearch() {
    return (
        <Center mt={10}>
            <Image
                source={require("../assets/not-found-destination.png")}
                alt="Imagem de um mapa com uma seta apontando para um local não encontrado"
            />
            <Center mt={6}>
                <Text
                    mt={4}
                    fontSize="lg"
                    color="gray.100"
                    fontWeight="semibold"
                >
                    OPS!
                </Text>
                <Text
                    mt={4}
                    fontSize="lg"
                    color="gray.100"
                    fontWeight="semibold"
                >
                    Não foi possível encontrar o local desejado!
                </Text>
            </Center>
        </Center>
    );
}
