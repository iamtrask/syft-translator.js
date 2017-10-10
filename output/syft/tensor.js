/*
    Note: The Documentation in this file follows the NumPy Doc. Style;
          Hence, it is mandatory that future docs added here
          strictly follow the same, to maintain readability and consistency
          of the codebase.

          NumPy Documentation Style-
          http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_numpy.html
*/;
var __all__ = new __pythonRuntime.objects.list(dummy41);
new __pythonRuntime.objects.tuple('equal', 'TensorBase', dummy42);
function _ensure_ndarray() {
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
	var arr = __getParam0("arr");
	/*
    Ensures the arr passed is of type np.ndarray

    Parameters
    ----------
    arr: object
        arr to be checked

    Returns
    -------
    np.ndarray:
        Output Array
    */;
	if (!isinstance(arr, np.ndarray)) {
		var arr = np.array(arr);
	}
	return arr;
}
function _ensure_tensorbase() {
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
	var tensor = __getParam1("tensor");
	/*
    Ensures the tensor passed is of type TensorBase

    Parameters
    ----------
    tensor:object
        Tensor to be checked

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	if (!isinstance(tensor, TensorBase)) {
		var tensor = TensorBase(tensor);
	}
	return tensor;
}
function equal() {
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
	var tensor1 = __getParam2("tensor1");
	var tensor2 = __getParam2("tensor2");
	/*
    Checks if two tensors are equal.

    Two tensors are considered equal if they are the same size and contain the
    same elements.

    Assumption:
    tensor1 and tensor2 are of type TensorBase.
    Non-TensorBase objects will be converted to TensorBase objects.

    Parameters
    ----------
    tensor1: TensorBase
        First Tensor to be compared

    tensor2: TensorBase
        Second Tensor to be compared

    Returns
    -------
    bool:

    bool:

    */;
	var tensor1 = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor1));
	var tensor2 = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor2));
	if (tensor1.encrypted || tensor2.encrypted) {
		return NotImplemented;
	}
	var left = tensor1.data.shape == tensor2.data.shape;
	var right = np.allclose(tensor1.data, tensor2.data);
	return left && right;
}
class TensorBase {}
function ne_() {
	var __params126 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex126 = 0;
	var __args126 = arguments;
	function __getParam126(v, d) {
		var r = d;
		if (__params126) {
			if (__formalsIndex126 < __params126.formals.length) {
				r = __params126.formals[__formalsIndex126++];
			} else if ((v in __params126.keywords)) {
				r = __params126.keywords[v];
				delete __params126.keywords[v];
			}
		} else if (__formalsIndex126 < __args126.length) {
			r = __args126[__formalsIndex126++];
		}
		return r;
	}
	var self = __getParam126("self");
	var tensor = __getParam126("tensor");
	/*
        Checks in-place element wise equality and updates the data matrix
        to the equality matrix.

        Parameters
        ----------
        tensor: TensorBase

        Returns
        -------
        */;
	if (self.encrypted) {
		return NotImplemented;
	} else {
		var value = self.ne(tensor);
		self.data = value.data;
	}
}
function median() {
	var __params127 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex127 = 0;
	var __args127 = arguments;
	function __getParam127(v, d) {
		var r = d;
		if (__params127) {
			if (__formalsIndex127 < __params127.formals.length) {
				r = __params127.formals[__formalsIndex127++];
			} else if ((v in __params127.keywords)) {
				r = __params127.keywords[v];
				delete __params127.keywords[v];
			}
		} else if (__formalsIndex127 < __args127.length) {
			r = __args127[__formalsIndex127++];
		}
		return r;
	}
	var self = __getParam127("self");
	var axis = __getParam127("axis", 1);
	var keepdims = __getParam127("keepdims", false);
	/*
        Returns median of tensor as per specified axis.

        By default median is calculated along rows.
        axis=None can be used get median of whole tensor.


        Parameters
        ----------
        axis: ,optional
            To get median of whole tensor, specify axis=None

        keepdims: ,optional

        Returns
        -------
        Outut Tensor
        */;
	if (self.encrypted) {
		return NotImplemented;
	}
	var out = np.median(np.array(self.data), axis, axis, keepdims, keepdims);
	return new TensorBase(out);
}
function mode() {
	var __params128 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex128 = 0;
	var __args128 = arguments;
	function __getParam128(v, d) {
		var r = d;
		if (__params128) {
			if (__formalsIndex128 < __params128.formals.length) {
				r = __params128.formals[__formalsIndex128++];
			} else if ((v in __params128.keywords)) {
				r = __params128.keywords[v];
				delete __params128.keywords[v];
			}
		} else if (__formalsIndex128 < __args128.length) {
			r = __args128[__formalsIndex128++];
		}
		return r;
	}
	var self = __getParam128("self");
	var axis = __getParam128("axis", 1);
	/*
        Returns mode of tensor as per specified axis.

        By default mode is calculated along rows.
        To get mode of whole tensor, specify axis=None

        Parameters
        ----------
        axis : ,optional
            To get mode of whole tensor, specify axis=None

        Returns
        -------
        Output Tensor
        */;
	if (self.encrypted) {
		return NotImplemented;
	}
	var out = scipy.stats.mode(np.array(self.data), axis, axis);
	return new TensorBase(out);
}
function inverse() {
	var __params129 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex129 = 0;
	var __args129 = arguments;
	function __getParam129(v, d) {
		var r = d;
		if (__params129) {
			if (__formalsIndex129 < __params129.formals.length) {
				r = __params129.formals[__formalsIndex129++];
			} else if ((v in __params129.keywords)) {
				r = __params129.keywords[v];
				delete __params129.keywords[v];
			}
		} else if (__formalsIndex129 < __args129.length) {
			r = __args129[__formalsIndex129++];
		}
		return r;
	}
	var self = __getParam129("self");
	/*
        Returns inverse of a square matrix.

        Parameters
        ----------

        Returns
        -------
        Output Tensor; with inverse values
        */;
	if (self.encrypted) {
		return NotImplemented;
	}
	var inv = np.linalg.inv(np.matrix(np.array(self.data)));
	return new TensorBase(inv);
}
function min() {
	var __params130 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex130 = 0;
	var __args130 = arguments;
	function __getParam130(v, d) {
		var r = d;
		if (__params130) {
			if (__formalsIndex130 < __params130.formals.length) {
				r = __params130.formals[__formalsIndex130++];
			} else if ((v in __params130.keywords)) {
				r = __params130.keywords[v];
				delete __params130.keywords[v];
			}
		} else if (__formalsIndex130 < __args130.length) {
			r = __args130[__formalsIndex130++];
		}
		return r;
	}
	var self = __getParam130("self");
	var axis = __getParam130("axis", 1);
	var keepdims = __getParam130("keepdims", false);
	/*
        Returns minimum value in tensor along rows by default.

        If axis=None it will return minimum value in tensor

        Parameters
        ----------
        axis: ,optional
            axis=None will return minimum value

        keepdims: ,optional

        Returns
        -------
        Output Tensor; with minimum value
        */;
	if (self.encrypted) {
		return NotImplemented;
	}
	var min = np.matrix(np.array(self.data)).min(axis, axis, keepdims, keepdims);
	return new TensorBase(min);
}
function histc() {
	var __params131 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex131 = 0;
	var __args131 = arguments;
	function __getParam131(v, d) {
		var r = d;
		if (__params131) {
			if (__formalsIndex131 < __params131.formals.length) {
				r = __params131.formals[__formalsIndex131++];
			} else if ((v in __params131.keywords)) {
				r = __params131.keywords[v];
				delete __params131.keywords[v];
			}
		} else if (__formalsIndex131 < __args131.length) {
			r = __args131[__formalsIndex131++];
		}
		return r;
	}
	var self = __getParam131("self");
	var bins = __getParam131("bins", 10);
	var min = __getParam131("min", 0);
	var max = __getParam131("max", 0);
	/*
        Computes the histogram of a tensor.

        Parameters
        ----------
        bins: ,optional
            The bin range
        min: ,optional
            Minimum of the Hist.
        max: ,optional
            Maximum of the Hist.

        Returns
        -------
        Output Tensor
        */;
	if (self.encrypted) {
		return NotImplemented;
	}
	{
		var __filbertTmp132 = np.histogram();
		var hist = __filbertTmp132[0];
		var edges = __filbertTmp132[1];
	}
	{
		var __filbertTmp133 = new __pythonRuntime.objects.tuple(bins, range);
		np.array(self.data) = __filbertTmp133[0];
		var bins = __filbertTmp133[1];
	}
	var dummy113 = new __pythonRuntime.objects.tuple(min, max);
	return new TensorBase(hist);
}
function scatter_() {
	var __params134 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex134 = 0;
	var __args134 = arguments;
	function __getParam134(v, d) {
		var r = d;
		if (__params134) {
			if (__formalsIndex134 < __params134.formals.length) {
				r = __params134.formals[__formalsIndex134++];
			} else if ((v in __params134.keywords)) {
				r = __params134.keywords[v];
				delete __params134.keywords[v];
			}
		} else if (__formalsIndex134 < __args134.length) {
			r = __args134[__formalsIndex134++];
		}
		return r;
	}
	var self = __getParam134("self");
	var dim = __getParam134("dim");
	var index = __getParam134("index");
	var src = __getParam134("src");
	/*
        Writes all values from the Tensor ``src`` into ``self`` at the
        indices specified in the ``index`` Tensor.

        The indices are specified with respect to the given dimension,
        ``dim``, in the manner described in gather().

        Parameters
        ----------
        dim:
            The axis along which to index
        index:
            The indices of elements to scatter
        src:
            The source element(s) to scatter

        Returns
        -------
        Caller with values in-place
        */;
	var index = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(index));
	if (self.encrypted || index.encrypted) {
		return NotImplemented;
	}
	if (index.data.dtype != np.dtype('int_')) {
		TypeError("The values of index must be integers");
	}
	if (self.data.ndim != index.data.ndim) {
		ValueError();
		"Index should have the same number of dimensions as output";
	}
	if (dim >= self.data.ndim || dim < -self.data.ndim) {
		IndexError("dim is out of range");
	}
	if (dim < 0) {
		var dim = __pythonRuntime.ops.add(self.data.ndim, dim);
	}
	var idx_xsection_shape = __pythonRuntime.ops.add(index.data.shape._pySlice(null, dim, null), index.data.shape._pySlice(__pythonRuntime.ops.add(dim, 1), null, null));
	var self_xsection_shape = __pythonRuntime.ops.add(self.data.shape._pySlice(null, dim, null), self.data.shape._pySlice(__pythonRuntime.ops.add(dim, 1), null, null));
	if (idx_xsection_shape != self_xsection_shape) {
		ValueError(__pythonRuntime.ops.add(__pythonRuntime.ops.add("Except for dimension ", __pythonRuntime.functions.str(dim)), dummy120));
		", all dimensions of index and output should be the same size";
	}
	if (index.data >= self.data.shape[__pythonRuntime.ops.subscriptIndex(self.data.shape, dim)]) {
		dummy122.any() || (index.data < 0).any();
	}
	IndexError();
	"The values of index must be between 0 and (self.data.shape[dim] -1)";
	function make_slice() {
		var __params135 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex135 = 0;
		var __args135 = arguments;
		function __getParam135(v, d) {
			var r = d;
			if (__params135) {
				if (__formalsIndex135 < __params135.formals.length) {
					r = __params135.formals[__formalsIndex135++];
				} else if ((v in __params135.keywords)) {
					r = __params135.keywords[v];
					delete __params135.keywords[v];
				}
			} else if (__formalsIndex135 < __args135.length) {
				r = __args135[__formalsIndex135++];
			}
			return r;
		}
		var arr = __getParam135("arr");
		var dim = __getParam135("dim");
		var i = __getParam135("i");
		var slc = __pythonRuntime.ops.multiply(new __pythonRuntime.objects.list(slice(None)), arr.ndim);
		slc[__pythonRuntime.ops.subscriptIndex(slc, dim)] = i;
		return slc;
	}
	var idx = new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(__pythonRuntime.ops.multiply(dummy125, np.indices(idx_xsection_shape).reshape(index.data.ndim - 1, -1))));
	index.data[__pythonRuntime.ops.subscriptIndex(index.data, make_slice(__pythonRuntime.utils.createParamsObj(index.data, dim, i)))].reshape(1, -1)[__pythonRuntime.ops.subscriptIndex(index.data[__pythonRuntime.ops.subscriptIndex(index.data, make_slice(__pythonRuntime.utils.createParamsObj(index.data, dim, i)))].reshape(1, -1), 0)];
	{
		var __filbertRight4 = __pythonRuntime.functions.range(index.data.shape[__pythonRuntime.ops.subscriptIndex(index.data.shape, dim)]);
		if (__filbertRight4 instanceof Array) {
			for (var __filbertIndex4 = 0; __filbertIndex4 < __filbertRight4.length; ++__filbertIndex4) {
				var i = __filbertRight4[__filbertIndex4];
			}
		} else {
			for (i in __filbertRight4) {}
		}
	}
	var dummy128 = __pythonRuntime.functions.list(np.concatenate(idx, axis, 1));
	idx.insert(dim, idx.pop());
	if (!np.isscalar(src)) {
		var src = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(src));
		if (index.data.shape[__pythonRuntime.ops.subscriptIndex(index.data.shape, dim)] > src.data.shape[__pythonRuntime.ops.subscriptIndex(src.data.shape, dim)]) {
			IndexError(__pythonRuntime.ops.add(__pythonRuntime.ops.add("Dimension ", __pythonRuntime.functions.str(dim)), dummy131));
			"of index can not be bigger than that of src ";
		}
		var src_shape = __pythonRuntime.ops.add(src.data.shape._pySlice(null, dim, null), src.data.shape._pySlice(__pythonRuntime.ops.add(dim, 1), null, null));
		if (idx_xsection_shape != src_shape) {
			ValueError(__pythonRuntime.ops.add("Except for dimension ", dummy134));
			__pythonRuntime.ops.add(__pythonRuntime.functions.str(dim), ", all dimensions of index and src should be the same size");
		}
		var src_idx = __pythonRuntime.functions.list(idx);
		src_idx.pop(dim);
		src_idx.insert(dim, np.repeat(), np.arange(index.data.shape[__pythonRuntime.ops.subscriptIndex(index.data.shape, dim)]), np.prod(idx_xsection_shape));
	}
	self.data[__pythonRuntime.ops.subscriptIndex(self.data, idx)] = src.data[__pythonRuntime.ops.subscriptIndex(src.data, src_idx)];
}
self.data[__pythonRuntime.ops.subscriptIndex(self.data, idx)] = src;
return self;
function gather() {
	var __params136 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex136 = 0;
	var __args136 = arguments;
	function __getParam136(v, d) {
		var r = d;
		if (__params136) {
			if (__formalsIndex136 < __params136.formals.length) {
				r = __params136.formals[__formalsIndex136++];
			} else if ((v in __params136.keywords)) {
				r = __params136.keywords[v];
				delete __params136.keywords[v];
			}
		} else if (__formalsIndex136 < __args136.length) {
			r = __args136[__formalsIndex136++];
		}
		return r;
	}
	var self = __getParam136("self");
	var dim = __getParam136("dim");
	var index = __getParam136("index");
	/*
        Gathers values along an axis specified by ``dim``.

        For a 3-D tensor the output is specified by:
            out[i][j][k] = input[index[i][j][k]][j][k]  # if dim == 0
            out[i][j][k] = input[i][index[i][j][k]][k]  # if dim == 1
            out[i][j][k] = input[i][j][index[i][j][k]]  # if dim == 2

        Parameters
        ----------
        dim:
            The axis along which to index
        index:
            A tensor of indices of elements to gather

        Returns
        -------
        Output Tensor
        */;
	var index = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(index));
	if (self.encrypted || index.encrypted) {
		return NotImplemented;
	}
	var idx_xsection_shape = __pythonRuntime.ops.add(index.data.shape._pySlice(null, dim, null), index.data.shape._pySlice(__pythonRuntime.ops.add(dim, 1), null, null));
	var self_xsection_shape = __pythonRuntime.ops.add(self.data.shape._pySlice(null, dim, null), self.data.shape._pySlice(__pythonRuntime.ops.add(dim, 1), null, null));
	if (idx_xsection_shape != self_xsection_shape) {
		ValueError(__pythonRuntime.ops.add(__pythonRuntime.ops.add("Except for dimension ", __pythonRuntime.functions.str(dim)), dummy142));
		", all dimensions of index and self should be the same size";
	}
	if (index.data.dtype != np.dtype('int_')) {
		TypeError("The values of index must be integers");
	}
	var data_swaped = np.swapaxes(self.data, 0, dim);
	var index_swaped = np.swapaxes(index, 0, dim);
	var gathered = np.choose(index_swaped, data_swaped);
	return new TensorBase(np.swapaxes(gathered, 0, dim));
}
function serialize() {
	var __params137 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex137 = 0;
	var __args137 = arguments;
	function __getParam137(v, d) {
		var r = d;
		if (__params137) {
			if (__formalsIndex137 < __params137.formals.length) {
				r = __params137.formals[__formalsIndex137++];
			} else if ((v in __params137.keywords)) {
				r = __params137.keywords[v];
				delete __params137.keywords[v];
			}
		} else if (__formalsIndex137 < __args137.length) {
			r = __args137[__formalsIndex137++];
		}
		return r;
	}
	var self = __getParam137("self");
	/*
        Serializes Object to a pickle.

        Parameters
        ----------


        Returns
        -------
        pickle dumps
        */;
	return pickle.dumps(self);
}
function deserialize() {
	var __params138 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex138 = 0;
	var __args138 = arguments;
	function __getParam138(v, d) {
		var r = d;
		if (__params138) {
			if (__formalsIndex138 < __params138.formals.length) {
				r = __params138.formals[__formalsIndex138++];
			} else if ((v in __params138.keywords)) {
				r = __params138.keywords[v];
				delete __params138.keywords[v];
			}
		} else if (__formalsIndex138 < __args138.length) {
			r = __args138[__formalsIndex138++];
		}
		return r;
	}
	var b = __getParam138("b");
	/*
        Deserializes an Object from a Pickle

        Parameters
        ----------
        b: Obj
            pickled Object

        Returns
        -------
        Object loaded from Pickle
        */;
	return pickle.loads(b);
}
function remainder() {
	var __params139 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex139 = 0;
	var __args139 = arguments;
	function __getParam139(v, d) {
		var r = d;
		if (__params139) {
			if (__formalsIndex139 < __params139.formals.length) {
				r = __params139.formals[__formalsIndex139++];
			} else if ((v in __params139.keywords)) {
				r = __params139.keywords[v];
				delete __params139.keywords[v];
			}
		} else if (__formalsIndex139 < __args139.length) {
			r = __args139[__formalsIndex139++];
		}
		return r;
	}
	var self = __getParam139("self");
	var divisor = __getParam139("divisor");
	/*
        Computes the element-wise remainder of division.

        The divisor & dividend may contain both for integer and floating point
        numbers.
        The remainder has the same sign as the divisor.
        When ``divisor`` is a Tensor, the shapes of ``self`` and ``divisor``
        must be broadcastable.

        Parameters
        ----------
        divisor:
            This may be either a number or a tensor.

        Returns
        -------
        Output Tensor
        */;
	if (self.encrypted) {
		return NotImplemented;
	}
	if (!np.isscalar(divisor)) {
		var divisor = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(divisor));
	}
	return new TensorBase(np.remainder(self.data, divisor));
}
function remainder_() {
	var __params140 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex140 = 0;
	var __args140 = arguments;
	function __getParam140(v, d) {
		var r = d;
		if (__params140) {
			if (__formalsIndex140 < __params140.formals.length) {
				r = __params140.formals[__formalsIndex140++];
			} else if ((v in __params140.keywords)) {
				r = __params140.keywords[v];
				delete __params140.keywords[v];
			}
		} else if (__formalsIndex140 < __args140.length) {
			r = __args140[__formalsIndex140++];
		}
		return r;
	}
	var self = __getParam140("self");
	var divisor = __getParam140("divisor");
	/*
        Computes the element-wise remainder of division.

        The divisor and dividend may contain both for integer and floating
        point numbers.
        The remainder has the same sign as the divisor.
        When ``divisor`` is a Tensor, the shapes of ``self`` and ``divisor``
        must be broadcastable.

        Parameters
        ----------
        divisor:
            The divisor. This may be either a number or a tensor.

        Returns
        -------
        Caller with values in-place

        */;
	if (self.encrypted) {
		return NotImplemented;
	}
	if (!np.isscalar(divisor)) {
		var divisor = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(divisor));
	}
	self.data = np.remainder(self.data, divisor);
	return self;
}
function index() {
	var __params141 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex141 = 0;
	var __args141 = arguments;
	function __getParam141(v, d) {
		var r = d;
		if (__params141) {
			if (__formalsIndex141 < __params141.formals.length) {
				r = __params141.formals[__formalsIndex141++];
			} else if ((v in __params141.keywords)) {
				r = __params141.keywords[v];
				delete __params141.keywords[v];
			}
		} else if (__formalsIndex141 < __args141.length) {
			r = __args141[__formalsIndex141++];
		}
		return r;
	}
	var self = __getParam141("self");
	var m = __getParam141("m");
	/*
        Returns a new Tensor with the element selected by position

        :param m: integer index or slice
        :return: tensor of selected indices
        */;
	if (self.encrypted) {
		return NotImplemented;
	}
	if (!isinstance(m, int) && !isinstance(m, slice)) {
		ValueError("The value of index must be integer");
	}
	return new TensorBase(self.data[__pythonRuntime.ops.subscriptIndex(self.data, m)], self.encrypted);
}
function index_add_() {
	var __params142 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex142 = 0;
	var __args142 = arguments;
	function __getParam142(v, d) {
		var r = d;
		if (__params142) {
			if (__formalsIndex142 < __params142.formals.length) {
				r = __params142.formals[__formalsIndex142++];
			} else if ((v in __params142.keywords)) {
				r = __params142.keywords[v];
				delete __params142.keywords[v];
			}
		} else if (__formalsIndex142 < __args142.length) {
			r = __args142[__formalsIndex142++];
		}
		return r;
	}
	var self = __getParam142("self");
	var dim = __getParam142("dim");
	var index = __getParam142("index");
	var tensor = __getParam142("tensor");
	/*
        Add the value of 'tensor' selecting the elements and ordered
        by index. In-place operation.

        :param dim: dimension along which to index
        :param index: 1D tensor containing the indices to select
        :param tensor: tensor containing the values to add
        */;
	var index = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(index));
	var tensor = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor));
	if (self.encrypted) {
		return NotImplemented;
	}
	if (index.data.dtype != np.dtype('int_')) {
		TypeError("The value of index must be integer");
	}
	if (self.data.shape != tensor.data.shape) {
		IndexError("Tensor has different shape");
	}
	if (self.data.shape[__pythonRuntime.ops.subscriptIndex(self.data.shape, dim)] != index.data.size) {
		ValueError("Index should have the same number of elements as dimension");
	}
	if (np.argmax(index.data > self.data.shape[__pythonRuntime.ops.subscriptIndex(self.data.shape, dim)]) != 0) {
		ValueError("Index contains a value which is out of range");
	}
	if (dim >= self.data.ndim || dim < -self.data.ndim) {
		IndexError("Dimension out of range");
	}
	self.data = __pythonRuntime.ops.add(self.data, tensor.data.take(index, dim));
}
function index_copy_() {
	var __params143 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex143 = 0;
	var __args143 = arguments;
	function __getParam143(v, d) {
		var r = d;
		if (__params143) {
			if (__formalsIndex143 < __params143.formals.length) {
				r = __params143.formals[__formalsIndex143++];
			} else if ((v in __params143.keywords)) {
				r = __params143.keywords[v];
				delete __params143.keywords[v];
			}
		} else if (__formalsIndex143 < __args143.length) {
			r = __args143[__formalsIndex143++];
		}
		return r;
	}
	var self = __getParam143("self");
	var dim = __getParam143("dim");
	var index = __getParam143("index");
	var tensor = __getParam143("tensor");
	/*
        Copy the values of 'tensor' selecting the elements and ordered
        by index. In-place operation.

        :para dim: dimension along which to index
        :param index: 1D tensor containing the indices to select
        :param tensor: tensor containing the values to add
        */;
	var index = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(index));
	var tensor = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor));
	if (self.encrypted) {
		return NotImplemented;
	}
	if (index.data.dtype != np.dtype('int_')) {
		TypeError("The value of index must be integer");
	}
	if (self.data.shape != tensor.data.shape) {
		IndexError("Tensor has different shape");
	}
	if (self.data.shape[__pythonRuntime.ops.subscriptIndex(self.data.shape, dim)] != index.data.size) {
		ValueError("Index should have the same number of elements as dimension");
	}
	if (np.argmax(index.data > self.data.shape[__pythonRuntime.ops.subscriptIndex(self.data.shape, dim)]) != 0) {
		ValueError("Index contains a value which is out of range");
	}
	if (dim >= self.data.ndim || dim < -self.data.ndim) {
		IndexError("Dimension out of range");
	}
	np.copyto(self.data, tensor.data.take(index, dim));
}
function index_fill_() {
	var __params144 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex144 = 0;
	var __args144 = arguments;
	function __getParam144(v, d) {
		var r = d;
		if (__params144) {
			if (__formalsIndex144 < __params144.formals.length) {
				r = __params144.formals[__formalsIndex144++];
			} else if ((v in __params144.keywords)) {
				r = __params144.keywords[v];
				delete __params144.keywords[v];
			}
		} else if (__formalsIndex144 < __args144.length) {
			r = __args144[__formalsIndex144++];
		}
		return r;
	}
	var self = __getParam144("self");
	var dim = __getParam144("dim");
	var index = __getParam144("index");
	var value = __getParam144("value");
	/*
        Fill the original tensor with the values of 'tensor' selecting
        the elements and ordered by index. In-place operation.

        :param dim: dimension along which to inde
        :param index: 1D tensor containing the indices to select
        :param value: value to fill
        */;
	var index = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(index));
	if (self.encrypted) {
		return NotImplemented;
	}
	if (index.data.dtype != np.dtype('int_')) {
		TypeError("The value of index must be integer");
	}
	if (np.argmax(index.data > self.data.shape[__pythonRuntime.ops.subscriptIndex(self.data.shape, dim)]) != 0) {
		ValueError("Index contains a value which is out of range");
	}
	if (dim >= self.data.ndim || dim < -self.data.ndim) {
		IndexError("Dimension out of range");
	}
	var idx = __pythonRuntime.ops.multiply(new __pythonRuntime.objects.list(slice(None)), self.data.ndim);
	idx[__pythonRuntime.ops.subscriptIndex(idx, dim)] = index;
	self.data[__pythonRuntime.ops.subscriptIndex(self.data, __pythonRuntime.functions.tuple(idx))] = value;
}
function index_select() {
	var __params145 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex145 = 0;
	var __args145 = arguments;
	function __getParam145(v, d) {
		var r = d;
		if (__params145) {
			if (__formalsIndex145 < __params145.formals.length) {
				r = __params145.formals[__formalsIndex145++];
			} else if ((v in __params145.keywords)) {
				r = __params145.keywords[v];
				delete __params145.keywords[v];
			}
		} else if (__formalsIndex145 < __args145.length) {
			r = __args145[__formalsIndex145++];
		}
		return r;
	}
	var self = __getParam145("self");
	var dim = __getParam145("dim");
	var index = __getParam145("index");
	/*
        Returns a new Tensor which indexes the ``input`` Tensor along
        dimension ``dim`` using the entries in ``index``.

        Parameters
        ----------
        dim:
            dimension in which to index
        index:
            1D tensor containing the indices to index

        Returns
        -------
        Tensor of selected indices
        */;
	var index = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(index));
	if (self.encrypted || index.encrypted) {
		return NotImplemented;
	}
	if (index.data.ndim > 1) {
		ValueError("Index is supposed to be 1D");
	}
	return new TensorBase(self.data.take(index, axis, dim));
}
function mv() {
	var __params146 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex146 = 0;
	var __args146 = arguments;
	function __getParam146(v, d) {
		var r = d;
		if (__params146) {
			if (__formalsIndex146 < __params146.formals.length) {
				r = __params146.formals[__formalsIndex146++];
			} else if ((v in __params146.keywords)) {
				r = __params146.keywords[v];
				delete __params146.keywords[v];
			}
		} else if (__formalsIndex146 < __args146.length) {
			r = __args146[__formalsIndex146++];
		}
		return r;
	}
	var self = __getParam146("self");
	var tensorvector = __getParam146("tensorvector");
	if (self.encrypted) {
		NotImplemented;
	}
	return mv(__pythonRuntime.utils.createParamsObj(self, tensorvector));
}
function masked_scatter_() {
	var __params147 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex147 = 0;
	var __args147 = arguments;
	function __getParam147(v, d) {
		var r = d;
		if (__params147) {
			if (__formalsIndex147 < __params147.formals.length) {
				r = __params147.formals[__formalsIndex147++];
			} else if ((v in __params147.keywords)) {
				r = __params147.keywords[v];
				delete __params147.keywords[v];
			}
		} else if (__formalsIndex147 < __args147.length) {
			r = __args147[__formalsIndex147++];
		}
		return r;
	}
	var self = __getParam147("self");
	var mask = __getParam147("mask");
	var source = __getParam147("source");
	/*
        Copies elements from ``source`` into this tensor at positions
        where the ``mask`` is true.

        The shape of ``mask`` must be broadcastable with the shape of the this
        tensor.
        The ``source`` should have at least as many elements as the number
        of ones in ``mask``.

        Parameters
        ----------
        mask: TensorBase
            The binary mask (non-zero is treated as true)

        source: TensorBase
            The tensor to copy from

        Returns
        -------
        Output Tensor
        */;
	var mask = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(mask));
	var source = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(source));
	if (self.encrypted || mask.encrypted || source.encrypted) {
		return NotImplemented;
	}
	var mask_self_iter = np.nditer(new __pythonRuntime.objects.list(mask.data, self.data));
	var source_iter = np.nditer(source.data);
	var out_flat = (function () {
		var __tmpList148 = new __pythonRuntime.objects.list();
		dummy162
		return __tmpList148;
	})();
	if (m == 0) {
		source_iter.__next__().item();
	}
	{
		var __filbertRight5 = mask_self_iter;
		if (__filbertRight5 instanceof Array) {
			for (var __filbertIndex5 = 0; __filbertIndex5 < __filbertRight5.length; ++__filbertIndex5) {
				var __filbertTmp149 = __filbertRight5[__filbertIndex5];
				var m = __filbertTmp149[0];
				var s = __filbertTmp149[1];
			}
		} else {
			for (var __filbertTmp150 = mask_self_iter in __filbertRight5) {
				m = __filbertTmp150[0];
				s = __filbertTmp150[1];
			}
		}
	}
	dummy165.data = np.reshape(out_flat, self.data.shape);
	return self;
}
function masked_fill_() {
	var __params151 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex151 = 0;
	var __args151 = arguments;
	function __getParam151(v, d) {
		var r = d;
		if (__params151) {
			if (__formalsIndex151 < __params151.formals.length) {
				r = __params151.formals[__formalsIndex151++];
			} else if ((v in __params151.keywords)) {
				r = __params151.keywords[v];
				delete __params151.keywords[v];
			}
		} else if (__formalsIndex151 < __args151.length) {
			r = __args151[__formalsIndex151++];
		}
		return r;
	}
	var self = __getParam151("self");
	var mask = __getParam151("mask");
	var value = __getParam151("value");
	/*
        Fills elements of this ``tensor`` with value where ``mask`` is true.
        in-place
        The shape of mask must be broadcastable with the shape of the underlying
        tensor.

        Parameters
        ----------
        mask: TensorBase
            The binary mask (non-zero is treated as true)
        value:
            value to fill

        Returns
        -------
        Caller with values in-place
        */;
	var mask = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(mask));
	if (self.encrypted || mask.encrypted) {
		return NotImplemented;
	}
	if (!np.isscalar(value)) {
		ValueError("'value' should be scalar");
	}
	var mask_broadcasted = np.broadcast_to(mask.data, self.data.shape);
	var indices = np.where(mask_broadcasted);
	self.data[__pythonRuntime.ops.subscriptIndex(self.data, indices)] = value;
	return self;
}
function masked_select() {
	var __params152 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex152 = 0;
	var __args152 = arguments;
	function __getParam152(v, d) {
		var r = d;
		if (__params152) {
			if (__formalsIndex152 < __params152.formals.length) {
				r = __params152.formals[__formalsIndex152++];
			} else if ((v in __params152.keywords)) {
				r = __params152.keywords[v];
				delete __params152.keywords[v];
			}
		} else if (__formalsIndex152 < __args152.length) {
			r = __args152[__formalsIndex152++];
		}
		return r;
	}
	var self = __getParam152("self");
	var mask = __getParam152("mask");
	/*
        See :func:`tensor.masked_select`
        */;
	return masked_select(__pythonRuntime.utils.createParamsObj(self, mask));
}
function eq() {
	var __params153 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex153 = 0;
	var __args153 = arguments;
	function __getParam153(v, d) {
		var r = d;
		if (__params153) {
			if (__formalsIndex153 < __params153.formals.length) {
				r = __params153.formals[__formalsIndex153++];
			} else if ((v in __params153.keywords)) {
				r = __params153.keywords[v];
				delete __params153.keywords[v];
			}
		} else if (__formalsIndex153 < __args153.length) {
			r = __args153[__formalsIndex153++];
		}
		return r;
	}
	var self = __getParam153("self");
	var t = __getParam153("t");
	/*
        Checks if two Tensors are equal.

        Returns a new Tensor having boolean True values where an element of the
        calling tensor is equal to the second Tensor, false otherwise.
        The second Tensor can be a number or a tensor whose shape is
        broadcastable with the calling Tensor.

        Parameters
        ----------
        t: TensorBase
            Input tensor

        Returns
        -------
        Output Tensor
        */;
	if (self.encrypted) {
		return NotImplemented;
	}
	return new TensorBase(np.equal(self.data, _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(t)).data));
}
function eq_() {
	var __params154 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex154 = 0;
	var __args154 = arguments;
	function __getParam154(v, d) {
		var r = d;
		if (__params154) {
			if (__formalsIndex154 < __params154.formals.length) {
				r = __params154.formals[__formalsIndex154++];
			} else if ((v in __params154.keywords)) {
				r = __params154.keywords[v];
				delete __params154.keywords[v];
			}
		} else if (__formalsIndex154 < __args154.length) {
			r = __args154[__formalsIndex154++];
		}
		return r;
	}
	var self = __getParam154("self");
	var t = __getParam154("t");
	/*
        Checks if two Tensors are equal, in-place

        Writes in-place, boolean True values where an element of the calling
        tensor is equal to the second Tensor, false otherwise.
        The second Tensor can be a number or a tensor whose shape is
        broadcastable with the calling Tensor.

        Parameters
        ----------
        t: TensorBase
            Input Tensor

        Returns
        -------
        Caller with values in-place
        */;
	if (self.encrypted) {
		return NotImplemented;
	}
	self.data = np.equal(self.data, _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(t)).data);
	return self;
}
function mm() {
	var __params155 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex155 = 0;
	var __args155 = arguments;
	function __getParam155(v, d) {
		var r = d;
		if (__params155) {
			if (__formalsIndex155 < __params155.formals.length) {
				r = __params155.formals[__formalsIndex155++];
			} else if ((v in __params155.keywords)) {
				r = __params155.keywords[v];
				delete __params155.keywords[v];
			}
		} else if (__formalsIndex155 < __args155.length) {
			r = __args155[__formalsIndex155++];
		}
		return r;
	}
	var self = __getParam155("self");
	var tensor = __getParam155("tensor");
	/*
        Performs a matrix multiplication of two Tensors.

        If :attr:`tensor1` is a `n x m` Tensor, :attr:`tensor2` is a `m x p` Tensor,
        output will be a `n x p` Tensor.

        Parameters
        ----------
        tensor: Tensor
            Second Tensor to be multiplied

        Returns
        -------
        n x p Output Tensor
        */;
	return syft.mm(self, tensor);
}
function fmod() {
	var __params156 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex156 = 0;
	var __args156 = arguments;
	function __getParam156(v, d) {
		var r = d;
		if (__params156) {
			if (__formalsIndex156 < __params156.formals.length) {
				r = __params156.formals[__formalsIndex156++];
			} else if ((v in __params156.keywords)) {
				r = __params156.keywords[v];
				delete __params156.keywords[v];
			}
		} else if (__formalsIndex156 < __args156.length) {
			r = __args156[__formalsIndex156++];
		}
		return r;
	}
	var self = __getParam156("self");
	var divisor = __getParam156("divisor");
	/*
        Performs the element-wise division of tensor by divisor and returns
        a new Tensor.

        Parameters
        ----------
        divisor: number or TensorBase

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
	if (self.encrypted) {
		return NotImplemented;
	}
	if (isinstance(divisor, TensorBase)) {
		if (divisor.encrypted) {
			return NotImplemented;
		}
		var divisor = divisor.data;
	}
	return syft.math.fmod(self, divisor);
}
function fmod_() {
	var __params157 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex157 = 0;
	var __args157 = arguments;
	function __getParam157(v, d) {
		var r = d;
		if (__params157) {
			if (__formalsIndex157 < __params157.formals.length) {
				r = __params157.formals[__formalsIndex157++];
			} else if ((v in __params157.keywords)) {
				r = __params157.keywords[v];
				delete __params157.keywords[v];
			}
		} else if (__formalsIndex157 < __args157.length) {
			r = __args157[__formalsIndex157++];
		}
		return r;
	}
	var self = __getParam157("self");
	var divisor = __getParam157("divisor");
	/*
        Performs the element-wise division of tensor by divisor inline.

        Parameters
        ----------
        divisor: number or TensorBase

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
	if (self.encrypted) {
		return NotImplemented;
	}
	if (isinstance(divisor, TensorBase)) {
		if (divisor.encrypted) {
			return NotImplemented;
		}
	}
	self.data = syft.math.fmod(self, divisor);
	return self;
}
function half() {
	var __params158 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex158 = 0;
	var __args158 = arguments;
	function __getParam158(v, d) {
		var r = d;
		if (__params158) {
			if (__formalsIndex158 < __params158.formals.length) {
				r = __params158.formals[__formalsIndex158++];
			} else if ((v in __params158.keywords)) {
				r = __params158.keywords[v];
				delete __params158.keywords[v];
			}
		} else if (__formalsIndex158 < __args158.length) {
			r = __args158[__formalsIndex158++];
		}
		return r;
	}
	var self = __getParam158("self");
	/*
        casts the tensor to half-precision float type.

        Parameters
        ----------

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
	if (self.encrypted) {
		return NotImplemented;
	} else {
		return new TensorBase(np.array(self).astype('float16'));
	}
}
function lerp() {
	var __params159 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex159 = 0;
	var __args159 = arguments;
	function __getParam159(v, d) {
		var r = d;
		if (__params159) {
			if (__formalsIndex159 < __params159.formals.length) {
				r = __params159.formals[__formalsIndex159++];
			} else if ((v in __params159.keywords)) {
				r = __params159.keywords[v];
				delete __params159.keywords[v];
			}
		} else if (__formalsIndex159 < __args159.length) {
			r = __args159[__formalsIndex159++];
		}
		return r;
	}
	var self = __getParam159("self");
	var tensor = __getParam159("tensor");
	var weight = __getParam159("weight");
	/*
        Performs 'lerp' operation, returning a new tensor calculated by interpolation
        of two tensors using a weight.

        Parameters
        ----------
        tensor: TensorBase

        weight:
            Weight supplied for iterpolation

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
	if (self.encrypted) {
		return NotImplemented;
	}
	return syft.math.lerp(self, tensor, weight);
}
function lerp_() {
	var __params160 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex160 = 0;
	var __args160 = arguments;
	function __getParam160(v, d) {
		var r = d;
		if (__params160) {
			if (__formalsIndex160 < __params160.formals.length) {
				r = __params160.formals[__formalsIndex160++];
			} else if ((v in __params160.keywords)) {
				r = __params160.keywords[v];
				delete __params160.keywords[v];
			}
		} else if (__formalsIndex160 < __args160.length) {
			r = __args160[__formalsIndex160++];
		}
		return r;
	}
	var self = __getParam160("self");
	var tensor = __getParam160("tensor");
	var weight = __getParam160("weight");
	/*
        Performs 'lerp' operation inline, returning the calling tensor modified by interpolation
        of two tensors using a weight.

        Parameters
        ----------
        tensor: TensorBase

        weight:
            Weight supplied for iterpolation

        Returns
        -------
        TensorBase:
            Calling Tensor modified inline
        */;
	if (self.encrypted) {
		return NotImplemented;
	}
	self.data = syft.math.lerp(self, tensor, weight);
	return self;
}
function renorm() {
	var __params161 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex161 = 0;
	var __args161 = arguments;
	function __getParam161(v, d) {
		var r = d;
		if (__params161) {
			if (__formalsIndex161 < __params161.formals.length) {
				r = __params161.formals[__formalsIndex161++];
			} else if ((v in __params161.keywords)) {
				r = __params161.keywords[v];
				delete __params161.keywords[v];
			}
		} else if (__formalsIndex161 < __args161.length) {
			r = __args161[__formalsIndex161++];
		}
		return r;
	}
	var self = __getParam161("self");
	var p = __getParam161("p");
	var dim = __getParam161("dim");
	var maxnorm = __getParam161("maxnorm");
	/*
        Performs the scaling of elements along the dimension dim of a tensor such that
        the p-norm of the sub-tensors along dim are less than or equal to maxnorm.

        The tensor is expected to have at least two dimesions, and the
        p-norm is defined to have powers greater than or equal to one.

        Parmeters
        ---------
        p:
            Power of the norm function

        dim:
            Dimension on which the operation is done

        maxnorm:
            Max value the p-norm is allowed to take on
        Returns
        -------
        TensorBase:
            Output Tensor
        */;
	if (self.encrypted) {
		return NotImplemented;
	} else {
		return syft.math.renorm(self, p, dim, maxnorm);
	}
}
function renorm_() {
	var __params162 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex162 = 0;
	var __args162 = arguments;
	function __getParam162(v, d) {
		var r = d;
		if (__params162) {
			if (__formalsIndex162 < __params162.formals.length) {
				r = __params162.formals[__formalsIndex162++];
			} else if ((v in __params162.keywords)) {
				r = __params162.keywords[v];
				delete __params162.keywords[v];
			}
		} else if (__formalsIndex162 < __args162.length) {
			r = __args162[__formalsIndex162++];
		}
		return r;
	}
	var self = __getParam162("self");
	var p = __getParam162("p");
	var dim = __getParam162("dim");
	var maxnorm = __getParam162("maxnorm");
	/*
        Performs an in-place scaling of elements along the dimension dim of the tensor such that
        the p-norm of the sub-tensors along dim are less than or equal to maxnorm.

        The tensor is expected to have at least two dimesions, and the
        p-norm is defined to have powers greater than or equal to one.

        Parmeters
        ---------
        tensor1: TensorBase
            Input Tensor

        p:
            Power of the norm function

        dim:
            Dimension on which the operation is done

        maxnorm:
            Max value the p-norm is allowed to take on

        Returns
        -------
        Caller with values in-place
        */;
	if (self.encrypted) {
		return NotImplemented;
	} else {
		self.data = syft.math.renorm(self, p, dim, maxnorm).data;
		return self;
	}
}
function numel() {
	var __params163 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex163 = 0;
	var __args163 = arguments;
	function __getParam163(v, d) {
		var r = d;
		if (__params163) {
			if (__formalsIndex163 < __params163.formals.length) {
				r = __params163.formals[__formalsIndex163++];
			} else if ((v in __params163.keywords)) {
				r = __params163.keywords[v];
				delete __params163.keywords[v];
			}
		} else if (__formalsIndex163 < __args163.length) {
			r = __args163[__formalsIndex163++];
		}
		return r;
	}
	var self = __getParam163("self");
	/*
    Returns the total number of elements in the input Tensor.

    Parameters
    ----------

    Returns
    -------
    int:
        total number of elements in the input Tensor
    */;
	return syft.math.numel(self);
}
function mv() {
	var __params164 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex164 = 0;
	var __args164 = arguments;
	function __getParam164(v, d) {
		var r = d;
		if (__params164) {
			if (__formalsIndex164 < __params164.formals.length) {
				r = __params164.formals[__formalsIndex164++];
			} else if ((v in __params164.keywords)) {
				r = __params164.keywords[v];
				delete __params164.keywords[v];
			}
		} else if (__formalsIndex164 < __args164.length) {
			r = __args164[__formalsIndex164++];
		}
		return r;
	}
	var tensormat = __getParam164("tensormat");
	var tensorvector = __getParam164("tensorvector");
	/*
    Matrix and Vector multiplication is performed.

    Parameters
    ----------
    tensormat: TensorBase
        Input tensor matrix
    tensorvector: TensorBase
        Input tensor vector

    Returns
    -------
    Output Tensor
    */;
	if (tensormat.encrypted || tensorvector.encrypted) {
		NotImplemented;
	} else if (!(__pythonRuntime.functions.len(tensorvector.data.shape) == 1)) {
		ValueError(('Vector dimensions not correct {}').format(), tensorvector.data.shape);
	}
}
if (tensorvector.data.shape[__pythonRuntime.ops.subscriptIndex(tensorvector.data.shape, 0)] != tensormat.data.shape[__pythonRuntime.ops.subscriptIndex(tensormat.data.shape, 1)]) {
	ValueError(('vector dimensions {} not  \
            compatible with matrix {} ').format(tensorvector.data.shape, tensormat.data.shape));
} else {
	return new TensorBase(np.matmul(tensormat.data, tensorvector.data));
}
function masked_select() {
	var __params165 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex165 = 0;
	var __args165 = arguments;
	function __getParam165(v, d) {
		var r = d;
		if (__params165) {
			if (__formalsIndex165 < __params165.formals.length) {
				r = __params165.formals[__formalsIndex165++];
			} else if ((v in __params165.keywords)) {
				r = __params165.keywords[v];
				delete __params165.keywords[v];
			}
		} else if (__formalsIndex165 < __args165.length) {
			r = __args165[__formalsIndex165++];
		}
		return r;
	}
	var tensor = __getParam165("tensor");
	var mask = __getParam165("mask");
	/*
    Returns a new 1D Tensor which indexes the ``input`` Tensor according to
    the binary mask ``mask``.
    The shapes of the ``mask`` tensor and the ``input`` tensor don’t need
    to match, but they must be broadcastable.

    Parameters
    ----------
    tensor: TensorBase
        The input Tensor
    mask: TensorBase
        The binary mask (non-zero is treated as true)

    Returns
    -------
    Output Tensor; 1D
    */;
	var mask = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(mask));
	var tensor = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor));
	if (tensor.encrypted || mask.encrypted) {
		NotImplemented;
	}
	{
		var __filbertTmp166 = np.broadcast_arrays();
		var mask_broadcasted = __filbertTmp166[0];
		var data_broadcasted = __filbertTmp166[1];
	}
	new __pythonRuntime.objects.tuple(mask.data, tensor.data);
	var indices = np.where(mask_broadcasted);
	return new TensorBase(data_broadcasted[__pythonRuntime.ops.subscriptIndex(data_broadcasted, indices)]);
}
