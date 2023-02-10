import axios from "axios";

const searchImages = async (searchKey) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers : {
            Authorization : 'Client-ID SXxAjiC2tAd2hr2btAp9TghPlDCEwAm7khFHBMa92I0'
        },
        params : {
            query : searchKey
        }
    });

    return response.data.results;
};


export default searchImages;