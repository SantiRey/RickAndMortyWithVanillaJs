const resolveRoutes = (route) => {
	if (route.length <= 3) {
		let validRoute = route === "/RickAndMortyWithVanillaJs/" ? route : "/:id";
		return validRoute;
	}
	return `/${route}`; //about
};

export default resolveRoutes;
