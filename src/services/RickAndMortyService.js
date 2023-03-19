import { useHttp } from "../hooks/http.hooks";

const RickAndMortyService = () => {
    const { loading, error, clearError } = useHttp();
    
    const _apiBase = 'https://rickandmortyapi.com/api/character';

    const getCharacter = async (id) => {
        const res = await fetch(`${_apiBase}/${id}`).then((res) => res.json());
        return res;
    }

    return {loading, error, clearError, getCharacter}
}

export default RickAndMortyService;

