import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { ClientResponseError } from 'pocketbase';

export const load = (async () => {
    return {

    };
}) satisfies PageServerLoad;



export const actions: Actions = {
    default: async ({ locals, request, url }) => {

        const formData = await request.formData();
        
        //get email & password
        const email = formData.get('email')?.toString() || '';
        const password = formData.get('password')?.toString() || '';

        let isSuccess = false;
        //log user in
        try {

            const { token, record } = await locals.pb.collection('users').authWithPassword(email, password);
            
            if(record && token && record.id){
                isSuccess = true;
            }

        } catch (error) {
            
            if(error instanceof ClientResponseError){
                if(error.status == 400){

                    return {
                        success: false,
                        errors: "email ou mot de passe invalide"
                    }
                }
            }

            return {
                success: false,

            }
        }

        if(isSuccess === true){
            throw redirect(303, "/")
        }

        console.log("Formulaire soumis", email, password)

        return {
            success: false,
            errors: "Une erreur inconnue s'est produite"
        }
    }
}