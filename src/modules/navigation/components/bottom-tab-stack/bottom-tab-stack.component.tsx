import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
	RootStackParamList,
	SCREENS,
} from 'src/modules/navigation/types/navigation.type';
import { HomeScreen } from 'src/modules/home';
import { SCREEN_OPTIONS } from 'src/modules/navigation/constants/screen-options';

const BottomTabStack = createBottomTabNavigator<RootStackParamList>();

export const BottomTabStackComponent = () => {
	return (
		<BottomTabStack.Navigator
			screenOptions={SCREEN_OPTIONS}
			initialRouteName={SCREENS.HOME}
		>
			<BottomTabStack.Screen name={SCREENS.HOME} component={HomeScreen} />
		</BottomTabStack.Navigator>
	);
};
