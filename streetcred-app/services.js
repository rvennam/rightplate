const baseURL = 'https://openwhisk.ng.bluemix.net/api/v1/web/rvennam@us.ibm.com_streetcred/' +
        'streetcred/';
        
export const getBadges = () => {
	return fetch(baseURL + 'GetUserBadges?userID=0')
		.then(response => response.json())
		.then((responseJson) => {
			return responseJson;
		})
		.catch((error) => {
			console.error(error);
		});
};