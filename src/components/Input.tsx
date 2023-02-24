import {
    Input as InputNativeBase,
    IInputProps,
    useTheme,
    Icon,
} from "native-base";

export function Input({ ...rest }: IInputProps){
    const theme = useTheme();

    return(
        <InputNativeBase
            w="100%"
            h={12}
            px={3}
            py={2}
            rounded="lg"
            bg={theme.colors.dark[300]}
            color={theme.colors.white}
            fontSize={theme.fontSizes.md}
            placeholderTextColor={theme.colors.gray[200]}
            borderWidth={0}
            blurOnSubmit={true}
            autoFocus={true}
            _focus={{
                bg: theme.colors.dark[300],
            }}
            {...rest}
        />
    )
}
