import auth from "$lib/api/auth.ts"

export const load: PageLoad = async () => {
    return { session: await auth.getSession() }
}
