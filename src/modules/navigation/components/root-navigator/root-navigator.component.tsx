import * as React from 'react';
import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavContainer } from '../nav-container/nav-container.component';
import { RootStackParamList, SCREENS } from '../../types/navigation.type';
import { SCREEN_OPTIONS } from '../../constants/screen-options';
import { AuthStackComponent } from 'src/modules/navigation/components/auth-stack';
import { BottomTabStackComponent } from 'src/modules/navigation/components/bottom-tab-stack';
import { ChatStackComponent } from 'src/modules/navigation/components/chat-stack';
import { useAuth } from 'src/modules/auth/hooks/useAuth';

const Stack = createNativeStackNavigator<RootStackParamList>();

// TODO Add splash screen

export const RootNavigator = () => {
	const { isAuthenticated, refreshSession } = useAuth();

	useEffect(() => {
		refreshSession();
	}, [isAuthenticated]);

	const screens = React.useMemo(() => {
		if (!isAuthenticated) {
			return (
				<Stack.Screen
					name={SCREENS.AUTH_STACK}
					component={AuthStackComponent}
					options={SCREEN_OPTIONS}
				/>
			);
		}

		return (
			<>
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
	}, [isAuthenticated]);

	return (
		<NavContainer>
			<Stack.Navigator>{screens}</Stack.Navigator>
		</NavContainer>
	);
};
