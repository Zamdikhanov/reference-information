import axios from 'axios';

const instance = axios.create({
    baseURL: `https://62f77416ab9f1f8e89fd89a7.mockapi.io`,
});

const entityApi = {
    getEntity({ entity = 'lamps', page = 0, limit = 0, options = '' }) {
        return instance
            .get(
                `/${entity}?${options}${page ? `page=${page}` : ''}${
                    limit ? `&limit=${limit}` : ''
                }`,
            )
            .catch(function (error) {
                console.log('ошибка загрузки');
            });
    },
    putEntity({ entity = 'lamps', id = '0', data = {} }) {
        return instance.put(`/${entity}/${id}`, data);
    },
    postEntity({ entity = 'lamps', data = {} }) {
        return instance.post(`/${entity}`, data);
    },
    deleteEntity({ entity = 'lamps', id = '0' }) {
        return instance.delete(`/${entity}/${id}`);
    },
};

export default entityApi;
