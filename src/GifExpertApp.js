import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import {GifGrid} from '../src/components/GifGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Samurai x']);
    // const handleAdd =()=> {setCategories([...categories,'Evangelion'])};

    return (
        <>
            <h2>Gif App -By DDRRAKKEN-</h2>
            <CategoryAdd setCategories={setCategories} />
            <hr></hr>

            <ol>
                {
                    categories.map(category => 
                        (<GifGrid 
                            key = {category}
                            category = {category}/>)
                    )
                }
            </ol>
        </>
    );

}