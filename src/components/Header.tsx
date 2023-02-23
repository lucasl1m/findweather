import { Text, HStack, Box, theme, Center } from "native-base";
import { CaretLeft, Export } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

import { ButtonIcon } from "./ButtonIcon";

interface Props {
    title: string;
    subtitle?: string;
    showBackButton?: boolean;
}

export function Header({ title, subtitle, showBackButton = false }: Props) {
    const EmptyBoxSpace = () => <Box w={6} h={6} />;
    const navigator = useNavigation();

    return (
        <HStack w="full" alignItems="center" justifyContent="space-between">
            {showBackButton ? (
                <ButtonIcon
                    icon={CaretLeft}
                    bg="transparent"
                    borderWidth={1}
                    borderColor={theme.colors.gray[600]}
                    rounded="xl"
                    onPress={() => navigator.navigate("home")}
                />
            ) : (
                <EmptyBoxSpace />
            )}

            <Center>
                <Text color={theme.colors.white} fontSize="lg" textAlign="center" fontWeight="semibold">
                    {title}
                </Text>

                <Text color={theme.colors.gray[100]} fontSize="sm" textAlign="center">
                    {subtitle}
                </Text>
            </Center>

            <EmptyBoxSpace />
        </HStack>
    );
}
