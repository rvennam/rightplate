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

export const deleteBadge = (docId, docRev) => {
	return fetch(baseURL + `DeleteCheckIn?docId=${docId}&docRev=${docRev}`)
		.then(console.log('Deleted, ', console))
		.catch((error) => {
			console.error(error);
		});
};
