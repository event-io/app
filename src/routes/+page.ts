import auth from "$lib/api/auth"
import type { PageLoad } from "./$types"

export const load: PageLoad = async () => {
    return { session: await auth.getSession() }
}
