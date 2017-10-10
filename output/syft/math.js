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
function zeros() {
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
	var dim = __getParam0("dim");
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
function ones() {
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
	var dim = __getParam1("dim");
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
function rand() {
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
	var dim = __getParam2("dim");
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
function randn() {
	var __params3 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex3 = 0;
	var __args3 = arguments;
	function __getParam3(v, d) {
		var r = d;
		if (__params3) {
			if (__formalsIndex3 < __params3.formals.length) {
				r = __params3.formals[__formalsIndex3++];
			} else if ((v in __params3.keywords)) {
				r = __params3.keywords[v];
				delete __params3.keywords[v];
			}
		} else if (__formalsIndex3 < __args3.length) {
			r = __args3[__formalsIndex3++];
		}
		return r;
	}
	var dim = __getParam3("dim");
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
function dot() {
	var __params4 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex4 = 0;
	var __args4 = arguments;
	function __getParam4(v, d) {
		var r = d;
		if (__params4) {
			if (__formalsIndex4 < __params4.formals.length) {
				r = __params4.formals[__formalsIndex4++];
			} else if ((v in __params4.keywords)) {
				r = __params4.keywords[v];
				delete __params4.keywords[v];
			}
		} else if (__formalsIndex4 < __args4.length) {
			r = __args4[__formalsIndex4++];
		}
		return r;
	}
	var tensor1 = __getParam4("tensor1");
	var tensor2 = __getParam4("tensor2");
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
function diag() {
	var __params5 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex5 = 0;
	var __args5 = arguments;
	function __getParam5(v, d) {
		var r = d;
		if (__params5) {
			if (__formalsIndex5 < __params5.formals.length) {
				r = __params5.formals[__formalsIndex5++];
			} else if ((v in __params5.keywords)) {
				r = __params5.keywords[v];
				delete __params5.keywords[v];
			}
		} else if (__formalsIndex5 < __args5.length) {
			r = __args5[__formalsIndex5++];
		}
		return r;
	}
	var tensor = __getParam5("tensor");
	var diagonal = __getParam5("diagonal", 0);
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
function matmul() {
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
	var tensor1 = __getParam6("tensor1");
	var tensor2 = __getParam6("tensor2");
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
function ceil() {
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
	var tensor = __getParam7("tensor");
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
function floor() {
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
	var tensor = __getParam8("tensor");
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
function cumsum() {
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
	var tensor = __getParam9("tensor");
	var dim = __getParam9("dim", 0);
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
function cumprod() {
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
	var tensor = __getParam10("tensor");
	var dim = __getParam10("dim", 0);
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
function sigmoid() {
	var __params11 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex11 = 0;
	var __args11 = arguments;
	function __getParam11(v, d) {
		var r = d;
		if (__params11) {
			if (__formalsIndex11 < __params11.formals.length) {
				r = __params11.formals[__formalsIndex11++];
			} else if ((v in __params11.keywords)) {
				r = __params11.keywords[v];
				delete __params11.keywords[v];
			}
		} else if (__formalsIndex11 < __args11.length) {
			r = __args11[__formalsIndex11++];
		}
		return r;
	}
	var tensor = __getParam11("tensor");
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
function tanh() {
	var __params12 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex12 = 0;
	var __args12 = arguments;
	function __getParam12(v, d) {
		var r = d;
		if (__params12) {
			if (__formalsIndex12 < __params12.formals.length) {
				r = __params12.formals[__formalsIndex12++];
			} else if ((v in __params12.keywords)) {
				r = __params12.keywords[v];
				delete __params12.keywords[v];
			}
		} else if (__formalsIndex12 < __args12.length) {
			r = __args12[__formalsIndex12++];
		}
		return r;
	}
	var tensor = __getParam12("tensor");
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
function relu() {
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
	var tensor = __getParam13("tensor");
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
function addmm() {
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
	var tensor1 = __getParam14("tensor1");
	var tensor2 = __getParam14("tensor2");
	var mat = __getParam14("mat");
	var beta = __getParam14("beta", 1);
	var alpha = __getParam14("alpha", 1);
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
function addcmul() {
	var __params15 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex15 = 0;
	var __args15 = arguments;
	function __getParam15(v, d) {
		var r = d;
		if (__params15) {
			if (__formalsIndex15 < __params15.formals.length) {
				r = __params15.formals[__formalsIndex15++];
			} else if ((v in __params15.keywords)) {
				r = __params15.keywords[v];
				delete __params15.keywords[v];
			}
		} else if (__formalsIndex15 < __args15.length) {
			r = __args15[__formalsIndex15++];
		}
		return r;
	}
	var tensor1 = __getParam15("tensor1");
	var tensor2 = __getParam15("tensor2");
	var mat = __getParam15("mat");
	var value = __getParam15("value", 1);
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
function addcdiv() {
	var __params16 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex16 = 0;
	var __args16 = arguments;
	function __getParam16(v, d) {
		var r = d;
		if (__params16) {
			if (__formalsIndex16 < __params16.formals.length) {
				r = __params16.formals[__formalsIndex16++];
			} else if ((v in __params16.keywords)) {
				r = __params16.keywords[v];
				delete __params16.keywords[v];
			}
		} else if (__formalsIndex16 < __args16.length) {
			r = __args16[__formalsIndex16++];
		}
		return r;
	}
	var tensor1 = __getParam16("tensor1");
	var tensor2 = __getParam16("tensor2");
	var mat = __getParam16("mat");
	var value = __getParam16("value", 1);
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
function addmv() {
	var __params17 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex17 = 0;
	var __args17 = arguments;
	function __getParam17(v, d) {
		var r = d;
		if (__params17) {
			if (__formalsIndex17 < __params17.formals.length) {
				r = __params17.formals[__formalsIndex17++];
			} else if ((v in __params17.keywords)) {
				r = __params17.keywords[v];
				delete __params17.keywords[v];
			}
		} else if (__formalsIndex17 < __args17.length) {
			r = __args17[__formalsIndex17++];
		}
		return r;
	}
	var tensor1 = __getParam17("tensor1");
	var mat = __getParam17("mat");
	var vec = __getParam17("vec");
	var beta = __getParam17("beta", 1);
	var alpha = __getParam17("alpha", 1);
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
function bmm() {
	var __params18 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex18 = 0;
	var __args18 = arguments;
	function __getParam18(v, d) {
		var r = d;
		if (__params18) {
			if (__formalsIndex18 < __params18.formals.length) {
				r = __params18.formals[__formalsIndex18++];
			} else if ((v in __params18.keywords)) {
				r = __params18.keywords[v];
				delete __params18.keywords[v];
			}
		} else if (__formalsIndex18 < __args18.length) {
			r = __args18[__formalsIndex18++];
		}
		return r;
	}
	var tensor1 = __getParam18("tensor1");
	var tensor2 = __getParam18("tensor2");
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
function addbmm() {
	var __params19 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex19 = 0;
	var __args19 = arguments;
	function __getParam19(v, d) {
		var r = d;
		if (__params19) {
			if (__formalsIndex19 < __params19.formals.length) {
				r = __params19.formals[__formalsIndex19++];
			} else if ((v in __params19.keywords)) {
				r = __params19.keywords[v];
				delete __params19.keywords[v];
			}
		} else if (__formalsIndex19 < __args19.length) {
			r = __args19[__formalsIndex19++];
		}
		return r;
	}
	var tensor1 = __getParam19("tensor1");
	var tensor2 = __getParam19("tensor2");
	var mat = __getParam19("mat");
	var beta = __getParam19("beta", 1);
	var alpha = __getParam19("alpha", 1);
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
function baddbmm() {
	var __params22 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex22 = 0;
	var __args22 = arguments;
	function __getParam22(v, d) {
		var r = d;
		if (__params22) {
			if (__formalsIndex22 < __params22.formals.length) {
				r = __params22.formals[__formalsIndex22++];
			} else if ((v in __params22.keywords)) {
				r = __params22.keywords[v];
				delete __params22.keywords[v];
			}
		} else if (__formalsIndex22 < __args22.length) {
			r = __args22[__formalsIndex22++];
		}
		return r;
	}
	var tensor1 = __getParam22("tensor1");
	var tensor2 = __getParam22("tensor2");
	var mat = __getParam22("mat");
	var beta = __getParam22("beta", 1);
	var alpha = __getParam22("alpha", 1);
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
function transpose() {
	var __params23 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex23 = 0;
	var __args23 = arguments;
	function __getParam23(v, d) {
		var r = d;
		if (__params23) {
			if (__formalsIndex23 < __params23.formals.length) {
				r = __params23.formals[__formalsIndex23++];
			} else if ((v in __params23.keywords)) {
				r = __params23.keywords[v];
				delete __params23.keywords[v];
			}
		} else if (__formalsIndex23 < __args23.length) {
			r = __args23[__formalsIndex23++];
		}
		return r;
	}
	var tensor1 = __getParam23("tensor1");
	var dim0 = __getParam23("dim0");
	var dim1 = __getParam23("dim1");
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
function unsqueeze() {
	var __params24 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex24 = 0;
	var __args24 = arguments;
	function __getParam24(v, d) {
		var r = d;
		if (__params24) {
			if (__formalsIndex24 < __params24.formals.length) {
				r = __params24.formals[__formalsIndex24++];
			} else if ((v in __params24.keywords)) {
				r = __params24.keywords[v];
				delete __params24.keywords[v];
			}
		} else if (__formalsIndex24 < __args24.length) {
			r = __args24[__formalsIndex24++];
		}
		return r;
	}
	var tensor1 = __getParam24("tensor1");
	var dim = __getParam24("dim");
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
function mm() {
	var __params25 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex25 = 0;
	var __args25 = arguments;
	function __getParam25(v, d) {
		var r = d;
		if (__params25) {
			if (__formalsIndex25 < __params25.formals.length) {
				r = __params25.formals[__formalsIndex25++];
			} else if ((v in __params25.keywords)) {
				r = __params25.keywords[v];
				delete __params25.keywords[v];
			}
		} else if (__formalsIndex25 < __args25.length) {
			r = __args25[__formalsIndex25++];
		}
		return r;
	}
	var tensor1 = __getParam25("tensor1");
	var tensor2 = __getParam25("tensor2");
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
function fmod() {
	var __params26 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex26 = 0;
	var __args26 = arguments;
	function __getParam26(v, d) {
		var r = d;
		if (__params26) {
			if (__formalsIndex26 < __params26.formals.length) {
				r = __params26.formals[__formalsIndex26++];
			} else if ((v in __params26.keywords)) {
				r = __params26.keywords[v];
				delete __params26.keywords[v];
			}
		} else if (__formalsIndex26 < __args26.length) {
			r = __args26[__formalsIndex26++];
		}
		return r;
	}
	var tensor = __getParam26("tensor");
	var divisor = __getParam26("divisor");
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
function numel() {
	var __params27 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex27 = 0;
	var __args27 = arguments;
	function __getParam27(v, d) {
		var r = d;
		if (__params27) {
			if (__formalsIndex27 < __params27.formals.length) {
				r = __params27.formals[__formalsIndex27++];
			} else if ((v in __params27.keywords)) {
				r = __params27.keywords[v];
				delete __params27.keywords[v];
			}
		} else if (__formalsIndex27 < __args27.length) {
			r = __args27[__formalsIndex27++];
		}
		return r;
	}
	var tensor = __getParam27("tensor");
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
function lerp() {
	var __params28 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex28 = 0;
	var __args28 = arguments;
	function __getParam28(v, d) {
		var r = d;
		if (__params28) {
			if (__formalsIndex28 < __params28.formals.length) {
				r = __params28.formals[__formalsIndex28++];
			} else if ((v in __params28.keywords)) {
				r = __params28.keywords[v];
				delete __params28.keywords[v];
			}
		} else if (__formalsIndex28 < __args28.length) {
			r = __args28[__formalsIndex28++];
		}
		return r;
	}
	var tensor1 = __getParam28("tensor1");
	var tensor2 = __getParam28("tensor2");
	var weight = __getParam28("weight");
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
function renorm() {
	var __params29 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex29 = 0;
	var __args29 = arguments;
	function __getParam29(v, d) {
		var r = d;
		if (__params29) {
			if (__formalsIndex29 < __params29.formals.length) {
				r = __params29.formals[__formalsIndex29++];
			} else if ((v in __params29.keywords)) {
				r = __params29.keywords[v];
				delete __params29.keywords[v];
			}
		} else if (__formalsIndex29 < __args29.length) {
			r = __args29[__formalsIndex29++];
		}
		return r;
	}
	var tensor1 = __getParam29("tensor1");
	var p = __getParam29("p");
	var dim = __getParam29("dim");
	var maxnorm = __getParam29("maxnorm");
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
