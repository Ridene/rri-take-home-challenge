const cardList = {
    fromApi: data => ({
        cards: data ? data.map(({tags, name, ...other}) => ({
            id: other._id,
            name,
            tags: tags || []
        })) : []
    }),
}

export default {
    cardList
}
