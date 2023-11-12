import db from '$lib/api/db.ts';
import type {PageLoad} from "./$types";

export const load: PageLoad = async ({params}) => {
    return {
        event: await db.events.getAll(params.id)
    }
}