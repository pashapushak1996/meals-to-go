import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavContainer } from '../nav-container/nav-container.component';
import { RootStackParamList, SCREENS } from '../../types/navigation.type';
import { SCREEN_OPTIONS } from '../../constants/screen-options';
import { AuthStackComponent } from 'src/modules/navigation/components/auth-stack';
import { BottomTabStackComponent } from 'src/modules/navigation/components/bottom-tab-stack';
import { ChatStackComponent } from 'src/modules/navigation/components/chat-stack';
import { useUserStore } from 'src/modules/auth/store/useUserStore';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
	const { isAuthenticated } = useUserStore();

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
				<Stack.Screen
					name={SCREENS.CHAT_STACK}
					component={ChatStackComponent}
					options={{ headerBackTitle: 'Back', headerTitle: 'Chat' }}
				/>
			</>
		);
	}, []);

	return (
		<NavContainer>
			<Stack.Navigator
				initialRouteName={
					isAuthenticated ? SCREENS.BOTTOM_BAR : SCREENS.AUTH_STACK
				}
			>
				{screens}
			</Stack.Navigator>
		</NavContainer>
	);
};
