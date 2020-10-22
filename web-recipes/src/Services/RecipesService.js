import json from '../MockJsons/Recipes.json'
export default class Recipe {
    static getAll = () => {
        return json.Recipes;
    }
}
