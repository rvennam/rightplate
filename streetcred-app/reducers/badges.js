const badges = (state = [
	{
		name: 'NO BADGES'
	}
], action) => {
	switch (action.type) {
	case 'ADD_BADGES' : {
		console.log('reducing to new badges');
		return action.badges;
	}
	default:
		return state;
	}
};

export default badges;