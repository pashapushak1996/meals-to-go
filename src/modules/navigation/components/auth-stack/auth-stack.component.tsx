import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS } from 'src/modules/navigation/types/navigation.type';
import { SignInScreen, SignUpScreen } from 'src/modules/auth';
import { SCREEN_OPTIONS } from 'src/modules/navigation/constants/screen-options';

const Stack = createNativeStackNavigator();

export const AuthStackComponent = () => {
	return (
		<Stack.Navigator
			initialRouteName={SCREENS.SIGN_IN}
			screenOptions={SCREEN_OPTIONS}
		>
			<Stack.Screen name={SCREENS.SIGN_IN} component={SignInScreen} />
			<Stack.Screen name={SCREENS.SIGN_UP} component={SignUpScreen} />
		</Stack.Navigator>
	);
};
