import React from 'react';
import { Channel, MessageInput, MessageList } from 'stream-chat-react-native';
import { useChatStore } from 'src/modules/chat/store/useChatStore';
import { Loader } from 'src/shared/components/loader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from 'src/shared/themes';
import { StyleSheet } from 'react-native';

export const ChatScreen = () => {
	const { channel } = useChatStore();

	if (!channel) {
		return <Loader />;
	}

	return (
		<Channel channel={channel}>
			<MessageList />
			<SafeAreaView edges={['bottom']} style={styles.safeAreaView}>
				<MessageInput />
			</SafeAreaView>
		</Channel>
	);
};

const styles = StyleSheet.create({
	safeAreaView: { backgroundColor: COLORS.white },
});
