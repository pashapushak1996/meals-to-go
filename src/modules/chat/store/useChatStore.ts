import { create } from 'zustand';

import { ChannelType } from 'src/shared/lib/stream-chat';

type State = {
	channel: ChannelType | null;
};

type Actions = {
	setChannel: (channel: ChannelType) => void;
};

export const useChatStore = create<State & Actions>((set) => ({
	channel: null,
	setChannel: (channel: ChannelType | null) => set(() => ({ channel })),
}));
