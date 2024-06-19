import React from 'react';
import { Channel, MessageInput, MessageList } from 'stream-chat-react-native';
import { useChatStore } from 'src/modules/chat/store/useChatStore';
import { Loader } from 'src/shared/components/loader';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ChatScreen = () => {
	const { channel } = useChatStore();

	if (!channel) {
		return <Loader />;
	}

	return (
		<Channel channel={channel}>
			<MessageList />
			<SafeAreaView edges={['bottom']}>
				<MessageInput />
			</SafeAreaView>
		</Channel>
	);
};
