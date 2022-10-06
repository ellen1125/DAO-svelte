import App from './App.svelte';
import {acc} from './wallet';

const app = new App({
	target: document.body,
	props: {
		address: acc
	}
});

export default app;