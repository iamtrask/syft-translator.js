{
	function RSSMPCTensor() {
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
		var repo = __getParam0("repo");
		var data = __getParam0("data", None);
		var input_is_shared = __getParam0("input_is_shared", false);
		return (function () {
			this.repo = repo;
			this.encrypted = false;
			if (input_is_shared) {
				this.data = data;
			} else {
				if (type(data) == int || type(data) == float || type(data) == np.float64) {
					this.data = this.repo.create_float(data);
				} else if (type(data) == TensorBase) {
					return new RSSMPCTensor(this.repo, data.data);
				} else if (type(data) == np.ndarray) {
					var x = data;
					var sh = x.shape;
					var x_ = x.reshape(-1);
					var out = __pythonRuntime.functions.list();
					{
						var __filbertRight0 = x_;
						if (__filbertRight0 instanceof Array) {
							for (var __filbertIndex0 = 0; __filbertIndex0 < __filbertRight0.length; ++__filbertIndex0) {
								var v = __filbertRight0[__filbertIndex0];
								out.append(this.repo.create_float(v));
							}
						} else {
							for (v in __filbertRight0) {
								out.append(this.repo.create_float(v));
							}
						}
					}
					this.data = np.array(out).reshape(sh);
				} else {
					__pythonRuntime.functions.print(__pythonRuntime.ops.add("format not recognized:", __pythonRuntime.functions.str(type(x))));
					return NotImplemented;
				}
			}
		}).call(this);
	}
	RSSMPCTensor.prototype = Object.create(TensorBase.prototype);
	RSSMPCTensor.prototype.__add__ = function () {
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
			return new RSSMPCTensor(this.repo, __pythonRuntime.ops.add(this.data, x.data), True);
		}).call(this);
	};
	RSSMPCTensor.prototype.__mul__ = function () {
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
		var x = __getParam2("x");
		return (function () {
			return new RSSMPCTensor(this.repo, __pythonRuntime.ops.multiply(this.data, x.data), True);
		}).call(this);
	};
	RSSMPCTensor.prototype.__sub__ = function () {
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
		var x = __getParam3("x");
		return (function () {
			return new RSSMPCTensor(this.repo, this.data - x.data, True);
		}).call(this);
	};
	RSSMPCTensor.prototype.__str__ = function () {
		return (function () {
			return __pythonRuntime.ops.add("RSSMPCTensor: ", __pythonRuntime.functions.str(this.data));
		}).call(this);
	};
	RSSMPCTensor.prototype.__repr__ = function () {
		return (function () {
			return __pythonRuntime.ops.add("RSSMPCTensor: ", __pythonRuntime.functions.repr(this.data));
		}).call(this);
	};
	RSSMPCTensor.prototype.dot = function () {
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
			return __pythonRuntime.ops.multiply(self, x).sum(x.dim() - 1);
		}).call(this);
	};
}
