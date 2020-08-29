import { EvolveClient } from '../Client/EvolveClient';
import { Payload } from '../Interfaces/Interfaces';
import { EVENTS } from '../Constants/Events';

export default class {
	constructor(client: EvolveClient, payload: Payload, shard: number) {
		(async() => {
			const { guild_id, role_id } = payload.d
			const guild = await client.api.getGuild(guild_id)
			const role = client.roles.get(role_id)

			client.emit(EVENTS.GUILD_ROLE_DELETE, role, guild)
		});
	}
}
