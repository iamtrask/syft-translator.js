{
	function LinearClassifier() {
		object.call(this);
		/*This class is a basic linear classifier with functionality to
    encrypt/decrypt weights according to any of the homomorphic encryption
    schemes in syft.he. It also contains the logic to make predictions when
    in an encrypted state.

    TODO: create a generic interface for ML models that this class implements.
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
		var capsule_client = __getParam0("capsule_client", None);
		return (function () {
			this.desc = desc;
			this.n_inputs = n_inputs;
			this.n_labels = n_labels;
			this.weights = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(n_inputs, n_labels)));
			this.pubkey = None;
			this.encrypted = false;
			this.capsule = capsule_client;
		}).call(this);
	}
	LinearClassifier.prototype = Object.create(object.prototype);
	LinearClassifier.prototype.encrypt = function () {
		return (function () {
			/*iterates through each weight and encrypts it

        TODO: check that weights are actually decrypted
        */;
			this.pubkey = this.capsule.keygen();
			this.encrypted = True;
			this.weights = this.weights.encrypt(this.pubkey);
			return self;
		}).call(this);
	};
	LinearClassifier.prototype.decrypt = function () {
		return (function () {
			/*iterates through each weight and decrypts it

        TODO: check that weights are actually encrypted
        */;
			this.encrypted = false;
			this.weights = this.capsule.decrypt(this.weights, this.pubkey.id);
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
        prediction is also encrypted and vise versa.
        */;
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
		var batchsize = __getParam6("batchsize", 32);
		var encrypt_interval = __getParam6("encrypt_interval", 16);
		return (function () {
			/*Updates weights based on input and target prediction. Note, updating
        weights increases the noise in the encrypted weights and will
        eventually require the weights to be re-encrypted.

        TODO: instead of storing weights, store aggregated weight updates (and
        optionally use them in "forward").
        */;
			var input_batches = (function () {
				var __tmpList7 = new __pythonRuntime.objects.list();
				{
					var __filbertRight1 = __pythonRuntime.functions.range(0, __pythonRuntime.functions.len(input), batchsize);
					if (__filbertRight1 instanceof Array) {
						for (var __filbertIndex1 = 0; __filbertIndex1 < __filbertRight1.length; ++__filbertIndex1) {
							var i = __filbertRight1[__filbertIndex1];
							__tmpList7.push(input._pySlice(i, __pythonRuntime.ops.add(i, batchsize), null));
						}
					} else {
						for (i in __filbertRight1) {
							__tmpList7.push(input._pySlice(i, __pythonRuntime.ops.add(i, batchsize), null));
						}
					}
				}
				return __tmpList7;
			})();
			var target_batches = (function () {
				var __tmpList8 = new __pythonRuntime.objects.list();
				{
					var __filbertRight2 = __pythonRuntime.functions.range(0, __pythonRuntime.functions.len(target), batchsize);
					if (__filbertRight2 instanceof Array) {
						for (var __filbertIndex2 = 0; __filbertIndex2 < __filbertRight2.length; ++__filbertIndex2) {
							i = __filbertRight2[__filbertIndex2];
							__tmpList8.push(target._pySlice(i, __pythonRuntime.ops.add(i, batchsize), null));
						}
					} else {
						for (i in __filbertRight2) {
							__tmpList8.push(target._pySlice(i, __pythonRuntime.ops.add(i, batchsize), null));
						}
					}
				}
				return __tmpList8;
			})();
			{
				var __filbertRight3 = __pythonRuntime.functions.enumerate(zip(input_batches, target_batches));
				if (__filbertRight3 instanceof Array) {
					for (var __filbertIndex3 = 0; __filbertIndex3 < __filbertRight3.length; ++__filbertIndex3) {
						var __filbertTmp9 = __filbertRight3[__filbertIndex3];
						var epoch_count = __filbertTmp9[0];
						var minibatch = __filbertTmp9[1];
						this.batch_update(minibatch, alpha);
						if (this.encrypted && epoch_count > encrypt_interval && epoch_count % encrypt_interval == 0) {
							this.weights = this.capsule.bootstrap(this.weights, this.pubkey.id);
						}
					}
				} else {
					for (var __filbertTmp10 = __pythonRuntime.functions.enumerate(zip(input_batches, target_batches)) in __filbertRight3) {
						epoch_count = __filbertTmp10[0];
						minibatch = __filbertTmp10[1];
						this.batch_update(minibatch, alpha);
						if (this.encrypted && epoch_count > encrypt_interval && epoch_count % encrypt_interval == 0) {
							this.weights = this.capsule.bootstrap(this.weights, this.pubkey.id);
						}
					}
				}
			}
		}).call(this);
	};
	LinearClassifier.prototype.batch_update = function () {
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
		var minibatch = __getParam11("minibatch");
		var alpha = __getParam11("alpha");
		return (function () {
			/*Updates a minibatch of input and target prediction. Should be called through
        learn() for default parameters
        */;
			var weight_update = TensorBase(np.zeros(this.weights.data.shape));
			if (this.encrypted) {
				weight_update = weight_update.encrypt(this.pubkey);
			}
			{
				var __filbertRight4 = zip(__pythonRuntime.ops.multiply(dummy35, minibatch));
				if (__filbertRight4 instanceof Array) {
					for (var __filbertIndex4 = 0; __filbertIndex4 < __filbertRight4.length; ++__filbertIndex4) {
						var __filbertTmp12 = __filbertRight4[__filbertIndex4];
						var x = __filbertTmp12[0];
						var y = __filbertTmp12[1];
						weight_update = __pythonRuntime.ops.add(weight_update, this.generate_gradient(x, y));
					}
				} else {
					for (var __filbertTmp13 = zip(__pythonRuntime.ops.multiply(dummy35, minibatch)) in __filbertRight4) {
						x = __filbertTmp13[0];
						y = __filbertTmp13[1];
						weight_update = __pythonRuntime.ops.add(weight_update, this.generate_gradient(x, y));
					}
				}
			}
			this.weights -= __pythonRuntime.ops.multiply(weight_update, alpha / __pythonRuntime.functions.len(minibatch[__pythonRuntime.ops.subscriptIndex(minibatch, 0)]));
		}).call(this);
	};
	LinearClassifier.prototype.evaluate = function () {
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
		var inputs = __getParam14("inputs");
		var targets = __getParam14("targets");
		return (function () {
			/*accepts a list of inputs and a list of targets - returns the mean
        squared error scaled by a fixed amount and converted to an integer.
        */;
			var scale = 1000;
			if (this.encrypted) {
				return "not yet supported... but will in the future";
			} else {
				var loss = 0;
				{
					var __filbertRight5 = __pythonRuntime.functions.enumerate(inputs);
					if (__filbertRight5 instanceof Array) {
						for (var __filbertIndex5 = 0; __filbertIndex5 < __filbertRight5.length; ++__filbertIndex5) {
							var __filbertTmp15 = __filbertRight5[__filbertIndex5];
							var i = __filbertTmp15[0];
							var row = __filbertTmp15[1];
							var pred = this.forward(row);
							var true = targets[__pythonRuntime.ops.subscriptIndex(targets, i)];
							var diff = pred - true;
							loss = __pythonRuntime.ops.add(loss, __pythonRuntime.ops.multiply(diff, diff).to_numpy());
						}
					} else {
						for (var __filbertTmp16 = __pythonRuntime.functions.enumerate(inputs) in __filbertRight5) {
							i = __filbertTmp16[0];
							row = __filbertTmp16[1];
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
		var __params19 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex19 = 0;
		var __args19 = arguments;
		function __getParam19(v, d) {
			var r = d;
			if (__params19) {
				if (__formalsIndex19 < __params19.formals.length) {
					r = __params19.formals[__formalsIndex19++];
				} else if ((v in __params19.keywords)) {
					r = __params19.keywords[v];
					delete __params19.keywords[v];
				}
			} else if (__formalsIndex19 < __args19.length) {
				r = __args19[__formalsIndex19++];
			}
			return r;
		}
		var input = __getParam19("input");
		var target = __getParam19("target");
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
				var __filbertRight6 = __pythonRuntime.functions.range(__pythonRuntime.functions.len(input));
				if (__filbertRight6 instanceof Array) {
					for (var __filbertIndex6 = 0; __filbertIndex6 < __filbertRight6.length; ++__filbertIndex6) {
						var i = __filbertRight6[__filbertIndex6];
						if (input[__pythonRuntime.ops.subscriptIndex(input, i)] != 1 && input[__pythonRuntime.ops.subscriptIndex(input, i)] != 0) {
							weight_grad[__pythonRuntime.ops.subscriptIndex(weight_grad, i)] = __pythonRuntime.ops.add(weight_grad[__pythonRuntime.ops.subscriptIndex(weight_grad, i)], __pythonRuntime.ops.multiply(output_grad[__pythonRuntime.ops.subscriptIndex(output_grad, 0)], input[__pythonRuntime.ops.subscriptIndex(input, i)]));
						} else if (input[__pythonRuntime.ops.subscriptIndex(input, i)] == 1) {
							weight_grad[__pythonRuntime.ops.subscriptIndex(weight_grad, i)] = __pythonRuntime.ops.add(weight_grad[__pythonRuntime.ops.subscriptIndex(weight_grad, i)], output_grad[__pythonRuntime.ops.subscriptIndex(output_grad, 0)]);
						} else {
							"doesn't matter... input == 0";
						}
					}
				} else {
					for (i in __filbertRight6) {
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
