import React from 'react';
import { ChannelList, Chat } from 'stream-chat-react-native';
import { useNavigation } from '@react-navigation/native';

import { Skeleton } from 'src/shared/components/skeleton';
import { ChannelType, chatClient } from 'src/shared/lib/stream-chat';
import { useStreamChat } from 'src/shared/hooks/useChatStream';
import { Loader } from 'src/shared/components/loader';
import { useChatStore } from '../store/useChatStore';
import { SCREENS } from 'src/modules/navigation/types/navigation.type';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ChatListScreen = () => {
	const { isConnected } = useStreamChat();
	const { setChannel } = useChatStore();
	const navigation = useNavigation();

	const onClickChatItem = (channel: ChannelType) => {
		setChannel(channel);

		navigation.navigate(SCREENS.CHAT_STACK, {
			screen: SCREENS.CHAT,
			params: { cid: channel.cid },
		});
	};

	return (
		<Chat client={chatClient}>
			<SafeAreaView edges={['top']} style={{ flex: 1 }}>
				{isConnected ? (
					<ChannelList
						numberOfSkeletons={3}
						onSelect={onClickChatItem}
					/>
				) : (
					<Loader />
				)}
			</SafeAreaView>
		</Chat>
	);
};
