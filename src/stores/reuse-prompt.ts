import { writable } from "svelte/store";
import type { Run } from '../types'

// Use this in lieu of an event bus to assign a prompt from a saved run to the prompt input
export const reusePrompt = writable(<Run>{});