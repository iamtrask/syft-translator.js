{
	function DimTests() {}
	DimTests.prototype.test_dim_one = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			this.assertTrue(t.dim() == 1);
		}).call(this);
	};
	DimTests.prototype.test_view = function () {
		return (function () {
			var t = TensorBase(new __pythonRuntime.objects.list(1.0, 2.0, 3.0));
			this.assertTrue(syft.equal(t.view(-1, 1), TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(2), new __pythonRuntime.objects.list(3))))));
		}).call(this);
	};
	DimTests.prototype.test_as_view = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1.0, 2.0, 3.0)));
			var t1 = t.view(new __pythonRuntime.objects.list(-1, 1));
			__pythonRuntime.functions.print(t.data.dtype);
			this.assertTrue(syft.equal(t.view_as(t1), TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.0), new __pythonRuntime.objects.list(2.0), new __pythonRuntime.objects.list(3.0))))));
		}).call(this);
	};
	DimTests.prototype.test_resize = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1.0, 2.0, 3.0)));
			t.resize_(new __pythonRuntime.objects.list(1, 2));
			this.assertEqual(t.data.shape, new __pythonRuntime.objects.tuple(1, 2));
		}).call(this);
	};
	DimTests.prototype.test_resize_as = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(2))));
			t.resize_as_(t2);
			this.assertEqual(t.data.shape, new __pythonRuntime.objects.tuple(2, 1));
		}).call(this);
	};
	DimTests.prototype.test_size = function () {
		return (function () {
			var t = TensorBase(new __pythonRuntime.objects.list(1, 2, 3));
			var t1 = TensorBase(new __pythonRuntime.objects.list(1.0, 2.0, 3.0));
			this.assertEqual(t.size(), t1.size());
		}).call(this);
	};
	DimTests.prototype.test_nelement = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(3, 4))));
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5.0, 6.0), new __pythonRuntime.objects.list(7.0, 8.0))));
			this.assertEqual(t.nelement(), t1.nelement());
		}).call(this);
	};
}
{
	function AddTests() {}
	AddTests.prototype.test_simple = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			this.assertTrue(syft.equal(__pythonRuntime.ops.add(t, np.array(new __pythonRuntime.objects.list(1, 2, 3))), new __pythonRuntime.objects.list(2, 4, 6)));
		}).call(this);
	};
	AddTests.prototype.test_inplace = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			t = __pythonRuntime.ops.add(t, np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			this.assertTrue(syft.equal(t.data, new __pythonRuntime.objects.list(2, 4, 6)));
		}).call(this);
	};
	AddTests.prototype.test_scalar = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			this.assertTrue(syft.equal(__pythonRuntime.ops.add(t, 2), new __pythonRuntime.objects.list(3, 4, 5)));
		}).call(this);
	};
}
{
	function CeilTests() {}
	CeilTests.prototype.test_ceil = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1.4, 2.7, 6.2)));
			var tdash = t.ceil();
			this.assertTrue(syft.equal(tdash.data, TensorBase(new __pythonRuntime.objects.list(2, 3, 7))));
			this.assertTrue(syft.equal(t.data, TensorBase(new __pythonRuntime.objects.list(1.4, 2.7, 6.2))));
		}).call(this);
	};
	CeilTests.prototype.test_ceil_ = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1.4, 2.7, 6.2)));
			this.assertTrue(syft.equal(t.ceil_(), new __pythonRuntime.objects.list(2, 3, 7)));
			this.assertTrue(syft.equal(t.data, new __pythonRuntime.objects.list(2, 3, 7)));
		}).call(this);
	};
}
{
	function ZeroTests() {}
	ZeroTests.prototype.test_zero = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(13, 42, 1024)));
			this.assertTrue(syft.equal(t.zero_(), new __pythonRuntime.objects.list(0, 0, 0)));
			t = TensorBase(np.array(new __pythonRuntime.objects.list(13.1, 42.2, 1024.4)));
			this.assertTrue(syft.equal(t.zero_(), new __pythonRuntime.objects.list(0.0, 0.0, 0.0)));
		}).call(this);
	};
}
{
	function FloorTests() {}
	FloorTests.prototype.test_floor_ = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1.4, 2.7, 6.2)));
			this.assertTrue(syft.equal(t.floor_(), new __pythonRuntime.objects.list(1., 2., 6.)));
			this.assertTrue(syft.equal(t.data, new __pythonRuntime.objects.list(1., 2., 6.)));
		}).call(this);
	};
}
{
	function SubTests() {}
	SubTests.prototype.test_simple = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			this.assertTrue(syft.equal(t - np.array(new __pythonRuntime.objects.list(1, 2, 3)), new __pythonRuntime.objects.list(0, 0, 0)));
		}).call(this);
	};
	SubTests.prototype.test_inplace = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			t -= np.array(new __pythonRuntime.objects.list(1, 2, 3));
			this.assertTrue(syft.equal(t.data, new __pythonRuntime.objects.list(0, 0, 0)));
		}).call(this);
	};
	SubTests.prototype.test_scalar = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			this.assertTrue(syft.equal(t - 1, new __pythonRuntime.objects.list(0, 1, 2)));
		}).call(this);
	};
}
{
	function MaxTests() {}
	MaxTests.prototype.test_no_dim = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0.77937768, 0.51022484, 0.49155195, 0.02769902), new __pythonRuntime.objects.list(0.03777148, 0.13020167, 0.02155692, 0.69574893))));
			this.assertTrue(t.max() == 0.77937768);
		}).call(this);
	};
	MaxTests.prototype.test_axis = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0.77937768, 0.51022484, 0.49155195, 0.02769902), new __pythonRuntime.objects.list(0.03777148, 0.13020167, 0.02155692, 0.69574893))));
			var result = t.max(axis, 1);
			this.assertTrue(syft.equal(result, new __pythonRuntime.objects.list(0.77937768, 0.69574893)));
			result = t.max(axis, 0);
			this.assertTrue(syft.equal(result, new __pythonRuntime.objects.list(0.77937768, 0.51022484, 0.49155195, 0.69574893)));
		}).call(this);
	};
}
{
	function MultTests() {}
	MultTests.prototype.test_simple = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			this.assertTrue(syft.equal(__pythonRuntime.ops.multiply(t, np.array(new __pythonRuntime.objects.list(1, 2, 3))), new __pythonRuntime.objects.list(1, 4, 9)));
		}).call(this);
	};
	MultTests.prototype.test_inplace = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			t = __pythonRuntime.ops.multiply(t, np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			this.assertTrue(syft.equal(t.data, new __pythonRuntime.objects.list(1, 4, 9)));
		}).call(this);
	};
	MultTests.prototype.test_scalar = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			this.assertTrue(syft.equal(__pythonRuntime.ops.multiply(t, 2), new __pythonRuntime.objects.list(2, 4, 6)));
		}).call(this);
	};
}
{
	function DivTests() {}
	DivTests.prototype.test_simple = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(2, 4, 8)));
			this.assertTrue(syft.equal(t / np.array(new __pythonRuntime.objects.list(2, 2, 2)), new __pythonRuntime.objects.list(1, 2, 4)));
		}).call(this);
	};
	DivTests.prototype.test_inplace = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(2, 4, 8)));
			t /= np.array(new __pythonRuntime.objects.list(2, 2, 2));
			this.assertTrue(syft.equal(t.data, new __pythonRuntime.objects.list(1, 2, 4)));
			t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 7, 11)));
			t /= np.array(new __pythonRuntime.objects.list(3, 2, 9));
			this.assertTrue(syft.equal(t, new __pythonRuntime.objects.list(1 / 3, 7 / 2, 11 / 9)));
		}).call(this);
	};
	DivTests.prototype.test_scalar = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(2, 4, 6)));
			this.assertTrue(syft.equal(t / 2, new __pythonRuntime.objects.list(1, 2, 3)));
		}).call(this);
	};
}
{
	function AbsTests() {}
	AbsTests.prototype.test_abs = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(-1, -2, 3)));
			this.assertTrue(np.array_equal(t.abs(), new __pythonRuntime.objects.list(1, 2, 3)));
		}).call(this);
	};
	AbsTests.prototype.test_abs_ = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(-1, -2, 3)));
			this.assertTrue(np.array_equal(t.abs_(), t.data));
		}).call(this);
	};
}
{
	function ShapeTests() {}
	ShapeTests.prototype.test_shape = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1), new __pythonRuntime.objects.list(0, 5))));
			this.assertTrue(syft.equal(t.shape(), new __pythonRuntime.objects.tuple(2, 2)));
		}).call(this);
	};
}
{
	function SqrtTests() {}
	SqrtTests.prototype.test_sqrt = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 4), new __pythonRuntime.objects.list(9, 16))));
			this.assertTrue(syft.equal(t.sqrt(), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 2), new __pythonRuntime.objects.list(3, 4))));
		}).call(this);
	};
	SqrtTests.prototype.test_sqrt_ = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 4), new __pythonRuntime.objects.list(9, 16))));
			t.sqrt_();
			this.assertTrue(syft.equal(t, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 2), new __pythonRuntime.objects.list(3, 4))));
		}).call(this);
	};
}
{
	function SumTests() {}
	SumTests.prototype.test_dim_none_int = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			this.assertTrue(syft.equal(t.sum(), 6));
		}).call(this);
	};
	SumTests.prototype.test_dim_is_not_none_int = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1), new __pythonRuntime.objects.list(0, 5))));
			this.assertTrue(syft.equal(t.sum(dim, 1), new __pythonRuntime.objects.list(1, 5)));
		}).call(this);
	};
}
{
	function EqualTests() {}
	EqualTests.prototype.test_equal = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1.2, 2, 3)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(1.2, 2, 3)));
			this.assertTrue(syft.equal(t1, t2));
		}).call(this);
	};
	EqualTests.prototype.test_equal_operation = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2.4, 3)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2.4, 3)));
			this.assertTrue(t1 == t2);
		}).call(this);
	};
	EqualTests.prototype.test_not_equal = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 4, 3)));
			this.assertFalse(syft.equal(t1, t2));
		}).call(this);
	};
	EqualTests.prototype.test_inequality_operation = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 4, 5)));
			this.assertTrue(t1 != t2);
		}).call(this);
	};
}
{
	function IndexTests() {}
	IndexTests.prototype.test_indexing = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1.2, 2, 3)));
			this.assertEqual(1.2, t1[__pythonRuntime.ops.subscriptIndex(t1, 0)]);
			this.assertEqual(3, t1[__pythonRuntime.ops.subscriptIndex(t1, -1)]);
		}).call(this);
	};
}
{
	function sigmoidTests() {}
	sigmoidTests.prototype.test_sigmoid = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1.2, 3.3, 4)));
			this.assertTrue(syft.equal(t1.sigmoid_(), TensorBase(), new __pythonRuntime.objects.list(0.76852478, 0.96442881, 0.98201379)));
		}).call(this);
	};
}
{
	function addmm() {}
	addmm.prototype.test_addmm_1d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
			var out = t1.addmm(t2, mat, beta, 2, alpha, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(50)));
		}).call(this);
	};
	addmm.prototype.test_addmm_2d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
			var out = t1.addmm(t2, mat, beta, 2, alpha, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(10, 18), new __pythonRuntime.objects.list(12, 20))));
		}).call(this);
	};
	addmm.prototype.test_addmm__1d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
			t1.addmm_(t2, mat, beta, 2, alpha, 2);
			this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(50)));
		}).call(this);
	};
	addmm.prototype.test_addmm__2d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
			t1.addmm_(t2, mat, beta, 2, alpha, 2);
			this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(10, 18), new __pythonRuntime.objects.list(12, 20))));
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
			var out = t1.addcmul(t2, mat, value, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(9, 17, 29)));
		}).call(this);
	};
	addcmulTests.prototype.test_addcmul_2d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
			var out = t1.addcmul(t2, mat, value, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 11), new __pythonRuntime.objects.list(5, 12))));
		}).call(this);
	};
	addcmulTests.prototype.test_addcmul__1d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
			t1.addcmul_(t2, mat, value, 2);
			this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(9, 17, 29)));
		}).call(this);
	};
	addcmulTests.prototype.test_addcmul__2d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
			t1.addcmul_(t2, mat, value, 2);
			this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 11), new __pythonRuntime.objects.list(5, 12))));
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
			var out = t1.addcdiv(t2, mat, value, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(6., 5.8, 6.5)));
		}).call(this);
	};
	addcdivTests.prototype.test_addcdiv_2d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
			var out = t1.addcdiv(t2, mat, value, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4., 5.), new __pythonRuntime.objects.list(5., 6.))));
		}).call(this);
	};
	addcdivTests.prototype.test_addcdiv__1d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 5, 4)));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(5)));
			t1.addcdiv_(t2, mat, value, 2);
			this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(6., 5.8, 6.5)));
		}).call(this);
	};
	addcdivTests.prototype.test_addcdiv__2d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
			t1.addcdiv_(t2, mat, value, 2);
			this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4., 5.), new __pythonRuntime.objects.list(5., 6.))));
		}).call(this);
	};
}
{
	function addmvTests() {}
	addmvTests.prototype.test_addmv = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2)));
			var vec = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3, 4)));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3, 3, 4), new __pythonRuntime.objects.list(5, 6, 6, 7))));
			var out = t1.addmv(mat, vec, beta, 2, alpha, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(68, 130)));
		}).call(this);
	};
	addmvTests.prototype.test_addmv_ = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2)));
			var vec = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3, 4)));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3, 3, 4), new __pythonRuntime.objects.list(5, 6, 6, 7))));
			t1.addmv_(mat, vec, beta, 2, alpha, 2);
			this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(68, 130)));
		}).call(this);
	};
}
{
	function bmmTests() {}
	bmmTests.prototype.test_bmm_size = function () {
		return (function () {
			var t1 = TensorBase(np.random.rand(4, 3, 2));
			var t2 = TensorBase(np.random.rand(4, 2, 1));
			var out = t1.bmm(t2);
			this.assertTupleEqual(out.shape(), new __pythonRuntime.objects.tuple(4, 3, 1));
		}).call(this);
	};
	bmmTests.prototype.test_bmm = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 1)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2)))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(3)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4), new __pythonRuntime.objects.list(8)))));
			var out = t1.bmm(t2);
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
			var out = t1.addbmm(t2, mat, beta, 2, alpha, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(176, 266), new __pythonRuntime.objects.list(114, 172))));
		}).call(this);
	};
	addbmmTests.prototype.test_addbmm_ = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(5, 7)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 9), new __pythonRuntime.objects.list(1, 3)))));
			var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
			t1.addbmm_(t2, mat, beta, 2, alpha, 2);
			this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(176, 266), new __pythonRuntime.objects.list(114, 172))));
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
			var out = t1.baddbmm(t2, mat, beta, 2, alpha, 2);
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(62, 92), new __pythonRuntime.objects.list(96, 142))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(122, 184), new __pythonRuntime.objects.list(28, 42))));
		}).call(this);
	};
}
function test_baddbmm_() {
	var __params57 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex57 = 0;
	var __args57 = arguments;
	function __getParam57(v, d) {
		var r = d;
		if (__params57) {
			if (__formalsIndex57 < __params57.formals.length) {
				r = __params57.formals[__formalsIndex57++];
			} else if ((v in __params57.keywords)) {
				r = __params57.keywords[v];
				delete __params57.keywords[v];
			}
		} else if (__formalsIndex57 < __args57.length) {
			r = __args57[__formalsIndex57++];
		}
		return r;
	}
	var self = __getParam57("self");
	return (function () {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
		var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(5, 7)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 9), new __pythonRuntime.objects.list(1, 3)))));
		var mat = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 5), new __pythonRuntime.objects.list(5, 6)))));
		t1.baddbmm_(t2, mat, beta, 2, alpha, 2);
		self.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(62, 92), new __pythonRuntime.objects.list(96, 142))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(122, 184), new __pythonRuntime.objects.list(28, 42))));
	}).call(this);
}
{
	function PermuteTests() {}
	PermuteTests.prototype.dest3d = function () {
		return (function () {
			var t = TensorBase(np.ones(new __pythonRuntime.objects.tuple(2, 3, 5)));
			var tdash = t.permute(new __pythonRuntime.objects.tuple(2, 0, 1));
			this.assertTrue(tdash.data.shape == new __pythonRuntime.objects.list(5, 2, 3));
			this.assertTrue(t.data.shape == new __pythonRuntime.objects.list(2, 3, 5));
		}).call(this);
	};
}
{
	function transposeTests() {
		this.out2 = t1.transpose(0, 2);
		self.assertTrue(np.array_equal(out2.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 7), new __pythonRuntime.objects.list(5, 1))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 8), new __pythonRuntime.objects.list(6, 2))));
	}
	transposeTests.prototype.test_transpose = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
			var out1 = t1.transpose(0, 1);
			this.assertTrue(np.array_equal(out1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(7, 8))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 6), new __pythonRuntime.objects.list(1, 2))));
		}).call(this);
	};
}
var out3 = t1.transpose(1, 2);
self.assertTrue(np.array_equal(out3.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(4, 6))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 1), new __pythonRuntime.objects.list(8, 2))));
function test_transpose_() {
	var __params60 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex60 = 0;
	var __args60 = arguments;
	function __getParam60(v, d) {
		var r = d;
		if (__params60) {
			if (__formalsIndex60 < __params60.formals.length) {
				r = __params60.formals[__formalsIndex60++];
			} else if ((v in __params60.keywords)) {
				r = __params60.keywords[v];
				delete __params60.keywords[v];
			}
		} else if (__formalsIndex60 < __args60.length) {
			r = __args60[__formalsIndex60++];
		}
		return r;
	}
	var self = __getParam60("self");
	return (function () {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
		t1.transpose_(0, 1);
		self.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(7, 8))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 6), new __pythonRuntime.objects.list(1, 2))));
	}).call(this);
}
var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
t2.transpose_(0, 2);
self.assertTrue(np.array_equal(t2.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 7), new __pythonRuntime.objects.list(5, 1))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(4, 8), new __pythonRuntime.objects.list(6, 2))));
var t3 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
t3.transpose_(1, 2);
self.assertTrue(np.array_equal(t3.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 5), new __pythonRuntime.objects.list(4, 6))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 1), new __pythonRuntime.objects.list(8, 2))));
function test_t() {
	var __params61 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex61 = 0;
	var __args61 = arguments;
	function __getParam61(v, d) {
		var r = d;
		if (__params61) {
			if (__formalsIndex61 < __params61.formals.length) {
				r = __params61.formals[__formalsIndex61++];
			} else if ((v in __params61.keywords)) {
				r = __params61.keywords[v];
				delete __params61.keywords[v];
			}
		} else if (__formalsIndex61 < __args61.length) {
			r = __args61[__formalsIndex61++];
		}
		return r;
	}
	var self = __getParam61("self");
	return (function () {
		var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(5, 6)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(7, 8), new __pythonRuntime.objects.list(1, 2)))));
		var out1 = t1.t();
		self.assertTrue(np.array_equal(out1.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(3, 4), new __pythonRuntime.objects.list(7, 8))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 6), new __pythonRuntime.objects.list(1, 2))));
	}).call(this);
}
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
		}).call(this);
	};
	unsqueezeTests.prototype.test_unsqueeze_ = function () {
		return (function () {
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
		}).call(this);
	};
}
{
	function expTests() {
		this.out = t3.exp();
		self.assertTrue(np.allclose(out.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.71828183e+00, 2.00855369e+01), new __pythonRuntime.objects.list(2.00855369e+01, 1.48413159e+02))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.48413159e+02, 1.09663316e+03), new __pythonRuntime.objects.list(8.10308393e+03, 2.71828183e+00))));
	}
	expTests.prototype.test_exp = function () {
		return (function () {
			var t3 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 3), new __pythonRuntime.objects.list(3, 5))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 7), new __pythonRuntime.objects.list(9, 1))));
		}).call(this);
	};
}
function test_exp_() {
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
	return (function () {
		var t3 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 3), new __pythonRuntime.objects.list(3, 5))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 7), new __pythonRuntime.objects.list(9, 1))));
	}).call(this);
}
t3.exp_();
self.assertTrue(np.allclose(t3.data, new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2.71828183e+00, 2.00855369e+01), new __pythonRuntime.objects.list(2.00855369e+01, 1.48413159e+02))), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.48413159e+02, 1.09663316e+03), new __pythonRuntime.objects.list(8.10308393e+03, 2.71828183e+00))));
{
	function fracTests() {}
	fracTests.prototype.test_frac = function () {
		return (function () {
			var t3 = TensorBase(np.array(new __pythonRuntime.objects.list(1.23, 4.56, 7.89)));
			var out = t3.frac();
			this.assertTrue(np.allclose(out.data, new __pythonRuntime.objects.list(0.23, 0.56, 0.89)));
		}).call(this);
	};
	fracTests.prototype.test_frac_ = function () {
		return (function () {
			var t3 = TensorBase(np.array(new __pythonRuntime.objects.list(1.23, 4.56, 7.89)));
			t3.frac_();
			this.assertTrue(np.allclose(t3.data, new __pythonRuntime.objects.list(0.23, 0.56, 0.89)));
		}).call(this);
	};
}
{
	function rsqrtTests() {}
	rsqrtTests.prototype.test_rsqrt = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
			var out = t1.rsqrt();
			this.assertTrue(np.allclose(out.data, new __pythonRuntime.objects.list(0.70710678, 0.57735027, 0.5)));
		}).call(this);
	};
	rsqrtTests.prototype.test_rsqrt_ = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
			t1.rsqrt_();
			this.assertTrue(np.allclose(t1.data, new __pythonRuntime.objects.list(0.70710678, 0.57735027, 0.5)));
		}).call(this);
	};
}
{
	function signTests() {}
	signTests.prototype.test_sign = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, -1, -2)));
			var out = t1.sign();
			this.assertTrue(np.array_equal(out.data, new __pythonRuntime.objects.list(1, 1, -1, -1)));
		}).call(this);
	};
	signTests.prototype.test_sign_ = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, -1, -2)));
			t1.sign_();
			this.assertTrue(np.array_equal(t1.data, new __pythonRuntime.objects.list(1, 1, -1, -1)));
		}).call(this);
	};
}
{
	function numpyTests() {}
	numpyTests.prototype.test_numpy = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(3, 4))));
			this.assertTrue(np.array_equal(t1.to_numpy(), np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(3, 4)))));
		}).call(this);
	};
}
{
	function reciprocalTests() {}
	reciprocalTests.prototype.test_reciprocal = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
			var out = t1.reciprocal();
			this.assertTrue(np.allclose(out.data, new __pythonRuntime.objects.list(0.5, 0.33333333, 0.25)));
		}).call(this);
	};
	reciprocalTests.prototype.test_reciprocal_ = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
			t1.reciprocal_();
			this.assertTrue(np.allclose(t1.data, new __pythonRuntime.objects.list(0.5, 0.33333333, 0.25)));
		}).call(this);
	};
}
{
	function logTests() {}
	logTests.prototype.test_log = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(math.exp(1), math.exp(2), math.exp(3))));
			this.assertTrue(np.array_equal(t1.log().data, new __pythonRuntime.objects.list(1., 2., 3.)));
		}).call(this);
	};
	logTests.prototype.test_log_ = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(math.exp(1), math.exp(2), math.exp(3))));
			this.assertTrue(np.array_equal(t1.log_().data, new __pythonRuntime.objects.list(1., 2., 3.)));
		}).call(this);
	};
	logTests.prototype.test_log_1p = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			this.assertTrue(np.allclose(t1.log1p().data, new __pythonRuntime.objects.list(0.69314718, 1.09861229, 1.38629436)));
		}).call(this);
	};
	logTests.prototype.test_log_1p_ = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			this.assertTrue(np.allclose(t1.log1p_().data, new __pythonRuntime.objects.list(0.69314718, 1.09861229, 1.38629436)));
		}).call(this);
	};
}
{
	function clampTests() {}
	clampTests.prototype.test_clamp_int = function () {
		return (function () {
			var t1 = TensorBase(np.arange(10));
			var t2 = t1.clamp(minimum, 2, maximum, 7);
			var expected_tensor = TensorBase(np.array(new __pythonRuntime.objects.list(2, 2, 2, 3, 4, 5, 6, 7, 7, 7)));
			this.assertEqual(t2, expected_tensor);
		}).call(this);
	};
	clampTests.prototype.test_clamp_float = function () {
		return (function () {
			var t1 = TensorBase(np.arange(1, step, 0.1));
			var t2 = t1.clamp(minimum, 0.2, maximum, 0.7);
			var expected_tensor = TensorBase(np.array(new __pythonRuntime.objects.list(0.2, 0.2, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.7, 0.7)));
			this.assertEqual(t2, expected_tensor);
		}).call(this);
	};
	clampTests.prototype.test_clamp_int_in_place = function () {
		return (function () {
			var t1 = TensorBase(np.arange(10));
			t1.clamp_(minimum, 2, maximum, 7);
			var expected_tensor = TensorBase(np.array(new __pythonRuntime.objects.list(2, 2, 2, 3, 4, 5, 6, 7, 7, 7)));
			this.assertEqual(t1, expected_tensor);
		}).call(this);
	};
	clampTests.prototype.test_clamp_float_in_place = function () {
		return (function () {
			var t1 = TensorBase(np.arange(1, step, 0.1));
			t1.clamp_(minimum, 0.2, maximum, 0.7);
			var expected_tensor = TensorBase(np.array(new __pythonRuntime.objects.list(0.2, 0.2, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.7, 0.7)));
			this.assertEqual(t1, expected_tensor);
		}).call(this);
	};
}
{
	function cloneTests() {}
	cloneTests.prototype.test_clone = function () {
		return (function () {
			var t1 = TensorBase(np.random.randint(0, 10, size, new __pythonRuntime.objects.tuple(5, 10)));
			var t2 = t1.clone();
			this.assertEqual(t1, t2);
			this.assertIsNot(t1, t2);
		}).call(this);
	};
}
{
	function chunkTests() {}
	chunkTests.prototype.test_chunk = function () {
		return (function () {
			var t1 = TensorBase(np.random.randint(0, 10, size, new __pythonRuntime.objects.tuple(5, 10)));
			{
				var __filbertTmp85 = t1.chunk(2, 0);
				var t2 = __filbertTmp85[0];
				var t3 = __filbertTmp85[1];
			}
			this.assertNotEqual(t2.shape(), t3.shape());
		}).call(this);
	};
	chunkTests.prototype.test_chunk_same_size = function () {
		return (function () {
			var t1 = TensorBase(np.random.randint(0, 10, size, new __pythonRuntime.objects.tuple(4, 10)));
			{
				var __filbertTmp87 = t1.chunk(2, 0, same_size, True);
				var t2 = __filbertTmp87[0];
				var t3 = __filbertTmp87[1];
			}
			this.assertEqual(t2.shape(), t3.shape());
		}).call(this);
	};
}
{
	function inequalityTest() {}
	inequalityTest.prototype.setUp = function () {
		return (function () {
			this.a1 = np.array(new __pythonRuntime.objects.list(-2, -1, 0, 1, 2));
			this.a2 = np.array(new __pythonRuntime.objects.list(-4, -1, 5, 2, 2));
			this.t1 = TensorBase(this.a1);
			this.t2 = TensorBase(this.a2);
			this.enc = TensorBase(this.a1, encrypted, True);
		}).call(this);
	};
}
{
	function gtTests() {
		inequalityTest.call(this);
	}
	gtTests.prototype = Object.create(inequalityTest.prototype);
	gtTests.prototype.test_gt_with_tensor = function () {
		return (function () {
			this.assertEqual(this.t1.gt(this.t2), this.a1 > this.a2);
		}).call(this);
	};
	gtTests.prototype.test_gt_with_number = function () {
		return (function () {
			this.assertEqual(this.t1.gt(1), this.a1 > 1);
		}).call(this);
	};
	gtTests.prototype.test_gt__in_place_with_tensor = function () {
		return (function () {
			this.t1.gt_(this.t2);
			this.assertEqual(this.t1, this.a1 > this.a2);
		}).call(this);
	};
	gtTests.prototype.test_gt__in_place_with_number = function () {
		return (function () {
			this.t1.gt_(1);
			this.assertEqual(this.t1, this.a1 > 1);
		}).call(this);
	};
	gtTests.prototype.test_gt_with_encrypted = function () {
		return (function () {
			var res = this.t1.gt(this.enc);
			this.assertEqual(res, NotImplemented);
			res = this.enc.gt(this.t1);
			this.assertEqual(res, NotImplemented);
		}).call(this);
	};
}
{
	function geTests() {
		inequalityTest.call(this);
	}
	geTests.prototype = Object.create(inequalityTest.prototype);
	geTests.prototype.test_ge_with_tensor = function () {
		return (function () {
			this.assertEqual(this.t1.ge(this.t2), this.a1 >= this.a2);
		}).call(this);
	};
	geTests.prototype.test_ge_with_number = function () {
		return (function () {
			this.assertEqual(this.t1.ge(1), this.a1 >= 1);
		}).call(this);
	};
	geTests.prototype.test_ge__in_place_with_tensor = function () {
		return (function () {
			this.t1.ge_(this.t2);
			this.assertEqual(this.t1, this.a1 >= this.a2);
		}).call(this);
	};
	geTests.prototype.test_ge__in_place_with_number = function () {
		return (function () {
			this.t1.ge_(1);
			this.assertEqual(this.t1, this.a1 >= 1);
		}).call(this);
	};
	geTests.prototype.test_ge_with_encrypted = function () {
		return (function () {
			var res = this.t1.ge(this.enc);
			this.assertEqual(res, NotImplemented);
			res = this.enc.ge(this.t1);
			this.assertEqual(res, NotImplemented);
		}).call(this);
	};
}
{
	function ltTests() {
		inequalityTest.call(this);
	}
	ltTests.prototype = Object.create(inequalityTest.prototype);
	ltTests.prototype.test_lt_with_tensor = function () {
		return (function () {
			this.assertEqual(this.t1.lt(this.t2), this.a1 < this.a2);
		}).call(this);
	};
	ltTests.prototype.test_lt_with_number = function () {
		return (function () {
			this.assertEqual(this.t1.lt(1), this.a1 < 1);
		}).call(this);
	};
	ltTests.prototype.test_lt__in_place_with_tensor = function () {
		return (function () {
			this.t1.lt_(this.t2);
			this.assertEqual(this.t1, this.a1 < this.a2);
		}).call(this);
	};
	ltTests.prototype.test_lt__in_place_with_number = function () {
		return (function () {
			this.t1.lt_(1);
			this.assertEqual(this.t1, this.a1 < 1);
		}).call(this);
	};
	ltTests.prototype.test_lt_with_encrypted = function () {
		return (function () {
			var res = this.t1.lt(this.enc);
			this.assertEqual(res, NotImplemented);
			res = this.enc.lt(this.t1);
			this.assertEqual(res, NotImplemented);
		}).call(this);
	};
}
{
	function leTests() {
		inequalityTest.call(this);
	}
	leTests.prototype = Object.create(inequalityTest.prototype);
	leTests.prototype.test_le_with_tensor = function () {
		return (function () {
			this.assertEqual(this.t1.le(this.t2), this.a1 <= this.a2);
		}).call(this);
	};
	leTests.prototype.test_le_with_number = function () {
		return (function () {
			this.assertEqual(this.t1.le(1), this.a1 <= 1);
		}).call(this);
	};
	leTests.prototype.test_le__in_place_with_tensor = function () {
		return (function () {
			this.t1.le_(this.t2);
			this.assertEqual(this.t1, this.a1 <= this.a2);
		}).call(this);
	};
	leTests.prototype.test_le__in_place_with_number = function () {
		return (function () {
			this.t1.le_(1);
			this.assertEqual(this.t1, this.a1 <= 1);
		}).call(this);
	};
	leTests.prototype.test_le_with_encrypted = function () {
		return (function () {
			var res = this.t1.le(this.enc);
			this.assertEqual(res, NotImplemented);
			res = this.enc.le(this.t1);
			this.assertEqual(res, NotImplemented);
		}).call(this);
	};
}
{
	function bernoulliTests() {}
	bernoulliTests.prototype.test_bernoulli = function () {
		return (function () {
			var p = TensorBase(np.random.uniform(size, new __pythonRuntime.objects.tuple(3, 2)));
			var t1 = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(5, 5)));
			var t2 = t1.bernoulli(p);
			this.assertTupleEqual(new __pythonRuntime.objects.tuple(3, 2), t2.shape());
			this.assertTrue(np.all(t2.data >= 0) && np.all(t2.data <= 1));
		}).call(this);
	};
	bernoulliTests.prototype.test_bernoulli_ = function () {
		return (function () {
			var p = TensorBase(np.random.uniform(size, new __pythonRuntime.objects.tuple(3, 2)));
			var t1 = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(5, 5)));
			t1.bernoulli_(p);
			this.assertTupleEqual(new __pythonRuntime.objects.tuple(3, 2), t1.shape());
			this.assertTrue(np.all(t1.data >= 0) && np.all(t1.data <= 1));
		}).call(this);
	};
}
{
	function cauchyTests() {}
	cauchyTests.prototype.test_cauchy_ = function () {
		return (function () {
			var t = TensorBase(np.zeros(new __pythonRuntime.objects.list(1, 2, 3, 4)));
			t.cauchy_();
			this.assertTupleEqual(new __pythonRuntime.objects.tuple(1, 2, 3, 4), t.shape());
			this.assertTrue(np.all(t.data != 0));
		}).call(this);
	};
}
{
	function uniformTests() {}
	uniformTests.prototype.test_uniform = function () {
		return (function () {
			var t1 = TensorBase(np.zeros(4));
			var out = t1.uniform(low, 0, high, 3);
			this.assertTrue(np.all(out.data > 0) && np.all(out.data < 3));
		}).call(this);
	};
	uniformTests.prototype.test_uniform_ = function () {
		return (function () {
			var t1 = TensorBase(np.zeros(4));
			t1.uniform_(low, 0, high, 3);
			this.assertTrue(np.all(t1.data > 0) && np.all(t1.data < 3));
		}).call(this);
	};
}
{
	function geometricTests() {}
	geometricTests.prototype.test_geometric_ = function () {
		return (function () {
			var t1 = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(4, 4)));
			var out = t1.geometric_(p, 0.5);
			this.assertTupleEqual(t1.data.shape, out.data.shape);
			this.assertTrue(np.all(out.data > 0));
		}).call(this);
	};
}
{
	function fillTests() {}
	fillTests.prototype.test_fill_ = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3, 4)));
			t1.fill_(5);
			this.assertTrue(np.all(t1.data == 5));
		}).call(this);
	};
}
{
	function topkTests() {}
	topkTests.prototype.test_topK = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(900, 800, 1000, 2000, 5, 10, 20, 40, 50), new __pythonRuntime.objects.list(10, 11, 12, 13, 5, 6, 7, 8, 9), new __pythonRuntime.objects.list(30, 40, 50, 10, 8, 1, 2, 3, 4))));
			var t2 = t1.topk(3, largest, True);
			this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(900, 1000, 2000), new __pythonRuntime.objects.list(11, 12, 13), new __pythonRuntime.objects.list(30, 40, 50)))));
		}).call(this);
	};
}
{
	function tolistTests() {}
	tolistTests.prototype.test_to_list = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(200, 300, 90, 100, 600)));
			var t1_list = t1.tolist();
			this.assertTrue(isinstance(t1_list, list));
		}).call(this);
	};
}
{
	function traceTests() {}
	traceTests.prototype.test_trace = function () {
		return (function () {
			var t1 = TensorBase(np.arange(1, 10).reshape(3, 3));
			this.assertTrue(np.equal(t1.trace().data, 15));
		}).call(this);
	};
}
{
	function roundTests() {}
	roundTests.prototype.test_round = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(10.4, 9.6, 100.12, 4.0)));
			var t2 = t1.round(0);
			this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(10., 10., 100., 4.))));
		}).call(this);
	};
	roundTests.prototype.test_round_ = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(10.4, 9.6, 100.12, 4.0)));
			t1.round_(0);
			this.assertTrue(np.array_equal(t1.data, np.array(new __pythonRuntime.objects.list(10., 10., 100., 4.))));
		}).call(this);
	};
}
{
	function repeatTests() {}
	repeatTests.prototype.test_repeat = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			var t2 = t1.repeat(reps, new __pythonRuntime.objects.tuple(4, 2));
			this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 1, 2, 3), new __pythonRuntime.objects.list(1, 2, 3, 1, 2, 3), new __pythonRuntime.objects.list(1, 2, 3, 1, 2, 3), new __pythonRuntime.objects.list(1, 2, 3, 1, 2, 3)))));
		}).call(this);
	};
}
{
	function powTests() {}
	powTests.prototype.test_pow = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 4, 6)));
			var t2 = t1.pow(2);
			this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(4, 16, 36))));
		}).call(this);
	};
	powTests.prototype.test_pow_ = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 4, 6)));
			t1.pow_(2);
			this.assertTrue(np.array_equal(t1.data, np.array(new __pythonRuntime.objects.list(4, 16, 36))));
		}).call(this);
	};
}
{
	function prodTests() {}
	prodTests.prototype.test_prod = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(1, 2, 3)));
			var t2 = t1.prod();
			this.assertTrue(np.equal(t2.data, 6));
		}).call(this);
	};
}
{
	function randomTests() {}
	randomTests.prototype.test_random_ = function () {
		return (function () {
			np.random.seed(0);
			var t1 = TensorBase(np.zeros(4));
			t1.random_(low, 0, high, 5, size, 4);
			this.assertTrue(np.array_equal(t1.data, np.array(new __pythonRuntime.objects.list(4, 0, 3, 3))));
		}).call(this);
	};
}
{
	function nonzeroTests() {}
	nonzeroTests.prototype.test_non_zero = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0, 0), new __pythonRuntime.objects.list(0, 2, 5))));
			var t2 = t1.nonzero();
			this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 1), new __pythonRuntime.objects.list(0, 1, 2)))));
		}).call(this);
	};
}
{
	function cumprodTest() {}
	cumprodTest.prototype.test_cumprod = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(4, 5, 6))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.0, 2.0, 3.0), new __pythonRuntime.objects.list(4.0, 10.0, 18.0))));
			var t3 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 6), new __pythonRuntime.objects.list(4, 20, 120))));
			this.assertTrue(np.equal(t1.cumprod(dim, 0), t2).all());
			this.assertTrue(np.equal(t1.cumprod(dim, 1), t3).all());
		}).call(this);
	};
	cumprodTest.prototype.test_cumprod_ = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(4, 5, 6))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.0, 2.0, 3.0), new __pythonRuntime.objects.list(4.0, 10.0, 18.0))));
			var t3 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 6), new __pythonRuntime.objects.list(4, 20, 120))));
			this.assertTrue(np.equal(t1.cumprod_(dim, 0), t2).all());
			t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.0, 2.0, 3.0), new __pythonRuntime.objects.list(4.0, 5.0, 6.0))));
			this.assertTrue(np.equal(t1.cumprod_(dim, 1), t3).all());
		}).call(this);
	};
}
{
	function splitTests() {}
	splitTests.prototype.test_split = function () {
		return (function () {
			var t1 = TensorBase(np.arange(8.0));
			var t2 = t1.split(4);
			this.assertTrue(np.array_equal(t2, __pythonRuntime.functions.tuple(new __pythonRuntime.objects.tuple(np.array(new __pythonRuntime.objects.list(0., 1.)), np.array(new __pythonRuntime.objects.list(2., 3.)), np.array(new __pythonRuntime.objects.list(4., 5.)), np.array(new __pythonRuntime.objects.list(6., 7.))))));
		}).call(this);
	};
}
{
	function squeezeTests() {}
	squeezeTests.prototype.test_squeeze = function () {
		return (function () {
			var t1 = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(2, 1, 2, 1, 2)));
			var t2 = t1.squeeze();
			this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0., 0.), new __pythonRuntime.objects.list(0., 0.)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0., 0.), new __pythonRuntime.objects.list(0., 0.))))));
		}).call(this);
	};
}
{
	function expandAsTests() {}
	expandAsTests.prototype.test_expand_as = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(2), new __pythonRuntime.objects.list(3))));
			var t2 = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 4)));
			var t3 = t1.expand_as(t2);
			this.assertTrue(np.array_equal(t2.data.shape, t3.data.shape));
		}).call(this);
	};
}
{
	function meanTests() {}
	meanTests.prototype.test_mean = function () {
		return (function () {
			var t1 = TensorBase(np.arange(8).reshape(2, 2, 2));
			var t2 = t1.mean(1, True);
			this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1., 2.)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5., 6.))))));
		}).call(this);
	};
}
{
	function notEqualTests() {}
	notEqualTests.prototype.test_ne = function () {
		return (function () {
			var t1 = TensorBase(new __pythonRuntime.objects.list(1, 2, 3, 4));
			var t2 = TensorBase(new __pythonRuntime.objects.list(1., 2., 3., 5.));
			this.assertEqual(t1.ne(t2), TensorBase(new __pythonRuntime.objects.list(1, 1, 1, 0)));
		}).call(this);
	};
	notEqualTests.prototype.test_ne_ = function () {
		return (function () {
			var t1 = TensorBase(new __pythonRuntime.objects.list(1, 2, 3, 4));
			var t2 = TensorBase(new __pythonRuntime.objects.list(1., 2., 3., 5.));
			t1.ne_(t2);
			this.assertTrue(syft.equal(t1, TensorBase(new __pythonRuntime.objects.list(1, 1, 1, 0))));
		}).call(this);
	};
}
{
	function index_selectTests() {}
	index_selectTests.prototype.test_index_select = function () {
		return (function () {
			var t = TensorBase(np.reshape(np.arange(0, __pythonRuntime.ops.multiply(__pythonRuntime.ops.multiply(2, 3), 4)), new __pythonRuntime.objects.tuple(2, 3, 4)));
			var idx = np.array(new __pythonRuntime.objects.list(1, 0));
			var dim = 2;
			var result = t.index_select(dim, dim, index, idx);
			var expected = np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0), new __pythonRuntime.objects.list(5, 4), new __pythonRuntime.objects.list(9, 8)), new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(13, 12), new __pythonRuntime.objects.list(17, 16), new __pythonRuntime.objects.list(21, 20))));
			this.assertTrue(np.array_equal(result.data, expected));
		}).call(this);
	};
}
{
	function gatherTests() {}
	gatherTests.prototype.test_gather_numerical_1 = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(65, 17), new __pythonRuntime.objects.list(14, 25), new __pythonRuntime.objects.list(76, 22))));
			var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0), new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(0))));
			var dim = 1;
			var result = t.gather(dim, dim, index, idx);
			this.assertTrue(np.array_equal(result.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(65), new __pythonRuntime.objects.list(25), new __pythonRuntime.objects.list(76)))));
		}).call(this);
	};
	gatherTests.prototype.test_gather_numerical_2 = function () {
		return (function () {
			var t = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(47, 74, 44), new __pythonRuntime.objects.list(56, 9, 37))));
			var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 1), new __pythonRuntime.objects.list(1, 1, 0), new __pythonRuntime.objects.list(0, 1, 0))));
			var dim = 0;
			var result = t.gather(dim, dim, index, idx);
			var expexted = new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(47, 74, 37), new __pythonRuntime.objects.list(56, 9, 44.), new __pythonRuntime.objects.list(47, 9, 44));
			this.assertTrue(np.array_equal(result.data, np.array(expexted)));
		}).call(this);
	};
}
{
	function scatterTests() {}
	scatterTests.prototype.test_scatter_numerical_0 = function () {
		return (function () {
			var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
			var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0))));
			var src = 1.0;
			var dim = 0;
			t.scatter_(dim, dim, index, idx, src, src);
			this.assertTrue(np.array_equal(t.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 1, 1, 1, 1), new __pythonRuntime.objects.list(0, 0, 0, 0, 0), new __pythonRuntime.objects.list(0, 0, 0, 0, 0)))));
		}).call(this);
	};
	scatterTests.prototype.test_scatter_numerical_1 = function () {
		return (function () {
			var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
			var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0), new __pythonRuntime.objects.list(0), new __pythonRuntime.objects.list(0))));
			var src = 1.0;
			var dim = 1;
			t.scatter_(dim, dim, index, idx, src, src);
			this.assertTrue(np.array_equal(t.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0, 0, 0, 0), new __pythonRuntime.objects.list(1, 0, 0, 0, 0), new __pythonRuntime.objects.list(1, 0, 0, 0, 0)))));
		}).call(this);
	};
	scatterTests.prototype.test_scatter_numerical_2 = function () {
		return (function () {
			var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
			var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0), new __pythonRuntime.objects.list(0), new __pythonRuntime.objects.list(0))));
			var src = 1.0;
			var dim = -1;
			t.scatter_(dim, dim, index, idx, src, src);
			this.assertTrue(np.array_equal(t.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0, 0, 0, 0), new __pythonRuntime.objects.list(1, 0, 0, 0, 0), new __pythonRuntime.objects.list(1, 0, 0, 0, 0)))));
		}).call(this);
	};
	scatterTests.prototype.test_scatter_numerical_3 = function () {
		return (function () {
			var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
			var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0))));
			var src = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(6, 7, 8, 9, 10))));
			var dim = 0;
			t.scatter_(dim, dim, index, idx, src, src);
			this.assertTrue(np.array_equal(t.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(0, 0, 0, 0, 0), new __pythonRuntime.objects.list(0, 0, 0, 0, 0)))));
		}).call(this);
	};
	scatterTests.prototype.test_scatter_numerical_4 = function () {
		return (function () {
			var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
			var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0))));
			var src = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(6, 7, 8, 9, 10))));
			var dim = -2;
			t.scatter_(dim, dim, index, idx, src, src);
			this.assertTrue(np.array_equal(t.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(0, 0, 0, 0, 0), new __pythonRuntime.objects.list(0, 0, 0, 0, 0)))));
		}).call(this);
	};
	scatterTests.prototype.test_scatter_numerical_5 = function () {
		return (function () {
			var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
			var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0), new __pythonRuntime.objects.list(0, 0, 0, 0, 0))));
			var src = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(6, 7, 8, 9, 10))));
			var dim = 0;
			t.scatter_(dim, dim, index, idx, src, src);
			this.assertTrue(np.array_equal(t.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(6, 7, 8, 9, 10), new __pythonRuntime.objects.list(0, 0, 0, 0, 0), new __pythonRuntime.objects.list(0, 0, 0, 0, 0)))));
		}).call(this);
	};
	scatterTests.prototype.test_scatter_numerical_6 = function () {
		return (function () {
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
		}).call(this);
	};
	scatterTests.prototype.test_scatter_index_type = function () {
		return (function () {
			var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
			var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0.0, 0.0, 0.0, 0.0, 0.0))));
			var src = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(6, 7, 8, 9, 10))));
			var dim = 0;
			this.assertRaises(Exception);
			t.scatter_(dim, dim, index, idx, src, src);
		}).call(this);
	};
	scatterTests.prototype.test_scatter_index_out_of_range = function () {
		return (function () {
			var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
			var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 0, 0, 0, 0))));
			var src = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(6, 7, 8, 9, 10))));
			var dim = 0;
			this.assertRaises(Exception);
			t.scatter_(dim, dim, index, idx, src, src);
		}).call(this);
	};
	scatterTests.prototype.test_scatter_dim_out_Of_range = function () {
		return (function () {
			var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
			var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0))));
			var src = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5), new __pythonRuntime.objects.list(6, 7, 8, 9, 10))));
			var dim = 4;
			this.assertRaises(Exception);
			t.scatter_(dim, dim, index, idx, src, src);
		}).call(this);
	};
	scatterTests.prototype.test_scatter_index_src_dimension_mismatch = function () {
		return (function () {
			var t = TensorBase(np.zeros(new __pythonRuntime.objects.tuple(3, 5)));
			var idx = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0, 0, 0), new __pythonRuntime.objects.list(0, 0, 0, 0, 0))));
			var src = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3, 4, 5))));
			var dim = 1;
			this.assertRaises(Exception);
			t.scatter_(dim, dim, index, idx, src, src);
		}).call(this);
	};
}
{
	function remainderTests() {}
	remainderTests.prototype.tes_remainder = function () {
		return (function () {
			var t = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(-2, -3), new __pythonRuntime.objects.list(4, 1)));
			var result = t.remainder(1.5);
			this.assertTrue(np.array_equal(result.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 0), new __pythonRuntime.objects.list(1, 1)))));
		}).call(this);
	};
	remainderTests.prototype.test_remainder_broadcasting = function () {
		return (function () {
			var t = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(-2, -3), new __pythonRuntime.objects.list(4, 1)));
			var result = t.remainder(new __pythonRuntime.objects.list(2, -3));
			this.assertTrue(np.array_equal(result.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0), new __pythonRuntime.objects.list(0, -2)))));
		}).call(this);
	};
	remainderTests.prototype.test_remainder_ = function () {
		return (function () {
			var t = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(-2, -3), new __pythonRuntime.objects.list(4, 1)));
			t.remainder_(2);
			this.assertTrue(np.array_equal(t.data, np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1), new __pythonRuntime.objects.list(0, 1)))));
		}).call(this);
	};
}
{
	function testMv() {}
	testMv.prototype.test_mv = function () {
		return (function () {
			var mat = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(2, 3, 4), new __pythonRuntime.objects.list(4, 5, 6)));
			var vector = TensorBase(new __pythonRuntime.objects.list(1, 2, 3));
			this.assertEqual(tensor.mv(mat, vector), TensorBase(new __pythonRuntime.objects.list(14, 20, 32)));
		}).call(this);
	};
	testMv.prototype.test_mv_tensor = function () {
		return (function () {
			var mat = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(1, 2, 3)));
			var vec = TensorBase(new __pythonRuntime.objects.list(1, 2, 3));
			this.assertEqual(mat.mv(vec), TensorBase(new __pythonRuntime.objects.list(14, 14)));
		}).call(this);
	};
}
{
	function masked_scatter_Tests() {}
	masked_scatter_Tests.prototype.test_masked_scatter_1 = function () {
		return (function () {
			var t = TensorBase(np.ones(new __pythonRuntime.objects.tuple(2, 3)));
			var source = TensorBase(new __pythonRuntime.objects.list(1, 2, 3, 4, 5, 6));
			var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 1, 0), new __pythonRuntime.objects.list(1, 0, 1)));
			t.masked_scatter_(mask, source);
			this.assertTrue(np.array_equal(t, TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 1, 1), new __pythonRuntime.objects.list(2, 1, 3)))));
		}).call(this);
	};
	masked_scatter_Tests.prototype.test_masked_scatter_braodcasting_1 = function () {
		return (function () {
			var t = TensorBase(np.ones(new __pythonRuntime.objects.tuple(2, 3)));
			var source = TensorBase(new __pythonRuntime.objects.list(1, 2, 3, 4, 5, 6));
			var mask = TensorBase(new __pythonRuntime.objects.list(0, 1, 0));
			t.masked_scatter_(mask, source);
			this.assertTrue(np.array_equal(t, TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 1, 1), new __pythonRuntime.objects.list(1, 2, 1)))));
		}).call(this);
	};
	masked_scatter_Tests.prototype.test_masked_scatter_braodcasting_2 = function () {
		return (function () {
			var t = TensorBase(np.ones(new __pythonRuntime.objects.tuple(2, 3)));
			var source = TensorBase(new __pythonRuntime.objects.list(1, 2, 3, 4, 5, 6));
			var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(0)));
			t.masked_scatter_(mask, source);
			this.assertTrue(np.array_equal(t, TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(1, 1, 1)))));
		}).call(this);
	};
}
{
	function masked_fill_Tests() {}
	masked_fill_Tests.prototype.test_masked_fill_ = function () {
		return (function () {
			var t = TensorBase(np.ones(new __pythonRuntime.objects.tuple(2, 3)));
			var value = 2.0;
			var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0), new __pythonRuntime.objects.list(1, 1, 0)));
			t.masked_fill_(mask, value);
			this.assertTrue(np.array_equal(t, TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1.0, 1.0, 1.0), new __pythonRuntime.objects.list(2.0, 2.0, 1.0)))));
		}).call(this);
	};
	masked_fill_Tests.prototype.test_masked_fill_broadcasting = function () {
		return (function () {
			var t = TensorBase(np.ones(new __pythonRuntime.objects.tuple(2, 3)));
			var value = 2;
			var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1), new __pythonRuntime.objects.list(0)));
			t.masked_fill_(mask, value);
			this.assertTrue(np.array_equal(t, TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 2, 2), new __pythonRuntime.objects.list(1, 1, 1)))));
		}).call(this);
	};
}
{
	function masked_select_Tests() {}
	masked_select_Tests.prototype.test_masked_select = function () {
		return (function () {
			var t = TensorBase(np.arange(0, 6).reshape(2, 3));
			var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(0, 0, 0), new __pythonRuntime.objects.list(1, 1, 0)));
			this.assertTrue(np.array_equal(tensor.masked_select(t, mask), TensorBase(new __pythonRuntime.objects.list(3, 4))));
		}).call(this);
	};
	masked_select_Tests.prototype.test_masked_select_broadcasting_1 = function () {
		return (function () {
			var t = TensorBase(np.arange(0, 6).reshape(2, 3));
			var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 1, 0)));
			this.assertTrue(np.array_equal(tensor.masked_select(t, mask), TensorBase(new __pythonRuntime.objects.list(0, 1, 3, 4))));
		}).call(this);
	};
	masked_select_Tests.prototype.test_masked_select_broadcasting_2 = function () {
		return (function () {
			var t = TensorBase(new __pythonRuntime.objects.list(2.0));
			var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 1, 0)));
			this.assertTrue(np.array_equal(tensor.masked_select(t, mask), TensorBase(new __pythonRuntime.objects.list(2.0, 2.0))));
		}).call(this);
	};
	masked_select_Tests.prototype.test_tensor_base_masked_select = function () {
		return (function () {
			var t = TensorBase(np.arange(0, 6).reshape(2, 3));
			var mask = TensorBase(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 1, 0)));
			this.assertTrue(np.array_equal(t.masked_select(mask), TensorBase(new __pythonRuntime.objects.list(0, 1, 3, 4))));
		}).call(this);
	};
}
{
	function eqTests() {}
	eqTests.prototype.test_eq_with_tensor = function () {
		return (function () {
			var t1 = TensorBase(np.arange(5));
			var t2 = TensorBase(np.arange(5)._pySlice(-1, null, -1));
			var truth_values = t1.eq(t2);
			this.assertEqual(truth_values, new __pythonRuntime.objects.list(false, false, True, false, false));
		}).call(this);
	};
	eqTests.prototype.test_eq_with_number = function () {
		return (function () {
			var t1 = TensorBase(np.arange(5));
			var truth_values = t1.eq(1);
			this.assertEqual(truth_values, new __pythonRuntime.objects.list(false, True, false, false, false));
		}).call(this);
	};
	eqTests.prototype.test_eq_in_place_with_tensor = function () {
		return (function () {
			var t1 = TensorBase(np.arange(5));
			var t2 = TensorBase(np.arange(5)._pySlice(-1, null, -1));
			t1.eq_(t2);
			this.assertEqual(t1, new __pythonRuntime.objects.list(false, false, True, false, false));
		}).call(this);
	};
	eqTests.prototype.test_eq_in_place_with_number = function () {
		return (function () {
			var t1 = TensorBase(np.arange(5));
			t1.eq_(1);
			this.assertEqual(t1, new __pythonRuntime.objects.list(false, True, false, false, false));
		}).call(this);
	};
}
{
	function mm_test() {}
	mm_test.prototype.test_mm_1d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(2, 3, 4)));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(3, 4, 5)));
			var out = t1.mm(t2);
			this.assertTrue(np.alltrue(out.data == new __pythonRuntime.objects.list(38)));
		}).call(this);
	};
	mm_test.prototype.test_mm_2d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(1, 2))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(2, 3))));
			var out = t1.mm(t2);
			this.assertTrue(np.alltrue(out.data == new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(6, 9), new __pythonRuntime.objects.list(6, 9))));
		}).call(this);
	};
	mm_test.prototype.test_mm_3d = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2), new __pythonRuntime.objects.list(2, 3), new __pythonRuntime.objects.list(3, 4))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(1, 2, 3), new __pythonRuntime.objects.list(2, 3, 4))));
			var out = t1.mm(t2);
			this.assertTrue(np.alltrue(out.data == new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(5, 8, 11), new __pythonRuntime.objects.list(8, 13, 18), new __pythonRuntime.objects.list(11, 18, 25))));
		}).call(this);
	};
}
{
	function fmod_Test() {}
	fmod_Test.prototype.test_fmod_number = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(-3, -2, -1, 1, 2, 3)));
			t1.fmod_(2);
			this.assertTrue(np.array_equal(t1.data, np.array(new __pythonRuntime.objects.list(-1, 0, -1, 1, 0, 1))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(-3.5, -2.5, -1.5, 1.5, 2.5, 3.5)));
			t2.fmod_(2.);
			this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(-1.5, -0.5, -1.5, 1.5, 0.5, 1.5))));
		}).call(this);
	};
	fmod_Test.prototype.test_fmod_tensor = function () {
		return (function () {
			var t1 = TensorBase(np.array(new __pythonRuntime.objects.list(-3, -2, -1, 1, 2, 3)));
			var divisor = np.array(__pythonRuntime.ops.multiply(new __pythonRuntime.objects.list(2), 6));
			t1.fmod_(divisor);
			this.assertTrue(np.array_equal(t1.data, np.array(new __pythonRuntime.objects.list(-1, 0, -1, 1, 0, 1))));
			var t2 = TensorBase(np.array(new __pythonRuntime.objects.list(-3.5, -2.5, -1.5, 1.5, 2.5, 3.5)));
			divisor = np.array(__pythonRuntime.ops.multiply(new __pythonRuntime.objects.list(2.), 6));
			t2.fmod_(divisor);
			this.assertTrue(np.array_equal(t2.data, np.array(new __pythonRuntime.objects.list(-1.5, -0.5, -1.5, 1.5, 0.5, 1.5))));
		}).call(this);
	};
}
if (__name__ == "__main__") {
	unittest.main();
}
