import axios from 'axios';
import md5 from 'md5';

const API_BASE_URL = "https://gateway.marvel.com/v1/public";
const API_PUBLIC_KEY = "b0a30f2c6cf1fda6fd1fd440ee6d52d6";
const API_PRIVATE_KEY = "d57d50281d8ac0e805135173184c87e419b4eec1";

const getTimeStamp = () => Date.now().toString();

const generateHash = (timeStamp) => {
    const hash = md5(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY);
    return hash;
};

export const getCharacters = async (name) => {
    const timeStamp = getTimeStamp();
    const hash = generateHash(timeStamp);
    const url = `${API_BASE_URL}/characters?ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}&limit=100&offset=0&nameStartsWith=${name}`;

    try {
        const resp = await axios.get(url);
        return resp.data.data.results;
    } catch (error) {
        throw error;
    }
};

export const getCharactersRadom = async () => {
    const timeStamp = getTimeStamp();
    const hash = generateHash(timeStamp);
    const url = `${API_BASE_URL}/characters?ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}&limit=100&offset=0`;


    try {
        const resp = await axios.get(url);
        return resp.data.data.results;
    } catch (error) {
        throw error;
    }
};

export const getCharacterById = async (id) => {
    const timeStamp = getTimeStamp();
    const hash = generateHash(timeStamp);
    const url = `${API_BASE_URL}/characters/${id}?ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

    try {
        const resp = await axios.get(url);
        return resp.data.data.results;
    } catch (error) {
        throw error;
    }
}

const editCharacter = async (characterId, newData) => {
    const timeStamp = getTimeStamp();
    const hash = generateHash(timeStamp);
    const url = `${API_BASE_URL}/characters/${characterId}?ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

    try {
        const resp = await axios.put(url, newData);
        return resp.data.data.results;
    } catch (error) {
        throw error;
    }

};