class AbstractSecretKey {
	constructor(sk) {
		return NotImplemented;
	}
	decrypt(x) {
		return NotImplemented;
	}
	serialize() {
		return NotImplemented;
	}
}
class AbstractPublicKey {
	constructor(pk) {
		return NotImplemented;
	}
	encrypt(x) {
		return NotImplemented;
	}
	serialize() {
		return NotImplemented;
	}
}
class AbstractKeyPair {
	constructor() {
		"";
	}
	deserialize(pubkey, seckey) {
		return NotImplemented;
	}
	generate(n_length) {
		return NotImplemented;
	}
}
