<script lang="ts">
    import type { PageData, ActionData } from './$types';

    let { data, form }: { data: PageData, form: ActionData } = $props();
</script>

<div class="h-full w-full flex flex-col">

    <form class="flex flex-1 flex-col pt-4" method="POST">
        
        <div class="flex flex-row justify-center content-center items-center">
            <img src="/resto-icon.png" alt="" class="h-44 w-44 border border-gray-200 p-4 rounded-full shadow shadow-yellow-600 hover:shadow-none">
        </div>
        
        <div class="text-center pt-8 text-xl font-semibold text-yellow-900">
            Welcome Back!
        </div>

        <div class="pt-14 flex flex-col gap-y-5">

            <div class="text-center text-sm">
                {#if form}
                    {#if form.errors}
                        <span class="text-center text-red-500">{form.errors}</span>
                    {/if}
                {/if}
            </div>
            
            <div>
                <input type="email" name="email" id="email" class="default-input" placeholder="Adresse email">
            </div>

            <div>
                <input type="password" name="password" id="password" class="default-input" placeholder="Mot de passe">
            </div>

            <div class="flex flex-row justify-center content-center items-center">
               
                <button type="submit" class="bg-yellow-600 hover:bg-yellow-700 active:scale-95 border py-2 w-full rounded-md text-white transition-all delay-100">Connecter</button>
            
            </div>

            <div class="text-sm flex flex-col gap-y-2 text-center pt-3">
                <div>
                    Vous n'avez pas de compte ? <a href="/auth/register" class="text-yellow-600">Créer Mon Compte</a>
                </div>
                <div>
                    <a href="/auth/reset-password" class="text-red-600">Mot de passe oublié</a>
                </div>
            </div>
        </div>
    </form>

    <div class="text-center">
        <span class="text-sm">Consulter nos 
            <a href="https://www.privacypolicies.com/live/59d013b3-002f-4b94-8d21-3ea0d23b43ed" target="_blank" class="underline underline-offset-1 text-blue-500">politiques de confidentialté</a>
        </span>
    </div>
</div>

