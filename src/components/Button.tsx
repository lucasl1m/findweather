import {
    Button as ButtonNativeBase,
    IButtonProps,
    Text,
    useTheme,
} from "native-base";

interface Props extends IButtonProps {
    title: string;
}

export function Button({ title, ...rest }: Props) {
    const theme = useTheme();

    return (
        <ButtonNativeBase
            w="full"
            rounded="xl"
            borderWidth={1}
            borderColor={theme.colors.gray[300]}
            bg={theme.colors.dark[300]}
            _pressed={{
                opacity: 0.75,
            }}
            _loading={{
                _spinner: { color: theme.colors.white },
            }}
            {...rest}
        >
            <Text
                fontSize={theme.fontSizes.lg}
                fontFamily="Overpass_400Regular"
                color={theme.colors.white}
            >
                {title}
            </Text>
        </ButtonNativeBase>
    );
}
