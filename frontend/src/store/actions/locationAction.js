

export const locationAction = (locationInput) => async (dispatch, getState) => {
    // TODO change bbox to whole world
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationInput}.json?access_token=pk.eyJ1IjoiYWxleC1tYWVkZXIiLCJhIjoiY2toZ3Y3bnJhMGJuMTMzbzE3Mm42M3Y4bCJ9.DND92jKjd68QlS3CGSF6zA.JM5ZeqwEEm-Tonrk5wOOMw&cachebuster=1605310180095&autocomplete=true&types=country%2Cregion%2Cdistrict%2Cpostcode%2Clocality%2Cplace%2Cneighborhood&proximity=-10.652953464403595%2C41.21268932391092&language=de%2Cen`;
    const config = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    };

    const response = await fetch(url, config)
    const data = await response.json();
    console.log("data-------------", data)
    if (data.message === "Not Found" || data.features.length < 1) return false
    return data
};
