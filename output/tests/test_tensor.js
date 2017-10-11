class DimTests {
	test_dim_one() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		this.assertTrue(t.dim() == 1);
	}
	test_view() {
		var t = TensorBase(new __pythonRuntime.objects.list(1.0, 2.0, 3.0));
		this.assertTrue(syft.equal(t.view(-1, 1), TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(2), new __pythonRuntime.objects.list(3))))));
	}
	test_as_view() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1.0, 2.0, 3.0)));
		var t1 = t.view(new __pythonRuntime.objects.list(-1, 1));
		__pythonRuntime.functions.print(t.data.dtype);
		this.assertTrue(syft.equal(t.view_as(t1), TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.0), new __pythonRuntime.objects.list(2.0), new __pythonRuntime.objects.list(3.0))))));
	}
	test_resize() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1.0, 2.0, 3.0)));
		t.resize_(new __pythonRuntime.objects.list(1, 2));
		this.assertEqual(t.data.shape, new __pythonRuntime.objects.tuple(1, 2));
	}
	test_resize_as() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(2))));
		t.resize_as_(t2);
		this.assertEqual(t.data.shape, new __pythonRuntime.objects.tuple(2, 1));
	}
}
class DiagTests {
	test_one_dim_tensor_main_diag() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var tdiag = t.diag();
		this.assertTrue(syft.equal(tdiag.data, TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0, 0)), new __pythonRuntime.objects.list(0, 2, 0))[__pythonRuntime.ops.subscriptIndex(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0, 0)), new __pythonRuntime.objects.list(0, 2, 0)), new __pythonRuntime.objects.tuple(0, 0, 3))])));
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
	var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
	var tdiag = t.diag(1);
	self.assertTrue(syft.equal(tdiag.data, TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 0, 0)), new __pythonRuntime.objects.list(0, 0, 2, 0))[__pythonRuntime.ops.subscriptIndex(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 0, 0)), new __pythonRuntime.objects.list(0, 0, 2, 0)), new __pythonRuntime.objects.tuple(0, 0, 0, 3))])[__pythonRuntime.ops.subscriptIndex(TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 0, 0)), new __pythonRuntime.objects.list(0, 0, 2, 0))[__pythonRuntime.ops.subscriptIndex(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 0, 0)), new __pythonRuntime.objects.list(0, 0, 2, 0)), new __pythonRuntime.objects.tuple(0, 0, 0, 3))]), new __pythonRuntime.objects.tuple(0, 0, 0, 0))]));
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
	var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
	var tdiag = t.diag(-1);
	self.assertTrue(syft.equal(tdiag.data, TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0)), new __pythonRuntime.objects.list(1, 0, 0, 0))[__pythonRuntime.ops.subscriptIndex(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0)), new __pythonRuntime.objects.list(1, 0, 0, 0)), new __pythonRuntime.objects.tuple(0, 2, 0, 0))])[__pythonRuntime.ops.subscriptIndex(TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0)), new __pythonRuntime.objects.list(1, 0, 0, 0))[__pythonRuntime.ops.subscriptIndex(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0)), new __pythonRuntime.objects.list(1, 0, 0, 0)), new __pythonRuntime.objects.tuple(0, 2, 0, 0))]), new __pythonRuntime.objects.tuple(0, 0, 3, 0))]));
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
	var tdiag = t.diag();
	self.assertTrue(syft.equal(tdiag.data, TensorBase(np.array(new __pythonRuntime.objects.list(0, 3)))));
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
	var tdiag = t.diag(1);
	self.assertTrue(syft.equal(tdiag.data, TensorBase(np.array(new __pythonRuntime.objects.list(1)))));
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
	var tdiag = t.diag(-1);
	self.assertTrue(syft.equal(tdiag.data, TensorBase(np.array(new __pythonRuntime.objects.list(2)))));
}
class AddTests {
	test_simple() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		this.assertTrue(syft.equal(__pythonRuntime.ops.add(t, np.array(new __pythonRuntime.objects.list(1, 2, 3))), new __pythonRuntime.objects.list(2, 4, 6)));
	}
	test_inplace() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		t = __pythonRuntime.ops.add(t, np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		this.assertTrue(syft.equal(t.data, new __pythonRuntime.objects.list(2, 4, 6)));
	}
	test_scalar() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		this.assertTrue(syft.equal(__pythonRuntime.ops.add(t, 2), new __pythonRuntime.objects.list(3, 4, 5)));
	}
}
class CeilTests {
	test_ceil() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1.4, 2.7, 6.2)));
		var tdash = t.ceil();
		this.assertTrue(syft.equal(tdash.data, TensorBase(new __pythonRuntime.objects.list(2, 3, 7))));
		this.assertTrue(syft.equal(t.data, TensorBase(new __pythonRuntime.objects.list(1.4, 2.7, 6.2))));
	}
	test_ceil_() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1.4, 2.7, 6.2)));
		this.assertTrue(syft.equal(t.ceil_(), new __pythonRuntime.objects.list(2, 3, 7)));
		this.assertTrue(syft.equal(t.data, new __pythonRuntime.objects.list(2, 3, 7)));
	}
}
class ZeroTests {
	test_zero() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(13, 42, 1024)));
		this.assertTrue(syft.equal(t.zero_(), TensorBase(new __pythonRuntime.objects.list(0, 0, 0))));
		t = TensorBase(np.array(new __pythonRuntime.objects.list(13.1, 42.2, 1024.4)));
		this.assertTrue(syft.equal(t.zero_(), TensorBase(new __pythonRuntime.objects.list(0.0, 0.0, 0.0))));
	}
}
class FloorTests {
	test_floor_() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1.4, 2.7, 6.2)));
		this.assertTrue(syft.equal(t.floor_(), new __pythonRuntime.objects.list(1., 2., 6.)));
		this.assertTrue(syft.equal(t.data, new __pythonRuntime.objects.list(1., 2., 6.)));
	}
}
class SubTests {
	test_simple() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		this.assertTrue(syft.equal(t - np.array(new __pythonRuntime.objects.list(1, 2, 3)), new __pythonRuntime.objects.list(0, 0, 0)));
	}
	test_inplace() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		t -= np.array(new __pythonRuntime.objects.list(1, 2, 3));
		this.assertTrue(syft.equal(t.data, new __pythonRuntime.objects.list(0, 0, 0)));
	}
	test_scalar() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		this.assertTrue(syft.equal(t - 1, new __pythonRuntime.objects.list(0, 1, 2)));
	}
}
class MaxTests {
	test_no_dim() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0.77937768, 0.51022484, 0.49155195, 0.02769902), new __pythonRuntime.objects.list(0.03777148, 0.13020167, 0.02155692, 0.69574893))));
		this.assertTrue(t.max() == 0.77937768);
	}
	test_axis() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0.77937768, 0.51022484, 0.49155195, 0.02769902), new __pythonRuntime.objects.list(0.03777148, 0.13020167, 0.02155692, 0.69574893))));
		var result = t.max(axis, 1);
		this.assertTrue(syft.equal(result, new __pythonRuntime.objects.list(0.77937768, 0.69574893)));
		result = t.max(axis, 0);
		this.assertTrue(syft.equal(result, new __pythonRuntime.objects.list(0.77937768, 0.51022484, 0.49155195, 0.69574893)));
	}
}
class MultTests {
	test_simple() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		this.assertTrue(syft.equal(__pythonRuntime.ops.multiply(t, np.array(new __pythonRuntime.objects.list(1, 2, 3))), new __pythonRuntime.objects.list(1, 4, 9)));
	}
	test_inplace() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		t = __pythonRuntime.ops.multiply(t, np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		this.assertTrue(syft.equal(t.data, new __pythonRuntime.objects.list(1, 4, 9)));
	}
	test_scalar() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		this.assertTrue(syft.equal(__pythonRuntime.ops.multiply(t, 2), new __pythonRuntime.objects.list(2, 4, 6)));
	}
}
class DivTests {
	test_simple() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(2, 4, 8)));
		this.assertTrue(syft.equal(t / np.array(new __pythonRuntime.objects.list(2, 2, 2)), new __pythonRuntime.objects.list(1, 2, 4)));
	}
	test_inplace() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(2, 4, 8)));
		t /= np.array(new __pythonRuntime.objects.list(2, 2, 2));
		this.assertTrue(syft.equal(t.data, new __pythonRuntime.objects.list(1, 2, 4)));
		t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 7, 11)));
		t /= np.array(new __pythonRuntime.objects.list(3, 2, 9));
		this.assertTrue(syft.equal(t, new __pythonRuntime.objects.list(1 / 3, 7 / 2, 11 / 9)));
	}
	test_scalar() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(2, 4, 6)));
		this.assertTrue(syft.equal(t / 2, new __pythonRuntime.objects.list(1, 2, 3)));
	}
}
class AbsTests {
	test_abs() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(-1, -2, 3)));
		this.assertTrue(np.array_equal(t.abs(), TensorBase(new __pythonRuntime.objects.list(1, 2, 3))));
	}
	test_abs_() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(-1, -2, 3)));
		this.assertTrue(np.array_equal(t.abs_(), TensorBase(new __pythonRuntime.objects.list(1, 2, 3))));
	}
}
class ShapeTests {
	test_shape() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1), new __pythonRuntime.objects.list(0, 5))));
		this.assertTrue(syft.equal(t.shape(), new __pythonRuntime.objects.tuple(2, 2)));
	}
}
class SqrtTests {
	test_sqrt() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 4), new __pythonRuntime.objects.list(9, 16))));
		this.assertTrue(syft.equal(t.sqrt(), TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 2), new __pythonRuntime.objects.list(3, 4)))));
	}
	test_sqrt_() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 4), new __pythonRuntime.objects.list(9, 16))));
		t.sqrt_();
		this.assertTrue(syft.equal(t, TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 2), new __pythonRuntime.objects.list(3, 4)))));
	}
}
class SumTests {
	test_dim_none_int() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		this.assertTrue(syft.equal(t.sum(), 6));
	}
	test_dim_is_not_none_int() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1), new __pythonRuntime.objects.list(0, 5))));
		this.assertTrue(syft.equal(t.sum(dim, 1), new __pythonRuntime.objects.list(1, 5)));
	}
}
class EqualTests {
	test_equal() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1.2, 2, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(1.2, 2, 3)));
		this.assertTrue(syft.equal(t1, t2));
	}
	test_equal_operation() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2.4, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2.4, 3)));
		this.assertTrue(t1 == t2);
	}
	test_not_equal() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 4, 3)));
		this.assertFalse(syft.equal(t1, t2));
	}
	test_shape_not_equal() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 4, 3)));
		this.assertFalse(syft.equal(t1, t2));
	}
	test_inequality_operation() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 4, 5)));
		this.assertTrue(t1 != t2);
	}
	test_shape_inequality_operation() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 4, 5)));
		this.assertTrue(t1 != t2);
	}
}
class sigmoidTests {
	test_sigmoid() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1.2, 3.3, 4)));
		this.assertTrue(syft.equal(t1.sigmoid_(), TensorBase(), new __pythonRuntime.objects.list(0.76852478, 0.96442881, 0.98201379)));
	}
}
class addmm {
	test_addmm_1d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
		var out = t1.addmm(t2, mat, beta, 2, alpha, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(50)));
	}
	test_addmm_2d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
		var out = t1.addmm(t2, mat, beta, 2, alpha, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(10, 18), new __pythonRuntime.objects.list(12, 20))));
	}
	test_addmm__1d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
		t1.addmm_(t2, mat, beta, 2, alpha, 2);
		this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(50)));
	}
	test_addmm__2d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
		t1.addmm_(t2, mat, beta, 2, alpha, 2);
		this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(10, 18), new __pythonRuntime.objects.list(12, 20))));
	}
}
class addcmulTests {
	test_addcmul_1d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
		var out = t1.addcmul(t2, mat, value, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(9, 17, 29)));
	}
	test_addcmul_2d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
		var out = t1.addcmul(t2, mat, value, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 11), new __pythonRuntime.objects.list(5, 12))));
	}
	test_addcmul__1d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
		t1.addcmul_(t2, mat, value, 2);
		this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(9, 17, 29)));
	}
	test_addcmul__2d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
		t1.addcmul_(t2, mat, value, 2);
		this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 11), new __pythonRuntime.objects.list(5, 12))));
	}
}
class addcdivTests {
	test_addcdiv_1d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 5, 4)));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
		var out = t1.addcdiv(t2, mat, value, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(6., 5.8, 6.5)));
	}
	test_addcdiv_2d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
		var out = t1.addcdiv(t2, mat, value, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4., 5.), new __pythonRuntime.objects.list(5., 6.))));
	}
	test_addcdiv__1d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 5, 4)));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
		t1.addcdiv_(t2, mat, value, 2);
		this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(6., 5.8, 6.5)));
	}
	test_addcdiv__2d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
		t1.addcdiv_(t2, mat, value, 2);
		this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4., 5.), new __pythonRuntime.objects.list(5., 6.))));
	}
}
class addmvTests {
	test_addmv() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2)));
		var vec = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3, 4)));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3, 3, 4), new __pythonRuntime.objects.list(5, 6, 6, 7))));
		var out = t1.addmv(mat, vec, beta, 2, alpha, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(68, 130)));
	}
	test_addmv_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2)));
		var vec = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3, 4)));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3, 3, 4), new __pythonRuntime.objects.list(5, 6, 6, 7))));
		t1.addmv_(mat, vec, beta, 2, alpha, 2);
		this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(68, 130)));
	}
}
class bmmTests {
	test_bmm_size() {
		var t1 = TensorBase(np.random.rand(4, 3, 2));
		var t2 = TensorBase(np.random.rand(4, 2, 1));
		var out = t1.bmm(t2);
		this.assertTupleEqual(out.shape(), new __pythonRuntime.objects.tuple(4, 3, 1));
	}
	test_bmm() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 1)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2)))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(3)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4), new __pythonRuntime.objects.list(8)))));
		var out = t1.bmm(t2);
		var test_result = np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(20))));
		this.assertTrue(np.array_equal(out.data, test_result));
	}
}
class addbmmTests {
	test_addbmm() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(5, 7)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 9), new __pythonRuntime.objects.list(1, 3)))));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
		var out = t1.addbmm(t2, mat, beta, 2, alpha, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(176, 266), new __pythonRuntime.objects.list(114, 172))));
	}
	test_addbmm_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(5, 7)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 9), new __pythonRuntime.objects.list(1, 3)))));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
		t1.addbmm_(t2, mat, beta, 2, alpha, 2);
		this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(176, 266), new __pythonRuntime.objects.list(114, 172))));
	}
}
class baddbmmTests {
	test_baddbmm() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(5, 7)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 9), new __pythonRuntime.objects.list(1, 3)))));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 5), new __pythonRuntime.objects.list(5, 6)))));
		var out = t1.baddbmm(t2, mat, beta, 2, alpha, 2);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(62, 92), new __pythonRuntime.objects.list(96, 142))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(122, 184), new __pythonRuntime.objects.list(28, 42))));
	}
}
function test_baddbmm_() {
	var __params62 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex62 = 0;
	var __args62 = arguments;
	function __getParam62(v, d) {
		var r = d;
		if (__params62) {
			if (__formalsIndex62 < __params62.formals.length) {
				r = __params62.formals[__formalsIndex62++];
			} else if ((v in __params62.keywords)) {
				r = __params62.keywords[v];
				delete __params62.keywords[v];
			}
		} else if (__formalsIndex62 < __args62.length) {
			r = __args62[__formalsIndex62++];
		}
		return r;
	}
	var self = __getParam62("self");
	var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
	var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(5, 7)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 9), new __pythonRuntime.objects.list(1, 3)))));
	var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 5), new __pythonRuntime.objects.list(5, 6)))));
	t1.baddbmm_(t2, mat, beta, 2, alpha, 2);
	self.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(62, 92), new __pythonRuntime.objects.list(96, 142))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(122, 184), new __pythonRuntime.objects.list(28, 42))));
}
class PermuteTests {
	dest3d() {
		var t = TensorBase(np.ones(new __pythonRuntime.objects.tuple(2, 3, 5)));
		var tdash = t.permute(new __pythonRuntime.objects.tuple(2, 0, 1));
		this.assertTrue(tdash.data.shape == new __pythonRuntime.objects.list(5, 2, 3));
		this.assertTrue(t.data.shape == new __pythonRuntime.objects.list(2, 3, 5));
	}
}
class transposeTests {
	test_transpose() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
		var out1 = t1.transpose(0, 1);
		this.assertTrue(np.array_equal(out1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(7, 8))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 6), new __pythonRuntime.objects.list(1, 2))));
	}
	this.out2 = t1.transpose(0, 2);
	self.assertTrue(np.array_equal(out2.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 7), new __pythonRuntime.objects.list(5, 1))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 8), new __pythonRuntime.objects.list(6, 2))));
}
var out3 = t1.transpose(1, 2);
self.assertTrue(np.array_equal(out3.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(4, 6))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 1), new __pythonRuntime.objects.list(8, 2))));
function test_transpose_() {
	var __params65 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex65 = 0;
	var __args65 = arguments;
	function __getParam65(v, d) {
		var r = d;
		if (__params65) {
			if (__formalsIndex65 < __params65.formals.length) {
				r = __params65.formals[__formalsIndex65++];
			} else if ((v in __params65.keywords)) {
				r = __params65.keywords[v];
				delete __params65.keywords[v];
			}
		} else if (__formalsIndex65 < __args65.length) {
			r = __args65[__formalsIndex65++];
		}
		return r;
	}
	var self = __getParam65("self");
	var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
	t1.transpose_(0, 1);
	self.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(7, 8))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 6), new __pythonRuntime.objects.list(1, 2))));
}
var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
t2.transpose_(0, 2);
self.assertTrue(np.array_equal(t2.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 7), new __pythonRuntime.objects.list(5, 1))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 8), new __pythonRuntime.objects.list(6, 2))));
var t3 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
t3.transpose_(1, 2);
self.assertTrue(np.array_equal(t3.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(4, 6))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 1), new __pythonRuntime.objects.list(8, 2))));
function test_t() {
	var __params66 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex66 = 0;
	var __args66 = arguments;
	function __getParam66(v, d) {
		var r = d;
		if (__params66) {
			if (__formalsIndex66 < __params66.formals.length) {
				r = __params66.formals[__formalsIndex66++];
			} else if ((v in __params66.keywords)) {
				r = __params66.keywords[v];
				delete __params66.keywords[v];
			}
		} else if (__formalsIndex66 < __args66.length) {
			r = __args66[__formalsIndex66++];
		}
		return r;
	}
	var self = __getParam66("self");
	var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
	var out1 = t1.t();
	self.assertTrue(np.array_equal(out1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(7, 8))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 6), new __pythonRuntime.objects.list(1, 2))));
}
class unsqueezeTests {
	test_unsqueeze() {
		var t1 = TensorBase(np.arange(__pythonRuntime.ops.multiply(__pythonRuntime.ops.multiply(3, 4), 5)).reshape(new __pythonRuntime.objects.tuple(3, 4, 5)));
		{
			var __filbertRight0 = __pythonRuntime.functions.range(__pythonRuntime.functions.len(t1.data.shape));
			if (__filbertRight0 instanceof Array) {
				for (var __filbertIndex0 = 0; __filbertIndex0 < __filbertRight0.length; ++__filbertIndex0) {
					var i = __filbertRight0[__filbertIndex0];
					var out = t1.unsqueeze(i);
					var expected_shape = __pythonRuntime.functions.list(t1.data.shape);
					expected_shape.insert(i, 1);
					this.assertTrue(np.array_equal(out.data.shape, expected_shape));
				}
			} else {
				for (i in __filbertRight0) {
					var out = t1.unsqueeze(i);
					var expected_shape = __pythonRuntime.functions.list(t1.data.shape);
					expected_shape.insert(i, 1);
					this.assertTrue(np.array_equal(out.data.shape, expected_shape));
				}
			}
		}
	}
	test_unsqueeze_() {
		var test_shape = new __pythonRuntime.objects.tuple(3, 4, 5);
		{
			var __filbertRight1 = __pythonRuntime.functions.range(__pythonRuntime.functions.len(test_shape));
			if (__filbertRight1 instanceof Array) {
				for (var __filbertIndex1 = 0; __filbertIndex1 < __filbertRight1.length; ++__filbertIndex1) {
					var i = __filbertRight1[__filbertIndex1];
					var t1 = TensorBase(np.arange(__pythonRuntime.ops.multiply(__pythonRuntime.ops.multiply(3, 4), 5)).reshape(test_shape));
					var expected_shape = __pythonRuntime.functions.list(t1.data.shape);
					expected_shape.insert(i, 1);
					t1.unsqueeze_(i);
					this.assertTrue(np.array_equal(t1.data.shape, expected_shape));
				}
			} else {
				for (i in __filbertRight1) {
					var t1 = TensorBase(np.arange(__pythonRuntime.ops.multiply(__pythonRuntime.ops.multiply(3, 4), 5)).reshape(test_shape));
					var expected_shape = __pythonRuntime.functions.list(t1.data.shape);
					expected_shape.insert(i, 1);
					t1.unsqueeze_(i);
					this.assertTrue(np.array_equal(t1.data.shape, expected_shape));
				}
			}
		}
	}
}
class expTests {
	test_exp() {
		var t3 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 3), new __pythonRuntime.objects.list(3, 5))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 7), new __pythonRuntime.objects.list(9, 1))));
	}
	this.out = t3.exp();
	self.assertTrue(np.allclose(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.71828183e+00, 2.00855369e+01), new __pythonRuntime.objects.list(2.00855369e+01, 1.48413159e+02))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.48413159e+02, 1.09663316e+03), new __pythonRuntime.objects.list(8.10308393e+03, 2.71828183e+00))));
}
function test_exp_() {
	var __params70 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex70 = 0;
	var __args70 = arguments;
	function __getParam70(v, d) {
		var r = d;
		if (__params70) {
			if (__formalsIndex70 < __params70.formals.length) {
				r = __params70.formals[__formalsIndex70++];
			} else if ((v in __params70.keywords)) {
				r = __params70.keywords[v];
				delete __params70.keywords[v];
			}
		} else if (__formalsIndex70 < __args70.length) {
			r = __args70[__formalsIndex70++];
		}
		return r;
	}
	var self = __getParam70("self");
	var t3 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 3), new __pythonRuntime.objects.list(3, 5))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 7), new __pythonRuntime.objects.list(9, 1))));
}
t3.exp_();
self.assertTrue(np.allclose(t3.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.71828183e+00, 2.00855369e+01), new __pythonRuntime.objects.list(2.00855369e+01, 1.48413159e+02))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.48413159e+02, 1.09663316e+03), new __pythonRuntime.objects.list(8.10308393e+03, 2.71828183e+00))));
class fracTests {
	test_frac() {
		var t3 = TensorBase(np.array(new __pythonRuntime.objects.list(1.23, 4.56, 7.89)));
		var out = t3.frac();
		this.assertTrue(np.allclose(out.data, new __pythonRuntime.objects.list(0.23, 0.56, 0.89)));
	}
	test_frac_() {
		var t3 = TensorBase(np.array(new __pythonRuntime.objects.list(1.23, 4.56, 7.89)));
		t3.frac_();
		this.assertTrue(np.allclose(t3.data, new __pythonRuntime.objects.list(0.23, 0.56, 0.89)));
	}
}
class rsqrtTests {
	test_rsqrt() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		var out = t1.rsqrt();
		this.assertTrue(np.allclose(out.data, new __pythonRuntime.objects.list(0.70710678, 0.57735027, 0.5)));
	}
	test_rsqrt_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		t1.rsqrt_();
		this.assertTrue(np.allclose(t1.data, new __pythonRuntime.objects.list(0.70710678, 0.57735027, 0.5)));
	}
}
class signTests {
	test_sign() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, -1, -2)));
		var out = t1.sign();
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(1, 1, -1, -1)));
	}
	test_sign_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, -1, -2)));
		t1.sign_();
		this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(1, 1, -1, -1)));
	}
}
class numpyTests {
	test_numpy() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(3, 4))));
		this.assertTrue(np.array_equal(t1.to_numpy(), np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(3, 4)))));
	}
}
class reciprocalTests {
	test_reciprocal() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		var out = t1.reciprocal();
		this.assertTrue(np.allclose(out.data, new __pythonRuntime.objects.list(0.5, 0.33333333, 0.25)));
	}
	test_reciprocal_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		t1.reciprocal_();
		this.assertTrue(np.allclose(t1.data, new __pythonRuntime.objects.list(0.5, 0.33333333, 0.25)));
	}
}
class logTests {
	test_log() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(math.exp(1), math.exp(2), math.exp(3))));
		this.assertTrue(np.array_equal(t1.log().data, new __pythonRuntime.objects.list(1., 2., 3.)));
	}
	test_log_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(math.exp(1), math.exp(2), math.exp(3))));
		this.assertTrue(np.array_equal(t1.log_().data, new __pythonRuntime.objects.list(1., 2., 3.)));
	}
	test_log_1p() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		this.assertTrue(np.allclose(t1.log1p().data, new __pythonRuntime.objects.list(0.69314718, 1.09861229, 1.38629436)));
	}
	test_log_1p_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		this.assertTrue(np.allclose(t1.log1p_().data, new __pythonRuntime.objects.list(0.69314718, 1.09861229, 1.38629436)));
	}
}
class clampTests {
	test_clamp_int() {
		var t1 = TensorBase(np.arange(10));
		var t2 = t1.clamp(minimum, 2, maximum, 7);
		var expected_tensor = TensorBase(np.array(new __pythonRuntime.objects.list(2, 2, 2, 3, 4, 5, 6, 7, 7, 7)));
		this.assertEqual(t2, expected_tensor);
	}
	test_clamp_float() {
		var t1 = TensorBase(np.arange(1, step, 0.1));
		var t2 = t1.clamp(minimum, 0.2, maximum, 0.7);
		var expected_tensor = TensorBase(np.array(new __pythonRuntime.objects.list(0.2, 0.2, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.7, 0.7)));
		this.assertEqual(t2, expected_tensor);
	}
	test_clamp_int_in_place() {
		var t1 = TensorBase(np.arange(10));
		t1.clamp_(minimum, 2, maximum, 7);
		var expected_tensor = TensorBase(np.array(new __pythonRuntime.objects.list(2, 2, 2, 3, 4, 5, 6, 7, 7, 7)));
		this.assertEqual(t1, expected_tensor);
	}
	test_clamp_float_in_place() {
		var t1 = TensorBase(np.arange(1, step, 0.1));
		t1.clamp_(minimum, 0.2, maximum, 0.7);
		var expected_tensor = TensorBase(np.array(new __pythonRuntime.objects.list(0.2, 0.2, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.7, 0.7)));
		this.assertEqual(t1, expected_tensor);
	}
}
class cloneTests {
	test_clone() {
		var t1 = TensorBase(np.random.randint(0, 10, size, new __pythonRuntime.objects.tuple(5, 10)));
		var t2 = t1.clone();
		this.assertEqual(t1, t2);
		this.assertIsNot(t1, t2);
	}
}
class chunkTests {
	test_chunk() {
		var t1 = TensorBase(np.random.randint(0, 10, size, new __pythonRuntime.objects.tuple(5, 10)));
		{
			var __filbertTmp90 = t1.chunk(2, 0);
			var t2 = __filbertTmp90[0];
			var t3 = __filbertTmp90[1];
		}
		this.assertNotEqual(t2.shape(), t3.shape());
	}
	test_chunk_same_size() {
		var t1 = TensorBase(np.random.randint(0, 10, size, new __pythonRuntime.objects.tuple(4, 10)));
		{
			var __filbertTmp92 = t1.chunk(2, 0, same_size, True);
			var t2 = __filbertTmp92[0];
			var t3 = __filbertTmp92[1];
		}
		this.assertEqual(t2.shape(), t3.shape());
	}
}
class inequalityTest {
	setUp() {
		this.a1 = np.array(new __pythonRuntime.objects.list(-2, -1, 0, 1, 2));
		this.a2 = np.array(new __pythonRuntime.objects.list(-4, -1, 5, 2, 2));
		this.t1 = TensorBase(this.a1);
		this.t2 = TensorBase(this.a2);
		this.enc = TensorBase(this.a1, encrypted, True);
	}
}
class gtTests {}
class geTests {}
class ltTests {}
class leTests {}
class bernoulliTests {
	test_bernoulli() {
		var p = TensorBase(np.random.uniform(size, new __pythonRuntime.objects.tuple(3, 2)));
		var t1 = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(5, 5)));
		var t2 = t1.bernoulli(p);
		this.assertTupleEqual(new __pythonRuntime.objects.tuple(3, 2), t2.shape());
		this.assertTrue(np.all(t2.data >= 0) && np.all(t2.data <= 1));
	}
	test_bernoulli_() {
		var p = TensorBase(np.random.uniform(size, new __pythonRuntime.objects.tuple(3, 2)));
		var t1 = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(5, 5)));
		t1.bernoulli_(p);
		this.assertTupleEqual(new __pythonRuntime.objects.tuple(3, 2), t1.shape());
		this.assertTrue(np.all(t1.data >= 0) && np.all(t1.data <= 1));
	}
}
class cauchyTests {
	test_cauchy_() {
		var t = TensorBase(np.zeros(new __pythonRuntime.objects.list(1, 2, 3, 4)));
		t.cauchy_();
		this.assertTupleEqual(new __pythonRuntime.objects.tuple(1, 2, 3, 4), t.shape());
		this.assertTrue(np.all(t.data != 0));
	}
}
class uniformTests {
	test_uniform() {
		var t1 = TensorBase(np.zeros(4));
		var out = t1.uniform(low, 0, high, 3);
		this.assertTrue(np.all(out.data > 0) && np.all(out.data < 3));
	}
	test_uniform_() {
		var t1 = TensorBase(np.zeros(4));
		t1.uniform_(low, 0, high, 3);
		this.assertTrue(np.all(t1.data > 0) && np.all(t1.data < 3));
	}
}
class geometricTests {
	test_geometric_() {
		var t1 = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(4, 4)));
		var out = t1.geometric_(p, 0.5);
		this.assertTupleEqual(t1.data.shape, out.data.shape);
		this.assertTrue(np.all(out.data > 0));
	}
}
class normalTests {
	test_normal_() {
		var t = TensorBase(np.zeros(new __pythonRuntime.objects.list(1, 2, 3, 4)));
		t.normal_(mu, 0, sigma, 1);
		this.assertTupleEqual(new __pythonRuntime.objects.tuple(1, 2, 3, 4), t.shape());
		this.assertTrue(np.all(t.data != 0));
	}
	test_normal() {
		var t = TensorBase(np.zeros(new __pythonRuntime.objects.list(1, 2, 3, 4)));
		var t1 = t.normal(mu, 0, sigma, 1);
		this.assertTrue(np.array_equal(t.data, np.zeros(new __pythonRuntime.objects.list(1, 2, 3, 4))));
		this.assertTupleEqual(new __pythonRuntime.objects.tuple(1, 2, 3, 4), t1.shape());
		this.assertTrue(np.all(t1.data != 0));
	}
}
class fillTests {
	test_fill_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3, 4)));
		t1.fill_(5);
		this.assertTrue(np.all(t1.data == 5));
	}
}
class topkTests {
	test_topK() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(900, 800, 1000, 2000, 5, 10, 20, 40, 50), new __pythonRuntime.objects.list(10, 11, 12, 13, 5, 6, 7, 8, 9), new __pythonRuntime.objects.list(30, 40, 50, 10, 8, 1, 2, 3, 4))));
		var t2 = t1.topk(3, largest, True);
		this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(900, 1000, 2000), new __pythonRuntime.objects.list(11, 12, 13), new __pythonRuntime.objects.list(30, 40, 50)))));
	}
}
class tolistTests {
	test_to_list() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(200, 300, 90, 100, 600)));
		var t1_list = t1.tolist();
		this.assertTrue(isinstance(t1_list, list));
	}
}
class traceTests {
	test_trace() {
		var t1 = TensorBase(np.arange(1, 10).reshape(3, 3));
		this.assertTrue(np.equal(t1.trace().data, 15));
	}
}
class roundTests {
	test_round() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(10.4, 9.6, 100.12, 4.0)));
		var t2 = t1.round(0);
		this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(10., 10., 100., 4.))));
	}
	test_round_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(10.4, 9.6, 100.12, 4.0)));
		t1.round_(0);
		this.assertTrue(np.array_equal(t1.data, np.array(new __pythonRuntime.objects.list(10., 10., 100., 4.))));
	}
}
class repeatTests {
	test_repeat() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = t1.repeat(reps, new __pythonRuntime.objects.tuple(4, 2));
		this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 1, 2, 3), new __pythonRuntime.objects.list(1, 2, 3, 1, 2, 3), new __pythonRuntime.objects.list(1, 2, 3, 1, 2, 3), new __pythonRuntime.objects.list(1, 2, 3, 1, 2, 3)))));
	}
}
class powTests {
	test_pow() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 4, 6)));
		var t2 = t1.pow(2);
		this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(4, 16, 36))));
	}
	test_pow_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 4, 6)));
		t1.pow_(2);
		this.assertTrue(np.array_equal(t1.data, np.array(new __pythonRuntime.objects.list(4, 16, 36))));
	}
}
class negTests {
	test_neg() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(-0, 1, -2), new __pythonRuntime.objects.list(0, -1, 2))));
		var t2 = t1.neg();
		this.assertTrue(np.array_equal(t1.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, -2), new __pythonRuntime.objects.list(0, -1, 2)))));
		this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, -1, 2), new __pythonRuntime.objects.list(0, 1, -2)))));
		var t3 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(-0.0, 1.5, -2.5), new __pythonRuntime.objects.list(0.0, -1.5, 2.5))));
		var t4 = t3.neg();
		this.assertTrue(np.array_equal(t3.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0.0, 1.5, -2.5), new __pythonRuntime.objects.list(0.0, -1.5, 2.5)))));
		this.assertTrue(np.array_equal(t4.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0.0, -1.5, 2.5), new __pythonRuntime.objects.list(0.0, 1.5, -2.5)))));
	}
	test_neg_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(-0, 1, -2), new __pythonRuntime.objects.list(0, -1, 2))));
		t1.neg_();
		this.assertTrue(np.array_equal(t1.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, -1, 2), new __pythonRuntime.objects.list(0, 1, -2)))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(-0.0, 1.5, -2.5), new __pythonRuntime.objects.list(0.0, -1.5, 2.5))));
		t2.neg_();
		this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0.0, -1.5, 2.5), new __pythonRuntime.objects.list(0.0, 1.5, -2.5)))));
	}
}
class tanhTests {
	test_tanh_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(-0, 1, -2), new __pythonRuntime.objects.list(0, -1, 2))));
		t1.tanh_();
		this.assertTrue(np.array_equal(t1.data, np.tanh(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, -2), new __pythonRuntime.objects.list(0, -1, 2))))));
		t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(-0.0, 1.5, -2.5), new __pythonRuntime.objects.list(0.0, -1.5, 2.5))));
		t1.tanh_();
		this.assertTrue(np.array_equal(t1.data, np.tanh(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0.0, 1.5, -2.5), new __pythonRuntime.objects.list(0.0, -1.5, 2.5))))));
	}
}
class prodTests {
	test_prod() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
		var t2 = t1.prod();
		this.assertTrue(np.equal(t2.data, 6));
	}
}
class randomTests {
	test_random_() {
		np.random.seed(0);
		var t1 = TensorBase(np.zeros(4));
		t1.random_(low, 0, high, 5, size, 4);
		this.assertTrue(np.array_equal(t1.data, np.array(new __pythonRuntime.objects.list(4, 0, 3, 3))));
	}
}
class nonzeroTests {
	test_non_zero() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0, 0), new __pythonRuntime.objects.list(0, 2, 5))));
		var t2 = t1.nonzero();
		this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 1), new __pythonRuntime.objects.list(0, 1, 2)))));
	}
}
class cumprodTest {
	test_cumprod() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(4, 5, 6))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.0, 2.0, 3.0), new __pythonRuntime.objects.list(4.0, 10.0, 18.0))));
		var t3 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 6), new __pythonRuntime.objects.list(4, 20, 120))));
		this.assertTrue(np.equal(t1.cumprod(dim, 0), t2).all());
		this.assertTrue(np.equal(t1.cumprod(dim, 1), t3).all());
	}
	test_cumprod_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(4, 5, 6))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.0, 2.0, 3.0), new __pythonRuntime.objects.list(4.0, 10.0, 18.0))));
		var t3 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 6), new __pythonRuntime.objects.list(4, 20, 120))));
		this.assertTrue(np.equal(t1.cumprod_(dim, 0), t2).all());
		t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.0, 2.0, 3.0), new __pythonRuntime.objects.list(4.0, 5.0, 6.0))));
		this.assertTrue(np.equal(t1.cumprod_(dim, 1), t3).all());
	}
}
class splitTests {
	test_split() {
		var t1 = TensorBase(np.arange(8.0));
		var t2 = t1.split(4);
		this.assertTrue(np.array_equal(t2, __pythonRuntime.functions.tuple(new __pythonRuntime.objects.tuple(np.array(new __pythonRuntime.objects.list(0., 1.)), np.array(new __pythonRuntime.objects.list(2., 3.)), np.array(new __pythonRuntime.objects.list(4., 5.)), np.array(new __pythonRuntime.objects.list(6., 7.))))));
	}
}
class squeezeTests {
	test_squeeze() {
		var t1 = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(2, 1, 2, 1, 2)));
		var t2 = t1.squeeze();
		this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0., 0.), new __pythonRuntime.objects.list(0., 0.)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0., 0.), new __pythonRuntime.objects.list(0., 0.))))));
	}
}
class expandAsTests {
	test_expand_as() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(2), new __pythonRuntime.objects.list(3))));
		var t2 = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 4)));
		var t3 = t1.expand_as(t2);
		this.assertTrue(np.array_equal(t2.data.shape, t3.data.shape));
	}
}
class meanTests {
	test_mean() {
		var t1 = TensorBase(np.arange(8).reshape(2, 2, 2));
		var t2 = t1.mean(1, True);
		this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1., 2.)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5., 6.))))));
	}
}
class notEqualTests {
	test_ne() {
		var t1 = TensorBase(new __pythonRuntime.objects.list(1, 2, 3, 4));
		var t2 = TensorBase(new __pythonRuntime.objects.list(1., 2., 3., 5.));
		this.assertEqual(t1.ne(t2), TensorBase(new __pythonRuntime.objects.list(1, 1, 1, 0)));
	}
	test_ne_() {
		var t1 = TensorBase(new __pythonRuntime.objects.list(1, 2, 3, 4));
		var t2 = TensorBase(new __pythonRuntime.objects.list(1., 2., 3., 5.));
		t1.ne_(t2);
		this.assertTrue(syft.equal(t1, TensorBase(new __pythonRuntime.objects.list(1, 1, 1, 0))));
	}
}
class IndexTests {
	test_indexing() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1.2, 2, 3)));
		this.assertEqual(1.2, t1[__pythonRuntime.ops.subscriptIndex(t1, 0)]);
		this.assertEqual(3, t1[__pythonRuntime.ops.subscriptIndex(t1, -1)]);
	}
	test_index() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3.5, 4, 5, 6, 3.5)));
		var expected1 = TensorBase(np.array(2));
		var expected2 = TensorBase(np.array(3.5));
		var expected3 = TensorBase(np.array(new __pythonRuntime.objects.list(4, 5, 6)));
		this.assertEqual(expected1, t.index(1));
		this.assertEqual(expected2, t.index(2));
		this.assertEqual(expected2, t.index(-1));
		this.assertEqual(expected3, t.index(slice(3, 6)));
		pytest.raises(ValueError);
		t.index(3.5);
	}
	test_index_slice_notation() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3, 4)));
		var expected1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		var expected2 = type(t1._pySlice(1, null, null));
		var expected3 = 1;
		this.assertEqual(expected1, t1._pySlice(1, null, null));
		this.assertEqual(expected2, TensorBase);
		this.assertEqual(expected3, t1[__pythonRuntime.ops.subscriptIndex(t1, 0)]);
	}
	test_index_add_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0), new __pythonRuntime.objects.list(1, 1, 1), new __pythonRuntime.objects.list(1, 1, 1))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(4, 5, 6), new __pythonRuntime.objects.list(7, 8, 9))));
		var expected_0 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(8, 9, 10), new __pythonRuntime.objects.list(5, 6, 7))));
		t1.index_add_(0, new __pythonRuntime.objects.list(0, 2, 1), t2);
		this.assertEqual(expected_0, t1);
		t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0), new __pythonRuntime.objects.list(1, 1, 1), new __pythonRuntime.objects.list(1, 1, 1))));
		var expected_1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 3, 2), new __pythonRuntime.objects.list(5, 7, 6), new __pythonRuntime.objects.list(8, 10, 9))));
		t1.index_add_(1, new __pythonRuntime.objects.list(0, 2, 1), t2);
		this.assertEqual(expected_1, t1);
		pytest.raises(TypeError);
		t1.index_add_(0, new __pythonRuntime.objects.list(1.0, 2, 2), t2);
		pytest.raises(IndexError);
		t1.index_add_(0, new __pythonRuntime.objects.list(0, 1, 2), TensorBase(new __pythonRuntime.objects.list(1, 2)));
		pytest.raises(ValueError);
		t1.index_add_(0, new __pythonRuntime.objects.list(0, 1), t2);
		pytest.raises(ValueError);
		t1.index_add_(0, new __pythonRuntime.objects.list(0, 1, 5), t2);
		pytest.raises(IndexError);
		t1.index_add_(4, new __pythonRuntime.objects.list(0, 1, 2), t2);
	}
	test_index_copy_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0), new __pythonRuntime.objects.list(1, 1, 1), new __pythonRuntime.objects.list(1, 1, 1))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(4, 5, 6), new __pythonRuntime.objects.list(7, 8, 9))));
		var expected_0 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(7, 8, 9), new __pythonRuntime.objects.list(4, 5, 6))));
		t1.index_copy_(0, new __pythonRuntime.objects.list(0, 2, 1), t2);
		this.assertEqual(expected_0, t1);
		t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0), new __pythonRuntime.objects.list(1, 1, 1), new __pythonRuntime.objects.list(1, 1, 1))));
		var expected_1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 1, 2), new __pythonRuntime.objects.list(6, 4, 5), new __pythonRuntime.objects.list(9, 7, 8))));
		t1.index_copy_(1, new __pythonRuntime.objects.list(2, 0, 1), t2);
		this.assertEqual(expected_1, t1);
		pytest.raises(TypeError);
		t1.index_copy_(0, new __pythonRuntime.objects.list(1.0, 2, 2), t2);
		pytest.raises(IndexError);
		t1.index_copy_(0, new __pythonRuntime.objects.list(0, 1, 2), TensorBase(new __pythonRuntime.objects.list(1, 2)));
		pytest.raises(ValueError);
		t1.index_copy_(0, new __pythonRuntime.objects.list(0, 1), t2);
		pytest.raises(ValueError);
		t1.index_copy_(0, new __pythonRuntime.objects.list(0, 1, 5), t2);
		pytest.raises(IndexError);
		t1.index_copy_(4, new __pythonRuntime.objects.list(0, 1, 2), t2);
	}
	test_index_fill_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(4, 5, 6), new __pythonRuntime.objects.list(7, 8, 9))));
		var expected_0 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 1, 1), new __pythonRuntime.objects.list(1, 1, 1), new __pythonRuntime.objects.list(7, 8, 9))));
		t1.index_fill_(0, new __pythonRuntime.objects.list(0, 1), 1);
		this.assertEqual(expected_0, t1);
		t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(4, 5, 6), new __pythonRuntime.objects.list(7, 8, 9))));
		var expected_1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(-2, 2, -2), new __pythonRuntime.objects.list(-2, 5, -2), new __pythonRuntime.objects.list(-2, 8, -2))));
		t1.index_fill_(1, new __pythonRuntime.objects.list(0, 2), -2);
		this.assertEqual(expected_1, t1);
		pytest.raises(TypeError);
		t1.index_fill_(0, new __pythonRuntime.objects.list(1.0, 2, 2), 1);
		pytest.raises(ValueError);
		t1.index_fill_(0, new __pythonRuntime.objects.list(0, 1, 5), 1);
		pytest.raises(IndexError);
		t1.index_fill_(4, new __pythonRuntime.objects.list(0, 1, 2), 1);
	}
	test_index_select() {
		var t = TensorBase(np.reshape(np.arange(0, __pythonRuntime.ops.multiply(__pythonRuntime.ops.multiply(2, 3), 4)), new __pythonRuntime.objects.tuple(2, 3, 4)));
		var idx = np.array(new __pythonRuntime.objects.list(1, 0));
		var dim = 2;
		var result = t.index_select(dim, dim, index, idx);
		var expected = np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0), new __pythonRuntime.objects.list(5, 4), new __pythonRuntime.objects.list(9, 8)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(13, 12), new __pythonRuntime.objects.list(17, 16), new __pythonRuntime.objects.list(21, 20))));
		this.assertTrue(np.array_equal(result.data, expected));
	}
}
class gatherTests {
	test_gather_numerical_1() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(65, 17), new __pythonRuntime.objects.list(14, 25), new __pythonRuntime.objects.list(76, 22))));
		var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0), new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(0))));
		var dim = 1;
		var result = t.gather(dim, dim, index, idx);
		this.assertTrue(np.array_equal(result.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(65), new __pythonRuntime.objects.list(25), new __pythonRuntime.objects.list(76)))));
	}
	test_gather_numerical_2() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(47, 74, 44), new __pythonRuntime.objects.list(56, 9, 37))));
		var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 1), new __pythonRuntime.objects.list(1, 1, 0), new __pythonRuntime.objects.list(0, 1, 0))));
		var dim = 0;
		var result = t.gather(dim, dim, index, idx);
		var expexted = new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(47, 74, 37), new __pythonRuntime.objects.list(56, 9, 44.), new __pythonRuntime.objects.list(47, 9, 44));
		this.assertTrue(np.array_equal(result.data, np.array(expexted)));
	}
}
class scatterTests {
	test_scatter_numerical_0() {
		var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
		var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0))));
		var src = 1.0;
		var dim = 0;
		t.scatter_(dim, dim, index, idx, src, src);
		this.assertTrue(np.array_equal(t.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 1, 1, 1, 1), new __pythonRuntime.objects.list(0, 0, 0, 0, 0), new __pythonRuntime.objects.list(0, 0, 0, 0, 0)))));
	}
	test_scatter_numerical_1() {
		var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
		var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0), new __pythonRuntime.objects.list(0), new __pythonRuntime.objects.list(0))));
		var src = 1.0;
		var dim = 1;
		t.scatter_(dim, dim, index, idx, src, src);
		this.assertTrue(np.array_equal(t.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0, 0, 0, 0), new __pythonRuntime.objects.list(1, 0, 0, 0, 0), new __pythonRuntime.objects.list(1, 0, 0, 0, 0)))));
	}
	test_scatter_numerical_2() {
		var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
		var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0), new __pythonRuntime.objects.list(0), new __pythonRuntime.objects.list(0))));
		var src = 1.0;
		var dim = -1;
		t.scatter_(dim, dim, index, idx, src, src);
		this.assertTrue(np.array_equal(t.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0, 0, 0, 0), new __pythonRuntime.objects.list(1, 0, 0, 0, 0), new __pythonRuntime.objects.list(1, 0, 0, 0, 0)))));
	}
	test_scatter_numerical_3() {
		var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
		var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0))));
		var src = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(6, 7, 8, 9, 10))));
		var dim = 0;
		t.scatter_(dim, dim, index, idx, src, src);
		this.assertTrue(np.array_equal(t.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(0, 0, 0, 0, 0), new __pythonRuntime.objects.list(0, 0, 0, 0, 0)))));
	}
	test_scatter_numerical_4() {
		var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
		var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0))));
		var src = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(6, 7, 8, 9, 10))));
		var dim = -2;
		t.scatter_(dim, dim, index, idx, src, src);
		this.assertTrue(np.array_equal(t.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(0, 0, 0, 0, 0), new __pythonRuntime.objects.list(0, 0, 0, 0, 0)))));
	}
	test_scatter_numerical_5() {
		var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
		var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0), new __pythonRuntime.objects.list(0, 0, 0, 0, 0))));
		var src = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(6, 7, 8, 9, 10))));
		var dim = 0;
		t.scatter_(dim, dim, index, idx, src, src);
		this.assertTrue(np.array_equal(t.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(6, 7, 8, 9, 10), new __pythonRuntime.objects.list(0, 0, 0, 0, 0), new __pythonRuntime.objects.list(0, 0, 0, 0, 0)))));
	}
	test_scatter_numerical_6() {
		var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 4, 5)));
		var idx = new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 0, 1, 1, 2), new __pythonRuntime.objects.list(0, 3, 3, 3, 3)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 0, 0, 0, 0), new __pythonRuntime.objects.list(2, 1, 0, 2, 0)));
		new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 1, 0, 2), new __pythonRuntime.objects.list(1, 3, 2, 2, 2));
		var src = new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 84, 99, 71, 44), new __pythonRuntime.objects.list(79, 57, 2, 37, 62)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(31, 44, 43, 54, 56), new __pythonRuntime.objects.list(72, 52, 21, 89, 95)));
		new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 3, 99, 4, 52), new __pythonRuntime.objects.list(32, 88, 58, 62, 9));
		var dim = 1;
		t.scatter_(dim, dim, index, idx, src, src);
		var expected = new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(79, 84, 0, 0, 0), new __pythonRuntime.objects.list(0, 0, 99, 71, 0), new __pythonRuntime.objects.list(0, 0, 0, 0, 44), new __pythonRuntime.objects.list(7, 57, 2, 37, 62)));
		new __pythonRuntime.objects.tuple(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 44, 21, 54, 95), new __pythonRuntime.objects.list(0, 52, 0, 0, 0), new __pythonRuntime.objects.list(72, 0, 0, 89, 0), new __pythonRuntime.objects.list(0, 0, 0, 0, 0)));
		new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 3, 0, 4, 0), new __pythonRuntime.objects.list(32, 0, 99, 0, 0), new __pythonRuntime.objects.list(0, 0, 58, 62, 9), new __pythonRuntime.objects.list(0, 88, 0, 0, 0));
		this.assertTrue(np.array_equal(t.data, np.array(expected)));
	}
	test_scatter_index_type() {
		var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
		var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0.0, 0.0, 0.0, 0.0, 0.0))));
		var src = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(6, 7, 8, 9, 10))));
		var dim = 0;
		this.assertRaises(Exception);
		t.scatter_(dim, dim, index, idx, src, src);
	}
	test_scatter_index_out_of_range() {
		var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
		var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 0, 0, 0, 0))));
		var src = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(6, 7, 8, 9, 10))));
		var dim = 0;
		this.assertRaises(Exception);
		t.scatter_(dim, dim, index, idx, src, src);
	}
	test_scatter_dim_out_Of_range() {
		var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
		var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0))));
		var src = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(6, 7, 8, 9, 10))));
		var dim = 4;
		this.assertRaises(Exception);
		t.scatter_(dim, dim, index, idx, src, src);
	}
	test_scatter_index_src_dimension_mismatch() {
		var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
		var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0), new __pythonRuntime.objects.list(0, 0, 0, 0, 0))));
		var src = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5))));
		var dim = 1;
		this.assertRaises(Exception);
		t.scatter_(dim, dim, index, idx, src, src);
	}
}
class remainderTests {
	tes_remainder() {
		var t = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(-2, -3), new __pythonRuntime.objects.list(4, 1)));
		var result = t.remainder(1.5);
		this.assertTrue(np.array_equal(result.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0), new __pythonRuntime.objects.list(1, 1)))));
	}
	test_remainder_broadcasting() {
		var t = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(-2, -3), new __pythonRuntime.objects.list(4, 1)));
		var result = t.remainder(new __pythonRuntime.objects.list(2, -3));
		this.assertTrue(np.array_equal(result.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0), new __pythonRuntime.objects.list(0, -2)))));
	}
	test_remainder_() {
		var t = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(-2, -3), new __pythonRuntime.objects.list(4, 1)));
		t.remainder_(2);
		this.assertTrue(np.array_equal(t.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1), new __pythonRuntime.objects.list(0, 1)))));
	}
}
class testMv {
	test_mv() {
		var mat = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(2, 3, 4), new __pythonRuntime.objects.list(4, 5, 6)));
		var vector = TensorBase(new __pythonRuntime.objects.list(1, 2, 3));
		this.assertEqual(tensor.mv(mat, vector), TensorBase(new __pythonRuntime.objects.list(14, 20, 32)));
	}
	test_mv_tensor() {
		var mat = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(1, 2, 3)));
		var vec = TensorBase(new __pythonRuntime.objects.list(1, 2, 3));
		this.assertEqual(mat.mv(vec), TensorBase(new __pythonRuntime.objects.list(14, 14)));
	}
}
class TestNarrow {
	test_narrow_int() {
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(4, 5, 6), new __pythonRuntime.objects.list(7, 8, 9))));
		{
			var __filbertTmp171 = new __pythonRuntime.objects.tuple(0, 0, 2);
			var dim = __filbertTmp171[0];
			var start = __filbertTmp171[1];
			var length = __filbertTmp171[2];
		}
		this.assertEqual(mat.narrow(dim, start, length), TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(4, 5, 6)))));
	}
	test_narrow_float() {
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.1, 2.1, 3.1), new __pythonRuntime.objects.list(4.2, 5.2, 6.2), new __pythonRuntime.objects.list(7.3, 8.3, 9.3))));
		{
			var __filbertTmp173 = new __pythonRuntime.objects.tuple(1, 1, 2);
			var dim = __filbertTmp173[0];
			var start = __filbertTmp173[1];
			var length = __filbertTmp173[2];
		}
		this.assertEqual(mat.narrow(dim, start, length), TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.1, 3.1), new __pythonRuntime.objects.list(5.2, 6.2), new __pythonRuntime.objects.list(8.3, 9.3)))));
	}
}
class masked_scatter_Tests {
	test_masked_scatter_1() {
		var t = TensorBase(np.ones(new __pythonRuntime.objects.tuple(2, 3)));
		var source = TensorBase(new __pythonRuntime.objects.list(1, 2, 3, 4, 5, 6));
		var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 0), new __pythonRuntime.objects.list(1, 0, 1)));
		t.masked_scatter_(mask, source);
		this.assertTrue(np.array_equal(t, TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 1, 1), new __pythonRuntime.objects.list(2, 1, 3)))));
	}
	test_masked_scatter_braodcasting_1() {
		var t = TensorBase(np.ones(new __pythonRuntime.objects.tuple(2, 3)));
		var source = TensorBase(new __pythonRuntime.objects.list(1, 2, 3, 4, 5, 6));
		var mask = TensorBase(new __pythonRuntime.objects.list(0, 1, 0));
		t.masked_scatter_(mask, source);
		this.assertTrue(np.array_equal(t, TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 1, 1), new __pythonRuntime.objects.list(1, 2, 1)))));
	}
	test_masked_scatter_braodcasting_2() {
		var t = TensorBase(np.ones(new __pythonRuntime.objects.tuple(2, 3)));
		var source = TensorBase(new __pythonRuntime.objects.list(1, 2, 3, 4, 5, 6));
		var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(0)));
		t.masked_scatter_(mask, source);
		this.assertTrue(np.array_equal(t, TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(1, 1, 1)))));
	}
}
class masked_fill_Tests {
	test_masked_fill_() {
		var t = TensorBase(np.ones(new __pythonRuntime.objects.tuple(2, 3)));
		var value = 2.0;
		var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0), new __pythonRuntime.objects.list(1, 1, 0)));
		t.masked_fill_(mask, value);
		this.assertTrue(np.array_equal(t, TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.0, 1.0, 1.0), new __pythonRuntime.objects.list(2.0, 2.0, 1.0)))));
	}
	test_masked_fill_broadcasting() {
		var t = TensorBase(np.ones(new __pythonRuntime.objects.tuple(2, 3)));
		var value = 2;
		var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(0)));
		t.masked_fill_(mask, value);
		this.assertTrue(np.array_equal(t, TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 2, 2), new __pythonRuntime.objects.list(1, 1, 1)))));
	}
}
class masked_select_Tests {
	test_masked_select() {
		var t = TensorBase(np.arange(0, 6).reshape(2, 3));
		var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0), new __pythonRuntime.objects.list(1, 1, 0)));
		this.assertTrue(np.array_equal(tensor.masked_select(t, mask), TensorBase(new __pythonRuntime.objects.list(3, 4))));
	}
	test_masked_select_broadcasting_1() {
		var t = TensorBase(np.arange(0, 6).reshape(2, 3));
		var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 1, 0)));
		this.assertTrue(np.array_equal(tensor.masked_select(t, mask), TensorBase(new __pythonRuntime.objects.list(0, 1, 3, 4))));
	}
	test_masked_select_broadcasting_2() {
		var t = TensorBase(new __pythonRuntime.objects.list(2.0));
		var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 1, 0)));
		this.assertTrue(np.array_equal(tensor.masked_select(t, mask), TensorBase(new __pythonRuntime.objects.list(2.0, 2.0))));
	}
	test_tensor_base_masked_select() {
		var t = TensorBase(np.arange(0, 6).reshape(2, 3));
		var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 1, 0)));
		this.assertTrue(np.array_equal(t.masked_select(mask), TensorBase(new __pythonRuntime.objects.list(0, 1, 3, 4))));
	}
}
class eqTests {
	test_eq_with_tensor() {
		var t1 = TensorBase(np.arange(5));
		var t2 = TensorBase(np.arange(5)._pySlice(-1, null, -1));
		var truth_values = t1.eq(t2);
		this.assertEqual(truth_values, new __pythonRuntime.objects.list(False, False, True, False, False));
	}
	test_eq_with_number() {
		var t1 = TensorBase(np.arange(5));
		var truth_values = t1.eq(1);
		this.assertEqual(truth_values, new __pythonRuntime.objects.list(False, True, False, False, False));
	}
	test_eq_in_place_with_tensor() {
		var t1 = TensorBase(np.arange(5));
		var t2 = TensorBase(np.arange(5)._pySlice(-1, null, -1));
		t1.eq_(t2);
		this.assertEqual(t1, new __pythonRuntime.objects.list(False, False, True, False, False));
	}
	test_eq_in_place_with_number() {
		var t1 = TensorBase(np.arange(5));
		t1.eq_(1);
		this.assertEqual(t1, new __pythonRuntime.objects.list(False, True, False, False, False));
	}
}
class mm_test {
	test_mm_1d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5)));
		var out = t1.mm(t2);
		this.assertTrue(np.alltrue(out.data == new __pythonRuntime.objects.list(38)));
	}
	test_mm_2d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(2, 3))));
		var out = t1.mm(t2);
		this.assertTrue(np.alltrue(out.data == new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(6, 9), new __pythonRuntime.objects.list(6, 9))));
	}
	test_mm_3d() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(2, 3, 4))));
		var out = t1.mm(t2);
		this.assertTrue(np.alltrue(out.data == new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 8, 11), new __pythonRuntime.objects.list(8, 13, 18), new __pythonRuntime.objects.list(11, 18, 25))));
	}
}
class newTensorTests {
	test_encrypted_error() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 1, 1)), encrypted, True);
		var t2 = t1.new(new __pythonRuntime.objects.list(1, 1, 2), encrypted, True);
		this.assertEqual(t2, NotImplemented);
	}
	test_return_new_float_tensor() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 1, 1)));
		var t2 = t1.new(np.array(new __pythonRuntime.objects.list(1., 1., 2.)));
		this.assertTrue(t2.data.dtype == np.float64);
	}
	test_return_new_int_tensor() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 1, 1)));
		var t2 = t1.new(np.array(new __pythonRuntime.objects.list(1, 1, 2)));
		this.assertTrue(t2.data.dtype == np.int64);
	}
}
class half {
	half_test_1() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		this.assertTrue(np.alltrue(t1.half() == np.array(new __pythonRuntime.objects.list(2, 3, 4)).astype('float16')));
	}
	half_test_2() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.1, 2.1), new __pythonRuntime.objects.list(1.11, 2.11))));
		this.assertTrue(np.alltrue(t1.half() == np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.1, 2.1), new __pythonRuntime.objects.list(1.11, 2.11))).astype('float16')));
	}
}
class fmodTest {
	test_fmod_number() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(-3, -2, -1, 1, 2, 3)));
		this.assertTrue(np.array_equal(t1.fmod(2).data, np.array(new __pythonRuntime.objects.list(-1, 0, -1, 1, 0, 1))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(-3.5, -2.5, -1.5, 1.5, 2.5, 3.5)));
		this.assertTrue(np.array_equal(t2.fmod(2.).data, np.array(new __pythonRuntime.objects.list(-1.5, -0.5, -1.5, 1.5, 0.5, 1.5))));
	}
	test_fmod_tensor() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(-3, -2, -1, 1, 2, 3)));
		var divisor = np.array(__pythonRuntime.ops.multiply(new __pythonRuntime.objects.list(2), 6));
		this.assertTrue(np.array_equal(t1.fmod(divisor).data, np.array(new __pythonRuntime.objects.list(-1, 0, -1, 1, 0, 1))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(-3.5, -2.5, -1.5, 1.5, 2.5, 3.5)));
		divisor = np.array(__pythonRuntime.ops.multiply(new __pythonRuntime.objects.list(2.), 6));
		this.assertTrue(np.array_equal(t2.fmod(divisor).data, np.array(new __pythonRuntime.objects.list(-1.5, -0.5, -1.5, 1.5, 0.5, 1.5))));
	}
}
class fmod_Test {
	test_fmod_number() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(-3, -2, -1, 1, 2, 3)));
		t1.fmod_(2);
		this.assertTrue(np.array_equal(t1.data, np.array(new __pythonRuntime.objects.list(-1, 0, -1, 1, 0, 1))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(-3.5, -2.5, -1.5, 1.5, 2.5, 3.5)));
		t2.fmod_(2.);
		this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(-1.5, -0.5, -1.5, 1.5, 0.5, 1.5))));
	}
	test_fmod_tensor() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(-3, -2, -1, 1, 2, 3)));
		var divisor = np.array(__pythonRuntime.ops.multiply(new __pythonRuntime.objects.list(2), 6));
		t1.fmod_(divisor);
		this.assertTrue(np.array_equal(t1.data, np.array(new __pythonRuntime.objects.list(-1, 0, -1, 1, 0, 1))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(-3.5, -2.5, -1.5, 1.5, 2.5, 3.5)));
		divisor = np.array(__pythonRuntime.ops.multiply(new __pythonRuntime.objects.list(2.), 6));
		t2.fmod_(divisor);
		this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(-1.5, -0.5, -1.5, 1.5, 0.5, 1.5))));
	}
}
class numel_test {
	numel_test_int() {
		var t1_len = 3;
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		this.assertEqual(t1.numel(), t1_len);
	}
	numel_test_float() {
		var t1_len = 3;
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2.0, 3.0, 4.0)));
		this.assertEqual(t1.numel(), t1_len);
	}
	numel_test_2d() {
		var t1_len = 6;
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.0, 3.0, 4.0), new __pythonRuntime.objects.list(5.0, 6.0, 7.0))));
		this.assertEqual(t1.numel(), t1_len);
	}
	numel_test_3d() {
		var t1_len = 12;
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.0, 3.0, 4.0), new __pythonRuntime.objects.list(5.0, 6.0, 7.0)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.0, 3.0, 4.0), new __pythonRuntime.objects.list(5.0, 6.0, 7.0)))));
		this.assertEqual(t1.numel(), t1_len);
	}
	numel_test_str() {
		var t1_len = 4;
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list('a', 'b', 'c', 'd')));
		this.assertEqual(t1.numel(), t1_len);
	}
	numel_test_encrypted() {
		var t1_len = 4;
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list('a', 'b', 'c', 'd')));
		var t1enc = TensorBase(t1, encrypted, True);
		this.assertEqual(t1enc.numel(), t1_len);
	}
}
class nelement_test {
	nelement_test_int() {
		var t1_len = 3;
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		this.assertEqual(t1.nelement(), t1_len);
	}
	nelement_test_float() {
		var t1_len = 3;
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2.0, 3.0, 4.0)));
		this.assertEqual(t1.nelement(), t1_len);
	}
	nelement_test_2d() {
		var t1_len = 6;
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.0, 3.0, 4.0), new __pythonRuntime.objects.list(5.0, 6.0, 7.0))));
		this.assertEqual(t1.nelement(), t1_len);
	}
	nelement_test_3d() {
		var t1_len = 12;
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.0, 3.0, 4.0), new __pythonRuntime.objects.list(5.0, 6.0, 7.0)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.0, 3.0, 4.0), new __pythonRuntime.objects.list(5.0, 6.0, 7.0)))));
		this.assertEqual(t1.nelement(), t1_len);
	}
	nelement_test_str() {
		var t1_len = 4;
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list('a', 'b', 'c', 'd')));
		this.assertEqual(t1.nelement(), t1_len);
	}
	nelement_test_encrypted() {
		var t1_len = 4;
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list('a', 'b', 'c', 'd')));
		var t1enc = TensorBase(t1, encrypted, True);
		this.assertEqual(t1enc.nelement(), t1_len);
	}
}
class size_test {
	size_test_int() {
		var t1_size = new __pythonRuntime.objects.tuple(3);
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
		this.assertEqual(t1.size(), t1_size);
	}
	size_test_float() {
		var t1_size = new __pythonRuntime.objects.tuple(3);
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2.0, 3.0, 4.0)));
		this.assertEqual(t1.size(), t1_size);
	}
	size_test_2d() {
		var t1_size = new __pythonRuntime.objects.tuple(2, 3);
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.0, 3.0, 4.0), new __pythonRuntime.objects.list(5.0, 6.0, 7.0))));
		this.assertEqual(t1.size(), t1_size);
	}
	size_test_3d() {
		var t1_size = new __pythonRuntime.objects.tuple(2, 2, 3);
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.0, 3.0, 4.0), new __pythonRuntime.objects.list(5.0, 6.0, 7.0)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.0, 3.0, 4.0), new __pythonRuntime.objects.list(5.0, 6.0, 7.0)))));
		this.assertEqual(t1.size(), t1_size);
	}
	size_test_str() {
		var t1_size = new __pythonRuntime.objects.tuple(4);
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list('a', 'b', 'c', 'd')));
		this.assertEqual(t1.size(), t1_size);
	}
}
class lerpTests {
	test_lerp() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3, 4)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5, 6)));
		var weight = 0.5;
		var out = t1.lerp(t2, weight);
		this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(2, 3, 4, 5)));
	}
	test_lerp_() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3, 4)));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5, 6)));
		var weight = 0.5;
		t1.lerp_(t2, weight);
		this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(2, 3, 4, 5)));
	}
}
class RenormTests {
	testRenorm() {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(4, 5, 6))));
		var t2 = t1.renorm(2, 0, 6);
		this.assertTrue(np.allclose(t2, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.0, 2.0, 3.0), new __pythonRuntime.objects.list(2.735054, 3.418817, 4.102581)))));
	}
	testRenorm_() {
		var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(4, 5, 6))));
		t.renorm_(2, 0, 6);
		this.assertTrue(np.allclose(t, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.0, 2.0, 3.0), new __pythonRuntime.objects.list(2.735054, 3.418817, 4.102581)))));
	}
}
class unfold_Test {
	unfold_test_small() {
		var t1 = TensorBase(np.arange(1, 5));
		var t1_unfolded_actual = t1.unfold(0, 1, 1).to_numpy();
		var t1_unfolded_expected = np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(2), new __pythonRuntime.objects.list(3), new __pythonRuntime.objects.list(4)));
		this.assertTrue(np.array_equal(t1_unfolded_expected), t1_unfolded_actual);
	}
	this.t1_unfolded_actual_1 = t1.unfold(0, 1, 2).to_numpy();
	this.t1_unfolded_expected_1 = np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(3)));
	self.assertTrue(np.array_equal(t1_unfolded_expected_1), t1_unfolded_actual_1);
}
var t1_unfolded_actual_2 = t1.unfold(-1, 1, 2).to_numpy();
var t1_unfolded_expected_2 = np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(3)));
self.assertTrue(np.array_equal(t1_unfolded_expected_2), t1_unfolded_actual_2);
function unfold_test_big() {
	var __params221 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex221 = 0;
	var __args221 = arguments;
	function __getParam221(v, d) {
		var r = d;
		if (__params221) {
			if (__formalsIndex221 < __params221.formals.length) {
				r = __params221.formals[__formalsIndex221++];
			} else if ((v in __params221.keywords)) {
				r = __params221.keywords[v];
				delete __params221.keywords[v];
			}
		} else if (__formalsIndex221 < __args221.length) {
			r = __args221[__formalsIndex221++];
		}
		return r;
	}
	var self = __getParam221("self");
	var arr = np.array();
	new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 3), new __pythonRuntime.objects.list(2, 4), new __pythonRuntime.objects.list(0, 2), new __pythonRuntime.objects.list(1, 4)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 3), new __pythonRuntime.objects.list(0, 0), new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(2, 1)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 1), new __pythonRuntime.objects.list(2, 2), new __pythonRuntime.objects.list(1, 0), new __pythonRuntime.objects.list(2, 1)));
	new __pythonRuntime.objects.tuple(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 1), new __pythonRuntime.objects.list(4, 1), new __pythonRuntime.objects.list(0, 2), new __pythonRuntime.objects.list(0, 4)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 4), new __pythonRuntime.objects.list(2, 2), new __pythonRuntime.objects.list(0, 1), new __pythonRuntime.objects.list(1, 3)));
	var t1 = TensorBase(arr);
	var t1_unfolded_actual = t1.unfold(0, 1, 1).to_numpy();
	var t1_unfolded_expected = np.array();
	new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(3)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2), new __pythonRuntime.objects.list(4)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0), new __pythonRuntime.objects.list(2)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(4))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(3)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0), new __pythonRuntime.objects.list(0)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(2)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2), new __pythonRuntime.objects.list(1))));
	new __pythonRuntime.objects.tuple(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3), new __pythonRuntime.objects.list(1)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2), new __pythonRuntime.objects.list(2)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(0)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2), new __pythonRuntime.objects.list(1))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4), new __pythonRuntime.objects.list(1)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4), new __pythonRuntime.objects.list(1)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0), new __pythonRuntime.objects.list(2)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0), new __pythonRuntime.objects.list(4))), dummy624);
	new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4), new __pythonRuntime.objects.list(4)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2), new __pythonRuntime.objects.list(2)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0), new __pythonRuntime.objects.list(1)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(3)));
	self.assertTrue(np.array_equal(t1_unfolded_expected), t1_unfolded_actual);
}
var t1_unfolded_actual_1 = t1.unfold(2, 1, 2).to_numpy();
var t1_unfolded_expected_1 = np.array();
new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2))));
new __pythonRuntime.objects.tuple(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1))));
self.assertTrue(np.array_equal(t1_unfolded_expected_1), t1_unfolded_actual_1);
t1_unfolded_actual_2 = t1.unfold(-1, 1, 2).to_numpy();
t1_unfolded_expected_2 = t1_unfolded_expected_1;
self.assertTrue(np.array_equal(t1_unfolded_expected_2), t1_unfolded_actual_2);
if (__name__ == "__main__") {
	unittest.main();
}
