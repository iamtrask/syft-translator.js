{
	function DimTests() {}
	DimTests.prototype.test_dim_one = function () {
		return (function () {
			{
				var __filbertTmp1 = KeyPair().generate();
				var p = __filbertTmp1[0];
				var s = __filbertTmp1[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			this.assertTrue(x.dim() == 1);
		}).call(this);
	};
}
{
	function DotTests() {}
	DotTests.prototype.test_dot_product = function () {
		return (function () {
			{
				var __filbertTmp3 = Paillier();
				var pk = __filbertTmp3[0];
				var sk = __filbertTmp3[1];
			}
			var x = pk.ones(10);
			var y = sy.ones(10);
			var out1 = y.dot(x).decrypt(sk);
			var out2 = x.dot(y).decrypt(sk);
			this.assertEqual(out1, 10);
			this.assertEqual(out2, 10);
		}).call(this);
	};
}
{
	function AddTests() {}
	AddTests.prototype.test_simple = function () {
		return (function () {
			{
				var __filbertTmp5 = KeyPair().generate();
				var p = __filbertTmp5[0];
				var s = __filbertTmp5[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			var x2 = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(3, 4, 5, 6, 7.)));
			var y = __pythonRuntime.ops.add(x, x2).decrypt(s);
			this.assertTrue(y == np.array(new __pythonRuntime.objects.list(4., 6., 8., 10., 12.)));
		}).call(this);
	};
	AddTests.prototype.test_simple_reversed = function () {
		return (function () {
			{
				var __filbertTmp7 = KeyPair().generate();
				var p = __filbertTmp7[0];
				var s = __filbertTmp7[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			var x2 = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(3, 4, 5, 6, 7.)));
			var y = __pythonRuntime.ops.add(x2, x).decrypt(s);
			this.assertTrue(y == np.array(new __pythonRuntime.objects.list(4., 6., 8., 10., 12.)));
		}).call(this);
	};
	AddTests.prototype.test_scalar_in_place = function () {
		return (function () {
			{
				var __filbertTmp9 = KeyPair().generate();
				var p = __filbertTmp9[0];
				var s = __filbertTmp9[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			x = __pythonRuntime.ops.add(x, 1);
			this.assertTrue(s.decrypt(x) == np.array(new __pythonRuntime.objects.list(2., 3., 4., 5., 6.)));
		}).call(this);
	};
	AddTests.prototype.test_in_place = function () {
		return (function () {
			{
				var __filbertTmp11 = KeyPair().generate();
				var p = __filbertTmp11[0];
				var s = __filbertTmp11[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			var x2 = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(3, 4, 5, 6, 7.)));
			x = __pythonRuntime.ops.add(x, x2);
			this.assertTrue(s.decrypt(x) == np.array(new __pythonRuntime.objects.list(4., 6., 8., 10., 12.)));
		}).call(this);
	};
	AddTests.prototype.test_in_place_reversed = function () {
		return (function () {
			{
				var __filbertTmp13 = KeyPair().generate();
				var p = __filbertTmp13[0];
				var s = __filbertTmp13[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			var x2 = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(3, 4, 5, 6, 7.)));
			x2 = __pythonRuntime.ops.add(x2, x);
			this.assertTrue(s.decrypt(x2) == np.array(new __pythonRuntime.objects.list(4., 6., 8., 10., 12.)));
		}).call(this);
	};
	AddTests.prototype.test_scalar = function () {
		return (function () {
			{
				var __filbertTmp15 = KeyPair().generate();
				var p = __filbertTmp15[0];
				var s = __filbertTmp15[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			var y = __pythonRuntime.ops.add(x, 40);
			this.assertTrue(s.decrypt(y) == np.array(new __pythonRuntime.objects.list(41., 42., 43., 44., 45.)));
		}).call(this);
	};
	AddTests.prototype.test_in_place_plain_text = function () {
		return (function () {
			{
				var __filbertTmp17 = KeyPair().generate();
				var p = __filbertTmp17[0];
				var s = __filbertTmp17[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			var x2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5, 6, 7.)));
			x = __pythonRuntime.ops.add(x, x2);
			this.assertTrue(s.decrypt(x) == np.array(new __pythonRuntime.objects.list(4., 6., 8., 10., 12.)));
		}).call(this);
	};
	AddTests.prototype.test_add_depth = function () {
		return (function () {
			{
				var __filbertTmp19 = KeyPair().generate();
				var p = __filbertTmp19[0];
				var s = __filbertTmp19[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			var x2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5, 6, 7.)));
			x = __pythonRuntime.ops.add(x, x2);
			this.assertEqual(x._add_depth, 1);
		}).call(this);
	};
}
{
	function MulTests() {}
	MulTests.prototype.test_basic = function () {
		return (function () {
			{
				var __filbertTmp21 = KeyPair().generate();
				var p = __filbertTmp21[0];
				var s = __filbertTmp21[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			var x2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5, 6, 7.)));
			var y = __pythonRuntime.ops.multiply(x, x2);
			this.assertTrue(y.decrypt(s) == np.array(new __pythonRuntime.objects.list(3., 8., 15., 24., 35.)));
		}).call(this);
	};
	MulTests.prototype.test_basic_reversed = function () {
		return (function () {
			{
				var __filbertTmp23 = KeyPair().generate();
				var p = __filbertTmp23[0];
				var s = __filbertTmp23[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			var x2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5, 6, 7.)));
			var y = __pythonRuntime.ops.multiply(x2, x);
			this.assertTrue(y.decrypt(s) == np.array(new __pythonRuntime.objects.list(3., 8., 15., 24., 35.)));
		}).call(this);
	};
	MulTests.prototype.test_inline = function () {
		return (function () {
			{
				var __filbertTmp25 = KeyPair().generate();
				var p = __filbertTmp25[0];
				var s = __filbertTmp25[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			var x2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5, 6, 7.)));
			x = __pythonRuntime.ops.multiply(x, x2);
			this.assertTrue(x.decrypt(s) == np.array(new __pythonRuntime.objects.list(3., 8., 15., 24., 35.)));
		}).call(this);
	};
	MulTests.prototype.test_inline_reversed = function () {
		return (function () {
			{
				var __filbertTmp27 = KeyPair().generate();
				var p = __filbertTmp27[0];
				var s = __filbertTmp27[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			var x2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5, 6, 7.)));
			x2 = __pythonRuntime.ops.multiply(x2, x);
			this.assertTrue(x2.decrypt(s) == np.array(new __pythonRuntime.objects.list(3., 8., 15., 24., 35.)));
		}).call(this);
	};
	MulTests.prototype.test_scalar = function () {
		return (function () {
			{
				var __filbertTmp29 = KeyPair().generate();
				var p = __filbertTmp29[0];
				var s = __filbertTmp29[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			x = __pythonRuntime.ops.multiply(x, 2);
			this.assertTrue(s.decrypt(x) == np.array(new __pythonRuntime.objects.list(2., 4., 6., 8., 10.)));
		}).call(this);
	};
	MulTests.prototype.test_mul_depth = function () {
		return (function () {
			{
				var __filbertTmp31 = KeyPair().generate();
				var p = __filbertTmp31[0];
				var s = __filbertTmp31[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
			var x2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5, 6, 7.)));
			x = __pythonRuntime.ops.multiply(x, x2);
			this.assertEqual(x._mul_depth, 1);
		}).call(this);
	};
}
{
	function DivTests() {}
	DivTests.prototype.test_basic = function () {
		return (function () {
			{
				var __filbertTmp33 = KeyPair().generate();
				var p = __filbertTmp33[0];
				var s = __filbertTmp33[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(3., 8., 15., 24., 35.)));
			var x2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5, 6, 7.)));
			var y = x / x2;
			__pythonRuntime.functions.print(y.decrypt(s));
			this.assertTrue(y.decrypt(s) == np.array(new __pythonRuntime.objects.list(1., 2., 3., 4., 5.)));
		}).call(this);
	};
	DivTests.prototype.test_inline = function () {
		return (function () {
			{
				var __filbertTmp35 = KeyPair().generate();
				var p = __filbertTmp35[0];
				var s = __filbertTmp35[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(3., 8., 15., 24., 35.)));
			var x2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5, 6, 7.)));
			x /= x2;
			this.assertTrue(x.decrypt(s) == np.array(new __pythonRuntime.objects.list(1., 2., 3., 4., 5.)));
		}).call(this);
	};
	DivTests.prototype.test_scalar = function () {
		return (function () {
			{
				var __filbertTmp37 = KeyPair().generate();
				var p = __filbertTmp37[0];
				var s = __filbertTmp37[1];
			}
			var x = PaillierTensor(p, np.array(new __pythonRuntime.objects.list(2., 4., 6., 8., 10.)));
			x /= 2;
			this.assertTrue(s.decrypt(x) == np.array(new __pythonRuntime.objects.list(1, 2, 3, 4, 5.)));
		}).call(this);
	};
}
{
	function SerializeTest() {}
	SerializeTest.prototype.test_serialize = function () {
		return (function () {
			{
				var __filbertTmp39 = KeyPair().generate();
				var pubkey = __filbertTmp39[0];
				var seckey = __filbertTmp39[1];
			}
			var pk_serialized = pubkey.serialize();
			var sk_serialized = seckey.serialize();
			{
				var __filbertTmp40 = KeyPair().deserialize(pk_serialized);
				var pubkey2 = __filbertTmp40[0];
				var seckey2 = __filbertTmp40[1];
			}
			sk_serialized;
			this.assertTrue(pubkey.pk == pubkey2.pk && dummy262);
			seckey.sk == seckey2.sk;
		}).call(this);
	};
}
