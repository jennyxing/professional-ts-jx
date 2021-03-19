import * as React from 'react';
import { IChannel } from '../../types';
import Channel from './Channel';

const SelectedChannel: React.FunctionComponent<any> = ({ match, channels }) => {
  if (!channels) throw new Error('no channels');
  if (!match) throw new Error('no match');

  const { params } = match;
  if (!match) return <p>No match params</p>;
  const { channelId: selectedChannelId } = params;
  if (!selectedChannelId) return <p>Invalid channelId</p>;
  const selectedChannel = channels.find(
    // (c: any) => c.id === selectedChannelId, // this is the easiest solution
    (c: IChannel) => c.id === selectedChannelId, // this is a better solution
    // (c) => c.id === selectedChannelId, // we want to get a point where we don't have to explicitly type c. i.e. it can be inferred from the type of channels
  );
  if (!selectedChannel)
    return (
      <div>
        <p>Could not find channel with id {selectedChannelId}</p>
        <pre>{JSON.stringify(channels, null, '  ')}</pre>
      </div>
    );

  return <Channel channel={selectedChannel} />;
};

export default SelectedChannel;
