// for just stuff in my app. as opposed to global.d.ts
export interface IChannel {
    id: string;
    name: string;
}

export interface IUser {
    iconUrl: string;
    name: string
}

export interface IMessage {
    id: string;
    createdAt: string;
    date: Date;
    body: string;
    user: IUser;
}

export interface IHeader {
    title: string,
    description: string;
}
export interface IFooter {
    channel: IChannel;
}

export interface ITeam {
    id: string;
    name: string;
    channels: IChannel[];
}