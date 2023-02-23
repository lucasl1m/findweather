import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { IconProps } from "phosphor-react-native";
import { Button, IButtonProps, useTheme } from "native-base";

interface Props extends IButtonProps {
    icon: React.FC<IconProps>;
}

export function ButtonIcon({ icon: Icon, ...rest }: Props) {
    const { colors } = useTheme();

    return (
        <Button
            w={10}
            h={10}
            alignItems="center"
            justifyContent="center"
            _pressed={{
                opacity: 0.5,
            }
            }
            {...rest}
        >
            <Icon color={colors.gray[300]} size={20} />
        </Button>
    );
}
