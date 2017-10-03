function SecretKey() {
	AbstractSecretKey.call(this);
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
	var sk = __getParam0("sk");
	return (function () {
		this.sk = sk;
	}).call(this);
}
SecretKey.prototype = Object.create(AbstractSecretKey.prototype);
SecretKey.prototype.decrypt = function () {
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
	var x = __getParam1("x");
	return (function () {
		/*Decrypts x. X can be either an encrypted int or a numpy
        vector/matrix/tensor.*/;
		if (type(x) == Float) {
			return this.sk.decrypt(x.data);
		} else if (type(x) == TensorBase || type(x) == PaillierTensor) {
			if (x.encrypted) {
				return TensorBase(this.decrypt(x.data), encrypted, False);
			} else {
				return NotImplemented;
			}
		} else if (type(x) == np.ndarray) {
			var sh = x.shape;
			var x_ = x.reshape(-1);
			var out = __pythonRuntime.functions.list();
			{
				var __filbertRight0 = x_;
				if (__filbertRight0 instanceof Array) {
					for (var __filbertIndex0 = 0; __filbertIndex0 < __filbertRight0.length; ++__filbertIndex0) {
						var v = __filbertRight0[__filbertIndex0];
						out.append(this.sk.decrypt(v.data));
					}
				} else {
					for (v in __filbertRight0) {
						out.append(this.sk.decrypt(v.data));
					}
				}
			}
			return np.array(out).reshape(sh);
		} else {
			return NotImplemented;
		}
	}).call(this);
};
SecretKey.prototype.serialize = function () {
	return (function () {
		var seckey_dict = new __pythonRuntime.objects.dict();
		seckey_dict[__pythonRuntime.ops.subscriptIndex(seckey_dict, 'secret_key')] = new __pythonRuntime.objects.dict();
		'p';
		new __pythonRuntime.objects.tuple(this.sk.p);
		'q';
		new __pythonRuntime.objects.tuple(this.sk.q);
		'n';
		this.sk.public_key.n;
		return json.dumps(seckey_dict);
	}).call(this);
};
SecretKey.prototype.deserialize = function () {
	return (function () {
		var seckey_dict = json.loads(b);
		var sk_record = seckey_dict[__pythonRuntime.ops.subscriptIndex(seckey_dict, 'secret_key')];
		var sk = paillier.PaillierPrivateKey();
		var public_key = new __pythonRuntime.objects.tuple(paillier.PaillierPublicKey(n, __pythonRuntime.functions.int(sk_record[__pythonRuntime.ops.subscriptIndex(sk_record, 'n')])));
		var p = new __pythonRuntime.objects.tuple(sk_record[__pythonRuntime.ops.subscriptIndex(sk_record, 'p')]);
		var q = sk_record[__pythonRuntime.ops.subscriptIndex(sk_record, 'q')];
		return new SecretKey(sk);
	}).call(this);
};
function PublicKey() {
	AbstractPublicKey.call(this);
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
	var pk = __getParam4("pk");
	return (function () {
		this.pk = pk;
	}).call(this);
}
PublicKey.prototype = Object.create(AbstractPublicKey.prototype);
PublicKey.prototype.zeros = function () {
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
	var dim = __getParam5("dim");
	return (function () {
		/*Returns an encrypted tensor of zeros*/;
		return syft.zeros(dim).encrypt(self);
	}).call(this);
};
PublicKey.prototype.ones = function () {
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
	var dim = __getParam6("dim");
	return (function () {
		/*Returns an encrypted tensor of ones*/;
		return syft.ones(dim).encrypt(self);
	}).call(this);
};
PublicKey.prototype.rand = function () {
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
	var dim = __getParam7("dim");
	return (function () {
		/*Returns an encrypted tensor with initial numbers sampled from a
        uniform distribution from 0 to 1.*/;
		return syft.rand(dim).encrypt(self);
	}).call(this);
};
PublicKey.prototype.randn = function () {
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
	var dim = __getParam8("dim");
	return (function () {
		/*Returns an encrypted tensor with initial numbers sampled from a
        standard normal distribution*/;
		return syft.randn(dim).encrypt(self);
	}).call(this);
};
PublicKey.prototype.encrypt = function () {
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
	var x = __getParam9("x");
	var same_type = __getParam9("same_type", false);
	return (function () {
		/*Encrypts x. X can be either an encrypted int or a numpy
        vector/matrix/tensor.*/;
		if (type(x) == int || type(x) == float || type(x) == np.float64) {
			if (same_type) {
				return NotImplemented;
			}
			return Float(self, x);
		} else if (type(x) == TensorBase) {
			if (x.encrypted || same_type) {
				return NotImplemented;
			}
			return PaillierTensor(self, x.data);
		} else if (type(x) == np.ndarray) {
			var sh = x.shape;
			var x_ = x.reshape(-1);
			var out = __pythonRuntime.functions.list();
			{
				var __filbertRight1 = x_;
				if (__filbertRight1 instanceof Array) {
					for (var __filbertIndex1 = 0; __filbertIndex1 < __filbertRight1.length; ++__filbertIndex1) {
						var v = __filbertRight1[__filbertIndex1];
						out.append(Float(self, v));
					}
				} else {
					for (v in __filbertRight1) {
						out.append(Float(self, v));
					}
				}
			}
			if (same_type) {
				return np.array(out).reshape(sh);
			} else {
				return PaillierTensor(self, np.array(out).reshape(sh));
			}
		} else {
			__pythonRuntime.functions.print(__pythonRuntime.ops.add("format not recognized:", __pythonRuntime.functions.str(type(x))));
			return NotImplemented;
		}
		return this.pk.encrypt(x);
	}).call(this);
};
PublicKey.prototype.serialize = function () {
	return (function () {
		var pubkey_dict = new __pythonRuntime.objects.dict();
		pubkey_dict[__pythonRuntime.ops.subscriptIndex(pubkey_dict, 'public_key')] = new __pythonRuntime.objects.dict();
		'n';
		this.pk.n;
		return json.dumps(pubkey_dict);
	}).call(this);
};
PublicKey.prototype.deserialize = function () {
	return (function () {
		var pubkey_dict = json.loads(b);
		var pk_record = pubkey_dict[__pythonRuntime.ops.subscriptIndex(pubkey_dict, 'public_key')];
		var pk = paillier.PaillierPublicKey(n, __pythonRuntime.functions.int(pk_record[__pythonRuntime.ops.subscriptIndex(pk_record, 'n')]));
		return new PublicKey(pk);
	}).call(this);
};
function KeyPair() {
	AbstractKeyPair.call(this);
	return (function () {
		"";
	}).call(this);
}
KeyPair.prototype = Object.create(AbstractKeyPair.prototype);
KeyPair.prototype.deserialize = function () {
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
	var pubkey = __getParam13("pubkey");
	var seckey = __getParam13("seckey");
	return (function () {
		this.public_key = PublicKey.deserialize(pubkey);
		this.secret_key = SecretKey.deserialize(seckey);
		return new __pythonRuntime.objects.tuple(this.public_key, this.secret_key);
	}).call(this);
};
KeyPair.prototype.generate = function () {
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
	var n_length = __getParam14("n_length", 1024);
	return (function () {
		{
			var __filbertTmp15 = paillier.generate_paillier_keypair(n_length, n_length);
			var pubkey = __filbertTmp15[0];
			var prikey = __filbertTmp15[1];
		}
		this.public_key = new PublicKey(pubkey);
		this.secret_key = new SecretKey(prikey);
		return new __pythonRuntime.objects.tuple(this.public_key, this.secret_key);
	}).call(this);
};
