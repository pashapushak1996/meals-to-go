import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS } from 'src/modules/navigation/types/navigation.type';
import { ChatScreen } from 'src/modules/chat';
import { ChatProvider } from 'src/shared/providers/ChatProvider';

const Stack = createNativeStackNavigator();

export const ChatStackComponent = () => {
	return (
		<ChatProvider>
			<Stack.Navigator>
				<Stack.Screen
					name={SCREENS.CHAT}
					component={ChatScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</ChatProvider>
	);
};
