import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";

class HousesService {
    async getHouses() {
        const res = await api.get('api/houses')

        const newHouses = res.data.map(POJOhouse => new House(POJOhouse))
        AppState.houses = newHouses
        console.log(AppState.houses);
    }

    async createHouse(houseFormData) {
        const res = await api.post('api/houses', houseFormData)

        console.log('created house', res.data);

        const newHouse = new House(res.data)
        AppState.houses.push(newHouse)
        AppState.emit('houses')
    }
}

export const housesService = new HousesService()