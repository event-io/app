import db from '$lib/api/db.ts';
import type {PageLoad} from "./$types";

export const load: PageLoad = async () => {
    return {
        events: await db.events.all()
    }
}
