/*
    Module math implements mathematical primitives for tensor objects
*/;
var __all__ = new __pythonRuntime.objects.list(dummy17);
new __pythonRuntime.objects.tuple('cumprod', 'cumsum', 'ceil', 'dot', 'floor', 'matmul', 'addmm', 'addcmul', dummy18);
new __pythonRuntime.objects.tuple('addcdiv', 'addmv', 'bmm', 'addbmm', 'baddbmm', 'sigmoid', 'unsqueeze', dummy19);
new __pythonRuntime.objects.tuple('tanh', 'relu', 'zeros', 'ones', 'rand', 'randn', 'mm');
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
	return (function () {
		/*Returns a tensor of zeros*/;
		return TensorBase(np.zeros(dim));
	}).call(this);
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
	return (function () {
		/*Returns a tensor of ones*/;
		return TensorBase(np.ones(dim));
	}).call(this);
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
	return (function () {
		/*Returns a tensor with numbers initialized according to a uniform
    distribution from 0 to 1*/;
		return TensorBase(np.random.rand(dim));
	}).call(this);
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
	return (function () {
		/*Returns a tensor with initial numbers sampled from a standard normal
    distribution*/;
		return TensorBase(np.random.randn(dim));
	}).call(this);
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
	return (function () {
		/*Returns inner product of two tensors.

    N-dimensional tensors are flattened into 1-D vectors, therefore this
    method should only be used on vectors.
    */;
		var tensor1 = _ensure_tensorbase(tensor1);
		var tensor2 = _ensure_tensorbase(tensor2);
		if (tensor1.encrypted === True || tensor2.encrypted === True) {
			return NotImplemented;
		}
		return np.vdot(tensor1.data, tensor2.data);
	}).call(this);
}
function matmul() {
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
	var tensor1 = __getParam5("tensor1");
	var tensor2 = __getParam5("tensor2");
	return (function () {
		/*Performs matrix multiplication between two tensors.

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
	}).call(this);
}
function ceil() {
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
	var tensor = __getParam6("tensor");
	return (function () {
		/*
    Returns the ceilling input tensor,element wise .

    Ceilling of an input scalar is the smallest integer such as :
    for each floating point number x : a >= x

    Behavior is independent of a tensor's shape.

    :input: TensorBase tensor\n
    :return: TensorBase tensor
    */;
		var tensor = _ensure_tensorbase(tensor);
		if (tensor.encrypted === True) {
			return NotImplemented;
		}
		return TensorBase(np.ceil(tensor.data));
	}).call(this);
}
function floor() {
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
	return (function () {
		/*
    Returns the floored input tensor,element wise.
    Floor of an input scalar is the largest integer such as:
    for each floating point number x : a <= x

    Behavior is independent of a tensor's shape
    :input: TensorBase tensor\n
    :return: TensorBase tensor of floored elements .
    */;
		var tensor = _ensure_tensorbase(tensor);
		if (tensor.encrypted === True) {
			return NotImplemented;
		}
		return TensorBase(np.floor(tensor.data));
	}).call(this);
}
function cumsum() {
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
	var dim = __getParam8("dim", 0);
	return (function () {
		/*
    Returns the cumulative sum of the elements along a given dimension

    **Parameters**:
    * TensorBase tensor
    * Dimension on which the operation is done

    **returns**  A new 1D Tensor holding the result
    */;
		var tensor = _ensure_tensorbase(tensor);
		if (tensor.encrypted === True) {
			return NotImplemented;
		}
		return TensorBase(np.cumsum(tensor.data, dim));
	}).call(this);
}
function cumprod() {
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
	return (function () {
		/*
    Returns the cumulative product of the elements along a given axis

    **Parameters**:
    * TensorBase tensor
    * Dimension on which the operation is done

    **returns** A new 1D Tensor holding the result
    */;
		var tensor = _ensure_tensorbase(tensor);
		if (tensor.encrypted === True) {
			return NotImplemented;
		}
		return TensorBase(np.cumprod(tensor.data, dim));
	}).call(this);
}
function sigmoid() {
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
	return (function () {
		/* Returns a new tensor holding element wise values of Sigmoid function
        Sigmoid(x) = 1 / 1+exp(-x)
    */;
		var tensor = _ensure_tensorbase(tensor);
		if (tensor.encrypted === True) {
			return NotImplemented;
		}
		return TensorBase(1 / __pythonRuntime.ops.add(1, np.exp(np.array(-tensor.data))));
	}).call(this);
}
function tanh() {
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
	return (function () {
		/* Returns a new tensor holding element wise values of tanh function
        tanh(x) = (e^(x) - e^(-x))/(e^(x) + e^(-x))
    */;
		var tensor = _ensure_tensorbase(tensor);
		if (tensor.encrypted === True) {
			return NotImplemented;
		}
		return TensorBase(np.tanh(np.array(tensor.data)));
	}).call(this);
}
function relu() {
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
	return (function () {
		/* Return relu function
    */;
		var tensor = _ensure_tensorbase(tensor);
		if (tensor.encrypted === True) {
			return NotImplemented;
		}
		return TensorBase(np.maximum(0, tensor.data));
	}).call(this);
}
function addmm() {
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
	var tensor1 = __getParam13("tensor1");
	var tensor2 = __getParam13("tensor2");
	var mat = __getParam13("mat");
	var beta = __getParam13("beta", 1);
	var alpha = __getParam13("alpha", 1);
	return (function () {
		/*Performs ((Mat*Beta)+((Tensor1.Tensor2)*Alpha)) and  returns the
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
	}).call(this);
}
function addcmul() {
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
	var value = __getParam14("value", 1);
	return (function () {
		/*Performs the element-wise multiplication of tensor1 by tensor2,
    multiply the result by the scalar value and add it to mat.*/;
		_ensure_tensorbase(tensor1);
		_ensure_tensorbase(tensor2);
		_ensure_tensorbase(mat);
		if (tensor1.encrypted || tensor2.encrypted || mat.encrypted) {
			return NotImplemented;
		} else {
			var out = __pythonRuntime.ops.add(mat.data, __pythonRuntime.ops.multiply(__pythonRuntime.ops.multiply(tensor1.data, tensor2.data), value));
			return TensorBase(out);
		}
	}).call(this);
}
function addcdiv() {
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
	return (function () {
		/*Performs the element-wise division of tensor1 by tensor2, multiply
    the result by the scalar value and add it to mat.*/;
		_ensure_tensorbase(tensor1);
		_ensure_tensorbase(tensor2);
		_ensure_tensorbase(mat);
		if (tensor1.encrypted || tensor2.encrypted || mat.encrypted) {
			return NotImplemented;
		} else {
			var out = __pythonRuntime.ops.add(mat.data, __pythonRuntime.ops.multiply(tensor1.data / tensor2.data, value));
			return TensorBase(out);
		}
	}).call(this);
}
function addmv() {
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
	var mat = __getParam16("mat");
	var vec = __getParam16("vec");
	var beta = __getParam16("beta", 1);
	var alpha = __getParam16("alpha", 1);
	return (function () {
		/*"Performs a matrix-vector product of the matrix mat and the vector vec.
    The vector tensor is added to the final result.
          tensor1 and vec are 1d tensors
          out=(beta∗tensor)+(alpha∗(mat@vec2))*/;
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
	}).call(this);
}
function bmm() {
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
	var tensor2 = __getParam17("tensor2");
	return (function () {
		/*Performs a batch matrix-matrix product of this tesnor
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
        TensorBase
            Computed tensor result for bmm operation
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
	}).call(this);
}
function addbmm() {
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
	var mat = __getParam18("mat");
	var beta = __getParam18("beta", 1);
	var alpha = __getParam18("alpha", 1);
	return (function () {
		/*Performs a batch matrix-matrix product of matrices stored in
    batch1(tensor1) and batch2(tensor2),
     with a reduced add step (all matrix multiplications get accumulated along
     the first dimension).
     mat is added to the final result.
     res=(beta∗M)+(alpha∗sum(batch1i@batch2i, i=0, b))
    * batch1 and batch2 must be 3D Tensors each containing the same number of
    matrices.*/;
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
						var __filbertTmp19 = __filbertRight0[__filbertIndex0];
						var i = __filbertTmp19[0];
						var _ = __filbertTmp19[1];
						sum_ = __pythonRuntime.ops.add(sum_, mmul[__pythonRuntime.ops.subscriptIndex(mmul, i)]);
					}
				} else {
					for (var __filbertTmp20 = __pythonRuntime.functions.enumerate(mmul) in __filbertRight0) {
						i = __filbertTmp20[0];
						_ = __filbertTmp20[1];
						sum_ = __pythonRuntime.ops.add(sum_, mmul[__pythonRuntime.ops.subscriptIndex(mmul, i)]);
					}
				}
			}
			var out = __pythonRuntime.ops.add(__pythonRuntime.ops.multiply(mat.data, beta), __pythonRuntime.ops.multiply(alpha, sum_));
			return TensorBase(out);
		}
	}).call(this);
}
function baddbmm() {
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
	var tensor1 = __getParam21("tensor1");
	var tensor2 = __getParam21("tensor2");
	var mat = __getParam21("mat");
	var beta = __getParam21("beta", 1);
	var alpha = __getParam21("alpha", 1);
	return (function () {
		/*Performs a batch matrix-matrix product of matrices in batch1(tensor1)
    and batch2(tensor2). mat is added to the final result.
      resi=(beta∗Mi)+(alpha∗batch1i×batch2i)
      *batch1 and batch2 must be 3D Tensors each containing the same number
      of matrices.*/;
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
	}).call(this);
}
function transpose() {
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
	var dim0 = __getParam22("dim0");
	var dim1 = __getParam22("dim1");
	return (function () {
		/*
    Performs tensor transpose operation, tranposing dim0 and dim1.
    Returns a tranposed TensorBase.
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
	}).call(this);
}
function unsqueeze() {
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
	var dim = __getParam23("dim");
	return (function () {
		/*
    Performs 'unsqueeze' operation, returning a new tensor with a dimension
    of size one inserted at the specified position.
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
	}).call(this);
}
function mm() {
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
	var tensor2 = __getParam24("tensor2");
	return (function () {
		/*
    Performs a matrix multiplication of :attr:`tensor1` and :attr:`tensor2`.

    If :attr:`tensor1` is a `n x m` Tensor, :attr:`tensor2` is a `m x p` Tensor,
    output will be a `n x p` Tensor.

    Args:
        tensor1 (Tensor): First Tensor to be multiplied
        tensor2 (Tensor): Second Tensor to be multiplied*/;
		_ensure_tensorbase(tensor1);
		_ensure_tensorbase(tensor2);
		if (tensor1.encrypted || tensor2.encrypted) {
			return NotImplemented;
		} else {
			return TensorBase(np.array(np.matmul(tensor1.data, tensor2.data)));
		}
	}).call(this);
}
