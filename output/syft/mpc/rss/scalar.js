var Q = 293973345475167247070445277780365744413;
{
	function MPCNatural() {
		object.call(this);
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
		var id = __getParam0("id");
		var repo = __getParam0("repo");
		return (function () {
			this.id = id;
			this.repo = repo;
		}).call(this);
	}
	MPCNatural.prototype = Object.create(object.prototype);
	MPCNatural.prototype.get = function () {
		return (function () {
			return __pythonRuntime.functions.sum(this.get_shares()) % Q;
		}).call(this);
	};
	MPCNatural.prototype.get_shares = function () {
		return (function () {
			var others = __pythonRuntime.functions.list(__pythonRuntime.functions.map(x, x.get_share(this.id), this.repo.siblings));
			return __pythonRuntime.ops.add(others, new __pythonRuntime.objects.list(this.repo.ints[__pythonRuntime.ops.subscriptIndex(this.repo.ints, this.id)]));
		}).call(this);
	};
	MPCNatural.prototype.gen_rand_id = function () {
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
		var length = __getParam3("length", Math.pow(2, 32));
		return (function () {
			return np.random.randint(0, length);
		}).call(this);
	};
	MPCNatural.prototype.__add__ = function () {
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
		var id = __getParam4("id");
		return (function () {
			var new_id = this.gen_rand_id();
			return this.repo.add(new_id, this.id, id.id, True);
		}).call(this);
	};
	MPCNatural.prototype.__sub__ = function () {
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
		var id = __getParam5("id");
		return (function () {
			var new_id = this.gen_rand_id();
			return this.repo.sub(new_id, this.id, id.id, True);
		}).call(this);
	};
	MPCNatural.prototype.__mul__ = function () {
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
		var x = __getParam6("x");
		return (function () {
			var new_id = this.gen_rand_id();
			if (type(x) == type(self)) {
				return this.repo.mult(new_id, this.id, x.id, True);
			} else {
				return this.repo.mult_scalar(new_id, this.id, x, True);
			}
		}).call(this);
	};
	MPCNatural.prototype.__truediv__ = function () {
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
		var x = __getParam7("x");
		return (function () {
			var new_id = this.gen_rand_id();
			if (type(x) == type(self)) {
				return NotImplemented;
			} else {
				return this.repo.div_scalar(new_id, this.id, x, True);
			}
		}).call(this);
	};
	MPCNatural.prototype.__repr__ = function () {
		return (function () {
			return __pythonRuntime.functions.str(this.get());
		}).call(this);
	};
}
{
	function MPCFixedPoint() {
		object.call(this);
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
		var raw = __getParam9("raw");
		var repo = __getParam9("repo");
		var config = __getParam9("config", None);
		var raw_natural = __getParam9("raw_natural", None);
		return (function () {
			if (config === None) {
				this.config = PrecisionConfig();
			} else {
				this.config = config;
			}
			this.repo = repo;
			if (raw_natural === None) {
				this.raw_natural = this.repo.create_natural(this.encode(raw));
			} else {
				this.raw_natural = raw_natural;
			}
		}).call(this);
	}
	MPCFixedPoint.prototype = Object.create(object.prototype);
	MPCFixedPoint.prototype.encode = function () {
		var __params10 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex10 = 0;
		var __args10 = arguments;
		function __getParam10(v, d) {
			var r = d;
			if (__params10) {
				if (__formalsIndex10 < __params10.formals.length) {
					r = __params10.formals[__formalsIndex10++];
				} else if ((v in __params10.keywords)) {
					r = __params10.keywords[v];
					delete __params10.keywords[v];
				}
			} else if (__formalsIndex10 < __args10.length) {
				r = __args10[__formalsIndex10++];
			}
			return r;
		}
		var rational = __getParam10("rational");
		return (function () {
			var upscaled = __pythonRuntime.functions.int(__pythonRuntime.ops.multiply(rational, Math.pow(this.config.BASE, this.config.PRECISION_FRACTIONAL)));
			var field_element = upscaled % this.config.Q;
			return field_element;
		}).call(this);
	};
	MPCFixedPoint.prototype.decode = function () {
		var __params11 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex11 = 0;
		var __args11 = arguments;
		function __getParam11(v, d) {
			var r = d;
			if (__params11) {
				if (__formalsIndex11 < __params11.formals.length) {
					r = __params11.formals[__formalsIndex11++];
				} else if ((v in __params11.keywords)) {
					r = __params11.keywords[v];
					delete __params11.keywords[v];
				}
			} else if (__formalsIndex11 < __args11.length) {
				r = __args11[__formalsIndex11++];
			}
			return r;
		}
		var field_element = __getParam11("field_element");
		return (function () {
			var upscaled = field_element;
			if (field_element <= this.config.Q / 2) {
				field_element - this.config.Q;
			}
			var rational = upscaled / Math.pow(this.config.BASE, this.config.PRECISION_FRACTIONAL);
			return rational;
		}).call(this);
	};
	MPCFixedPoint.prototype.get = function () {
		return (function () {
			return this.decode(this.raw_natural.get()) % this.config.Q;
		}).call(this);
	};
	MPCFixedPoint.prototype.__add__ = function () {
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
		var x = __getParam13("x");
		return (function () {
			if (type(x) != type(self)) {
				var x = new MPCFixedPoint(x, this.repo, config, this.config);
			}
			return new MPCFixedPoint(None, this.repo, raw_natural, __pythonRuntime.ops.add(this.raw_natural, x.raw_natural));
		}).call(this);
	};
	MPCFixedPoint.prototype.__sub__ = function () {
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
		var x = __getParam14("x");
		return (function () {
			if (type(x) != type(self)) {
				var x = new MPCFixedPoint(x, this.repo, config, this.config);
			}
			return this.raw_natural - x.raw_natural;
		}).call(this);
	};
	MPCFixedPoint.prototype.__mul__ = function () {
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
		var x = __getParam15("x");
		return (function () {
			if (type(x) != type(self)) {
				return new MPCFixedPoint(None, this.repo, raw_natural, __pythonRuntime.ops.multiply(this.raw_natural, this.encode(x))).truncate();
			} else {
				return new MPCFixedPoint(None, this.repo, raw_natural, __pythonRuntime.ops.multiply(this.raw_natural, x.raw_natural)).truncate();
			}
		}).call(this);
	};
	MPCFixedPoint.prototype.__truediv__ = function () {
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
		var x = __getParam16("x");
		return (function () {
			return this.raw_natural.__truediv__(this.encode(x));
		}).call(this);
	};
	MPCFixedPoint.prototype.__repr__ = function () {
		return (function () {
			return __pythonRuntime.functions.str(this.get());
		}).call(this);
	};
	MPCFixedPoint.prototype.truncate = function () {
		return (function () {
			var b = __pythonRuntime.ops.add(this.raw_natural, this.repo.create_natural_with_shares(new __pythonRuntime.objects.list(Math.pow(this.config.BASE, __pythonRuntime.ops.add(__pythonRuntime.ops.multiply(2, this.config.PRECISION), 1)), 0, 0)));
			var mask = random.randrange(this.config.Q) % Math.pow(this.config.BASE, __pythonRuntime.ops.add(__pythonRuntime.ops.add(this.config.PRECISION, this.config.PRECISION_FRACTIONAL), this.config.KAPPA));
			var mask_low = mask % Math.pow(this.config.BASE, this.config.PRECISION_FRACTIONAL);
			var b_masked = __pythonRuntime.ops.add(b, this.repo.create_natural_with_shares(new __pythonRuntime.objects.list(mask, 0, 0))).get();
			var b_masked_low = b_masked % Math.pow(this.config.BASE, this.config.PRECISION_FRACTIONAL);
			var b_low = this.repo.create_natural(b_masked_low) - this.repo.create_natural(mask_low);
			var c = this.raw_natural - b_low;
			var d = __pythonRuntime.ops.multiply(c, this.config.INVERSE);
			this.raw_natural = d;
			return self;
		}).call(this);
	};
}
