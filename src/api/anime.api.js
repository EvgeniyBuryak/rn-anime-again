import axios from 'axios';

const getListAnime = async () => {

    try {        
        const requestListAnime = axios.create({
            baseURL: 'https://kitsu.io/api/edge/anime',
            headers: { 'content-type': 'application/vnd.api+json' },
        });

        const response = await requestListAnime.get('?page[limit]=5');
        return response.data.data;

    } catch (error) {
        throw new ('Ошибка');
    }
};

export { getListAnime };