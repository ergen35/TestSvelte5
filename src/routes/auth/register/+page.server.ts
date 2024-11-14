import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        a: 5
    };
}) satisfies PageServerLoad;