import React from 'react';
import { ChannelList, Chat } from 'stream-chat-react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import { ChannelType, chatClient } from 'src/shared/lib/stream-chat';
import { useChatStore } from '../store/useChatStore';
import { SCREENS } from 'src/modules/navigation/types/navigation.type';
import { useChatContext } from 'src/shared/providers/ChatProvider';
import { Loader } from 'src/shared/components/loader';

export const ChatListScreen = () => {
	const { isConnected } = useChatContext();
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
			<SafeAreaView edges={['top']} style={styles.flex}>
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

const styles = StyleSheet.create({ flex: { flex: 1 } });
