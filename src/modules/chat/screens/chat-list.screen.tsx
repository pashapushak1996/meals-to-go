import React from 'react';
import { Text, View } from 'react-native';
import { Skeleton } from 'src/shared/components/skeleton';
import { Button } from 'src/shared/components/button';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'src/modules/navigation/types/navigation.type';

export const ChatListScreen = () => {
	const navigation = useNavigation();
	return (
		<Skeleton>
			<Text>Chat list</Text>
			<Button
				onPress={() =>
					navigation.navigate(SCREENS.CHAT_STACK, {
						screen: SCREENS.CHAT,
						params: { cid: '2' },
					})
				}
				text="Navigate to Chat"
			/>
		</Skeleton>
	);
};
