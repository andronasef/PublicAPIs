import { apis, category, categories } from "../stores"
import { get } from "svelte/store"

export let getCategories = async function () {
    let r = await fetch('https://api.publicapis.org/categories')
    let b = await r.text()
    let j = await JSON.parse(b)

    categories.set(await j.categories)
}

export let getApis = async function () {
    apis.set('')
    let r = await fetch(
        `https://api.publicapis.org/entries?category=${get(category)}&https=true`
    )
    let b = await r.text()
    let j = await JSON.parse(b)
    apis.set(j)

}