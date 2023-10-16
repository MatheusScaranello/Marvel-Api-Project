import Axios from "axios";

const url = "https://gateway.marvel.com:443/v1/public/characters?apikey="

const persons = async () => {
    try {
        const { data } = await Axios.get(url);
        const persons = data.results.map((person) => ({
            id: person.id,
            name: person.name,
            description: person.description,
            thumbnail: person.thumbnail,
            comics: person.comics,
            series: person.series,
            stories: person.stories,
            events: person.events,
            urls: person.urls,
        }));
        return persons;
    } catch (error) {
        throw error;
    }
};