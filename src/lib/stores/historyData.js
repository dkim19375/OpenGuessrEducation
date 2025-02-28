import {writable} from "svelte/store";
import {browser} from "$app/environment"

const stored = browser ? parseInt(localStorage.getItem("timesPlayed")) : null;
export const timesPlayed = writable(browser && stored || 0);
timesPlayed.subscribe((value) => {
    if (browser) return localStorage.setItem("timesPlayed", String(value))
});