const badges = (state = [
	{
		name: 'NO BADGES'
	}
], action) => {
	switch (action.type) {
	case 'ADD_BADGES' : {
		return action.badges;
	}
	default:
		return state;
	}
};

export default badges;