function Paillier(n_length) {
	return syft.he.paillier.keys.KeyPair().generate(n_length);
}
