class PaillierTensor {}
class Float {
	constructor(public_key, data) {
		"""Wraps pointer to encrypted Float with an interface that numpy
        can use.""";
		this.public_key = public_key;
		if (data !== None) {
			this.data = this.public_key.pk.encrypt(data);
		} else {
			this.data = None;
		}
	}
	decrypt(secret_key) {
		return secret_key.decrypt(self);
	}
	__add__(y) {
		"""Adds two encrypted Floats together.""";
		var out = new Float(this.public_key, None);
		out.data = __pythonRuntime.ops.add(this.data, y.data);
		return out;
	}
	__sub__(y) {
		"""Subtracts two encrypted Floats.""";
		var out = new Float(this.public_key, None);
		out.data = this.data - y.data;
		return out;
	}
	__mul__(y) {
		"""Multiplies two Floats. y may be encrypted or a simple Float.""";
		if (type(y) == type(self)) {
			var out = new Float(this.public_key, None);
			out.data = __pythonRuntime.ops.multiply(this.data, y.data);
			return out;
		} else if (type(y) == int || type(y) == float) {
			out = new Float(this.public_key, None);
			out.data = __pythonRuntime.ops.multiply(this.data, y);
			return out;
		} else {
			return None;
		}
	}
	__truediv__(y) {
		"""Divides two Floats. y may be encrypted or a simple Float.""";
		if (type(y) == type(self)) {
			var out = new Float(this.public_key, None);
			out.data = this.data / y.data;
			return out;
		} else if (type(y) == int) {
			out = new Float(this.public_key, None);
			out.data = this.data / y;
			return out;
		} else {
			return None;
		}
	}
	__repr__() {
		"""This is kindof a boring/uninformative __repr__""";
		return 'e';
	}
	__str__() {
		"""This is kindof a boring/uninformative __str__""";
		return 'e';
	}
	serialize() {
		return pickle.dumps(self);
	}
	deserialize() {
		return pickle.loads(b);
	}
}
