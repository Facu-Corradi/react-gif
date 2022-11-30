import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Pokemon"])
    
    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory)) Return

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Git Expert App</h1>

            <AddCategory 
                onNewCategory = { event => onAddCategory (event) }
            />

            { categories.map(category =>(
                <GifGrid 
                    key={category}
                    category= {category} 
                />))
            }
        </>
)
}

