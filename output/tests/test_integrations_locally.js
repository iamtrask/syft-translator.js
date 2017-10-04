{
	function PySonarNotebooks() {}
	PySonarNotebooks.prototype.model_training_demo_notebook = function () {
		return (function () {
			/*If this test fails, you probably broke the demo notebook located at
        PySonar/notebooks/Sonar - Decentralized Model Training Simulation
        (local blockchain).ipynb */;
			var c = LocalDjangoCapsuleClient();
			var d = LinearClassifier(desc, "DiabetesClassifier", n_inputs, 10, n_labels, 1, capsule_client, c);
			d.encrypt();
			this.assertTrue(True);
		}).call(this);
	};
}
{
	function PySyftNotebooks() {
		this.target = np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1), new __pythonRuntime.objects.list(0, 0), new __pythonRuntime.objects.list(1, 1), new __pythonRuntime.objects.list(0, 0)));
		{
			var __filbertRight0 = __pythonRuntime.functions.range(3);
			if (__filbertRight0 instanceof Array) {
				for (var __filbertIndex0 = 0; __filbertIndex0 < __filbertRight0.length; ++__filbertIndex0) {
					var iter = __filbertRight0[__filbertIndex0];
					model.learn(input, target, alpha, 0.5);
				}
			} else {
				for (iter in __filbertRight0) {
					model.learn(input, target, alpha, 0.5);
				}
			}
		}
		if (encrypted) {
			this.model = model.decrypt();
		}
		{
			var __filbertRight1 = __pythonRuntime.functions.range(__pythonRuntime.functions.len(input));
			if (__filbertRight1 instanceof Array) {
				for (var __filbertIndex1 = 0; __filbertIndex1 < __filbertRight1.length; ++__filbertIndex1) {
					var i = __filbertRight1[__filbertIndex1];
					model.forward(input[__pythonRuntime.ops.subscriptIndex(input, i)]);
				}
			} else {
				for (i in __filbertRight1) {
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
				var __filbertTmp2 = KeyPair().generate();
				var pubkey = __filbertTmp2[0];
				var prikey = __filbertTmp2[1];
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
				var __filbertTmp3 = KeyPair().deserialize(pubkey_str, prikey_str);
				var pubkey2 = __filbertTmp3[0];
				var prikey2 = __filbertTmp3[1];
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
			var capsule = LocalDjangoCapsuleClient();
			var model = LinearClassifier(capsule_client, capsule);
			model.capsule == capsule;
			model = model.encrypt();
			var encrypted = True;
			Exception;
			e;
			encrypted = false;
			__pythonRuntime.functions.print('[!]', e);
			var input = np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 1, 1), new __pythonRuntime.objects.list(0, 0, 1, 0)), new __pythonRuntime.objects.list(1, 0, 1, 1), new __pythonRuntime.objects.list(0, 0, 1, 0));
		}).call(this);
	};
}
