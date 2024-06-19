import * as React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { StreamChat } from 'stream-chat';

import { STREAM_CHAT_API_KEY } from '@env';
import { Skeleton } from 'src/shared/components/skeleton';

export const chatClient = StreamChat.getInstance(STREAM_CHAT_API_KEY);

export const HomeScreen = () => {
	// We use it for loading the user
	const [userLoading, setUserLoading] = useState(false);

	useEffect(() => {
		const initUser = async () => {
			setUserLoading(true);
			try {
				// Here we connect the user
				// TODO add real token instead of dev

				await chatClient.connectUser(
					{
						id: 'jlahey',
						name: 'Jim Lahey',
						image: 'https://i.imgur.com/fR9Jz14.png',
					},
					chatClient.devToken('jlahey'),
				);

				console.log(chatClient.userID);
			} catch (e) {
				setUserLoading(false);
				console.log(e);
			}

			setUserLoading(false);
		};

		initUser();

		return () => {
			chatClient.disconnectUser();
		};
	}, []);

	if (userLoading) {
		return (
			<Skeleton>
				<ActivityIndicator size="large" />
			</Skeleton>
		);
	}

	return (
		<Skeleton>
			<View>
				<Text>Home Screen</Text>
			</View>
		</Skeleton>
	);
};
