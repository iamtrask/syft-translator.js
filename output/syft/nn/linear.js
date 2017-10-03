{
	function LinearClassifier() {
		/*This class is a basic linear classifier with functionality to
    encrypt/decrypt weights according to any of the homomorphic encryption
    schemes in syft.he. It also contains the logic to make predictions when
    in an encrypted state.

    TODO: create a generic interface for ML models that this class implements.

    TODO: minibatching in the "learn" API. The greater the batch size, the more
    iterations should be doable before the homomorphic encryption noise grows
    too much to be decrypted.
    */;
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
		var n_inputs = __getParam0("n_inputs", 4);
		var n_labels = __getParam0("n_labels", 2);
		var desc = __getParam0("desc", "");
		return (function () {
			this.desc = desc;
			this.n_inputs = n_inputs;
			this.n_labels = n_labels;
			this.weights = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(n_inputs, n_labels)));
			this.pubkey = None;
			this.encrypted = false;
		}).call(this);
	}
	LinearClassifier.prototype.encrypt = function () {
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
		var pubkey = __getParam1("pubkey");
		return (function () {
			/*iterates through each weight and encrypts it

        TODO: check that weights are actually decrypted

        */;
			this.encrypted = True;
			this.pubkey = pubkey;
			this.weights = this.weights.encrypt(pubkey);
			return self;
		}).call(this);
	};
	LinearClassifier.prototype.decrypt = function () {
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
		var seckey = __getParam2("seckey");
		return (function () {
			/*iterates through each weight and decrypts it

        TODO: check that weights are actually encrypted

        */;
			this.encrypted = false;
			this.weights = this.weights.decrypt(seckey);
			return self;
		}).call(this);
	};
	LinearClassifier.prototype.forward = function () {
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
		var input = __getParam3("input");
		return (function () {
			/*Makes a prediction based on input. If the network is encrypted, the
        prediction is also encrypted and vise versa.*/;
			var pred = __pythonRuntime.ops.multiply(this.weights[__pythonRuntime.ops.subscriptIndex(this.weights, 0)], input[__pythonRuntime.ops.subscriptIndex(input, 0)]);
			{
				var __filbertRight0 = __pythonRuntime.functions.enumerate(input._pySlice(1, null, null));
				if (__filbertRight0 instanceof Array) {
					for (var __filbertIndex0 = 0; __filbertIndex0 < __filbertRight0.length; ++__filbertIndex0) {
						var __filbertTmp4 = __filbertRight0[__filbertIndex0];
						var j = __filbertTmp4[0];
						var each_inp = __filbertTmp4[1];
						if (each_inp == 1) {
							pred = __pythonRuntime.ops.add(pred, this.weights[__pythonRuntime.ops.subscriptIndex(this.weights, __pythonRuntime.ops.add(j, 1))]);
						} else if (each_inp != 0) {
							pred = __pythonRuntime.ops.add(pred, __pythonRuntime.ops.multiply(this.weights[__pythonRuntime.ops.subscriptIndex(this.weights, __pythonRuntime.ops.add(j, 1))], input[__pythonRuntime.ops.subscriptIndex(input, __pythonRuntime.ops.add(j, 1))]));
						}
					}
				} else {
					for (var __filbertTmp5 = __pythonRuntime.functions.enumerate(input._pySlice(1, null, null)) in __filbertRight0) {
						j = __filbertTmp5[0];
						each_inp = __filbertTmp5[1];
						if (each_inp == 1) {
							pred = __pythonRuntime.ops.add(pred, this.weights[__pythonRuntime.ops.subscriptIndex(this.weights, __pythonRuntime.ops.add(j, 1))]);
						} else if (each_inp != 0) {
							pred = __pythonRuntime.ops.add(pred, __pythonRuntime.ops.multiply(this.weights[__pythonRuntime.ops.subscriptIndex(this.weights, __pythonRuntime.ops.add(j, 1))], input[__pythonRuntime.ops.subscriptIndex(input, __pythonRuntime.ops.add(j, 1))]));
						}
					}
				}
			}
			return pred;
		}).call(this);
	};
	LinearClassifier.prototype.learn = function () {
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
		var input = __getParam6("input");
		var target = __getParam6("target");
		var alpha = __getParam6("alpha", 0.5);
		return (function () {
			/*Updates weights based on input and target prediction. Note, updating
        weights increases the noise in the encrypted weights and will
        eventually require the weights to be re-encrypted.

        TODO: minibatching
        TODO: instead of storing weights, store aggregated weight updates (and
        optionally use them in "forward").
        */;
			var weight_update = this.generate_gradient(input, target);
			this.weights -= __pythonRuntime.ops.multiply(weight_update, alpha);
			return weight_update;
		}).call(this);
	};
	LinearClassifier.prototype.evaluate = function () {
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
		var inputs = __getParam7("inputs");
		var targets = __getParam7("targets");
		return (function () {
			/*accepts a list of inputs and a list of targets - returns the mean
        squared error scaled by a fixed amount and converted to an integer.*/;
			var scale = 1000;
			if (this.encrypted) {
				return "not yet supported... but will in the future";
			} else {
				var loss = 0;
				{
					var __filbertRight1 = __pythonRuntime.functions.enumerate(inputs);
					if (__filbertRight1 instanceof Array) {
						for (var __filbertIndex1 = 0; __filbertIndex1 < __filbertRight1.length; ++__filbertIndex1) {
							var __filbertTmp8 = __filbertRight1[__filbertIndex1];
							var i = __filbertTmp8[0];
							var row = __filbertTmp8[1];
							var pred = this.forward(row);
							var true = targets[__pythonRuntime.ops.subscriptIndex(targets, i)];
							var diff = pred - true;
							loss = __pythonRuntime.ops.add(loss, __pythonRuntime.ops.multiply(diff, diff).to_numpy());
						}
					} else {
						for (var __filbertTmp9 = __pythonRuntime.functions.enumerate(inputs) in __filbertRight1) {
							i = __filbertTmp9[0];
							row = __filbertTmp9[1];
							var pred = this.forward(row);
							var true = targets[__pythonRuntime.ops.subscriptIndex(targets, i)];
							var diff = pred - true;
							loss = __pythonRuntime.ops.add(loss, __pythonRuntime.ops.multiply(diff, diff).to_numpy());
						}
					}
				}
				return __pythonRuntime.functions.int(__pythonRuntime.ops.multiply(loss[__pythonRuntime.ops.subscriptIndex(loss, 0)], scale) / __pythonRuntime.functions.float(__pythonRuntime.functions.len(inputs)));
			}
		}).call(this);
	};
	LinearClassifier.prototype.__str__ = function () {
		return (function () {
			var left = __pythonRuntime.ops.add(__pythonRuntime.ops.add("Linear Model (", __pythonRuntime.functions.str(this.n_inputs)), ",");
			return __pythonRuntime.ops.add(__pythonRuntime.ops.add(__pythonRuntime.ops.add(left, __pythonRuntime.functions.str(this.n_labels)), "): "), __pythonRuntime.functions.str(this.desc));
		}).call(this);
	};
	LinearClassifier.prototype.__repr__ = function () {
		return (function () {
			return this.__str__();
		}).call(this);
	};
	LinearClassifier.prototype.generate_gradient = function () {
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
		var input = __getParam12("input");
		var target = __getParam12("target");
		return (function () {
			var target = TensorBase(np.array(target).astype('float64'));
			var input = TensorBase(np.array(input).astype('float64'));
			var pred = this.forward(input);
			var target_v = target;
			if (this.pubkey !== None && this.encrypted) {
				target_v = this.pubkey.encrypt(target_v);
			}
			var output_grad = pred - target_v;
			var weight_grad = TensorBase(np.zeros_like(this.weights.data));
			if (this.encrypted) {
				weight_grad = weight_grad.encrypt(this.pubkey);
			}
			{
				var __filbertRight2 = __pythonRuntime.functions.range(__pythonRuntime.functions.len(input));
				if (__filbertRight2 instanceof Array) {
					for (var __filbertIndex2 = 0; __filbertIndex2 < __filbertRight2.length; ++__filbertIndex2) {
						var i = __filbertRight2[__filbertIndex2];
						if (input[__pythonRuntime.ops.subscriptIndex(input, i)] != 1 && input[__pythonRuntime.ops.subscriptIndex(input, i)] != 0) {
							weight_grad[__pythonRuntime.ops.subscriptIndex(weight_grad, i)] = __pythonRuntime.ops.add(weight_grad[__pythonRuntime.ops.subscriptIndex(weight_grad, i)], __pythonRuntime.ops.multiply(output_grad[__pythonRuntime.ops.subscriptIndex(output_grad, 0)], input[__pythonRuntime.ops.subscriptIndex(input, i)]));
						} else if (input[__pythonRuntime.ops.subscriptIndex(input, i)] == 1) {
							weight_grad[__pythonRuntime.ops.subscriptIndex(weight_grad, i)] = __pythonRuntime.ops.add(weight_grad[__pythonRuntime.ops.subscriptIndex(weight_grad, i)], output_grad[__pythonRuntime.ops.subscriptIndex(output_grad, 0)]);
						} else {
							"doesn't matter... input == 0";
						}
					}
				} else {
					for (i in __filbertRight2) {
						if (input[__pythonRuntime.ops.subscriptIndex(input, i)] != 1 && input[__pythonRuntime.ops.subscriptIndex(input, i)] != 0) {
							weight_grad[__pythonRuntime.ops.subscriptIndex(weight_grad, i)] = __pythonRuntime.ops.add(weight_grad[__pythonRuntime.ops.subscriptIndex(weight_grad, i)], __pythonRuntime.ops.multiply(output_grad[__pythonRuntime.ops.subscriptIndex(output_grad, 0)], input[__pythonRuntime.ops.subscriptIndex(input, i)]));
						} else if (input[__pythonRuntime.ops.subscriptIndex(input, i)] == 1) {
							weight_grad[__pythonRuntime.ops.subscriptIndex(weight_grad, i)] = __pythonRuntime.ops.add(weight_grad[__pythonRuntime.ops.subscriptIndex(weight_grad, i)], output_grad[__pythonRuntime.ops.subscriptIndex(output_grad, 0)]);
						} else {
							"doesn't matter... input == 0";
						}
					}
				}
			}
			return weight_grad;
		}).call(this);
	};
}
