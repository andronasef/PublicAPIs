import { writable } from 'svelte/store'

export const category = writable("Animals")
export const categories = writable([])
export const apis = writable()