import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawHouses() {
    console.log('drawing houses');

    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.houseCardTemplate)
    setHTML('houseCards', content)
}

export class HousesController {
    constructor() {
        Pop.success('Houses Controller Loaded!')

        this.getHouses()

        AppState.on('houses', _drawHouses)
    }

    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    async createHouse(event) {
        try {
            event.preventDefault()
            console.log('form submitted');
            const form = event.target
            const houseFormData = getFormData(form)
            console.log(houseFormData);
            await housesService.createHouse(houseFormData)
            form.reset()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}