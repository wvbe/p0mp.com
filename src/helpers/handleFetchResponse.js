export default (response) => {
	if (response.status !== 200) {
		return Promise.reject(`Problems, status code: ${response.status}`);
	}

	return response.json();
}
