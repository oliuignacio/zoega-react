const url = "https://jsonplaceholder.typicode.com"

export const getResources = async () => {
  try {
    const result = await fetch(url + '/posts');
    return await result.json();
  } catch (error) {
    console.log('Error in getResources: ', error);
  }
}

export const postResource = (resource) => {
  return fetch(url + '/posts', {
    method: 'POST',
    body: JSON.stringify(resource),
    headers: {'Content-type': 'application/json; charset=UTF-8'},
  })
  .then((result)=>{
    if (!result.ok) throw new Error('Error in postResource service: ' + result.status);
    return result.json();
  })
  //.then((json)=>return json)
  .catch(error=>console.log('Error in postResource service: ', error));
};

// export const sortEvents = (arr)=> arr.sort((a,b)=> {
//   if (a.date < b.date) {
//     return -1;
//   }
//   else if (a.date > b.date) {
//    return 1;
//   }  
//   return 0;
// });


// export const filterOldEvents = (arr) => {
//   return arr=arr.filter((a) => String(a.date) > String(Date.now()))
// };