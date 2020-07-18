export enum CONSTANTS {
	GATEWAY = 'wss://gateway.discord.gg/?v=6&encoding=json',
	API = 'https://discord.com/api/v6'
}

export enum CHANNELTYPES {
	TEXT = 0,
	DM = 1,
	VOICE = 2,
	GROUP = 3,
	CATEGORY = 4,
	NEWS = 5,
	STORE = 6
}

export type Snowflake = string;

export type APIMethods =
	| 'BanAdd'
	| 'BanRemove'
	| 'DeleteMessage'
	| 'GetGuild'
	| 'SendMessage'
	| 'GetGuildChannels'
	| 'GetGuildMembers'
	| 'GetUser';
