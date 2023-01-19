export type Ingredient = {
    image: string
    quantity: number
}

export type Recipe = {
    title: string
    ingredients: Ingredient[]
}

export type Target = {
    headerTitle: string
    headerImage: string
}

export const targets: Target[] = [
    {
        headerTitle: 'Orichalcum',
        headerImage: '/src/Images/orichalcum_ingot.png'
    },
    {
        headerTitle: 'Starmetal',
        headerImage: '/src/Images/starmetal_ingot.png'
    },
    {
        headerTitle: 'Steel',
        headerImage: '/src/Images/steel_ingot.png'
    },
    {
        headerTitle: 'Iron',
        headerImage: '/src/Images/iron_ingot.png'
    }
]

export const recipes: Recipe[] = [
    {
        title: 'Orichalcum',
        ingredients: [
            { image: '/src/Images/starmetal_ingot.png', quantity: 2 },
            { image: '/src/Images/orichalcum_ore.png', quantity: 8 }
        ]
    },
    {
        title: 'Starmetal',
        ingredients: [
            { image: '/src/Images/steel_ingot.png', quantity: 2 },
            { image: '/src/Images/starmetal_ore.png', quantity: 6 }
        ]
    },
    {
        title: 'Steel',
        ingredients: [
            { image: '/src/Images/iron_ingot.png', quantity: 3 }
        ]
    },
    {
        title: 'Iron',
        ingredients: [
            { image: '/src/Images/iron_ore.png', quantity: 4 }
        ]
    }
]