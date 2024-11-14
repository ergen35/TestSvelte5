import eventsource from 'eventsource';
import PocketBase from 'pocketbase';

global.EventSource = eventsource;

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: PocketBase
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
