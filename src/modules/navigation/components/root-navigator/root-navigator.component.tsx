import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavContainer } from '../nav-container/nav-container.component';
import { RootStackParamList, SCREENS } from '../../types/navigation.type';
import { SCREEN_OPTIONS } from '../../constants/screen-options';
import { AuthStackComponent } from 'src/modules/navigation/components/auth-stack';
import { BottomTabStackComponent } from 'src/modules/navigation/components/bottom-tab-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
	const screens = React.useMemo(() => {
		return (
			<>
				<Stack.Screen
					name={SCREENS.AUTH_STACK}
					component={AuthStackComponent}
					options={SCREEN_OPTIONS}
				/>
				<Stack.Screen
					name={SCREENS.BOTTOM_BAR}
					component={BottomTabStackComponent}
					options={SCREEN_OPTIONS}
				/>
			</>
		);
	}, []);

	return (
		<NavContainer>
			<Stack.Navigator initialRouteName={SCREENS.BOTTOM_BAR}>
				{screens}
			</Stack.Navigator>
		</NavContainer>
	);
};
