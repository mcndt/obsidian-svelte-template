import type { TFile } from "obsidian";
import { writable } from "svelte/store";

export const fileStore = writable<TFile[]>([]);
