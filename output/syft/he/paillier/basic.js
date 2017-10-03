function PaillierTensor() {
	TensorBase.call(this);
	var __params0 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex0 = 0;
	var __args0 = arguments;
	function __getParam0(v, d) {
		var r = d;
		if (__params0) {
			if (__formalsIndex0 < __params0.formals.length) {
				r = __params0.formals[__formalsIndex0++];
			} else if ((v in __params0.keywords)) {
				r = __params0.keywords[v];
				delete __params0.keywords[v];
			}
		} else if (__formalsIndex0 < __args0.length) {
			r = __args0[__formalsIndex0++];
		}
		return r;
	}
	var public_key = __getParam0("public_key");
	var data = __getParam0("data", None);
	var input_is_decrypted = __getParam0("input_is_decrypted", True);
	return (function () {
		this.encrypted = True;
		this.public_key = public_key;
		if (type(data) == np.ndarray && input_is_decrypted) {
			this.data = public_key.encrypt(data, True);
		} else {
			this.data = data;
		}
	}).call(this);
}
PaillierTensor.prototype = Object.create(TensorBase.prototype);
PaillierTensor.prototype.__setitem__ = function () {
	var __params1 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex1 = 0;
	var __args1 = arguments;
	function __getParam1(v, d) {
		var r = d;
		if (__params1) {
			if (__formalsIndex1 < __params1.formals.length) {
				r = __params1.formals[__formalsIndex1++];
			} else if ((v in __params1.keywords)) {
				r = __params1.keywords[v];
				delete __params1.keywords[v];
			}
		} else if (__formalsIndex1 < __args1.length) {
			r = __args1[__formalsIndex1++];
		}
		return r;
	}
	var key = __getParam1("key");
	var value = __getParam1("value");
	return (function () {
		this.data[__pythonRuntime.ops.subscriptIndex(this.data, key)] = value.data;
		return self;
	}).call(this);
};
PaillierTensor.prototype.__getitem__ = function () {
	var __params2 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex2 = 0;
	var __args2 = arguments;
	function __getParam2(v, d) {
		var r = d;
		if (__params2) {
			if (__formalsIndex2 < __params2.formals.length) {
				r = __params2.formals[__formalsIndex2++];
			} else if ((v in __params2.keywords)) {
				r = __params2.keywords[v];
				delete __params2.keywords[v];
			}
		} else if (__formalsIndex2 < __args2.length) {
			r = __args2[__formalsIndex2++];
		}
		return r;
	}
	var i = __getParam2("i");
	return (function () {
		return new PaillierTensor(this.public_key, this.data[__pythonRuntime.ops.subscriptIndex(this.data, i)], false);
	}).call(this);
};
PaillierTensor.prototype.__add__ = function () {
	var __params3 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex3 = 0;
	var __args3 = arguments;
	function __getParam3(v, d) {
		var r = d;
		if (__params3) {
			if (__formalsIndex3 < __params3.formals.length) {
				r = __params3.formals[__formalsIndex3++];
			} else if ((v in __params3.keywords)) {
				r = __params3.keywords[v];
				delete __params3.keywords[v];
			}
		} else if (__formalsIndex3 < __args3.length) {
			r = __args3[__formalsIndex3++];
		}
		return r;
	}
	var tensor = __getParam3("tensor");
	return (function () {
		/*Performs element-wise addition between two tensors*/;
		if (!isinstance(tensor, TensorBase)) {
			var tensor = new PaillierTensor(this.public_key, np.array(new __pythonRuntime.objects.list(tensor)).astype('float'));
			return new PaillierTensor(this.public_key, __pythonRuntime.ops.add(this.data, tensor.data), false);
		}
		if (type(tensor) == TensorBase) {
			tensor = new PaillierTensor(this.public_key, tensor.data);
		}
		var ptensor = new PaillierTensor(this.public_key, __pythonRuntime.ops.add(this.data, tensor.data), false);
		ptensor._calc_add_depth(self, tensor);
		return ptensor;
	}).call(this);
};
PaillierTensor.prototype.__sub__ = function () {
	var __params4 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex4 = 0;
	var __args4 = arguments;
	function __getParam4(v, d) {
		var r = d;
		if (__params4) {
			if (__formalsIndex4 < __params4.formals.length) {
				r = __params4.formals[__formalsIndex4++];
			} else if ((v in __params4.keywords)) {
				r = __params4.keywords[v];
				delete __params4.keywords[v];
			}
		} else if (__formalsIndex4 < __args4.length) {
			r = __args4[__formalsIndex4++];
		}
		return r;
	}
	var tensor = __getParam4("tensor");
	return (function () {
		/*Performs element-wise subtraction between two tensors*/;
		if (!isinstance(tensor, TensorBase)) {
			var tensor = new PaillierTensor(this.public_key, np.array(new __pythonRuntime.objects.list(tensor)).astype('float'));
			return new PaillierTensor(this.public_key, this.data - tensor.data, false);
		}
		if (type(tensor) == TensorBase) {
			tensor = new PaillierTensor(this.public_key, tensor.data);
		}
		return new PaillierTensor(this.public_key, this.data - tensor.data, false);
	}).call(this);
};
PaillierTensor.prototype.__isub__ = function () {
	var __params5 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex5 = 0;
	var __args5 = arguments;
	function __getParam5(v, d) {
		var r = d;
		if (__params5) {
			if (__formalsIndex5 < __params5.formals.length) {
				r = __params5.formals[__formalsIndex5++];
			} else if ((v in __params5.keywords)) {
				r = __params5.keywords[v];
				delete __params5.keywords[v];
			}
		} else if (__formalsIndex5 < __args5.length) {
			r = __args5[__formalsIndex5++];
		}
		return r;
	}
	var tensor = __getParam5("tensor");
	return (function () {
		/*Performs inline, element-wise subtraction between two tensors*/;
		this.data -= tensor.data;
		return self;
	}).call(this);
};
PaillierTensor.prototype.__mul__ = function () {
	var __params6 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex6 = 0;
	var __args6 = arguments;
	function __getParam6(v, d) {
		var r = d;
		if (__params6) {
			if (__formalsIndex6 < __params6.formals.length) {
				r = __params6.formals[__formalsIndex6++];
			} else if ((v in __params6.keywords)) {
				r = __params6.keywords[v];
				delete __params6.keywords[v];
			}
		} else if (__formalsIndex6 < __args6.length) {
			r = __args6[__formalsIndex6++];
		}
		return r;
	}
	var tensor = __getParam6("tensor");
	return (function () {
		/*Performs element-wise multiplication between two tensors*/;
		if (isinstance(tensor, TensorBase)) {
			if (!tensor.encrypted) {
				var result = __pythonRuntime.ops.multiply(this.data, tensor.data);
				var o = new PaillierTensor(this.public_key, result, false);
				o._calc_mul_depth(self, tensor);
				return o;
			} else {
				return NotImplemented;
			}
		} else {
			var op = __pythonRuntime.ops.multiply(this.data, __pythonRuntime.functions.float(tensor));
			var ptensor = new PaillierTensor(this.public_key, op, False);
			ptensor._calc_mul_depth(self, tensor);
			return ptensor;
		}
	}).call(this);
};
PaillierTensor.prototype.__truediv__ = function () {
	var __params7 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex7 = 0;
	var __args7 = arguments;
	function __getParam7(v, d) {
		var r = d;
		if (__params7) {
			if (__formalsIndex7 < __params7.formals.length) {
				r = __params7.formals[__formalsIndex7++];
			} else if ((v in __params7.keywords)) {
				r = __params7.keywords[v];
				delete __params7.keywords[v];
			}
		} else if (__formalsIndex7 < __args7.length) {
			r = __args7[__formalsIndex7++];
		}
		return r;
	}
	var tensor = __getParam7("tensor");
	return (function () {
		/*Performs element-wise division between two tensors*/;
		if (isinstance(tensor, TensorBase)) {
			if (!tensor.encrypted) {
				var result = __pythonRuntime.ops.multiply(this.data, 1 / tensor.data);
				var o = new PaillierTensor(this.public_key, result, false);
				return o;
			} else {
				return NotImplemented;
			}
		} else {
			var op = __pythonRuntime.ops.multiply(this.data, 1 / __pythonRuntime.functions.float(tensor));
			return new PaillierTensor(this.public_key, op, False);
		}
	}).call(this);
};
PaillierTensor.prototype.sum = function () {
	var __params8 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex8 = 0;
	var __args8 = arguments;
	function __getParam8(v, d) {
		var r = d;
		if (__params8) {
			if (__formalsIndex8 < __params8.formals.length) {
				r = __params8.formals[__formalsIndex8++];
			} else if ((v in __params8.keywords)) {
				r = __params8.keywords[v];
				delete __params8.keywords[v];
			}
		} else if (__formalsIndex8 < __args8.length) {
			r = __args8[__formalsIndex8++];
		}
		return r;
	}
	var dim = __getParam8("dim", None);
	return (function () {
		/*Returns the sum of all elements in the input array.*/;
		if (!this.encrypted) {
			return NotImplemented;
		}
		if (dim === None) {
			return new PaillierTensor(this.public_key, this.data.sum(), false);
		} else {
			var op = this.data.sum(axis, dim);
			return new PaillierTensor(this.public_key, op, False);
		}
	}).call(this);
};
PaillierTensor.prototype.dot = function () {
	var __params9 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex9 = 0;
	var __args9 = arguments;
	function __getParam9(v, d) {
		var r = d;
		if (__params9) {
			if (__formalsIndex9 < __params9.formals.length) {
				r = __params9.formals[__formalsIndex9++];
			} else if ((v in __params9.keywords)) {
				r = __params9.keywords[v];
				delete __params9.keywords[v];
			}
		} else if (__formalsIndex9 < __args9.length) {
			r = __args9[__formalsIndex9++];
		}
		return r;
	}
	var plaintext_x = __getParam9("plaintext_x");
	return (function () {
		if (!plaintext_x.encrypted) {
			return __pythonRuntime.ops.multiply(self, plaintext_x).sum(plaintext_x.dim() - 1);
		} else {
			return NotImplemented;
		}
	}).call(this);
};
PaillierTensor.prototype.__str__ = function () {
	return (function () {
		return __pythonRuntime.ops.add("PaillierTensor: ", __pythonRuntime.functions.str(this.data));
	}).call(this);
};
PaillierTensor.prototype.__repr__ = function () {
	return (function () {
		return __pythonRuntime.ops.add("PaillierTensor: ", __pythonRuntime.functions.repr(this.data));
	}).call(this);
};
function Float() {
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
	return (function () {
		/*Wraps pointer to encrypted Float with an interface that numpy
        can use.*/;
		this.public_key = public_key;
		if (data !== None) {
			this.data = this.public_key.pk.encrypt(data);
		} else {
			this.data = None;
		}
	}).call(this);
}
Float.prototype.decrypt = function () {
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
	return (function () {
		return secret_key.decrypt(self);
	}).call(this);
};
Float.prototype.__add__ = function () {
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
	return (function () {
		/*Adds two encrypted Floats together.*/;
		var out = new Float(this.public_key, None);
		out.data = __pythonRuntime.ops.add(this.data, y.data);
		return out;
	}).call(this);
};
Float.prototype.__sub__ = function () {
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
	return (function () {
		/*Subtracts two encrypted Floats.*/;
		var out = new Float(this.public_key, None);
		out.data = this.data - y.data;
		return out;
	}).call(this);
};
Float.prototype.__mul__ = function () {
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
	return (function () {
		/*Multiplies two Floats. y may be encrypted or a simple Float.*/;
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
	}).call(this);
};
Float.prototype.__truediv__ = function () {
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
	return (function () {
		/*Divides two Floats. y may be encrypted or a simple Float.*/;
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
	}).call(this);
};
Float.prototype.__repr__ = function () {
	return (function () {
		/*This is kindof a boring/uninformative __repr__*/;
		return 'e';
	}).call(this);
};
Float.prototype.__str__ = function () {
	return (function () {
		/*This is kindof a boring/uninformative __str__*/;
		return 'e';
	}).call(this);
};
Float.prototype.serialize = function () {
	return (function () {
		return pickle.dumps(self);
	}).call(this);
};
Float.prototype.deserialize = function () {
	return (function () {
		return pickle.loads(b);
	}).call(this);
};
