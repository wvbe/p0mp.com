/**
 * Basic error handling for fetch responses.
 *
 * @param response
 * @returns {Promise.<*>}
 */
export default (response) => {
	if (response.status !== 200) {
		return Promise.reject(`Error handling fetch response. Status code: ${response.status}.`);
	}

	return response.json();
}
