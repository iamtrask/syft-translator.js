{
	function ConvenienceTests() {}
	ConvenienceTests.prototype.test_zeros = function () {
		return (function () {
			this.assertTrue((syft.zeros(5).data == np.zeros(5)).all());
		}).call(this);
	};
	ConvenienceTests.prototype.test_ones = function () {
		return (function () {
			this.assertTrue((syft.ones(5).data == np.ones(5)).all());
		}).call(this);
	};
	ConvenienceTests.prototype.testRand = function () {
		return (function () {
			np.random.seed(0);
			var x = syft.rand(5).data;
			np.random.seed(0);
			var y = np.random.rand(5);
			this.assertTrue((x == y).all());
		}).call(this);
	};
}
{
	function DotTests() {}
	DotTests.prototype.test_dot_int = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(4, 5, 6)));
			this.assertEqual(syft.dot(t1, t2), 32);
		}).call(this);
	};
	DotTests.prototype.test_dot_float = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1.3, 2.5, 3.7)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(4.9, 5.8, 6.5)));
			this.assertEqual(syft.dot(t1, t2), 44.92);
		}).call(this);
	};
}
{
	function CeilTests() {}
	CeilTests.prototype.test_ceil = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.3, 4.1), new __pythonRuntime.objects.list(7.4, 8.3))));
			this.assertTrue(syft.equal(syft.ceil(t1), TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3., 5.)), new __pythonRuntime.objects.list(8., 9.))));
		}).call(this);
	};
}
{
	function FloorTests() {}
	FloorTests.prototype.test_floor = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.3, 4.1), new __pythonRuntime.objects.list(7.4, 8.3))));
			this.assertTrue(syft.equal(syft.math.floor(t1), TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2., 4.)), new __pythonRuntime.objects.list(7., 8.))));
		}).call(this);
	};
}
{
	function CumsumTests() {}
	CumsumTests.prototype.test_cumsum = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			this.assertTrue(syft.equal(syft.cumsum(t1), TensorBase(new __pythonRuntime.objects.list(1, 3, 6))));
		}).call(this);
	};
}
{
	function CumprodTests() {
		/*Cumultative Product test*/;
	}
	CumprodTests.prototype.test_cumprod = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			this.assertTrue(syft.equal(syft.cumprod(t1), TensorBase(new __pythonRuntime.objects.list(1, 2, 6))));
		}).call(this);
	};
}
{
	function SigmoidTests() {
		/*Sigmoid Test*/;
	}
	SigmoidTests.prototype.test_sigmoid = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1.2, 3.3, 4)));
			this.assertTrue(syft.equal(syft.math.sigmoid(t1), TensorBase(), new __pythonRuntime.objects.list(0.76852478, 0.96442881, 0.98201379)));
		}).call(this);
	};
}
{
	function MatmulTests() {
		/*Matmul Tests*/;
		this.t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5.8, 6.5)), new __pythonRuntime.objects.list(7.8, 8.9)));
	}
	MatmulTests.prototype.test_matmul_1d_int = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(4, 5, 6)));
			this.assertEqual(syft.matmul(t1, t2), syft.dot(t1, t2));
		}).call(this);
	};
	MatmulTests.prototype.test_matmul_1d_float = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1.3, 2.5, 3.7)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(4.9, 5.8, 6.5)));
			this.assertEqual(syft.matmul(t1, t2), syft.dot(t1, t2));
		}).call(this);
	};
	MatmulTests.prototype.test_matmul_2d_identity = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0)), new __pythonRuntime.objects.list(0, 1)));
		}).call(this);
	};
}
self.assertTrue(syft.equal(syft.matmul(t1, t2), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5.8, 6.5)), new __pythonRuntime.objects.list(7.8, 8.9)));
function test_matmul_2d_int() {
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
	var self = __getParam13("self");
	return (function () {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2)), new __pythonRuntime.objects.list(3, 4)));
	}).call(this);
}
var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(7, 8)));
self.assertTrue(syft.equal(syft.matmul(t1, t2), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(19, 22)), new __pythonRuntime.objects.list(43, 50)));
function test_matmul_2d_float() {
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
	var self = __getParam14("self");
	return (function () {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.3, 2.5)), new __pythonRuntime.objects.list(3.4, 4.5)));
	}).call(this);
}
t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5.8, 6.5)), new __pythonRuntime.objects.list(7.8, 8.9)));
self.assertTrue(syft.equal(syft.matmul(t1, t2), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(27.04, 30.7)), new __pythonRuntime.objects.list(54.82, 62.15)));
{
	function admmTests() {}
	admmTests.prototype.test_addmm_1d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
			var out = syft.addmm(t1, t2, mat, beta, 2, alpha, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(50)));
		}).call(this);
	};
	admmTests.prototype.test_addmm_2d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
			var out = syft.addmm(t1, t2, mat, beta, 2, alpha, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(10, 18), new __pythonRuntime.objects.list(12, 20))));
		}).call(this);
	};
}
{
	function addcmulTests() {}
	addcmulTests.prototype.test_addcmul_1d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
			var out = syft.addcmul(t1, t2, mat, value, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(9, 17, 29)));
		}).call(this);
	};
	addcmulTests.prototype.test_addcmul_2d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
			var out = syft.addcmul(t1, t2, mat, value, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 11), new __pythonRuntime.objects.list(5, 12))));
		}).call(this);
	};
}
{
	function addcdivTests() {}
	addcdivTests.prototype.test_addcdiv_1d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 5, 4)));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
			var out = syft.addcdiv(t1, t2, mat, value, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(6., 5.8, 6.5)));
		}).call(this);
	};
	addcdivTests.prototype.test_addcdiv_2d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
			var out = syft.addcdiv(t1, t2, mat, value, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4., 5.), new __pythonRuntime.objects.list(5., 6.))));
		}).call(this);
	};
}
{
	function addmv() {}
	addmv.prototype.test_addmv = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2)));
			var vec = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3, 4)));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3, 3, 4), new __pythonRuntime.objects.list(5, 6, 6, 7))));
			var out = syft.addmv(t1, mat, vec, beta, 2, alpha, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(68, 130)));
		}).call(this);
	};
}
{
	function bmmTests() {}
	bmmTests.prototype.test_bmm_for_correct_size_output = function () {
		return (function () {
			var t1 = TensorBase(np.random.rand(4, 3, 2));
			var t2 = TensorBase(np.random.rand(4, 2, 1));
			var out = syft.bmm(t1, t2);
			this.assertTupleEqual(out.shape(), new __pythonRuntime.objects.tuple(4, 3, 1));
		}).call(this);
	};
	bmmTests.prototype.test_bmm = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 1)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2)))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(3)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4), new __pythonRuntime.objects.list(8)))));
			var out = syft.bmm(t1, t2);
			var test_result = np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(20))));
			this.assertTrue(np.array_equal(out.data, test_result));
		}).call(this);
	};
}
{
	function addbmmTests() {}
	addbmmTests.prototype.test_addbmm = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(5, 7)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 9), new __pythonRuntime.objects.list(1, 3)))));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
			var out = syft.addbmm(t1, t2, mat, beta, 2, alpha, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(176, 266), new __pythonRuntime.objects.list(114, 172))));
		}).call(this);
	};
}
{
	function baddbmmTests() {}
	baddbmmTests.prototype.test_baddbmm = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(5, 7)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 9), new __pythonRuntime.objects.list(1, 3)))));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 5), new __pythonRuntime.objects.list(5, 6)))));
			var out = syft.baddbmm(t1, t2, mat, beta, 2, alpha, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(62, 92), new __pythonRuntime.objects.list(96, 142))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(122, 184), new __pythonRuntime.objects.list(28, 42))));
		}).call(this);
	};
}
{
	function transposeTests() {
		this.out2 = syft.transpose(t1, 0, 2);
		self.assertTrue(np.array_equal(out2.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 7), new __pythonRuntime.objects.list(5, 1))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 8), new __pythonRuntime.objects.list(6, 2)))));
	}
	transposeTests.prototype.test_transpose = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
			var out1 = syft.transpose(t1, 0, 1);
			this.assertTrue(np.array_equal(out1.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(7, 8))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 6), new __pythonRuntime.objects.list(1, 2)))));
		}).call(this);
	};
}
var out3 = syft.transpose(t1, 1, 2);
self.assertTrue(np.array_equal(out3.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(4, 6))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 1), new __pythonRuntime.objects.list(8, 2)))));
{
	function unsqueezeTests() {}
	unsqueezeTests.prototype.test_unsqueeze = function () {
		return (function () {
			var t1 = TensorBase(np.arange(__pythonRuntime.ops.multiply(__pythonRuntime.ops.multiply(3, 4), 5)).reshape(new __pythonRuntime.objects.tuple(3, 4, 5)));
			{
				var __filbertRight0 = __pythonRuntime.functions.range(__pythonRuntime.functions.len(t1.data.shape));
				if (__filbertRight0 instanceof Array) {
					for (var __filbertIndex0 = 0; __filbertIndex0 < __filbertRight0.length; ++__filbertIndex0) {
						var i = __filbertRight0[__filbertIndex0];
						var out = syft.unsqueeze(t1, i);
						var expected_shape = __pythonRuntime.functions.list(t1.data.shape);
						expected_shape.insert(i, 1);
						this.assertTrue(np.array_equal(out.data.shape, expected_shape));
					}
				} else {
					for (i in __filbertRight0) {
						var out = syft.unsqueeze(t1, i);
						var expected_shape = __pythonRuntime.functions.list(t1.data.shape);
						expected_shape.insert(i, 1);
						this.assertTrue(np.array_equal(out.data.shape, expected_shape));
					}
				}
			}
		}).call(this);
	};
}
{
	function mmtest() {}
	mmtest.prototype.test_mm_1d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5)));
			var out = syft.mm(t1, t2);
			this.assertTrue(np.alltrue(out.data == new __pythonRuntime.objects.list(38)));
		}).call(this);
	};
	mmtest.prototype.test_mm_2d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(2, 3))));
			var out = syft.mm(t1, t2);
			this.assertTrue(np.alltrue(out.data == new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(6, 9), new __pythonRuntime.objects.list(6, 9))));
		}).call(this);
	};
	mmtest.prototype.test_mm_3d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(2, 3, 4))));
			var out = syft.mm(t1, t2);
			this.assertTrue(np.alltrue(), out.data == new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 8, 11), new __pythonRuntime.objects.list(8, 13, 18), new __pythonRuntime.objects.list(11, 18, 25)));
		}).call(this);
	};
}
