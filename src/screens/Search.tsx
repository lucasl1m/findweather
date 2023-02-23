import { useState } from "react";
import { useTheme, Text, VStack } from "native-base";

import { Header } from "../components/Header";
import { Input } from "../components/Input";

import { MagnifyingGlass } from "phosphor-react-native";
import { NotFoundSearch } from "../components/NotFoundSearch";

export function Search() {
    const theme = useTheme();

    const [search, setSearch] = useState("");

    return (
        <VStack flex={1} bg={theme.colors.dark[500]}>
            <Header title="Busca" showBackButton />
            <Input
                mt={12}
                placeholder="Digite o nome de uma cidade"
                InputLeftElement={
                    <MagnifyingGlass size={20} color={theme.colors.gray[200]} />
                }
                onChangeText={setSearch}
                value={search}
            />
            <NotFoundSearch />
        </VStack>
    );
}
