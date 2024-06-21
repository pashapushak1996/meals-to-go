import React, {
	PropsWithChildren,
	useEffect,
	useState,
	createContext,
	useContext,
} from 'react';
import { Chat, OverlayProvider } from 'stream-chat-react-native';

import { chatClient } from 'src/shared/lib/stream-chat';

const ChatContext = createContext({ isConnected: false });

export const ChatProvider = ({ children }: PropsWithChildren) => {
	const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
		const connect = async () => {
			try {
				await chatClient.connectUser(
					{
						id: 'jlahey',
						name: 'Jim Lahey',
						image: 'https://i.imgur.com/fR9Jz14.png',
					},
					chatClient.devToken('jlahey'),
				);

				setIsConnected(true);
			} catch (error) {
				setIsConnected(false);
			}
		};

		if (!chatClient.userID && !isConnected) {
			connect();
		}
	}, []);

	return (
		<ChatContext.Provider value={{ isConnected }}>
			<OverlayProvider>
				<Chat client={chatClient}>{children}</Chat>
			</OverlayProvider>
		</ChatContext.Provider>
	);
};

export const useChatContext = () => useContext(ChatContext);
