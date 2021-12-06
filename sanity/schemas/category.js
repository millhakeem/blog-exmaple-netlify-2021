import React from 'react'
import { FaHashtag as icon } from 'react-icons/fa'
import { GiEuropeanFlag, GiUsaFlag } from 'react-icons/gi'

export default {
    name: 'category',
    title: 'Категории',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Название',
            type: 'string',
            description: '(Название категории)'
        },
        {
            name: 'europe',
            title: 'Europe',
            type: 'boolean',
            option: {
                layout: 'checkbox'
            }
        },
        {
            name: 'usa',
            title: 'Unated States',
            type: 'boolean',
            option: {
                layout: 'checkbox'
            }
        },
    ],
    preview: {
        select: {
            name: 'title',
            europe: 'europe'
        },
        prepare: ({ name, europe }) => {
            return{
                title:`${name}`,
                media: <span
                    style={{fontSize:'20px', display:'flex', alignItems:'center'}}
                >{europe ? < GiEuropeanFlag /> : < GiUsaFlag/>}</span>,
            };
        },
    },
}