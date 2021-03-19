import { IChannel } from '../types';
import { apiCall } from '../utils/networking';

const cachedChannelRecords: {
  [channelId: string]: Promise<IChannel> | undefined;
} = {};

export async function getChannelById(id: string): Promise<IChannel> {
  let cached = cachedChannelRecords[id];
  if (typeof cached !== 'undefined') return await cached;
  cached = cachedChannelRecords[id] = apiCall(`Channels/${id}`);

  return await cached;
}
