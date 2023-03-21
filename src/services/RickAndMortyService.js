import { useHttp } from "../hooks/http.hooks";

const RickAndMortyService = () => {
    const { loading, request, error, clearError } = useHttp();
    
    const _apiBase = 'https://rickandmortyapi.com/api/character';

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}/${id}`);
        return res;
    }

    return {loading, error, clearError, getCharacter}
}

export default RickAndMortyService;

