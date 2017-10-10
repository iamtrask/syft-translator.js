{}
{
	__init__() {
		var __params12 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex12 = 0;
		var __args12 = arguments;
		function __getParam12(v, d) {
			var r = d;
			if (__params12) {
				if (__formalsIndex12 < __params12.formals.length) {
					r = __params12.formals[__formalsIndex12++];
				} else if ((v in __params12.keywords)) {
					r = __params12.keywords[v];
					delete __params12.keywords[v];
				}
			} else if (__formalsIndex12 < __args12.length) {
				r = __args12[__formalsIndex12++];
			}
			return r;
		}
		var public_key = __getParam12("public_key");
		var data = __getParam12("data", None);
		"""Wraps pointer to encrypted Float with an interface that numpy
        can use.""";
		this.public_key = public_key;
		if (data !== None) {
			this.data = this.public_key.pk.encrypt(data);
		} else {
			this.data = None;
		}
	}
	decrypt() {
		var __params13 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex13 = 0;
		var __args13 = arguments;
		function __getParam13(v, d) {
			var r = d;
			if (__params13) {
				if (__formalsIndex13 < __params13.formals.length) {
					r = __params13.formals[__formalsIndex13++];
				} else if ((v in __params13.keywords)) {
					r = __params13.keywords[v];
					delete __params13.keywords[v];
				}
			} else if (__formalsIndex13 < __args13.length) {
				r = __args13[__formalsIndex13++];
			}
			return r;
		}
		var secret_key = __getParam13("secret_key");
		return secret_key.decrypt(self);
	}
	__add__() {
		var __params14 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex14 = 0;
		var __args14 = arguments;
		function __getParam14(v, d) {
			var r = d;
			if (__params14) {
				if (__formalsIndex14 < __params14.formals.length) {
					r = __params14.formals[__formalsIndex14++];
				} else if ((v in __params14.keywords)) {
					r = __params14.keywords[v];
					delete __params14.keywords[v];
				}
			} else if (__formalsIndex14 < __args14.length) {
				r = __args14[__formalsIndex14++];
			}
			return r;
		}
		var y = __getParam14("y");
		"""Adds two encrypted Floats together.""";
		var out = new Float(this.public_key, None);
		out.data = __pythonRuntime.ops.add(this.data, y.data);
		return out;
	}
	__sub__() {
		var __params15 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex15 = 0;
		var __args15 = arguments;
		function __getParam15(v, d) {
			var r = d;
			if (__params15) {
				if (__formalsIndex15 < __params15.formals.length) {
					r = __params15.formals[__formalsIndex15++];
				} else if ((v in __params15.keywords)) {
					r = __params15.keywords[v];
					delete __params15.keywords[v];
				}
			} else if (__formalsIndex15 < __args15.length) {
				r = __args15[__formalsIndex15++];
			}
			return r;
		}
		var y = __getParam15("y");
		"""Subtracts two encrypted Floats.""";
		var out = new Float(this.public_key, None);
		out.data = this.data - y.data;
		return out;
	}
	__mul__() {
		var __params16 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex16 = 0;
		var __args16 = arguments;
		function __getParam16(v, d) {
			var r = d;
			if (__params16) {
				if (__formalsIndex16 < __params16.formals.length) {
					r = __params16.formals[__formalsIndex16++];
				} else if ((v in __params16.keywords)) {
					r = __params16.keywords[v];
					delete __params16.keywords[v];
				}
			} else if (__formalsIndex16 < __args16.length) {
				r = __args16[__formalsIndex16++];
			}
			return r;
		}
		var y = __getParam16("y");
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
	__truediv__() {
		var __params17 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex17 = 0;
		var __args17 = arguments;
		function __getParam17(v, d) {
			var r = d;
			if (__params17) {
				if (__formalsIndex17 < __params17.formals.length) {
					r = __params17.formals[__formalsIndex17++];
				} else if ((v in __params17.keywords)) {
					r = __params17.keywords[v];
					delete __params17.keywords[v];
				}
			} else if (__formalsIndex17 < __args17.length) {
				r = __args17[__formalsIndex17++];
			}
			return r;
		}
		var y = __getParam17("y");
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
