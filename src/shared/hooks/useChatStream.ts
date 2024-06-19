import { useEffect, useState } from 'react';
import { chatClient } from 'src/shared/lib/stream-chat';

export const useStreamChat = () => {
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

		connect();
	}, []);

	return { isConnected };
};
