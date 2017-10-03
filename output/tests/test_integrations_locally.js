{
	function PySonarNotebooks() {}
	PySonarNotebooks.prototype.model_training_demo_notebook = function () {
		return (function () {
			/*If this test fails, you probably broke the demo notebook located at
        PySonar/notebooks/Sonar - Decentralized Model Training Simulation
        (local blockchain).ipynb */;
			{
				var __filbertTmp1 = KeyPair().generate(n_length, 1024);
				var pubkey = __filbertTmp1[0];
				var prikey = __filbertTmp1[1];
			}
			var d = LinearClassifier(desc, "DiabetesClassifier", n_inputs, 10, n_labels, 1);
			d.encrypt(pubkey);
			this.assertTrue(True);
		}).call(this);
	};
}
{
	function PySyftNotebooks() {
		this.target = np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1), new __pythonRuntime.objects.list(0, 0), new __pythonRuntime.objects.list(1, 1), new __pythonRuntime.objects.list(0, 0)));
		{
			var __filbertRight1 = __pythonRuntime.functions.range(3);
			if (__filbertRight1 instanceof Array) {
				for (var __filbertIndex1 = 0; __filbertIndex1 < __filbertRight1.length; ++__filbertIndex1) {
					var iter = __filbertRight1[__filbertIndex1];
					{
						var __filbertRight0 = __pythonRuntime.functions.range(__pythonRuntime.functions.len(input));
						if (__filbertRight0 instanceof Array) {
							for (var __filbertIndex0 = 0; __filbertIndex0 < __filbertRight0.length; ++__filbertIndex0) {
								var i = __filbertRight0[__filbertIndex0];
								model.learn(input, input[__pythonRuntime.ops.subscriptIndex(input, i)], target, target[__pythonRuntime.ops.subscriptIndex(target, i)], alpha, 0.5);
							}
						} else {
							for (i in __filbertRight0) {
								model.learn(input, input[__pythonRuntime.ops.subscriptIndex(input, i)], target, target[__pythonRuntime.ops.subscriptIndex(target, i)], alpha, 0.5);
							}
						}
					}
				}
			} else {
				for (iter in __filbertRight1) {
					{
						var __filbertRight0 = __pythonRuntime.functions.range(__pythonRuntime.functions.len(input));
						if (__filbertRight0 instanceof Array) {
							for (var __filbertIndex0 = 0; __filbertIndex0 < __filbertRight0.length; ++__filbertIndex0) {
								var i = __filbertRight0[__filbertIndex0];
								model.learn(input, input[__pythonRuntime.ops.subscriptIndex(input, i)], target, target[__pythonRuntime.ops.subscriptIndex(target, i)], alpha, 0.5);
							}
						} else {
							for (i in __filbertRight0) {
								model.learn(input, input[__pythonRuntime.ops.subscriptIndex(input, i)], target, target[__pythonRuntime.ops.subscriptIndex(target, i)], alpha, 0.5);
							}
						}
					}
				}
			}
		}
		this.model = model.decrypt(prikey);
		{
			var __filbertRight2 = __pythonRuntime.functions.range(__pythonRuntime.functions.len(input));
			if (__filbertRight2 instanceof Array) {
				for (var __filbertIndex2 = 0; __filbertIndex2 < __filbertRight2.length; ++__filbertIndex2) {
					i = __filbertRight2[__filbertIndex2];
					model.forward(input[__pythonRuntime.ops.subscriptIndex(input, i)]);
				}
			} else {
				for (i in __filbertRight2) {
					model.forward(input[__pythonRuntime.ops.subscriptIndex(input, i)]);
				}
			}
		}
	}
	PySyftNotebooks.prototype.paillier_HE_example_notebook = function () {
		return (function () {
			/*If this test fails, you probably broke the demo notebook located at
        PySyft/notebooks/Syft - Paillier Homomorphic Encryption Example.ipynb
        */;
			{
				var __filbertTmp3 = KeyPair().generate();
				var pubkey = __filbertTmp3[0];
				var prikey = __filbertTmp3[1];
			}
			var x = PaillierTensor(pubkey, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			var out1 = x.decrypt(prikey);
			this.assertEqual(out1, np.array(new __pythonRuntime.objects.list(1., 2., 3., 4., 5.)));
			var out2 = __pythonRuntime.ops.add(x, x[__pythonRuntime.ops.subscriptIndex(x, 0)]).decrypt(prikey);
			this.assertEqual(out2, np.array(new __pythonRuntime.objects.list(2., 3., 4., 5., 6.)));
			var out3 = __pythonRuntime.ops.multiply(x, 5).decrypt(prikey);
			this.assertEqual(out3, np.array(new __pythonRuntime.objects.list(5., 10., 15., 20., 25.)));
			var out4 = __pythonRuntime.ops.add(x, x / 5).decrypt(prikey);
			this.assertEqual(out4, np.array(new __pythonRuntime.objects.list(1.2, 2.4, 3.6, 4.8, 6.)));
			var pubkey_str = pubkey.serialize();
			var prikey_str = prikey.serialize();
			{
				var __filbertTmp4 = KeyPair().deserialize(pubkey_str, prikey_str);
				var pubkey2 = __filbertTmp4[0];
				var prikey2 = __filbertTmp4[1];
			}
			var out5 = prikey2.decrypt(x);
			this.assertEqual(out5, np.array(new __pythonRuntime.objects.list(1., 2., 3., 4., 5.)));
			var y = PaillierTensor(pubkey, np.ones(5) / 2);
			var out6 = prikey.decrypt(y);
			this.assertEqual(out6, np.array(new __pythonRuntime.objects.list(.5, .5, .5, .5, .5)));
			var y_str = pickle.dumps(y);
			var y2 = pickle.loads(y_str);
			var out7 = prikey.decrypt(y2);
			this.assertEqual(out7, np.array(new __pythonRuntime.objects.list(.5, .5, .5, .5, .5)));
		}).call(this);
	};
	PySyftNotebooks.prototype.test_paillier_linear_classifier_notebook = function () {
		return (function () {
			/*If this test fails, you probably broke the demo notebook located at
        PySyft/notebooks/Syft - Paillier Homomorphic Encryption Example.ipynb
        */;
			{
				var __filbertTmp6 = KeyPair().generate(n_length, 1024);
				var pubkey = __filbertTmp6[0];
				var prikey = __filbertTmp6[1];
			}
			var model = LinearClassifier(n_inputs, 4, n_labels, 2).encrypt(pubkey);
			var input = np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 1, 1), new __pythonRuntime.objects.list(0, 0, 1, 0)), new __pythonRuntime.objects.list(1, 0, 1, 1), new __pythonRuntime.objects.list(0, 0, 1, 0));
		}).call(this);
	};
}
