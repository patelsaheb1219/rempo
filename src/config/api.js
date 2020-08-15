const BASE_API_URL = 'http://autofixee.in/api/';


export const apiCall = async (url, type, body,token,baseUrlType) => {
    let params;
    if(token == null){
        params = {
            method: type || 'GET',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
            },
        };
    }
    else{
        params = {
            method: type || 'GET',
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json',
                'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
            },
        };
    }

    if (type === 'POST' || type === 'PATCH' || type === 'PUT') {
        params.body = body instanceof FormData ? body : (typeof body === 'string' ? body : JSON.stringify(body));
        params.headers['Content-Type'] = body instanceof FormData ? 'multipart/form-data' : 'application/json';
    }

    try {
        let response = await fetch(baseUrlType ? BASE_API_URL_V2 + url : BASE_API_URL + url, params);
        return await response.text();
    } catch (error) {
        alert(error);
    }
};