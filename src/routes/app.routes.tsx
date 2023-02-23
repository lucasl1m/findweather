import { useTheme } from "native-base";

import { Welcome } from "../screens/Welcome";
import { Home } from "../screens/Home";
import { Search } from "../screens/Search";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Platform } from "react-native";

import { MagnifyingGlass, House } from "phosphor-react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="welcome" component={Welcome} />
            <Stack.Screen name="main" component={MainTabs} />
        </Stack.Navigator>
    );
}

function MainTabs() {
    const { colors } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: "beside-icon",
                tabBarActiveTintColor: colors.white,
                tabBarInactiveTintColor: colors.gray[500],
                tabBarStyle: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: colors.dark[500],
                    borderTopWidth: 0,
                    paddingBottom: 0,
                },
                tabBarItemStyle: {
                    position: "relative",
                    top: Platform.OS === "android" ? -10 : 0,
                },
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <House size={24} color={color} />
                    ),
                    tabBarLabel: "Home",
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: "300",
                    },
                }}
            />

            <Tab.Screen
                name="search"
                component={Search}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MagnifyingGlass size={24} color={color} />
                    ),
                    tabBarLabel: "Buscar",
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: "300",
                    },
                }}
            />
        </Tab.Navigator>
    );
}
