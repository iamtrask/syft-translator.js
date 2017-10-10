class ConvenienceTests {
	test_zeros() {
		this.assertTrue((syft.zeros(5).data == np.zeros(5)).all());
	}
	test_ones() {
		this.assertTrue((syft.ones(5).data == np.ones(5)).all());
	}
	testRand() {
		np.random.seed(0);
		var x = syft.rand(5).data;
		np.random.seed(0);
		var y = np.random.rand(5);
		this.assertTrue((x == y).all());
	}
}
class DotTests {
	test_dot_int() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(4, 5, 6)));
		this.assertEqual(syft.dot(t1, t2), 32);
	}
	test_dot_float() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1.3, 2.5, 3.7)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(4.9, 5.8, 6.5)));
		this.assertEqual(syft.dot(t1, t2), 44.92);
	}
}
class DiagTests {
	test_one_dim_tensor_main_diag() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3, 4)));
		this.assertTrue(syft.equal(syft.diag(t), TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0, 0, 0)), new __pythonRuntime.objects.list(0, 2, 0, 0))[__pythonRuntime.ops.subscriptIndex(TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0, 0, 0)), new __pythonRuntime.objects.list(0, 2, 0, 0)), new __pythonRuntime.objects.tuple(0, 0, 3, 0))])[__pythonRuntime.ops.subscriptIndex(syft.equal(syft.diag(t), TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0, 0, 0)), new __pythonRuntime.objects.list(0, 2, 0, 0))[__pythonRuntime.ops.subscriptIndex(TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0, 0, 0)), new __pythonRuntime.objects.list(0, 2, 0, 0)), new __pythonRuntime.objects.tuple(0, 0, 3, 0))]), new __pythonRuntime.objects.tuple(0, 0, 0, 4))]);
	}
}
function test_one_dim_tensor_upper_diag() {
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
	var self = __getParam6("self");
	var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3, 4)));
	self.assertTrue(syft.equal(syft.diag(t, 1), TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 0, 0, 0)), new __pythonRuntime.objects.list(0, 0, 2, 0, 0))[__pythonRuntime.ops.subscriptIndex(TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 0, 0, 0)), new __pythonRuntime.objects.list(0, 0, 2, 0, 0)), new __pythonRuntime.objects.tuple(0, 0, 0, 3, 0))])[__pythonRuntime.ops.subscriptIndex(syft.equal(syft.diag(t, 1), TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 0, 0, 0)), new __pythonRuntime.objects.list(0, 0, 2, 0, 0))[__pythonRuntime.ops.subscriptIndex(TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 0, 0, 0)), new __pythonRuntime.objects.list(0, 0, 2, 0, 0)), new __pythonRuntime.objects.tuple(0, 0, 0, 3, 0))]), new __pythonRuntime.objects.tuple(0, 0, 0, 0, 4))])[__pythonRuntime.ops.subscriptIndex(self.assertTrue(syft.equal(syft.diag(t, 1), TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 0, 0, 0)), new __pythonRuntime.objects.list(0, 0, 2, 0, 0))[__pythonRuntime.ops.subscriptIndex(TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 0, 0, 0)), new __pythonRuntime.objects.list(0, 0, 2, 0, 0)), new __pythonRuntime.objects.tuple(0, 0, 0, 3, 0))])[__pythonRuntime.ops.subscriptIndex(syft.equal(syft.diag(t, 1), TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 0, 0, 0)), new __pythonRuntime.objects.list(0, 0, 2, 0, 0))[__pythonRuntime.ops.subscriptIndex(TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 0, 0, 0)), new __pythonRuntime.objects.list(0, 0, 2, 0, 0)), new __pythonRuntime.objects.tuple(0, 0, 0, 3, 0))]), new __pythonRuntime.objects.tuple(0, 0, 0, 0, 4))]), new __pythonRuntime.objects.tuple(0, 0, 0, 0, 0))];
}
function test_one_dim_tensor_below_diag() {
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
	var self = __getParam7("self");
	var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3, 4)));
	self.assertTrue(syft.equal(syft.diag(t, -1), TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0)), new __pythonRuntime.objects.list(1, 0, 0, 0, 0))[__pythonRuntime.ops.subscriptIndex(TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0)), new __pythonRuntime.objects.list(1, 0, 0, 0, 0)), new __pythonRuntime.objects.tuple(0, 2, 0, 0, 0))])[__pythonRuntime.ops.subscriptIndex(syft.equal(syft.diag(t, -1), TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0)), new __pythonRuntime.objects.list(1, 0, 0, 0, 0))[__pythonRuntime.ops.subscriptIndex(TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0)), new __pythonRuntime.objects.list(1, 0, 0, 0, 0)), new __pythonRuntime.objects.tuple(0, 2, 0, 0, 0))]), new __pythonRuntime.objects.tuple(0, 0, 3, 0, 0))])[__pythonRuntime.ops.subscriptIndex(self.assertTrue(syft.equal(syft.diag(t, -1), TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0)), new __pythonRuntime.objects.list(1, 0, 0, 0, 0))[__pythonRuntime.ops.subscriptIndex(TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0)), new __pythonRuntime.objects.list(1, 0, 0, 0, 0)), new __pythonRuntime.objects.tuple(0, 2, 0, 0, 0))])[__pythonRuntime.ops.subscriptIndex(syft.equal(syft.diag(t, -1), TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0)), new __pythonRuntime.objects.list(1, 0, 0, 0, 0))[__pythonRuntime.ops.subscriptIndex(TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0)), new __pythonRuntime.objects.list(1, 0, 0, 0, 0)), new __pythonRuntime.objects.tuple(0, 2, 0, 0, 0))]), new __pythonRuntime.objects.tuple(0, 0, 3, 0, 0))]), new __pythonRuntime.objects.tuple(0, 0, 0, 4, 0))];
}
function test_two_dim_tensor_main_diag() {
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
	var self = __getParam8("self");
	var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1), new __pythonRuntime.objects.list(2, 3))));
	self.assertTrue(syft.equal(syft.diag(t, 0), TensorBase(new __pythonRuntime.objects.list(0, 3))));
}
function test_two_dim_tensor_upper_diag() {
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
	var self = __getParam9("self");
	var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1), new __pythonRuntime.objects.list(2, 3))));
	self.assertTrue(syft.equal(syft.diag(t, 1), TensorBase(new __pythonRuntime.objects.list(1))));
}
function test_two_dim_tensor_below_diag() {
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
	var self = __getParam10("self");
	var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1), new __pythonRuntime.objects.list(2, 3))));
	self.assertTrue(syft.equal(syft.diag(t, -1), TensorBase(new __pythonRuntime.objects.list(2))));
}
class CeilTests {
	test_ceil() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.3, 4.1), new __pythonRuntime.objects.list(7.4, 8.3))));
		this.assertTrue(syft.equal(syft.ceil(t1), TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3., 5.)), new __pythonRuntime.objects.list(8., 9.))));
	}
}
class FloorTests {
	test_floor() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.3, 4.1), new __pythonRuntime.objects.list(7.4, 8.3))));
		this.assertTrue(syft.equal(syft.math.floor(t1), TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2., 4.)), new __pythonRuntime.objects.list(7., 8.))));
	}
}
class tanhTests {
	test_tanh() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(-0, 1, -2), new __pythonRuntime.objects.list(0, -1, 2))));
		var t2 = syft.math.tanh(t1);
		this.assertTrue(np.array_equal(t1.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, -2), new __pythonRuntime.objects.list(0, -1, 2)))));
		this.assertTrue(np.array_equal(t2.data, np.tanh(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, -2), new __pythonRuntime.objects.list(0, -1, 2))))));
		t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(-0.0, 1.5, -2.5), new __pythonRuntime.objects.list(0.0, -1.5, 2.5))));
		t2 = syft.math.tanh(t1);
		this.assertTrue(np.array_equal(t1.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0.0, 1.5, -2.5), new __pythonRuntime.objects.list(0.0, -1.5, 2.5)))));
		this.assertTrue(np.array_equal(t2.data, np.tanh(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0.0, 1.5, -2.5), new __pythonRuntime.objects.list(0.0, -1.5, 2.5))))));
	}
}
class CumsumTests {
	test_cumsum() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		this.assertTrue(syft.equal(syft.cumsum(t1), TensorBase(new __pythonRuntime.objects.list(1, 3, 6))));
	}
}
class CumprodTests {
	/*Cumultative Product test*/;
	test_cumprod() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		this.assertTrue(syft.equal(syft.cumprod(t1), TensorBase(new __pythonRuntime.objects.list(1, 2, 6))));
	}
}
class SigmoidTests {
	/*Sigmoid Test*/;
	test_sigmoid() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1.2, 3.3, 4)));
		this.assertTrue(syft.equal(syft.math.sigmoid(t1), TensorBase(), new __pythonRuntime.objects.list(0.76852478, 0.96442881, 0.98201379)));
	}
}
class MatmulTests {
	/*Matmul Tests*/;
	test_matmul_1d_int() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(4, 5, 6)));
		this.assertEqual(syft.matmul(t1, t2), syft.dot(t1, t2));
	}
	test_matmul_1d_float() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1.3, 2.5, 3.7)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(4.9, 5.8, 6.5)));
		this.assertEqual(syft.matmul(t1, t2), syft.dot(t1, t2));
	}
	test_matmul_2d_identity() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0)), new __pythonRuntime.objects.list(0, 1)));
	}
	this.t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5.8, 6.5)), new __pythonRuntime.objects.list(7.8, 8.9)));
}
self.assertTrue(syft.equal(syft.matmul(t1, t2), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5.8, 6.5)), new __pythonRuntime.objects.list(7.8, 8.9)));
function test_matmul_2d_int() {
	var __params20 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex20 = 0;
	var __args20 = arguments;
	function __getParam20(v, d) {
		var r = d;
		if (__params20) {
			if (__formalsIndex20 < __params20.formals.length) {
				r = __params20.formals[__formalsIndex20++];
			} else if ((v in __params20.keywords)) {
				r = __params20.keywords[v];
				delete __params20.keywords[v];
			}
		} else if (__formalsIndex20 < __args20.length) {
			r = __args20[__formalsIndex20++];
		}
		return r;
	}
	var self = __getParam20("self");
	var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2)), new __pythonRuntime.objects.list(3, 4)));
}
var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(7, 8)));
self.assertTrue(syft.equal(syft.matmul(t1, t2), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(19, 22)), new __pythonRuntime.objects.list(43, 50)));
function test_matmul_2d_float() {
	var __params21 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex21 = 0;
	var __args21 = arguments;
	function __getParam21(v, d) {
		var r = d;
		if (__params21) {
			if (__formalsIndex21 < __params21.formals.length) {
				r = __params21.formals[__formalsIndex21++];
			} else if ((v in __params21.keywords)) {
				r = __params21.keywords[v];
				delete __params21.keywords[v];
			}
		} else if (__formalsIndex21 < __args21.length) {
			r = __args21[__formalsIndex21++];
		}
		return r;
	}
	var self = __getParam21("self");
	var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.3, 2.5)), new __pythonRuntime.objects.list(3.4, 4.5)));
}
t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5.8, 6.5)), new __pythonRuntime.objects.list(7.8, 8.9)));
self.assertTrue(syft.equal(syft.matmul(t1, t2), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(27.04, 30.7)), new __pythonRuntime.objects.list(54.82, 62.15)));
class admmTests {
	test_addmm_1d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
		var out = syft.addmm(t1, t2, mat, beta, 2, alpha, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(50)));
	}
	test_addmm_2d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
		var out = syft.addmm(t1, t2, mat, beta, 2, alpha, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(10, 18), new __pythonRuntime.objects.list(12, 20))));
	}
}
class addcmulTests {
	test_addcmul_1d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
		var out = syft.addcmul(t1, t2, mat, value, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(9, 17, 29)));
	}
	test_addcmul_2d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
		var out = syft.addcmul(t1, t2, mat, value, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 11), new __pythonRuntime.objects.list(5, 12))));
	}
}
class addcdivTests {
	test_addcdiv_1d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 5, 4)));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
		var out = syft.addcdiv(t1, t2, mat, value, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(6., 5.8, 6.5)));
	}
	test_addcdiv_2d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
		var out = syft.addcdiv(t1, t2, mat, value, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4., 5.), new __pythonRuntime.objects.list(5., 6.))));
	}
}
class addmv {
	test_addmv() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2)));
		var vec = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3, 4)));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3, 3, 4), new __pythonRuntime.objects.list(5, 6, 6, 7))));
		var out = syft.addmv(t1, mat, vec, beta, 2, alpha, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(68, 130)));
	}
}
class bmmTests {
	test_bmm_for_correct_size_output() {
		var t1 = TensorBase(np.random.rand(4, 3, 2));
		var t2 = TensorBase(np.random.rand(4, 2, 1));
		var out = syft.bmm(t1, t2);
		this.assertTupleEqual(out.shape(), new __pythonRuntime.objects.tuple(4, 3, 1));
	}
	test_bmm() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 1)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2)))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(3)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4), new __pythonRuntime.objects.list(8)))));
		var out = syft.bmm(t1, t2);
		var test_result = np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(20))));
		this.assertTrue(np.array_equal(out.data, test_result));
	}
}
class addbmmTests {
	test_addbmm() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(5, 7)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 9), new __pythonRuntime.objects.list(1, 3)))));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
		var out = syft.addbmm(t1, t2, mat, beta, 2, alpha, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(176, 266), new __pythonRuntime.objects.list(114, 172))));
	}
}
class baddbmmTests {
	test_baddbmm() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(5, 7)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 9), new __pythonRuntime.objects.list(1, 3)))));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 5), new __pythonRuntime.objects.list(5, 6)))));
		var out = syft.baddbmm(t1, t2, mat, beta, 2, alpha, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(62, 92), new __pythonRuntime.objects.list(96, 142))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(122, 184), new __pythonRuntime.objects.list(28, 42))));
	}
}
class transposeTests {
	test_transpose() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
		var out1 = syft.transpose(t1, 0, 1);
		this.assertTrue(np.array_equal(out1.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(7, 8))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 6), new __pythonRuntime.objects.list(1, 2)))));
	}
	this.out2 = syft.transpose(t1, 0, 2);
	self.assertTrue(np.array_equal(out2.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 7), new __pythonRuntime.objects.list(5, 1))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 8), new __pythonRuntime.objects.list(6, 2)))));
}
var out3 = syft.transpose(t1, 1, 2);
self.assertTrue(np.array_equal(out3.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(4, 6))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 1), new __pythonRuntime.objects.list(8, 2)))));
class unsqueezeTests {
	test_unsqueeze() {
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
	}
}
class mmtest {
	test_mm_1d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5)));
		var out = syft.mm(t1, t2);
		this.assertTrue(np.alltrue(out.data == new __pythonRuntime.objects.list(38)));
	}
	test_mm_2d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(2, 3))));
		var out = syft.mm(t1, t2);
		this.assertTrue(np.alltrue(out.data == new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(6, 9), new __pythonRuntime.objects.list(6, 9))));
	}
	test_mm_3d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(2, 3, 4))));
		var out = syft.mm(t1, t2);
		this.assertTrue(np.alltrue(), out.data == new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 8, 11), new __pythonRuntime.objects.list(8, 13, 18), new __pythonRuntime.objects.list(11, 18, 25)));
	}
}
class fmodTest {
	test_fmod_number() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(-3, -2, -1, 1, 2, 3)));
		this.assertTrue(np.array_equal(syft.math.fmod(t1, 2).data, np.array(new __pythonRuntime.objects.list(-1, 0, -1, 1, 0, 1))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(-3.5, -2.5, -1.5, 1.5, 2.5, 3.5)));
		this.assertTrue(np.array_equal(syft.math.fmod(t2, 2.).data, np.array(new __pythonRuntime.objects.list(-1.5, -0.5, -1.5, 1.5, 0.5, 1.5))));
	}
	test_fmod_tensor() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(-3, -2, -1, 1, 2, 3)));
		var divisor = np.array(__pythonRuntime.ops.multiply(new __pythonRuntime.objects.list(2), 6));
		this.assertTrue(np.array_equal(syft.math.fmod(t1, divisor).data, np.array(new __pythonRuntime.objects.list(-1, 0, -1, 1, 0, 1))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(-3.5, -2.5, -1.5, 1.5, 2.5, 3.5)));
		divisor = np.array(__pythonRuntime.ops.multiply(new __pythonRuntime.objects.list(2.), 6));
		this.assertTrue(np.array_equal(syft.math.fmod(t2, divisor).data, np.array(new __pythonRuntime.objects.list(-1.5, -0.5, -1.5, 1.5, 0.5, 1.5))));
	}
}
class lerpTests {
	test_lerp() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3, 4)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5, 6)));
		var weight = 0.5;
		var out = syft.math.lerp(t1, t2, weight);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(2, 3, 4, 5)));
	}
}
class numelTests {
	numel_test_int() {
		var t1_len = 3;
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		this.assertEqual(syft.math.numel(t1), t1_len);
	}
	numel_test_float() {
		var t1_len = 3;
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2.0, 3.0, 4.0)));
		this.assertEqual(syft.math.numel(t1), t1_len);
	}
}
class RenormTests {
	testIntRenorm() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(4, 5, 6))));
		var t2 = syft.math.renorm(t1, 2, 0, 6);
		this.assertTrue(np.allclose(t2, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.0, 2.0, 3.0), new __pythonRuntime.objects.list(2.735054, 3.418817, 4.102581)))));
	}
	testFloatRenorm() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.5, 2.5), new __pythonRuntime.objects.list(3.5, 4.5))));
		var t2 = syft.math.renorm(t1, 1, 1, 5.0);
		this.assertTrue(np.allclose(t2, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.5, 1.785714), new __pythonRuntime.objects.list(3.5, 3.214286)))));
	}
	test3DTensorRenorm() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(4, 5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3, 4), new __pythonRuntime.objects.list(1, 3, 5)))));
		var t2 = syft.math.renorm(t1, 1, 2, 8);
		this.assertTrue(np.allclose(t2, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.0, 1.230770, 1.333333), new __pythonRuntime.objects.list(4.0, 3.076923, 2.666667))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.0, 1.846154, 1.777778), new __pythonRuntime.objects.list(1.0, 1.846154, 2.222222)))));
	}
}
