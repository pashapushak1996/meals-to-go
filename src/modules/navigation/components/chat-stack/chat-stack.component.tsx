import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from 'src/modules/navigation/types/navigation.type';

import { ChatScreen } from 'src/modules/chat';
import { Chat } from 'stream-chat-react-native';
import { chatClient } from 'src/shared/lib/stream-chat';

const Stack = createNativeStackNavigator();

export const ChatStackComponent = () => {
	return (
		<Chat client={chatClient}>
			<Stack.Navigator>
				<Stack.Screen
					name={SCREENS.CHAT}
					component={ChatScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</Chat>
	);
};
