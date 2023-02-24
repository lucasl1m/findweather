import { Text, HStack, Box, theme, Center } from "native-base";
import { CaretLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

import { ButtonIcon } from "./ButtonIcon";

interface Props {
    title: string;
    showBackButton?: boolean;
}

export function Header({ title, showBackButton = false }: Props) {
    const EmptyBoxSpace = () => <Box w={6} h={6} />;
    const navigator = useNavigation();

    return (
        <HStack w="full" alignItems="center" justifyContent="space-between">
            {showBackButton ? (
                <ButtonIcon
                    icon={CaretLeft}
                    onPress={() => navigator.navigate("home")}
                />
            ) : (
                <EmptyBoxSpace />
            )}

            <Text
                color={theme.colors.white}
                fontSize="lg"
                textAlign="center"
                fontWeight="semibold"
            >
                {title}
            </Text>

            <EmptyBoxSpace />
        </HStack>
    );
}
