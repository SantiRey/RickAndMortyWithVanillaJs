const Character = () => {
	const view = `<div class="Characters-inner">
			<article class="Characters-card">
				<img src="${character.image}" alt="name"></img>
				<h2>${character.name}</h2>
			</article>
			<article class="Characters-card">
				<h3>Episodes: </h3>
				<h3>Status: </h3>
				<h3>Specie: </h3>
				<h3>Gender: </h3>
				<h3>Origin: </h3>
				<h3>Location: </h3>
			</article>
		</div>`;
	return view;
};
export default Character;
