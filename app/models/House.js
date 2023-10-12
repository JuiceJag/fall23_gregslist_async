import { AppState } from "../AppState.js"
export class House {
    constructor(data) {
        this.id = data._id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
    }

    get houseCardTemplate() {
        return `
        <div class="col-12 d-flex justify-content-evenly mb-3">
            <img class="house-img" src="${this.imgUrl}"
              alt="House Picture">
            <div class="p-3 bg-secondary">
              <div class="d-flex justify-content-between">
                <p class="fw-bold">Posted: ${this.createdAt.toLocaleDateString()}</p>
                <p class="fw-bold">Updated: ${this.updatedAt.toLocaleDateString()}</p>
              </div>
              <p>Bedrooms: ${this.bedrooms}</p>
              <p>Bathrooms: ${this.bathrooms}</p>
              <p>Levels: ${this.levels}</p>
              <p>Year: ${this.year}</p>
              <p>Price: ${this.price}</p>
              <p>description: ${this.description}</p>
              </div>
            </div>
        `
    }

    get houseFormTemplate() {

    }
}

// "_id": "646445d2afbe13b729b65530",
//         "bedrooms": 4,
//         "bathrooms": 4,
//         "levels": 3,
//         "imgUrl": "https://halloweenlove.com/images/posts/monster-house-9.jpg",
//         "year": 1929,
//         "price": 150000,
//         "description": "Monster house! Don't be scurd",
//         "creatorId": "6463f004de86d0cdfb02d7ea",
//         "createdAt": "2023-05-17T03:11:14.982Z",
//         "updatedAt": "2023-05-17T03:11:14.982Z",
//         "__v": 0,
//         "creator": {
//             "_id": "6463f004de86d0cdfb02d7ea",
//             "name": "batboy",
//             "picture": "https://s.gravatar.com/avatar/84b3fecca66ca694d602b5c5588fd9e5?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fba.png",
//             "id": "6463f004de86d0cdfb02d7ea"