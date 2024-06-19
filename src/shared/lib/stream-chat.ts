import { StreamChat } from 'stream-chat';
import { Channel } from 'stream-chat';

import { STREAM_CHAT_API_KEY } from '@env';

export const chatClient = StreamChat.getInstance(STREAM_CHAT_API_KEY);

export type ChannelType = Channel;
