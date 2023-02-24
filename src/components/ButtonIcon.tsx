import { IconProps } from "phosphor-react-native";
import { Button, IButtonProps, useTheme } from "native-base";

interface Props extends IButtonProps {
    icon: React.FC<IconProps>;
}

export function ButtonIcon({ icon: Icon, ...rest }: Props) {
    const theme = useTheme();

    return (
        <Button
            w={10}
            h={10}
            bg="transparent"
            alignItems="center"
            justifyContent="center"
            borderWidth="1.5px"
            borderColor={theme.colors.dark[100]}
            rounded="xl"
            _pressed={{
                opacity: 0.5,
            }}
            {...rest}
        >
            <Icon color={theme.colors.gray[300]} size={20} />
        </Button>
    );
}
