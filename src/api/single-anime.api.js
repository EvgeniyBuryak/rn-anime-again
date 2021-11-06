import axios from 'axios';

const getSingleAnime = async (id) => {

    const requestSingleAnime = axios.create({
        baseURL: 'https://kitsu.io/api/edge/anime',
        headers: { 'content-type': 'application/vnd.api+json' },
        params: {
            'filter[id]': id,
        }
    });

    try {
        const result = await requestSingleAnime.get();

        return result.data.data;
    } catch (err) {
        return new Error(err);
    }
};

export { getSingleAnime };