import auth from "$lib/auth.ts"

export const load: PageLoad = async () => {
    return { session: await auth.getSession() }
}
