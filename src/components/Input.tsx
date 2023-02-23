import {
    Input as InputNativeBase,
    IInputProps,
    Text,
    useTheme,
} from "native-base";

export function Input({ ...rest }: IInputProps){
    const theme = useTheme();

    return(
        <InputNativeBase
            h={49}
            rounded="lg"
            bg={theme.colors.dark[400]}
            color={theme.colors.white}
            fontSize={theme.fontSizes.lg}
            placeholderTextColor={theme.colors.gray[200]}
            borderWidth={0}
            {...rest}
        />
    )
}
