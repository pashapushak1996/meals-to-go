import React from 'react';
import { Text } from 'react-native';
import { ChannelList, Chat } from 'stream-chat-react-native';

import { Skeleton } from 'src/shared/components/skeleton';
import { chatClient } from 'src/shared/lib/stream-chat';
import { useStreamChat } from 'src/shared/hooks/useChatStream';
import { Loader } from 'src/shared/components/loader';

export const ChatListScreen = () => {
	const { isConnected } = useStreamChat();

	return (
		<Chat client={chatClient}>
			<Skeleton>
				{isConnected ? (
					<ChannelList numberOfSkeletons={3} />
				) : (
					<Loader />
				)}
			</Skeleton>
		</Chat>
	);
};
