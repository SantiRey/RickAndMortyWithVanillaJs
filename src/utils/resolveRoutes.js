const resolveRoutes = (route) => {
	if (route.length <= 1) {
		console.log("routeCode: ", route);
		let validRoute = route === "/" ? route : "/:id";
		return validRoute;
	}

	return `/${route}`;
};

export default resolveRoutes;
