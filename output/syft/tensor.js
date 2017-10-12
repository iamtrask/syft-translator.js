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
function _ensure_ndarray(arr) {
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
function _ensure_tensorbase(tensor) {
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
function equal(tensor1, tensor2) {
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
	return left && np.allclose(tensor1.data, tensor2.data);
}
class TensorBase {}
function ne_(tensor) {
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
function median(axis, keepdims) {
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
function mode(axis) {
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
function min(axis, keepdims) {
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
function histc(bins, min, max) {
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
	var dummy116 = new __pythonRuntime.objects.tuple(min, max);
	return new TensorBase(hist);
}
function scatter_(dim, index, src) {
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
		ValueError(__pythonRuntime.ops.add(__pythonRuntime.ops.add("Except for dimension ", __pythonRuntime.functions.str(dim)), dummy123));
		", all dimensions of index and output should be the same size";
	}
	if (index.data >= self.data.shape[__pythonRuntime.ops.subscriptIndex(self.data.shape, dim)]) {
		dummy125.any() || (index.data < 0).any();
	}
	IndexError();
	"The values of index must be between 0 and (self.data.shape[dim] -1)";
	function make_slice(arr, dim, i) {
		var slc = __pythonRuntime.ops.multiply(new __pythonRuntime.objects.list(slice(None)), arr.ndim);
		slc[__pythonRuntime.ops.subscriptIndex(slc, dim)] = i;
		return slc;
	}
	var idx = new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(__pythonRuntime.ops.multiply(dummy128, np.indices(idx_xsection_shape).reshape(index.data.ndim - 1, -1))));
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
	var dummy131 = __pythonRuntime.functions.list(np.concatenate(idx, axis, 1));
	idx.insert(dim, idx.pop());
	if (!np.isscalar(src)) {
		var src = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(src));
		if (index.data.shape[__pythonRuntime.ops.subscriptIndex(index.data.shape, dim)] > src.data.shape[__pythonRuntime.ops.subscriptIndex(src.data.shape, dim)]) {
			IndexError(__pythonRuntime.ops.add(__pythonRuntime.ops.add("Dimension ", __pythonRuntime.functions.str(dim)), dummy134));
			"of index can not be bigger than that of src ";
		}
		var src_shape = __pythonRuntime.ops.add(src.data.shape._pySlice(null, dim, null), src.data.shape._pySlice(__pythonRuntime.ops.add(dim, 1), null, null));
		if (idx_xsection_shape != src_shape) {
			ValueError(__pythonRuntime.ops.add("Except for dimension ", dummy137));
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
function gather(dim, index) {
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
		ValueError(__pythonRuntime.ops.add(__pythonRuntime.ops.add("Except for dimension ", __pythonRuntime.functions.str(dim)), dummy145));
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
function deserialize(b) {
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
function remainder(divisor) {
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
function remainder_(divisor) {
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
function index(m) {
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
function index_add_(dim, index, tensor) {
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
function index_copy_(dim, index, tensor) {
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
function index_fill_(dim, index, value) {
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
function index_select(dim, index) {
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
function mv(tensorvector) {
	if (self.encrypted) {
		NotImplemented;
	}
	return mv(__pythonRuntime.utils.createParamsObj(self, tensorvector));
}
function narrow(dim, start, length) {
	/*
        Returns a new tensor that is a narrowed version of this tensor.
        The dimension ``dim`` is narrowed from ``start`` to ``start`` + ``length``.

        Parameters
        ----------
        dim: int
            dimension along which to narrow
        start: int
            starting dimension
        length: int
            length from start to narrow to

        Returns
        -------
        narrowed version of this tensor
        */;
	var dim = dim;
	if (dim >= 0) {
		__pythonRuntime.ops.add(dim, self.dim());
	}
	if (self.encrypted) {
		NotImplemented;
	}
	if (!isinstance(dim, int) || !isinstance(start, int) || !isinstance(length, int)) {
		TypeError("narrow received an invalid combination of arguments:\n");
		f;
		"  got ({dim.__class__.__name__} dim, ";
		f;
		"{start.__class__.__name__} start, ";
		f;
		"{length.__class__.__name__} length), ";
		"but expected (int dim, int start, int length)";
	}
	if (dim >= self.data.ndim || dim < -self.data.ndim) {
		IndexError("dim value is out of range");
	}
	if (start >= self.data.shape[__pythonRuntime.ops.subscriptIndex(self.data.shape, dim)] || start < 0) {
		IndexError("start value is out of range");
	}
	if (length > self.data.shape[__pythonRuntime.ops.subscriptIndex(self.data.shape, dim)] - start || length <= 0) {
		IndexError("length value is out of range");
	}
	return new TensorBase(self.data.take(__pythonRuntime.functions.range(start, __pythonRuntime.ops.add(start, length)), axis, dim));
}
function masked_scatter_(mask, source) {
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
		var __tmpList149 = new __pythonRuntime.objects.list();
		dummy174
		return __tmpList149;
	})();
	if (m == 0) {
		source_iter.__next__().item();
	}
	{
		var __filbertRight5 = mask_self_iter;
		if (__filbertRight5 instanceof Array) {
			for (var __filbertIndex5 = 0; __filbertIndex5 < __filbertRight5.length; ++__filbertIndex5) {
				var __filbertTmp150 = __filbertRight5[__filbertIndex5];
				var m = __filbertTmp150[0];
				var s = __filbertTmp150[1];
			}
		} else {
			for (var __filbertTmp151 = mask_self_iter in __filbertRight5) {
				m = __filbertTmp151[0];
				s = __filbertTmp151[1];
			}
		}
	}
	dummy177.data = np.reshape(out_flat, self.data.shape);
	return self;
}
function masked_fill_(mask, value) {
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
function masked_select(mask) {
	/*
        See :func:`tensor.masked_select`
        */;
	return masked_select(__pythonRuntime.utils.createParamsObj(self, mask));
}
function eq(t) {
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
function eq_(t) {
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
function mm(tensor) {
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
function fmod(divisor) {
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
function fmod_(divisor) {
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
function lerp(tensor, weight) {
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
function lerp_(tensor, weight) {
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
function renorm(p, dim, maxnorm) {
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
function renorm_(p, dim, maxnorm) {
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
function unfold(dim, size, step) {
	/*
        Returns a tensor which contains all slices of size `size` along the dimension `dim`.

        Parameters
        ----------
        dim: The axis/dimension along which unfolding has to happen
        size: The number of elements to unfold along the axis 'dim'
        step: The stride/steps to move along axis while unfolding

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
	if (self.encrypted) {
		return NotImplemented;
	}
	var input_array = np.copy(self.data);
	var input_shape = np.shape(input_array);
	var num_axes = __pythonRuntime.functions.len(input_shape);
	if (dim < -num_axes || __pythonRuntime.ops.add(dim, 1) > num_axes) {
		Exception(("\'dim\' should be between {} and {} inclusive").format(-num_axes, num_axes - 1));
	}
	if (!size) {
		Exception("\'size\'' can\'t be 0 or less");
	}
	if (size > input_shape[__pythonRuntime.ops.subscriptIndex(input_shape, dim)]) {
		Exception("\'size\'' is greater than \'dim\'");
	}
	if (step <= 0) {
		Exception("\'steps\' will have to be greater than 0");
	}
	if (dim < 0) {
		var dim = __pythonRuntime.ops.add(dim, num_axes);
	}
	var indices = (function () {
		var __tmpList165 = new __pythonRuntime.objects.list();
		{
			var __filbertRight6 = input_shape;
			if (__filbertRight6 instanceof Array) {
				for (var __filbertIndex6 = 0; __filbertIndex6 < __filbertRight6.length; ++__filbertIndex6) {
					var s = __filbertRight6[__filbertIndex6];
					__tmpList165.push(slice(s));
				}
			} else {
				for (s in __filbertRight6) {
					__tmpList165.push(slice(s));
				}
			}
		}
		return __tmpList165;
	})();
	var i = 0;
	var sub_arrays = new __pythonRuntime.objects.list();
	while (__pythonRuntime.ops.add(i, size) <= input_shape[__pythonRuntime.ops.subscriptIndex(input_shape, dim)]) {
		indices[__pythonRuntime.ops.subscriptIndex(indices, dim)] = slice(i, __pythonRuntime.ops.add(i, size));
		sub_arrays.append(np.expand_dims(input_array[__pythonRuntime.ops.subscriptIndex(input_array, indices)], axis, num_axes).swapaxes(dim, num_axes));
		i = __pythonRuntime.ops.add(i, step);
	}
	return new TensorBase(np.concatenate(sub_arrays, axis, dim));
}
function numel() {
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
function mv(tensormat, tensorvector) {
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
function masked_select(tensor, mask) {
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
		var __filbertTmp169 = np.broadcast_arrays();
		var mask_broadcasted = __filbertTmp169[0];
		var data_broadcasted = __filbertTmp169[1];
	}
	new __pythonRuntime.objects.tuple(mask.data, tensor.data);
	var indices = np.where(mask_broadcasted);
	return new TensorBase(data_broadcasted[__pythonRuntime.ops.subscriptIndex(data_broadcasted, indices)]);
}
