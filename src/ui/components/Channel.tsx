import * as React from 'react';
import { getChannelMessages } from '../../data/messages';
import { IMessage } from '../../types';
import { useAsyncDataEffect } from '../../utils/api';
import ChannelFooter from './Channel/Footer';
import ChannelHeader from './Channel/Header';
import ChannelMessage from './Channel/Message';
import Loading from './Loading';


const Channel: React.FunctionComponent<any> = ({
  channel,
}) => {

  // const [messages, setMessages] = React.useState<any[]>(); 
  const [messages, setMessages] = React.useState<undefined | IMessage[]>(); // this is an alternate solution to add typing without making any functional changes
  // const [messages, setMessages] = React.useState([] as any[]); // this could be problematic if we didn't have the length check on L25
  useAsyncDataEffect(
    () => getChannelMessages(channel.teamId, channel.id),
    {
      setter: setMessages,
      stateName: 'messages',
      otherStatesToMonitor: [channel],
    },
  );
  if (!messages) return <Loading message="Loading messages" />;
  if (messages.length === 0) return <Loading message="No messages" />;
  console.log(
    `%c CHANNEL render: ${channel.name}`,
    'background-color: purple; color: white',
  );
  return (
    <main className="flex-1 flex flex-col bg-white overflow-hidden channel">
      <ChannelHeader
        title={channel.name}
        description={channel.description}
      />
      <div
        className="py-4 flex-1 overflow-y-scroll channel-messages-list"
        role="list"
      >
        {messages.map((m) => (
          <ChannelMessage
            key={m.id}
            body={m.body}
            date={new Date(m.createdAt)}
            user={m.user}
          />
        ))}
      </div>

      <ChannelFooter channel={channel} />
    </main>
  );
};
export default Channel;
