export const TOOGLE_FAVORITE = 'TOOGLE_FAVORITE';
export const SET_FILTER = 'SET_FILTER';

export const toogleFavorite = (id) => {
    return { type: TOOGLE_FAVORITE, foodID: id };
}

export const setFilter = filterSetting => {
    return { type: SET_FILTER, filters: filterSetting };
}