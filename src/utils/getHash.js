const getHash = () => location.hash.toLocaleLowerCase().split("/")[1] || "/"; //['','1','']

export default getHash;
