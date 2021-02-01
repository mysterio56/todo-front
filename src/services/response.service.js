
export const responseService = {
    response,
};

function response( response ){

    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {

            if ( process.env.NODE_ENV !== 'production') {
                console.log(data);
            }

            return Promise.reject('An error occurred');

        }

        return data;

    });

}