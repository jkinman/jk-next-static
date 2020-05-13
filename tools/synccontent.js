import fs from 'fs'
import path from 'path'
import { createClient } from 'contentful'

const types = [
    'page',
    'workExperiance'
]

const client = createClient({
    space: '26ra8njt06p8',
    accessToken: 'M6t_r4MuygQCqhC20sGXP34ouw8tQ56DdIb7k8Gy5zw',
})

export const getContent = async () => {
    console.log( 'starting contentful sync...')
    types.forEach( async (type) => {
        console.log( 'getting content ', type)
        const entries = await client.getEntries({
            content_type: type,
            include: 3,
            limit: 5,
        })
        .catch(console.log)
        const fields = entries.items.map( item => item.fields)
        fs.writeFileSync(
            path.join(__dirname, '..', 'data', `${type}.json`),
            JSON.stringify(fields)
        )
        console.log(fields)

        console.log('> got and wrote content for', type)
    })
    return true
}

if( process.argv[2] === 'install'){
    getContent()
}