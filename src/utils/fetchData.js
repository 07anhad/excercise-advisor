// export const exerciseOptions = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//         'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
//     }
// };

// export const exerciseOptions = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//       'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
//     }
//   };

export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    }
  };
  
export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': 'a26776bdcfmshe7d8613ed2f73a0p143cadjsn1e13e7231d06'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
