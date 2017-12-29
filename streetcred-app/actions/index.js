let nextTodoId = 0;
export const addTodo = badge => {
	return {
		type: 'ADD_TODO',
		badge
	};
};

export const setVisibilityFilter = filter => {
	return {type: 'SET_VISIBILITY_FILTER', filter};
};

export const toggleTodo = id => {
	return {type: 'TOGGLE_TODO', id};
};

export const addBadgesAction = badges => {
	console.log('adding badges!', badges);
	return {type: 'ADD_BADGES', badges};
};