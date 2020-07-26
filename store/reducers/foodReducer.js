import { FOODS } from '../../assets/dummy-data';
import { TOOGLE_FAVORITE, SET_FILTER } from '../action/action';

const initState = {
	foods: FOODS,
	filteredFood: FOODS,
	favoriteFood: [],
};

const foodReducer = (state = initState, action) => {
	switch (action.type) {
		case TOOGLE_FAVORITE:
			const existIndex = state.favoriteFood.findIndex(food => food.id === action.foodID);
			if (existIndex >= 0) {
				//jika idfood sudah ada di favorite, maka lakukan delete
				const updateFavFood = [...state.favoriteFood];
				updateFavFood.splice(existIndex, 1);
				return { ...state, favoriteFood: updateFavFood }
			}
			else {
				//jika idfood tidak ada di fav maka tambahkan data
				const newFavorite = state.foods.find(food => food.id === action.foodID);
				return { ...state, favoriteFood: state.favoriteFood.concat(newFavorite) }
			}
		case SET_FILTER:
			const appliedFilters = action.filters;
			const updatedFood = state.foods.filter(food => {
				if (appliedFilters.gluttenFree && !food.isGluttenFree) {
					return false;
				}
				if (appliedFilters.lactoseFree && !food.isLactoseFree) {
					return false;
				}
				if (appliedFilters.vegetarian && !food.isVegetarian) {
					return false;
				}
				if (appliedFilters.vegan && !food.isVegan) {
					return false;
				}
				return true;
			});
			return { ...state, filteredFood: updatedFood }
		default:
			return state;
	}
}

export default foodReducer;