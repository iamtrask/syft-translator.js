/*
    Module math implements mathematical primitives for tensor objects

    Note:The Documentation in this file follows the NumPy Doc. Style;
         Hence, it is mandatory that future docs added here
         strictly follow the same, to maintain readability and consistency
         of the codebase.

    NumPy Documentation Style-
        http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_numpy.html

*/;
var __all__ = new __pythonRuntime.objects.list(dummy17);
new __pythonRuntime.objects.tuple('cumprod', 'cumsum', 'ceil', 'dot', 'floor', 'matmul', 'addmm', 'addcmul', dummy18);
new __pythonRuntime.objects.tuple('addcdiv', 'addmv', 'bmm', 'addbmm', 'baddbmm', 'sigmoid', 'unsqueeze', dummy19);
new __pythonRuntime.objects.tuple('tanh', 'relu', 'zeros', 'ones', 'rand', 'randn', 'mm', 'fmod', 'diag', 'lerp', 'renorm', 'numel');
function zeros(dim) {
	/*
    Returns a tensor of zeros

    Parameters
    ----------
    dim:

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	return TensorBase(np.zeros(dim));
}
function ones(dim) {
	/*
    Returns a tensor of ones

    Parameters
    ----------
    dim:

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	return TensorBase(np.ones(dim));
}
function rand(dim) {
	/*
    Returns a tensor with numbers initialized according to a uniform
    distribution from 0 to 1

    Parameters
    ----------
    dim:

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	return TensorBase(np.random.rand(dim));
}
function randn(dim) {
	/*
    Returns a tensor with initial numbers sampled from a standard normal
    distribution

    Parameters
    ----------
    dim:

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	return TensorBase(np.random.randn(dim));
}
function dot(tensor1, tensor2) {
	/*
    Returns inner product of two tensors.

    N-dimensional tensors are flattened into 1-D vectors, therefore this
    method should only be used on vectors.

    Parameters
    ----------
    tensor1: TensorBase
        Tensor to be multiplied

    tensor2: TensorBase
        Tensor to be multiplied with

    Returns
    -------
    ndarray:
        Output N-Dimensional Array
    */;
	var tensor1 = _ensure_tensorbase(tensor1);
	var tensor2 = _ensure_tensorbase(tensor2);
	if (tensor1.encrypted === True || tensor2.encrypted === True) {
		return NotImplemented;
	}
	return np.vdot(tensor1.data, tensor2.data);
}
function diag(tensor, diagonal) {
	/*
    * Returns a new 2D square tensor with the elements of 1D input tensor as the diagonal.
    * Returns a new 1D tensor with diagonal elements of 2D input tensor.

    * Optional argument diagonal value is about which diagonal to consider,
    zero is for main, positive for upper and negative for below diagonal

    Parameters
    ----------
    tensor : TensorBase
        The first operand in the diag operation
    diagonal : Integer
        The second operand in the diag operation

    Returns
    -------
    TensorBase
        Computed tensor result for diag operation
    */;
	var tensor = _ensure_tensorbase(tensor);
	if (tensor.encrypted === True) {
		return NotImplemented;
	}
	var dim = tensor.dim();
	if (dim == 1) {
		return TensorBase(np.diag(tensor.data, diagonal));
	} else if (dim == 2) {
		return TensorBase(np.diagonal(tensor.data, diagonal));
	} else {
		ValueError("Input must be 1- or 2-d tensor.");
	}
}
function matmul(tensor1, tensor2) {
	/*
    Performs matrix multiplication between two tensors.

    Exact behavior depends on the input tensors' dimensionality like so:
    * If both tensors are 1-dimensional, their dot product is returned.
    * If both tensors are 2-dimensional, their matrix-matrix product is
    returned.

    * If either tensor has dimensionality > 2, the last 2 dimensions are
    treated as matrices and multiplied.

    * If tensor1 is 1-dimensional, it is converted to a matrix by prepending
    a 1 to its dimensions. This prepended dimension is removed after the
    matrix multiplication.

    * If tensor2 is 1-dimensional, it is converted to a matrix by prepending
    a 1 to its dimensions. This prepended dimension is removed after the
    matrix multiplication.

    Parameters
    ----------
    tensor1: TensorBase
        Tensor to be multiplied

    tensor2: TensorBase
        Tensor to be multiplied with

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	var tensor1 = _ensure_tensorbase(tensor1);
	var tensor2 = _ensure_tensorbase(tensor2);
	if (tensor1.encrypted === True || tensor2.encrypted === True) {
		return NotImplemented;
	}
	if (tensor1.dim() == 1 && tensor2.dim() == 1) {
		return dot(__pythonRuntime.utils.createParamsObj(tensor1, tensor2));
	} else {
		return TensorBase(np.matmul(tensor1.data, tensor2.data));
	}
}
function ceil(tensor) {
	/*
    Returns the ceilling input tensor,element wise .

    Ceilling of an input scalar is the smallest integer such as :
    for each floating point number x : a >= x

    Behavior is independent of a tensor's shape.

    Parameters
    ----------
    tensor: TensorBase
        input Tensor

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	var tensor = _ensure_tensorbase(tensor);
	if (tensor.encrypted === True) {
		return NotImplemented;
	}
	return TensorBase(np.ceil(tensor.data));
}
function floor(tensor) {
	/*
    Returns the floored input tensor,element wise.
    Floor of an input scalar is the largest integer such as:
    for each floating point number x : a <= x

    Behavior is independent of a tensor's shape

    Parameters
    ----------
    tensor: TensorBase
        input Tensor

    Returns
    -------
    TensorBase:
        Output Tensor; floored values
    */;
	var tensor = _ensure_tensorbase(tensor);
	if (tensor.encrypted === True) {
		return NotImplemented;
	}
	return TensorBase(np.floor(tensor.data));
}
function cumsum(tensor, dim) {
	/*
    Returns the cumulative sum of the elements along a given dimension

    Parameters
    ----------
    tensor: TensorBase
        input Tensor

    dim:
        Dimension on which the operation is done

    Returns
    -------
    TensorBase:
        Output Tensor; 1D Tensor
    */;
	var tensor = _ensure_tensorbase(tensor);
	if (tensor.encrypted === True) {
		return NotImplemented;
	}
	return TensorBase(np.cumsum(tensor.data, dim));
}
function cumprod(tensor, dim) {
	/*
    Returns the cumulative product of the elements along a given axis

    Parameters
    ----------
    tensor: TensorBase
        input Tensor

    dim:
        Dimension on which the operation is done

    Returns
    -------
    TensorBase:
        Output Tensor; 1D Tensor
    */;
	var tensor = _ensure_tensorbase(tensor);
	if (tensor.encrypted === True) {
		return NotImplemented;
	}
	return TensorBase(np.cumprod(tensor.data, dim));
}
function sigmoid(tensor) {
	/*
    Returns a new tensor holding element wise values of Sigmoid function
    Sigmoid(x) = 1 / 1+exp(-x)

    Parameters
    ----------
    tensor: TensorBase
        input Tensor

    Returns
    -------
    TensorBase:
        Output Tensor;
    */;
	var tensor = _ensure_tensorbase(tensor);
	if (tensor.encrypted === True) {
		return NotImplemented;
	}
	return TensorBase(1 / __pythonRuntime.ops.add(1, np.exp(np.array(-tensor.data))));
}
function tanh(tensor) {
	/*
    Returns a new tensor holding element wise values of tanh function
    tanh(x) = (e^(x) - e^(-x))/(e^(x) + e^(-x))

    Parameters
    ----------
    tensor: TensorBase
        input Tensor

    Returns
    -------
    TensorBase:
        Output Tensor;
    */;
	var tensor = _ensure_tensorbase(tensor);
	if (tensor.encrypted === True) {
		return NotImplemented;
	}
	return TensorBase(np.tanh(np.array(tensor.data)));
}
function relu(tensor) {
	/*
    Return relu function

    Parameters
    ----------
    tensor: TensorBase
        input Tensor

    Returns
    -------
    TensorBase:
        Output Tensor;
    */;
	var tensor = _ensure_tensorbase(tensor);
	if (tensor.encrypted === True) {
		return NotImplemented;
	}
	return TensorBase(np.maximum(0, tensor.data));
}
function addmm(tensor1, tensor2, mat, beta, alpha) {
	/*
    Performs ((Mat*Beta)+((Tensor1.Tensor2)*Alpha)) and  returns the
    result as a Tensor

    Tensor1.Tensor2 is performed as Matrix product of two array
    The behavior depends on the arguments in the following way.
    *If both tensors are 1-dimensional, their dot product is returned.
    *If both arguments are 2-D they are multiplied like conventional
    matrices.

    *If either argument is N-D, N > 2, it is treated as a stack of
    matrices residing in the last two indexes and broadcast
    accordingly.

    *If the first argument is 1-D, it is promoted to a matrix by
    prepending a 1 to its dimensions. After matrix multiplication
    the prepended 1 is removed.

    *If the second argument is 1-D, it is promoted to a matrix by
    appending a 1 to its dimensions. After matrix multiplication
    the appended 1 is removed.

    Parameters
    ----------
    tensor1: TensorBase

    tensor2: TensorBase

    mat:
        Matrix to the operation

    beta: ,optional

    alpha: ,optional

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	_ensure_tensorbase(tensor1);
	_ensure_tensorbase(tensor2);
	_ensure_tensorbase(mat);
	if (tensor1.encrypted || tensor2.encrypted || mat.encrypted) {
		return NotImplemented;
	} else {
		var delta = np.matmul(tensor1.data, tensor2.data);
		return TensorBase(np.array(__pythonRuntime.ops.add(__pythonRuntime.ops.multiply(mat.data, beta), __pythonRuntime.ops.multiply(delta, alpha))));
	}
}
function addcmul(tensor1, tensor2, mat, value) {
	/*
    Performs the element-wise multiplication of tensor1 by tensor2,
    multiply the result by the scalar value and add it to mat.

    Parameters
    ----------
    tensor1: TensorBase

    tensor2: TensorBase

    mat:
        Matrix to the operation

    value: ,optional

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	_ensure_tensorbase(tensor1);
	_ensure_tensorbase(tensor2);
	_ensure_tensorbase(mat);
	if (tensor1.encrypted || tensor2.encrypted || mat.encrypted) {
		return NotImplemented;
	} else {
		var out = __pythonRuntime.ops.add(mat.data, __pythonRuntime.ops.multiply(__pythonRuntime.ops.multiply(tensor1.data, tensor2.data), value));
		return TensorBase(out);
	}
}
function addcdiv(tensor1, tensor2, mat, value) {
	/*
    Performs the element-wise division of tensor1 by tensor2, multiply
    the result by the scalar value and add it to mat.

    Parameters
    ----------
    tensor1: TensorBase

    tensor2: TensorBase

    mat:
        Matrix to the operation

    value: ,optional

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	_ensure_tensorbase(tensor1);
	_ensure_tensorbase(tensor2);
	_ensure_tensorbase(mat);
	if (tensor1.encrypted || tensor2.encrypted || mat.encrypted) {
		return NotImplemented;
	} else {
		var out = __pythonRuntime.ops.add(mat.data, __pythonRuntime.ops.multiply(tensor1.data / tensor2.data, value));
		return TensorBase(out);
	}
}
function addmv(tensor1, mat, vec, beta, alpha) {
	/*
    Performs a matrix-vector product of the matrix mat and the vector vec.

    The vector tensor is added to the final result.
    tensor1 and vec are 1d tensors
    out=(beta∗tensor)+(alpha∗(mat@vec2))

    Parameters
    ----------
    tensor1: TensorBase

    mat:
        Matrix for the operation

    vec:
        Vector

    beta: ,optional

    alpha: ,optional

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	_ensure_tensorbase(tensor1);
	_ensure_tensorbase(vec);
	_ensure_tensorbase(mat);
	if (vec.data.ndim != 1) {
		__pythonRuntime.functions.print("dimension of vec is not 1");
	} else if (tensor1.data.ndim != 1) {
		__pythonRuntime.functions.print("dimension of vec is not 1");
	} else if (tensor1.encrypted || vec.encrypted || mat.encrypted) {
		return NotImplemented;
	} else {
		var out = __pythonRuntime.ops.add(__pythonRuntime.ops.multiply(tensor1.data, beta), __pythonRuntime.ops.multiply(np.matmul(mat.data, vec.data), alpha));
		return TensorBase(out);
	}
}
function bmm(tensor1, tensor2) {
	/*
    Performs a batch matrix-matrix product of this tensor
    and tensor2. Both tensors must be 3D containing equal number
    of matrices.

    If this is a (b x n x m) Tensor, batch2 is a (b x m x p) Tensor,
    Result will be a (b x n x p) Tensor.

    Parameters
    ----------
    tensor1 : TensorBase
        The first operand in the bmm operation

    tensor2 : TensorBase
        The second operand in the bmm operation

    Returns
    -------
    TensorBase:
        Output Tensor; with bmm operation
    */;
	_ensure_tensorbase(tensor1);
	_ensure_tensorbase(tensor2);
	if (tensor2.data.ndim != 3) {
		__pythonRuntime.functions.print("dimension of tensor2 is not 3");
	} else if (tensor1.data.ndim != 3) {
		__pythonRuntime.functions.print("dimension of tensor1 is not 3");
	} else if (tensor1.encrypted || tensor2.encrypted) {
		return NotImplemented;
	} else {
		var out = np.matmul(tensor1.data, tensor2.data);
		return TensorBase(out);
	}
}
function addbmm(tensor1, tensor2, mat, beta, alpha) {
	/*
    Performs a batch matrix-matrix product of matrices stored in
    batch1(tensor1) and batch2(tensor2),
    with a reduced add step (all matrix multiplications get accumulated along
    the first dimension).
    mat is added to the final result.

    res=(beta∗M)+(alpha∗sum(batch1i@batch2i, i=0, b))

    batch1 and batch2 must be 3D Tensors each containing the same number of
    matrices.

    Parameters
    ----------
    tensor1: TensorBase

    tensor2: TensorBase

    mat:
        Matrix to the operation

    beta: ,optional

    alpha: ,optional

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	_ensure_tensorbase(tensor1);
	_ensure_tensorbase(tensor2);
	_ensure_tensorbase(mat);
	if (tensor2.data.ndim != 3) {
		__pythonRuntime.functions.print("dimension of tensor2 is not 3");
	} else if (tensor1.data.ndim != 3) {
		__pythonRuntime.functions.print("dimension of tensor1 is not 3");
	} else if (tensor1.encrypted || tensor2.encrypted || mat.encrypted) {
		return NotImplemented;
	} else {
		var mmul = np.matmul(tensor1.data, tensor2.data);
		var sum_ = 0;
		{
			var __filbertRight0 = __pythonRuntime.functions.enumerate(mmul);
			if (__filbertRight0 instanceof Array) {
				for (var __filbertIndex0 = 0; __filbertIndex0 < __filbertRight0.length; ++__filbertIndex0) {
					var __filbertTmp20 = __filbertRight0[__filbertIndex0];
					var i = __filbertTmp20[0];
					var _ = __filbertTmp20[1];
					sum_ = __pythonRuntime.ops.add(sum_, mmul[__pythonRuntime.ops.subscriptIndex(mmul, i)]);
				}
			} else {
				for (var __filbertTmp21 = __pythonRuntime.functions.enumerate(mmul) in __filbertRight0) {
					i = __filbertTmp21[0];
					_ = __filbertTmp21[1];
					sum_ = __pythonRuntime.ops.add(sum_, mmul[__pythonRuntime.ops.subscriptIndex(mmul, i)]);
				}
			}
		}
		var out = __pythonRuntime.ops.add(__pythonRuntime.ops.multiply(mat.data, beta), __pythonRuntime.ops.multiply(alpha, sum_));
		return TensorBase(out);
	}
}
function baddbmm(tensor1, tensor2, mat, beta, alpha) {
	/*
    Performs a batch matrix-matrix product of matrices in batch1(tensor1)
    and batch2(tensor2). mat is added to the final result.

    resi=(beta∗Mi)+(alpha∗batch1i×batch2i)

    batch1 and batch2 must be 3D Tensors each containing the same number
    of matrices.

    Parameters
    ----------
    tensor1: TensorBase

    tensor2: TensorBase

    mat:
        Matrix to the operation

    beta: ,optional

    alpha: ,optional

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	_ensure_tensorbase(tensor1);
	_ensure_tensorbase(tensor2);
	_ensure_tensorbase(mat);
	if (tensor2.data.ndim != 3) {
		__pythonRuntime.functions.print("dimension of tensor2 is not 3");
	} else if (tensor1.data.ndim != 3) {
		__pythonRuntime.functions.print("dimension of tensor1 is not 3");
	} else if (mat.data.ndim != 3) {
		__pythonRuntime.functions.print("dimension of mat is not 3");
	} else if (tensor1.encrypted || tensor2.encrypted || mat.encrypted) {
		return NotImplemented;
	} else {
		var mmul = np.matmul(tensor1.data, tensor2.data);
		var out = __pythonRuntime.ops.add(__pythonRuntime.ops.multiply(mat.data, beta), __pythonRuntime.ops.multiply(mmul, alpha));
		return TensorBase(out);
	}
}
function transpose(tensor1, dim0, dim1) {
	/*
    Performs tensor transpose operation, tranposing dim0 and dim1.

    Returns a tranposed TensorBase.

    Parameters
    ----------
    tensor1: TensorBase

    dim0:
        Dimension 0

    dim1:
        Dimension 1

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	var tensor1 = _ensure_tensorbase(tensor1);
	var num_dims = __pythonRuntime.functions.len(tensor1.data.shape);
	var axes = __pythonRuntime.functions.list(__pythonRuntime.functions.range(num_dims));
	if (dim0 >= num_dims) {
		__pythonRuntime.functions.print("dimension 0 out of range");
	} else if (dim1 >= num_dims) {
		__pythonRuntime.functions.print("dimension 1 out of range");
	} else if (tensor1.encrypted) {
		NotImplemented;
	} else {
		axes[__pythonRuntime.ops.subscriptIndex(axes, dim0)] = dim1;
		axes[__pythonRuntime.ops.subscriptIndex(axes, dim1)] = dim0;
		return TensorBase(np.transpose(tensor1.data, axes, axes));
	}
}
function unsqueeze(tensor1, dim) {
	/*
    Performs 'unsqueeze' operation, returning a new tensor with a dimension
    of size one inserted at the specified position.

    Parameters
    ----------
    tensor1: TensorBase

    dim:
        Dimension

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	var tensor1 = _ensure_tensorbase(tensor1);
	var num_dims = __pythonRuntime.functions.len(tensor1.data.shape);
	if (dim >= num_dims || dim < 0) {
		__pythonRuntime.functions.print("dimension out of range");
	} else if (tensor1.encrypted) {
		NotImplemented;
	} else {
		return TensorBase(np.expand_dims(tensor1.data, dim));
	}
}
function mm(tensor1, tensor2) {
	/*
    Performs a matrix multiplication of :attr:`tensor1` and :attr:`tensor2`.

    If :attr:`tensor1` is a `n x m` Tensor, :attr:`tensor2` is a `m x p` Tensor,
    output will be a `n x p` Tensor.

    Parameters
    ----------
    tensor1: TensorBase

    tensor2: TensorBase

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	_ensure_tensorbase(tensor1);
	_ensure_tensorbase(tensor2);
	if (tensor1.encrypted || tensor2.encrypted) {
		return NotImplemented;
	} else {
		return TensorBase(np.array(np.matmul(tensor1.data, tensor2.data)));
	}
}
function fmod(tensor, divisor) {
	/*
    Performs the element-wise division of tensor by divisor.

    Parameters
    ----------
    tensor: TensorBase

    divisor: number or TensorBase

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	if (tensor.encrypted) {
		return NotImplemented;
	}
	if (isinstance(divisor, TensorBase)) {
		if (divisor.encrypted) {
			return NotImplemented;
		}
		var divisor = divisor.data;
	}
	return TensorBase(np.fmod(tensor.data, divisor));
}
function numel(tensor) {
	/*
    Returns the total number of elements in the input Tensor.

    Parameters
    ----------

    Returns
    -------
    int:
        total number of elements in the input Tensor
    */;
	if (tensor.encrypted) {
		return tensor.data.size;
	} else {
		return tensor.data.size;
	}
}
function lerp(tensor1, tensor2, weight) {
	/*
    Performs 'lerp' operation, returning a new tensor calculated by interpolation
    of two tensors using a weight.

    Parameters
    ----------
    tensor1: TensorBase
    tensor2: TensorBase

    weight:
        Weight supplied for iterpolation

    Returns
    -------
    TensorBase:
        Output Tensor
    */;
	_ensure_tensorbase(tensor1);
	_ensure_tensorbase(tensor2);
	if (tensor1.encrypted || tensor2.encrypted) {
		return NotImplemented;
	}
	var t1 = np.array(tensor1.data);
	var t2 = np.array(tensor2.data);
	var out = __pythonRuntime.ops.add(t1, __pythonRuntime.ops.multiply(weight, t2 - t1));
	return TensorBase(out);
}
function renorm(tensor1, p, dim, maxnorm) {
	/*
    Performs the scaling of elements along the dimension dim in tensor1 such that
    the p-norm of the sub-tensors along dim are less than or equal to maxnorm.
    Returns the result as an output tensor.

    The tensor, tensor1 is expected to have at least two dimesions, and the
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
    */;
	var tensor1 = _ensure_tensorbase(tensor1);
	var dims = tensor1.data.ndim;
	if (tensor1.encrypted) {
		return NotImplemented;
	} else if (dims < 2) {
		ValueError("tensor must have at least 2 dims");
	} else if (p < 1.0) {
		ValueError("p must be a float greater than or equal to 1");
	} else {
		var dim_2_sum = __pythonRuntime.functions.tuple(__pythonRuntime.functions.filter(x, x != dim, __pythonRuntime.functions.range(dims)));
		var norm = np.power(np.power(np.absolute(tensor1), p).sum(dim_2_sum), 1.0 / p);
		var c = maxnorm / norm;
		var scalar = np.where(norm > maxnorm, c, 1);
		var dim_array = np.ones(new __pythonRuntime.objects.tuple(1, dims), int).ravel();
		dim_array[__pythonRuntime.ops.subscriptIndex(dim_array, dim)] = -1;
		var scalar_reshaped = scalar.reshape(dim_array);
		var out = __pythonRuntime.ops.multiply(tensor1, scalar_reshaped);
	}
	return TensorBase(out);
}
