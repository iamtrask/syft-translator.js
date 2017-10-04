/*
    Note: The Documentation in this file follows the NumPy Doc. Style;
          Hence, it is mandatory that future docs added here
          strictly follow the same, to maintain readability and consistency
          of the codebase.

          NumPy Documentation Style-
          http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_numpy.html
*/;
var __all__ = new __pythonRuntime.objects.list(dummy36);
new __pythonRuntime.objects.tuple('equal', 'TensorBase', dummy37);
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
	return (function () {
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
	}).call(this);
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
	return (function () {
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
	}).call(this);
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
	return (function () {
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
	}).call(this);
}
{
	function TensorBase() {
		object.call(this);
		/*
    A base tensor class that performs basic element-wise operation such as
    addition, subtraction, multiplication and division, and also dot and
    matrix products.
    */;
		this._mul_depth = 0;
		this._add_depth = 0;
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
		var arr_like = __getParam3("arr_like");
		var encrypted = __getParam3("encrypted", false);
		return (function () {
			this.data = _ensure_ndarray(__pythonRuntime.utils.createParamsObj(arr_like));
			this.encrypted = encrypted;
		}).call(this);
	}
	TensorBase.prototype = Object.create(object.prototype);
	TensorBase.prototype._calc_mul_depth = function () {
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
			if (isinstance(tensor1, TensorBase) && isinstance(tensor2, TensorBase)) {
				this._mul_depth = __pythonRuntime.ops.add(__pythonRuntime.functions.max(tensor1._mul_depth, tensor2._mul_depth), 1);
			} else if (isinstance(tensor1, TensorBase)) {
				this._mul_depth = __pythonRuntime.ops.add(tensor1._mul_depth, 1);
			} else if (isinstance(tensor2, TensorBase)) {
				this._mul_depth = __pythonRuntime.ops.add(tensor2._mul_depth, 1);
			}
		}).call(this);
	};
	TensorBase.prototype._calc_add_depth = function () {
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
			if (isinstance(tensor1, TensorBase) && isinstance(tensor2, TensorBase)) {
				this._add_depth = __pythonRuntime.ops.add(__pythonRuntime.functions.max(tensor1._add_depth, tensor2._add_depth), 1);
			} else if (isinstance(tensor1, TensorBase)) {
				this._add_depth = __pythonRuntime.ops.add(tensor1._add_depth, 1);
			} else if (isinstance(tensor2, TensorBase)) {
				this._add_depth = __pythonRuntime.ops.add(tensor2._add_depth, 1);
			}
		}).call(this);
	};
	TensorBase.prototype.encrypt = function () {
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
		var pubkey = __getParam6("pubkey");
		return (function () {
			/*
        Encrypts the Tensor using a Public Key

        Parameters
        ----------
        pubkey:
            Public Key

        Returns
        -------
        Encrypted Caller
        */;
			if (this.encrypted) {
				return NotImplemented;
			} else {
				if (type(pubkey) == syft.he.paillier.keys.PublicKey) {
					var out = syft.he.paillier.PaillierTensor(pubkey, this.data);
					return out;
				} else {
					return NotImplemented;
				}
			}
		}).call(this);
	};
	TensorBase.prototype.decrypt = function () {
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
		var seckey = __getParam7("seckey");
		return (function () {
			/*
        Decrypts the tensor using a Secret Key

        Parameters
        ----------
        seckey:
            Secret Key

        Returns
        -------
        Decrypted Caller
        */;
			if (this.encrypted) {
				return seckey.decrypt(self);
			} else {
				return self;
			}
		}).call(this);
	};
	TensorBase.prototype.__len__ = function () {
		return (function () {
			/*
        Parameters
        ----------

        Returns
        -------
        Returns the len. of Caller
        */;
			return __pythonRuntime.functions.len(this.data);
		}).call(this);
	};
	TensorBase.prototype.__add__ = function () {
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
		return (function () {
			/*
        Performs element-wise addition between two tensors

        Parameters
        ----------
        tensor: TensorBase
            Tensor to be Added

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var tensor = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor));
			return new TensorBase(__pythonRuntime.ops.add(this.data, tensor.data));
		}).call(this);
	};
	TensorBase.prototype.__iadd__ = function () {
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
			/*
        Performs in-place element-wise addition between two tensors

        Parameters
        ----------
        tensor: TensorBase
            Tensor to be Added

        Returns
        -------
        TensorBase:
            Caller with values in-place

        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var tensor = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor));
			this.data = __pythonRuntime.ops.add(this.data, tensor.data);
			return self;
		}).call(this);
	};
	TensorBase.prototype.__sub__ = function () {
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
			/*
        Performs element-wise subtraction between two tensors

        Parameters
        ----------
        tensor: TensorBase
            Tensor to be Subtracted from Caller

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var tensor = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor));
			return new TensorBase(this.data - tensor.data);
		}).call(this);
	};
	TensorBase.prototype.__isub__ = function () {
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
			/*
        Performs in-place element-wise subtraction between two tensors

        Parameters
        ----------
        tensor: TensorBase
            Tensor to be Subtracted from Caller

        Returns
        -------
        TensorBase:
            Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var tensor = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor));
			this.data -= tensor.data;
			return self;
		}).call(this);
	};
	TensorBase.prototype.__eq__ = function () {
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
		return (function () {
			/*
        Checks if two tensors are equal

        Parameters
        ----------
        tensor: TensorBase
            Second tensor

        Returns
        -------
        bool:
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			return syft.equal(self, tensor);
		}).call(this);
	};
	TensorBase.prototype.dot = function () {
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
		var tensor = __getParam14("tensor");
		return (function () {
			/*
        Returns inner product of two tensors

        Parameters
        ----------
        tensor: TensorBase
            Second tensor

        Returns
        -------
        TensorBase
            Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			if (tensor.encrypted) {
				return tensor.dot(self);
			}
			return syft.dot(self, tensor);
		}).call(this);
	};
	TensorBase.prototype.__matmul__ = function () {
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
		var tensor = __getParam15("tensor");
		return (function () {
			/*
        Performs matrix multiplication between two tensors

        Parameters
        ----------
        tensor: TensorBase
            Second tensor

        Returns
        -------
        TensorBase
            Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			return syft.matmul(self, tensor);
		}).call(this);
	};
	TensorBase.prototype.__mul__ = function () {
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
		var tensor = __getParam16("tensor");
		return (function () {
			/*
        Performs element-wise multiplication between two tensors

        Parameters
        ----------
        tensor: TensorBase
            Second tensor

        Returns
        -------
        TensorBase
            Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			if (type(tensor) != TensorBase && isinstance(tensor, TensorBase)) {
				return __pythonRuntime.ops.multiply(tensor, self);
			} else {
				var tensor = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor));
				return new TensorBase(__pythonRuntime.ops.multiply(tensor.data, this.data));
			}
		}).call(this);
	};
	TensorBase.prototype.__imul__ = function () {
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
		var tensor = __getParam17("tensor");
		return (function () {
			/*
        Performs in-place element-wise multiplication between two tensors

        Parameters
        ----------
        tensor: TensorBase
            Second tensor

        Returns
        -------
        TensorBase
            Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			if (type(tensor) != TensorBase && isinstance(tensor, TensorBase)) {
				this.data = __pythonRuntime.ops.multiply(tensor.data, this.data);
				this.encrypted = tensor.encrypted;
			} else {
				var tensor = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor));
				this.data = __pythonRuntime.ops.multiply(this.data, tensor.data);
			}
			return self;
		}).call(this);
	};
	TensorBase.prototype.__truediv__ = function () {
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
		var tensor = __getParam18("tensor");
		return (function () {
			/*
        Performs element-wise division between two tensors

        Parameters
        ----------
        tensor: TensorBase
            Divisor tensor

        Returns
        -------
        TensorBase
            Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			if (type(tensor) != TensorBase && isinstance(tensor, TensorBase)) {
				return NotImplemented;
			} else {
				var tensor = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor));
				return new TensorBase(this.data / tensor.data);
			}
		}).call(this);
	};
	TensorBase.prototype.__itruediv__ = function () {
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
		var tensor = __getParam19("tensor");
		return (function () {
			/*
        Performs in-place element-wise subtraction between two tensors


        Parameters
        ----------
        tensor: TensorBase
            Second tensor

        Returns
        -------
        TensorBase
            Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var tensor = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor));
			this.data = this.data / tensor.data;
			return self;
		}).call(this);
	};
	TensorBase.prototype.__setitem__ = function () {
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
		var key = __getParam20("key");
		var value = __getParam20("value");
		return (function () {
			if (this.encrypted) {
				return NotImplemented;
			} else {
				this.data[__pythonRuntime.ops.subscriptIndex(this.data, key)] = value;
				return self;
			}
		}).call(this);
	};
	TensorBase.prototype.__getitem__ = function () {
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
		var position = __getParam21("position");
		return (function () {
			/*Get value at a specific index.*/;
			if (this.encrypted) {
				return NotImplemented;
			} else {
				var out = this.data[__pythonRuntime.ops.subscriptIndex(this.data, position)];
				if (__pythonRuntime.functions.len(this.shape()) == 1) {
					return out;
				} else {
					return new TensorBase(this.data[__pythonRuntime.ops.subscriptIndex(this.data, position)], this.encrypted);
				}
			}
		}).call(this);
	};
	TensorBase.prototype.abs = function () {
		return (function () {
			/*
        Returns absolute value of tensor as a new tensor

        Parameters
        ----------

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			return new TensorBase(np.absolute(this.data));
		}).call(this);
	};
	TensorBase.prototype.abs_ = function () {
		return (function () {
			/*
        Replaces tensor values with its absolute value

        Parameters
        ----------

        Returns
        -------
        Tensor Data
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = np.absolute(this.data);
			return this.data;
		}).call(this);
	};
	TensorBase.prototype.nelement = function () {
		return (function () {
			/*Returns the total number of elements in the tensor.*/;
			if (this.encrypted) {
				return NotImplemented;
			}
			return this.data.size;
		}).call(this);
	};
	TensorBase.prototype.shape = function () {
		return (function () {
			/*
        Returns a tuple of input array dimensions.

        Parameters
        ----------

        Returns
        -------
        Shape of Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			return this.data.shape;
		}).call(this);
	};
	TensorBase.prototype.sqrt = function () {
		return (function () {
			/*
        Performs square-root of tensor and returns a new tensor.

        Parameters
        ----------

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			return np.sqrt(this.data);
		}).call(this);
	};
	TensorBase.prototype.sqrt_ = function () {
		return (function () {
			/*
        Peforms square-root of the tensor, in-place

        Parameters
        ----------

        Returns
        -------
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = np.sqrt(this.data);
		}).call(this);
	};
	TensorBase.prototype.dim = function () {
		return (function () {
			/*
        Returns an integer of the number of dimensions of this tensor.

        Parameters
        ----------

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
			return this.data.ndim;
		}).call(this);
	};
	TensorBase.prototype.sum = function () {
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
		var dim = __getParam29("dim", None);
		return (function () {
			/*
        Returns the sum of all elements in the input array.

        Parameters
        ----------

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			if (dim === None) {
				return this.data.sum();
			} else {
				return this.data.sum(axis, dim);
			}
		}).call(this);
	};
	TensorBase.prototype.ceil = function () {
		return (function () {
			/*
        Returns the ceilling of the input tensor elementwise.

        Parameters
        ----------

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			return syft.math.ceil(this.data);
		}).call(this);
	};
	TensorBase.prototype.ceil_ = function () {
		return (function () {
			/*
        Returns the ceilling of the input tensor elementwise.

        Parameters
        ----------

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = syft.math.ceil(this.data).data;
			return self;
		}).call(this);
	};
	TensorBase.prototype.floor_ = function () {
		return (function () {
			/*
        in-place floor method

        Parameters
        ----------

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = syft.math.floor(this.data).data;
			return self;
		}).call(this);
	};
	TensorBase.prototype.zero_ = function () {
		return (function () {
			/*
        Replaces tensor values with zeros

        Parameters
        ----------

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data.fill(0);
			return this.data;
		}).call(this);
	};
	TensorBase.prototype.addmm = function () {
		var __params34 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex34 = 0;
		var __args34 = arguments;
		function __getParam34(v, d) {
			var r = d;
			if (__params34) {
				if (__formalsIndex34 < __params34.formals.length) {
					r = __params34.formals[__formalsIndex34++];
				} else if ((v in __params34.keywords)) {
					r = __params34.keywords[v];
					delete __params34.keywords[v];
				}
			} else if (__formalsIndex34 < __args34.length) {
				r = __args34[__formalsIndex34++];
			}
			return r;
		}
		var tensor2 = __getParam34("tensor2");
		var mat = __getParam34("mat");
		var beta = __getParam34("beta", 1);
		var alpha = __getParam34("alpha", 1);
		return (function () {
			/*
        Performs ((Mat*Beta)+((Tensor1@Tensor2)*Alpha)) and  returns the
        result as a Tensor

        Tensor1.Tensor2 is performed as Matrix product of two array The
        behavior depends on the arguments in the following way.

        *If both tensors are 1-dimensional, their dot product is returned.

        *If both arguments are 2-D they are multiplied like conventional
         matrices.

        *If either argument is N-D, N > 2, it is treated as a stack of
         matrices residing in the last two indexes and broadcast
         accordingly.

        *If the first argument is 1-D, it is promoted to a matrix by
         prepending a 1 to its dimensions. After matrix multiplication the
         prepended 1 is removed.

        *If the second argument is 1-D, it is promoted to a matrix by
         appending a 1 to its dimensions. After matrix multiplication the
         appended 1 is removed.

        Parameters
        ----------
        tensor2: TensorBase
            input tensor

        mat:
            Input Matrix

        beta: ,optional

        alpha: ,optional


        Returns
        -------
        TensorBase:
            Output Tensor
        */;
			return syft.addmm(self, tensor2, mat, beta, alpha);
		}).call(this);
	};
	TensorBase.prototype.addmm_ = function () {
		var __params35 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex35 = 0;
		var __args35 = arguments;
		function __getParam35(v, d) {
			var r = d;
			if (__params35) {
				if (__formalsIndex35 < __params35.formals.length) {
					r = __params35.formals[__formalsIndex35++];
				} else if ((v in __params35.keywords)) {
					r = __params35.keywords[v];
					delete __params35.keywords[v];
				}
			} else if (__formalsIndex35 < __args35.length) {
				r = __args35[__formalsIndex35++];
			}
			return r;
		}
		var tensor2 = __getParam35("tensor2");
		var mat = __getParam35("mat");
		var beta = __getParam35("beta", 1);
		var alpha = __getParam35("alpha", 1);
		return (function () {
			/*
        Performs ((Mat*Beta)+((Tensor1@Tensor2)*Alpha)) and updates Tensor1
        with result and returns it

        Tensor1.Tensor2 is performed as Matrix product of two array The
        behavior depends on the arguments in the following way.

        *If both tensors are 1-dimensional, their dot product is returned.

        *If both arguments are 2-D they are multiplied like conventional
         matrices.

        *If either argument is N-D, N > 2, it is treated as a stack of
         matrices residing in the last two indexes and broadcast
         accordingly.

        *If the first argument is 1-D, it is promoted to a matrix by
         prepending a 1 to its dimensions. After matrix multiplication the
         prepended 1 is removed.

        *If the second argument is 1-D, it is promoted to a matrix by
         appending a 1 to its dimensions. After matrix multiplication the
         appended 1 is removed.

        Parameters
        ----------
        tensor2: TensorBase
            input tensor

        mat:

        beta: ,optional

        alpha: ,optional

        Returns
        -------
        TensorBase:
            Caller with values in-place
        */;
			_ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor2));
			_ensure_tensorbase(__pythonRuntime.utils.createParamsObj(mat));
			if (this.encrypted || tensor2.encrypted || mat.encrypted) {
				return NotImplemented;
			} else {
				this.data = np.array(np.matmul(this.data, tensor2.data));
				this.data = __pythonRuntime.ops.multiply(this.data, alpha);
				mat.data = __pythonRuntime.ops.multiply(mat.data, beta);
				this.data = __pythonRuntime.ops.add(this.data, mat.data);
				return self;
			}
		}).call(this);
	};
	TensorBase.prototype.addcmul = function () {
		var __params36 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex36 = 0;
		var __args36 = arguments;
		function __getParam36(v, d) {
			var r = d;
			if (__params36) {
				if (__formalsIndex36 < __params36.formals.length) {
					r = __params36.formals[__formalsIndex36++];
				} else if ((v in __params36.keywords)) {
					r = __params36.keywords[v];
					delete __params36.keywords[v];
				}
			} else if (__formalsIndex36 < __args36.length) {
				r = __args36[__formalsIndex36++];
			}
			return r;
		}
		var tensor2 = __getParam36("tensor2");
		var mat = __getParam36("mat");
		var value = __getParam36("value", 1);
		return (function () {
			/*
        Performs  element-wise multiplication of tensors

        Performs element-wise multiplication of tensor1 by tensor2,
        multiply the result by the scalar value and add it to mat.

        Parameters
        ----------
        tensor2: TensorBase
            input tensor

        mat:
            matrix to be added to

        value: ,optional
            value to be multiplied with

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
			return syft.addcmul(self, tensor2, mat, value);
		}).call(this);
	};
	TensorBase.prototype.addcmul_ = function () {
		var __params37 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex37 = 0;
		var __args37 = arguments;
		function __getParam37(v, d) {
			var r = d;
			if (__params37) {
				if (__formalsIndex37 < __params37.formals.length) {
					r = __params37.formals[__formalsIndex37++];
				} else if ((v in __params37.keywords)) {
					r = __params37.keywords[v];
					delete __params37.keywords[v];
				}
			} else if (__formalsIndex37 < __args37.length) {
				r = __args37[__formalsIndex37++];
			}
			return r;
		}
		var tensor2 = __getParam37("tensor2");
		var mat = __getParam37("mat");
		var value = __getParam37("value", 1);
		return (function () {
			/*
        Performs in-place element-wise multiplication of tensors

        Performs in-place element-wise multiplication of tensor1 by tensor2,
        multiply the result by the scalar value and add it to mat.

        Parameters
        ----------
        tensor2: TensorBase
            input tensor

        mat:
            matrix to be added to

        value: ,optional
            value to be multiplied with

        Returns
        -------
        TensorBase:
            Caller with values in-place
        */;
			_ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor2));
			_ensure_tensorbase(__pythonRuntime.utils.createParamsObj(mat));
			if (this.encrypted || tensor2.encrypted || mat.encrypted) {
				return NotImplemented;
			} else {
				this.data = __pythonRuntime.ops.multiply(this.data, tensor2.data);
				this.data = __pythonRuntime.ops.multiply(this.data, value);
				this.data = __pythonRuntime.ops.add(this.data, mat.data);
				return self;
			}
		}).call(this);
	};
	TensorBase.prototype.addcdiv = function () {
		var __params38 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex38 = 0;
		var __args38 = arguments;
		function __getParam38(v, d) {
			var r = d;
			if (__params38) {
				if (__formalsIndex38 < __params38.formals.length) {
					r = __params38.formals[__formalsIndex38++];
				} else if ((v in __params38.keywords)) {
					r = __params38.keywords[v];
					delete __params38.keywords[v];
				}
			} else if (__formalsIndex38 < __args38.length) {
				r = __args38[__formalsIndex38++];
			}
			return r;
		}
		var tensor2 = __getParam38("tensor2");
		var mat = __getParam38("mat");
		var value = __getParam38("value", 1);
		return (function () {
			/*
        Performs element-wise division

        Performs element-wise division of tensor1 by tensor2,
        multiply the result by the scalar value and add it to mat.

        Parameters
        ----------
        tensor2: TensorBase
            input tensor

        mat:
            matrix to be added to

        value: ,optional
            value to be multiplied with

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
			return syft.addcdiv(self, tensor2, mat, value);
		}).call(this);
	};
	TensorBase.prototype.addcdiv_ = function () {
		var __params39 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex39 = 0;
		var __args39 = arguments;
		function __getParam39(v, d) {
			var r = d;
			if (__params39) {
				if (__formalsIndex39 < __params39.formals.length) {
					r = __params39.formals[__formalsIndex39++];
				} else if ((v in __params39.keywords)) {
					r = __params39.keywords[v];
					delete __params39.keywords[v];
				}
			} else if (__formalsIndex39 < __args39.length) {
				r = __args39[__formalsIndex39++];
			}
			return r;
		}
		var tensor2 = __getParam39("tensor2");
		var mat = __getParam39("mat");
		var value = __getParam39("value", 1);
		return (function () {
			/*
        Performs in-place element-wise division

        Performs in-place element-wise division of tensor1 by tensor2,
        multiply the result by the scalar value and add it to mat.

        Parameters
        ----------
        tensor2: TensorBase
            input tensor

        mat:
            matrix to be added to

        value: ,optional
            value to be multiplied with

        Returns
        -------
        Caller with values in-place
        */;
			_ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor2));
			_ensure_tensorbase(__pythonRuntime.utils.createParamsObj(mat));
			if (this.encrypted || tensor2.encrypted || mat.encrypted) {
				return NotImplemented;
			} else {
				this.data = this.data / tensor2.data;
				this.data = __pythonRuntime.ops.multiply(this.data, value);
				this.data = __pythonRuntime.ops.add(this.data, mat.data);
				return self;
			}
		}).call(this);
	};
	TensorBase.prototype.addmv = function () {
		var __params40 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex40 = 0;
		var __args40 = arguments;
		function __getParam40(v, d) {
			var r = d;
			if (__params40) {
				if (__formalsIndex40 < __params40.formals.length) {
					r = __params40.formals[__formalsIndex40++];
				} else if ((v in __params40.keywords)) {
					r = __params40.keywords[v];
					delete __params40.keywords[v];
				}
			} else if (__formalsIndex40 < __args40.length) {
				r = __args40[__formalsIndex40++];
			}
			return r;
		}
		var mat = __getParam40("mat");
		var vec = __getParam40("vec");
		var beta = __getParam40("beta", 1);
		var alpha = __getParam40("alpha", 1);
		return (function () {
			/*
        Performs a matrix-vector product

        Performs a in-place matrix-vector product of the matrix mat and the
        vector vec.
        The vector tensor is added to the final result. tensor1 and vec are
        1d tensors
              out=(beta∗tensor)+(alpha∗(mat@vec2))

        Parameters
        ----------
        mat:
            input Matrix

        vec:
            input vector

        beta: ,optional

        alpha: ,optional

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
			return syft.addmv(self, mat, vec, beta, alpha);
		}).call(this);
	};
	TensorBase.prototype.addmv_ = function () {
		var __params41 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex41 = 0;
		var __args41 = arguments;
		function __getParam41(v, d) {
			var r = d;
			if (__params41) {
				if (__formalsIndex41 < __params41.formals.length) {
					r = __params41.formals[__formalsIndex41++];
				} else if ((v in __params41.keywords)) {
					r = __params41.keywords[v];
					delete __params41.keywords[v];
				}
			} else if (__formalsIndex41 < __args41.length) {
				r = __args41[__formalsIndex41++];
			}
			return r;
		}
		var mat = __getParam41("mat");
		var vec = __getParam41("vec");
		var beta = __getParam41("beta", 1);
		var alpha = __getParam41("alpha", 1);
		return (function () {
			/*"
        Performs a matrix-vector product

        Performs a in-place matrix-vector product of the matrix mat and the
        vector vec.
        The vector tensor is added to the final result. tensor1 and vec are
        1d tensors
              out=(beta∗tensor)+(alpha∗(mat@vec2))

        Parameters
        ----------
        mat:
            input Matrix

        vec:
            input vector

        beta: ,optional

        alpha: ,optional

        Returns
        -------
        TensorBase:
            Caller with in-placed values
        */;
			_ensure_tensorbase(__pythonRuntime.utils.createParamsObj(vec));
			_ensure_tensorbase(__pythonRuntime.utils.createParamsObj(mat));
			if (vec.data.ndim != 1) {
				__pythonRuntime.functions.print("dimension of vec is not 1");
			} else if (this.data.ndim != 1) {
				__pythonRuntime.functions.print("dimension of tensor is not 1");
			} else if (this.encrypted || vec.encrypted || mat.encrypted) {
				return NotImplemented;
			} else {
				var self = __pythonRuntime.ops.multiply(self, beta);
				var temp = __pythonRuntime.ops.multiply(np.matmul(mat.data, vec.data), alpha);
				self = __pythonRuntime.ops.add(self, temp);
				return self;
			}
		}).call(this);
	};
	TensorBase.prototype.bmm = function () {
		var __params42 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex42 = 0;
		var __args42 = arguments;
		function __getParam42(v, d) {
			var r = d;
			if (__params42) {
				if (__formalsIndex42 < __params42.formals.length) {
					r = __params42.formals[__formalsIndex42++];
				} else if ((v in __params42.keywords)) {
					r = __params42.keywords[v];
					delete __params42.keywords[v];
				}
			} else if (__formalsIndex42 < __args42.length) {
				r = __args42[__formalsIndex42++];
			}
			return r;
		}
		var tensor = __getParam42("tensor");
		return (function () {
			/*Performs a batch matrix-matrix product of this tesnor
        and tensor2. Both tensors must be 3D containing equal number
        of matrices.
        If this is a (b x n x m) Tensor, batch2 is a (b x m x p) Tensor,
        Result will be a (b x n x p) Tensor.

        Parameters
        ----------
        tensor : TensorBase
            The second operand in the bmm operation

        Returns
        -------
        TensorBase
            Computed tensor result for bmm operation
        */;
			return syft.bmm(self, tensor);
		}).call(this);
	};
	TensorBase.prototype.addbmm = function () {
		var __params43 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex43 = 0;
		var __args43 = arguments;
		function __getParam43(v, d) {
			var r = d;
			if (__params43) {
				if (__formalsIndex43 < __params43.formals.length) {
					r = __params43.formals[__formalsIndex43++];
				} else if ((v in __params43.keywords)) {
					r = __params43.keywords[v];
					delete __params43.keywords[v];
				}
			} else if (__formalsIndex43 < __args43.length) {
				r = __args43[__formalsIndex43++];
			}
			return r;
		}
		var tensor2 = __getParam43("tensor2");
		var mat = __getParam43("mat");
		var beta = __getParam43("beta", 1);
		var alpha = __getParam43("alpha", 1);
		return (function () {
			/*
        Perform batch matrix-matrix product of matrices

        Performs a batch matrix-matrix product of matrices stored in
        batch1(tensor1) and batch2(tensor2), with a reduced add step (all
        matrix multiplications get accumulated along the first dimension).
         mat is added to the final result.
         res=(beta∗M)+(alpha∗sum(batch1i@batch2i, i=0, b))
        * batch1 and batch2 must be 3D Tensors each containing the same
        number of matrices.

        Parameters
        ----------
        tensor2: TensorBase
            input tensor

        mat:
            input Matrix

        beta: ,optional

        alpha: ,optional

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
			return syft.addbmm(self, tensor2, mat, beta, alpha);
		}).call(this);
	};
	TensorBase.prototype.addbmm_ = function () {
		var __params44 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex44 = 0;
		var __args44 = arguments;
		function __getParam44(v, d) {
			var r = d;
			if (__params44) {
				if (__formalsIndex44 < __params44.formals.length) {
					r = __params44.formals[__formalsIndex44++];
				} else if ((v in __params44.keywords)) {
					r = __params44.keywords[v];
					delete __params44.keywords[v];
				}
			} else if (__formalsIndex44 < __args44.length) {
				r = __args44[__formalsIndex44++];
			}
			return r;
		}
		var tensor2 = __getParam44("tensor2");
		var mat = __getParam44("mat");
		var beta = __getParam44("beta", 1);
		var alpha = __getParam44("alpha", 1);
		return (function () {
			/*
        Perform batch matrix-matrix product of matrices

        Performs a in-place batch matrix-matrix product of matrices stored
        in batch1(tensor1) and batch2(tensor2), with a reduced add step
        (all matrix multiplications get accumulated along the first dimension).
         mat is added to the final result.
         res=(beta∗M)+(alpha∗sum(batch1i@batch2i, i=0, b)
        * batch1 and batch2 must be 3D Tensors each containing the same number
        of matrices.)

        Parameters
        ----------
        tensor2: TensorBase
            input tensor

        mat:
            input Matrix

        beta: ,optional

        alpha: ,optional

        Returns
        -------
        TensorBase:
            Caller with values in-place
        */;
			_ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor2));
			_ensure_tensorbase(__pythonRuntime.utils.createParamsObj(mat));
			if (tensor2.data.ndim != 3) {
				__pythonRuntime.functions.print("dimension of tensor2 is not 3");
			} else if (this.data.ndim != 3) {
				__pythonRuntime.functions.print("dimension of tensor1 is not 3");
			} else if (this.encrypted || tensor2.encrypted || mat.encrypted) {
				return NotImplemented;
			} else {
				this.data = np.matmul(this.data, tensor2.data);
				var sum_ = 0;
				{
					var __filbertRight0 = __pythonRuntime.functions.range(__pythonRuntime.functions.len(this.data));
					if (__filbertRight0 instanceof Array) {
						for (var __filbertIndex0 = 0; __filbertIndex0 < __filbertRight0.length; ++__filbertIndex0) {
							var i = __filbertRight0[__filbertIndex0];
							sum_ = __pythonRuntime.ops.add(sum_, this.data[__pythonRuntime.ops.subscriptIndex(this.data, i)]);
						}
					} else {
						for (i in __filbertRight0) {
							sum_ = __pythonRuntime.ops.add(sum_, this.data[__pythonRuntime.ops.subscriptIndex(this.data, i)]);
						}
					}
				}
				this.data = __pythonRuntime.ops.add(__pythonRuntime.ops.multiply(mat.data, beta), __pythonRuntime.ops.multiply(alpha, sum_));
				return self;
			}
		}).call(this);
	};
	TensorBase.prototype.baddbmm = function () {
		var __params45 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex45 = 0;
		var __args45 = arguments;
		function __getParam45(v, d) {
			var r = d;
			if (__params45) {
				if (__formalsIndex45 < __params45.formals.length) {
					r = __params45.formals[__formalsIndex45++];
				} else if ((v in __params45.keywords)) {
					r = __params45.keywords[v];
					delete __params45.keywords[v];
				}
			} else if (__formalsIndex45 < __args45.length) {
				r = __args45[__formalsIndex45++];
			}
			return r;
		}
		var tensor2 = __getParam45("tensor2");
		var mat = __getParam45("mat");
		var beta = __getParam45("beta", 1);
		var alpha = __getParam45("alpha", 1);
		return (function () {
			/*
        Performs a batch matrix-matrix product of matrices in
        batch1(tensor1) and batch2(tensor2). mat is added to the final result.

        resi=(beta∗Mi)+(alpha∗batch1i×batch2i)
        *batch1 and batch2 must be 3D Tensors each containing the same number
        of matrices.


        Parameters
        ----------
        tensor2: TensorBase
            input tensor

        mat:
            input Matrix

        beta: ,optional

        alpha: ,optional

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
			return syft.baddbmm(self, tensor2, mat, beta, alpha);
		}).call(this);
	};
	TensorBase.prototype.baddbmm_ = function () {
		var __params46 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex46 = 0;
		var __args46 = arguments;
		function __getParam46(v, d) {
			var r = d;
			if (__params46) {
				if (__formalsIndex46 < __params46.formals.length) {
					r = __params46.formals[__formalsIndex46++];
				} else if ((v in __params46.keywords)) {
					r = __params46.keywords[v];
					delete __params46.keywords[v];
				}
			} else if (__formalsIndex46 < __args46.length) {
				r = __args46[__formalsIndex46++];
			}
			return r;
		}
		var tensor2 = __getParam46("tensor2");
		var mat = __getParam46("mat");
		var beta = __getParam46("beta", 1);
		var alpha = __getParam46("alpha", 1);
		return (function () {
			/*
        Performs a batch matrix-matrix product of matrices in
        batch1(tensor1) and batch2(tensor2). mat is added to the final result.

        resi=(beta∗Mi)+(alpha∗batch1i×batch2i)
        *batch1 and batch2 must be 3D Tensors each containing the same number
        of matrices.


        Parameters
        ----------
        tensor2: TensorBase
            input tensor

        mat:
            input Matrix

        beta: ,optional

        alpha: ,optional

        Returns
        -------
        Caller with values in-place
        */;
			_ensure_tensorbase(__pythonRuntime.utils.createParamsObj(tensor2));
			_ensure_tensorbase(__pythonRuntime.utils.createParamsObj(mat));
			if (tensor2.data.ndim != 3) {
				__pythonRuntime.functions.print("dimension of tensor2 is not 3");
			} else if (this.data.ndim != 3) {
				__pythonRuntime.functions.print("dimension of tensor1 is not 3");
			} else if (this.encrypted || tensor2.encrypted || mat.encrypted) {
				return NotImplemented;
			} else {
				this.data = np.matmul(this.data, tensor2.data);
				this.data = __pythonRuntime.ops.multiply(this.data, alpha);
				this.data = __pythonRuntime.ops.add(this.data, __pythonRuntime.ops.multiply(mat.data, beta));
				return self;
			}
		}).call(this);
	};
	TensorBase.prototype.max = function () {
		var __params47 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex47 = 0;
		var __args47 = arguments;
		function __getParam47(v, d) {
			var r = d;
			if (__params47) {
				if (__formalsIndex47 < __params47.formals.length) {
					r = __params47.formals[__formalsIndex47++];
				} else if ((v in __params47.keywords)) {
					r = __params47.keywords[v];
					delete __params47.keywords[v];
				}
			} else if (__formalsIndex47 < __args47.length) {
				r = __args47[__formalsIndex47++];
			}
			return r;
		}
		var axis = __getParam47("axis", None);
		return (function () {
			/*
        If axis is not specified, finds the largest element in the tensor.

        Otherwise, reduces along the specified axis.


        Parameters
        ----------
        axis: ,optional


        Returns
        -------
        TensorBase:
            Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			if (axis === None) {
				return _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(np.max(this.data)));
			}
			return _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(np.max(this.data, axis)));
		}).call(this);
	};
	TensorBase.prototype.permute = function () {
		var __params48 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex48 = 0;
		var __args48 = arguments;
		function __getParam48(v, d) {
			var r = d;
			if (__params48) {
				if (__formalsIndex48 < __params48.formals.length) {
					r = __params48.formals[__formalsIndex48++];
				} else if ((v in __params48.keywords)) {
					r = __params48.keywords[v];
					delete __params48.keywords[v];
				}
			} else if (__formalsIndex48 < __args48.length) {
				r = __args48[__formalsIndex48++];
			}
			return r;
		}
		var dims = __getParam48("dims");
		return (function () {
			/*
        Permute the dimensions of this tensor.
        Parameters:	*dims (int...) – The desired ordering of dimensions

        Parameters
        ----------
        dims:

        Returns
        -------
        TensorBase:
            Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			if (dims === None) {
				ValueError("dims cannot be none");
			}
			return _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(np.transpose(this.data, dims)));
		}).call(this);
	};
	TensorBase.prototype.diag = function () {
		var __params49 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex49 = 0;
		var __args49 = arguments;
		function __getParam49(v, d) {
			var r = d;
			if (__params49) {
				if (__formalsIndex49 < __params49.formals.length) {
					r = __params49.formals[__formalsIndex49++];
				} else if ((v in __params49.keywords)) {
					r = __params49.keywords[v];
					delete __params49.keywords[v];
				}
			} else if (__formalsIndex49 < __args49.length) {
				r = __args49[__formalsIndex49++];
			}
			return r;
		}
		var tensor = __getParam49("tensor");
		return (function () {
			/*
        When input tensor is a vector (1D Tensor), returns a 2D square
        Tensor with the elements of input as the diagonal.

        Parameters
        ----------
        tensor: TensorBase

        Returns
        -------
        Numpy Array
        */;
			return np.diag(tensor);
		}).call(this);
	};
	TensorBase.prototype.transpose = function () {
		var __params50 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex50 = 0;
		var __args50 = arguments;
		function __getParam50(v, d) {
			var r = d;
			if (__params50) {
				if (__formalsIndex50 < __params50.formals.length) {
					r = __params50.formals[__formalsIndex50++];
				} else if ((v in __params50.keywords)) {
					r = __params50.keywords[v];
					delete __params50.keywords[v];
				}
			} else if (__formalsIndex50 < __args50.length) {
				r = __args50[__formalsIndex50++];
			}
			return r;
		}
		var dim0 = __getParam50("dim0");
		var dim1 = __getParam50("dim1");
		return (function () {
			/*
        Returns the transpose along the dimensions in a new Tensor.

        Parameters
        ----------
        dim0:
            Dimension0

        dim1:
            Dimension1

        Returns
        -------
        Output Tensor
        */;
			return syft.transpose(this.data, dim0, dim1);
		}).call(this);
	};
	TensorBase.prototype.transpose_ = function () {
		var __params51 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex51 = 0;
		var __args51 = arguments;
		function __getParam51(v, d) {
			var r = d;
			if (__params51) {
				if (__formalsIndex51 < __params51.formals.length) {
					r = __params51.formals[__formalsIndex51++];
				} else if ((v in __params51.keywords)) {
					r = __params51.keywords[v];
					delete __params51.keywords[v];
				}
			} else if (__formalsIndex51 < __args51.length) {
				r = __args51[__formalsIndex51++];
			}
			return r;
		}
		var dim0 = __getParam51("dim0");
		var dim1 = __getParam51("dim1");
		return (function () {
			/*
        Replaces the Tensor with its transpose along the dimensions.

        Parameters
        ----------
        dim0:
            Dimension0

        dim1:
            Dimension1

        Returns
        -------
        */;
			var num_dims = __pythonRuntime.functions.len(this.data.shape);
			var axes = __pythonRuntime.functions.list(__pythonRuntime.functions.range(num_dims));
			if (dim0 >= num_dims) {
				__pythonRuntime.functions.print("dimension 0 out of range");
			} else if (dim1 >= num_dims) {
				__pythonRuntime.functions.print("dimension 1 out of range");
			} else if (this.encrypted) {
				NotImplemented;
			} else {
				axes[__pythonRuntime.ops.subscriptIndex(axes, dim0)] = dim1;
				axes[__pythonRuntime.ops.subscriptIndex(axes, dim1)] = dim0;
				this.data = np.transpose(this.data, axes, __pythonRuntime.functions.tuple(axes));
			}
		}).call(this);
	};
	TensorBase.prototype.t = function () {
		return (function () {
			/*
        Returns the transpose along dimensions 0, 1 in a new Tensor.

        Parameters
        ----------

        Returns
        -------
        Output Tensor
        */;
			return this.transpose(0, 1);
		}).call(this);
	};
	TensorBase.prototype.t_ = function () {
		return (function () {
			/*
        Replaces the Tensor with its transpose along dimensions 0, 1.

        Parameters
        ----------

        Returns
        -------
        */;
			this.transpose_(0, 1);
		}).call(this);
	};
	TensorBase.prototype.unsqueeze = function () {
		var __params54 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex54 = 0;
		var __args54 = arguments;
		function __getParam54(v, d) {
			var r = d;
			if (__params54) {
				if (__formalsIndex54 < __params54.formals.length) {
					r = __params54.formals[__formalsIndex54++];
				} else if ((v in __params54.keywords)) {
					r = __params54.keywords[v];
					delete __params54.keywords[v];
				}
			} else if (__formalsIndex54 < __args54.length) {
				r = __args54[__formalsIndex54++];
			}
			return r;
		}
		var dim = __getParam54("dim");
		return (function () {
			/*
        Returns expanded Tensor.

        An additional dimension of size one is added
        to at index 'dim'.

        Parameters
        ----------
        dim:

        Returns
        -------
        Output Tensor

        */;
			return syft.unsqueeze(this.data, dim);
		}).call(this);
	};
	TensorBase.prototype.unsqueeze_ = function () {
		var __params55 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex55 = 0;
		var __args55 = arguments;
		function __getParam55(v, d) {
			var r = d;
			if (__params55) {
				if (__formalsIndex55 < __params55.formals.length) {
					r = __params55.formals[__formalsIndex55++];
				} else if ((v in __params55.keywords)) {
					r = __params55.keywords[v];
					delete __params55.keywords[v];
				}
			} else if (__formalsIndex55 < __args55.length) {
				r = __args55[__formalsIndex55++];
			}
			return r;
		}
		var dim = __getParam55("dim");
		return (function () {
			/*
        Replaces with an expanded Tensor. An additional dimension of
        size one is added to at index 'dim'.

        Parameters
        ----------
        dim:

        Returns
        -------
        */;
			var num_dims = __pythonRuntime.functions.len(this.data.shape);
			if (dim >= num_dims || dim < 0) {
				__pythonRuntime.functions.print("dimension out of range");
			} else if (this.encrypted) {
				NotImplemented;
			} else {
				this.data = np.expand_dims(this.data, dim);
			}
		}).call(this);
	};
	TensorBase.prototype.exp = function () {
		return (function () {
			/*
        Computes the exponential of each element in tensor.

        Parameters
        ----------

        Returns
        -------
        Output Tensors
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = np.exp(this.data);
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.exp_ = function () {
		return (function () {
			/*
        Computes the exponential of each element in-place.

        Parameters
        ----------

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = np.exp(this.data);
			return self;
		}).call(this);
	};
	TensorBase.prototype.frac = function () {
		return (function () {
			/*"
        Computes the fractional portion of each element in tensor.

        Parameters
        ----------

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = np.modf(this.data)[__pythonRuntime.ops.subscriptIndex(np.modf(this.data), 0)];
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.frac_ = function () {
		return (function () {
			/*"
        Computes the fractional portion of each element in-place.

        Parameters
        ----------

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = np.modf(this.data)[__pythonRuntime.ops.subscriptIndex(np.modf(this.data), 0)];
			return self;
		}).call(this);
	};
	TensorBase.prototype.sigmoid_ = function () {
		return (function () {
			/*
        Performs in-place sigmoid function on the Tensor elementwise

        Implementation details:
        Because of the way syft.math.sigmoid operates on a Tensor Object
        calling it on self.data will cause an input error thus we call
        sigmoid on the tensor object and we take the member 'data' from
        the returned Tensor

        Parameters
        ----------

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = syft.math.sigmoid(self).data;
			return self;
		}).call(this);
	};
	TensorBase.prototype.tanh_ = function () {
		return (function () {
			/*
        Performs tanh (hyperbolic tangent) function on the Tensor
        elementwise

        Parameters
        ----------

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = syft.math.tanh(self).data;
			return self;
		}).call(this);
	};
	TensorBase.prototype.__str__ = function () {
		return (function () {
			return __pythonRuntime.ops.add("BaseTensor: ", __pythonRuntime.functions.str(this.data));
		}).call(this);
	};
	TensorBase.prototype.__repr__ = function () {
		return (function () {
			return __pythonRuntime.ops.add("BaseTensor: ", __pythonRuntime.functions.repr(this.data));
		}).call(this);
	};
	TensorBase.prototype.rsqrt = function () {
		return (function () {
			/*
        Returns reciprocal of square root of Tensor element wise

        Parameters
        ----------

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = 1 / np.sqrt(this.data);
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.rsqrt_ = function () {
		return (function () {
			/*
        Computes reciprocal of square root of Tensor elements in-place

        Parameters
        ----------

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = 1 / np.sqrt(this.data);
		}).call(this);
	};
	TensorBase.prototype.sign = function () {
		return (function () {
			/*
        Return a tensor that contains sign of each element

        Parameters
        ----------

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = np.sign(this.data);
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.sign_ = function () {
		return (function () {
			/*
        Computes the sign of each element of the Tensor in-place

        Parameters
        ----------

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = np.sign(this.data);
		}).call(this);
	};
	TensorBase.prototype.to_numpy = function () {
		return (function () {
			/*
        Returns the tensor as numpy.ndarray

        Parameters
        ----------

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			return np.array(this.data);
		}).call(this);
	};
	TensorBase.prototype.reciprocal = function () {
		return (function () {
			/*
        Computes element wise reciprocal

        Parameters
        ----------

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = 1 / np.array(this.data);
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.reciprocal_ = function () {
		return (function () {
			/*
        Computes element wise reciprocal

        Parameters
        ----------

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = 1 / np.array(this.data);
		}).call(this);
	};
	TensorBase.prototype.log = function () {
		return (function () {
			/*
        Performs elementwise logarithm operation and returns a new Tensor

        Parameters
        ----------

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = np.log(this.data);
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.log_ = function () {
		return (function () {
			/*
        Performs elementwise logarithm operation in-place

        Parameters
        ----------

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = np.log(this.data);
			return self;
		}).call(this);
	};
	TensorBase.prototype.log1p = function () {
		return (function () {
			/*
        Performs elementwise log(1+x) operation and returns new
        tensor.

        Parameters
        ----------

        Returns
        -------
        Returns Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = np.log1p(this.data);
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.log1p_ = function () {
		return (function () {
			/*
        Performs element wise log(1+x) operation in-place

        Parameters
        ----------

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = np.log1p(this.data);
			return self;
		}).call(this);
	};
	TensorBase.prototype.log_normal_ = function () {
		var __params75 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex75 = 0;
		var __args75 = arguments;
		function __getParam75(v, d) {
			var r = d;
			if (__params75) {
				if (__formalsIndex75 < __params75.formals.length) {
					r = __params75.formals[__formalsIndex75++];
				} else if ((v in __params75.keywords)) {
					r = __params75.keywords[v];
					delete __params75.keywords[v];
				}
			} else if (__formalsIndex75 < __args75.length) {
				r = __args75[__formalsIndex75++];
			}
			return r;
		}
		var mean = __getParam75("mean", 0);
		var stdev = __getParam75("stdev", 1.0);
		return (function () {
			/*
        Fills given tensor with samples from a lognormal distribution
        with given mean and stdev

        Parameters
        ----------
        mean: ,optional

        stdev: ,optional

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = np.random.lognormal(mean, stdev, this.shape());
			return self;
		}).call(this);
	};
	TensorBase.prototype.clamp = function () {
		var __params76 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex76 = 0;
		var __args76 = arguments;
		function __getParam76(v, d) {
			var r = d;
			if (__params76) {
				if (__formalsIndex76 < __params76.formals.length) {
					r = __params76.formals[__formalsIndex76++];
				} else if ((v in __params76.keywords)) {
					r = __params76.keywords[v];
					delete __params76.keywords[v];
				}
			} else if (__formalsIndex76 < __args76.length) {
				r = __args76[__formalsIndex76++];
			}
			return r;
		}
		var minimum = __getParam76("minimum", None);
		var maximum = __getParam76("maximum", None);
		return (function () {
			/*
        Returns a clamped tensor into the range [min, max], elementwise

        Parameters
        ----------
        minimum: ,optional

        maximum: ,optional

        Returns
        -------
        Output Tensor; clamped
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			return new TensorBase(np.clip(this.data, a_min, minimum, a_max, maximum));
		}).call(this);
	};
	TensorBase.prototype.clamp_ = function () {
		var __params77 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex77 = 0;
		var __args77 = arguments;
		function __getParam77(v, d) {
			var r = d;
			if (__params77) {
				if (__formalsIndex77 < __params77.formals.length) {
					r = __params77.formals[__formalsIndex77++];
				} else if ((v in __params77.keywords)) {
					r = __params77.keywords[v];
					delete __params77.keywords[v];
				}
			} else if (__formalsIndex77 < __args77.length) {
				r = __args77[__formalsIndex77++];
			}
			return r;
		}
		var minimum = __getParam77("minimum", None);
		var maximum = __getParam77("maximum", None);
		return (function () {
			/*
        Clamp the tensor, in-place, elementwise into the range [min, max]

        Parameters
        ----------
        minimum: ,optional

        maximum: ,optional

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = np.clip(this.data, a_min, minimum, a_max, maximum);
			return self;
		}).call(this);
	};
	TensorBase.prototype.clone = function () {
		return (function () {
			/*
        Returns a copy of the tensor.

        The copy has the same size and data type as the original tensor.

        Parameters
        ----------

        Returns
        -------
        Output Tensor; clone of input Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			return new TensorBase(np.copy(this.data));
		}).call(this);
	};
	TensorBase.prototype.chunk = function () {
		var __params79 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex79 = 0;
		var __args79 = arguments;
		function __getParam79(v, d) {
			var r = d;
			if (__params79) {
				if (__formalsIndex79 < __params79.formals.length) {
					r = __params79.formals[__formalsIndex79++];
				} else if ((v in __params79.keywords)) {
					r = __params79.keywords[v];
					delete __params79.keywords[v];
				}
			} else if (__formalsIndex79 < __args79.length) {
				r = __args79[__formalsIndex79++];
			}
			return r;
		}
		var n = __getParam79("n");
		var dim = __getParam79("dim", 0);
		var same_size = __getParam79("same_size", false);
		return (function () {
			/*
        Returns a list of Tensors by Splitting tensors into Chunks.

        Returns a list of tensors by splitting the tensor into a number
        of chunks along a given dimension.
        Raises an exception if same_size is set to True and given
        tensor can't be split in n same-size chunks along dim.

        Parameters
        ----------
        n:

        dim: ,optional

        same_size: ,optional


        Returns
        -------
        List of Output Tensors
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			if (same_size) {
				return (function () {
					var __tmpList80 = new __pythonRuntime.objects.list();
					{
						var __filbertRight1 = np.split(this.data, n, dim);
						if (__filbertRight1 instanceof Array) {
							for (var __filbertIndex1 = 0; __filbertIndex1 < __filbertRight1.length; ++__filbertIndex1) {
								var x = __filbertRight1[__filbertIndex1];
								__tmpList80.push(new TensorBase(x));
							}
						} else {
							for (x in __filbertRight1) {
								__tmpList80.push(new TensorBase(x));
							}
						}
					}
					return __tmpList80;
				})();
			} else {
				return (function () {
					var __tmpList81 = new __pythonRuntime.objects.list();
					{
						var __filbertRight2 = np.array_split(this.data, n, dim);
						if (__filbertRight2 instanceof Array) {
							for (var __filbertIndex2 = 0; __filbertIndex2 < __filbertRight2.length; ++__filbertIndex2) {
								x = __filbertRight2[__filbertIndex2];
								__tmpList81.push(new TensorBase(x));
							}
						} else {
							for (x in __filbertRight2) {
								__tmpList81.push(new TensorBase(x));
							}
						}
					}
					return __tmpList81;
				})();
			}
		}).call(this);
	};
	TensorBase.prototype.gt = function () {
		var __params82 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex82 = 0;
		var __args82 = arguments;
		function __getParam82(v, d) {
			var r = d;
			if (__params82) {
				if (__formalsIndex82 < __params82.formals.length) {
					r = __params82.formals[__formalsIndex82++];
				} else if ((v in __params82.keywords)) {
					r = __params82.keywords[v];
					delete __params82.keywords[v];
				}
			} else if (__formalsIndex82 < __args82.length) {
				r = __args82[__formalsIndex82++];
			}
			return r;
		}
		var other = __getParam82("other");
		return (function () {
			/*
        Returns Boolean True if an Element calling is greater than second
        tensor.

        Returns a new Tensor having boolean True values where an element of
        the calling tensor is greater than the second Tensor,
        false otherwise.
        The second Tensor can be a number or a tensor whose shape is
        broadcastable with the calling Tensor.

        Parameters
        ----------
        other: TensorBase
            Other Tensor to be compared with

        Returns
        -------
        Output Tensor
        */;
			var other = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(other));
			if (this.encrypted || other.encrypted) {
				return NotImplemented;
			}
			return new TensorBase(np.greater(this.data, other.data));
		}).call(this);
	};
	TensorBase.prototype.gt_ = function () {
		var __params83 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex83 = 0;
		var __args83 = arguments;
		function __getParam83(v, d) {
			var r = d;
			if (__params83) {
				if (__formalsIndex83 < __params83.formals.length) {
					r = __params83.formals[__formalsIndex83++];
				} else if ((v in __params83.keywords)) {
					r = __params83.keywords[v];
					delete __params83.keywords[v];
				}
			} else if (__formalsIndex83 < __args83.length) {
				r = __args83[__formalsIndex83++];
			}
			return r;
		}
		var other = __getParam83("other");
		return (function () {
			/*
        Writes Boolean True if an Element calling is greater than second
        tensor

        Writes in-place, boolean True values where an element of the
        calling tensor is greater than the second Tensor,
        false otherwise.
        The second Tensor can be a number or a tensor whose shape is
        broadcastable with the calling Tensor.

        Parameters
        ----------
        other: TensorBase
            Other Tensor to be compared with

        Returns
        -------
        Caller with values in-place
        */;
			var other = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(other));
			if (this.encrypted || other.encrypted) {
				return NotImplemented;
			}
			this.data = np.greater(this.data, other.data);
			return self;
		}).call(this);
	};
	TensorBase.prototype.lt = function () {
		var __params84 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex84 = 0;
		var __args84 = arguments;
		function __getParam84(v, d) {
			var r = d;
			if (__params84) {
				if (__formalsIndex84 < __params84.formals.length) {
					r = __params84.formals[__formalsIndex84++];
				} else if ((v in __params84.keywords)) {
					r = __params84.keywords[v];
					delete __params84.keywords[v];
				}
			} else if (__formalsIndex84 < __args84.length) {
				r = __args84[__formalsIndex84++];
			}
			return r;
		}
		var other = __getParam84("other");
		return (function () {
			/*
        Returns Boolean True if an Element calling is less second
        tensor.

        Returns a new Tensor having boolean True values where an element
        of the calling tensor is less than the second Tensor,
        false otherwise.
        The second Tensor can be a number or a tensor whose shape is
        broadcastable with the calling Tensor.

        Parameters
        ----------
        other: TensorBase
            Other Tensor to be compared with

        Returns
        -------
        Output Tensor

        */;
			var other = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(other));
			if (this.encrypted || other.encrypted) {
				return NotImplemented;
			}
			return new TensorBase(np.less(this.data, other.data));
		}).call(this);
	};
	TensorBase.prototype.lt_ = function () {
		var __params85 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex85 = 0;
		var __args85 = arguments;
		function __getParam85(v, d) {
			var r = d;
			if (__params85) {
				if (__formalsIndex85 < __params85.formals.length) {
					r = __params85.formals[__formalsIndex85++];
				} else if ((v in __params85.keywords)) {
					r = __params85.keywords[v];
					delete __params85.keywords[v];
				}
			} else if (__formalsIndex85 < __args85.length) {
				r = __args85[__formalsIndex85++];
			}
			return r;
		}
		var other = __getParam85("other");
		return (function () {
			/*
        Writes Boolean True if an Element calling is less second
        tensor.

        Writes in-place, boolean True values where an element of the
        calling tensor is less than the second Tensor,
        false otherwise.
        The second Tensor can be a number or a tensor whose shape is
        broadcastable with the calling Tensor.

        Parameters
        ----------
        other: TensorBase
            Other Tensor to be compared with

        Returns
        -------
        Caller with values in-place
        */;
			var other = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(other));
			if (this.encrypted || other.encrypted) {
				return NotImplemented;
			}
			this.data = np.less(this.data, other.data);
			return self;
		}).call(this);
	};
	TensorBase.prototype.ge = function () {
		var __params86 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex86 = 0;
		var __args86 = arguments;
		function __getParam86(v, d) {
			var r = d;
			if (__params86) {
				if (__formalsIndex86 < __params86.formals.length) {
					r = __params86.formals[__formalsIndex86++];
				} else if ((v in __params86.keywords)) {
					r = __params86.keywords[v];
					delete __params86.keywords[v];
				}
			} else if (__formalsIndex86 < __args86.length) {
				r = __args86[__formalsIndex86++];
			}
			return r;
		}
		var other = __getParam86("other");
		return (function () {
			/*
        Returns Boolean True if an Element calling is greater than or equal
        to second tensor

        Returns a new Tensor having boolean True values where an element of
        the calling tensor is greater or equal than the second Tensor,
        false otherwise.
        The second Tensor can be a number or a tensor whose shape is
        broadcastable with the calling Tensor.

        Parameters
        ----------
        other: TensorBase
            Other Tensor to be compared with

        Returns
        -------
        Output Tensor
        */;
			var other = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(other));
			if (this.encrypted || other.encrypted) {
				return NotImplemented;
			}
			return new TensorBase(np.greater_equal(this.data, other.data));
		}).call(this);
	};
	TensorBase.prototype.ge_ = function () {
		var __params87 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex87 = 0;
		var __args87 = arguments;
		function __getParam87(v, d) {
			var r = d;
			if (__params87) {
				if (__formalsIndex87 < __params87.formals.length) {
					r = __params87.formals[__formalsIndex87++];
				} else if ((v in __params87.keywords)) {
					r = __params87.keywords[v];
					delete __params87.keywords[v];
				}
			} else if (__formalsIndex87 < __args87.length) {
				r = __args87[__formalsIndex87++];
			}
			return r;
		}
		var other = __getParam87("other");
		return (function () {
			/*
        Writes Boolean True if an Element calling is greater or equal
        to second tensor

        Writes in-place, boolean True values where an element of the
        calling tensor is greater or equal than the second Tensor,
        false otherwise.
        The second Tensor can be a number or a tensor whose shape is
        broadcastable with the calling Tensor.

        Parameters
        ----------
        other: TensorBase
            Other Tensor to be compared with

        Returns
        -------
        Caller with values in-place
        */;
			var other = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(other));
			if (this.encrypted || other.encrypted) {
				return NotImplemented;
			}
			this.data = np.greater_equal(this.data, other.data);
			return self;
		}).call(this);
	};
	TensorBase.prototype.le = function () {
		var __params88 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex88 = 0;
		var __args88 = arguments;
		function __getParam88(v, d) {
			var r = d;
			if (__params88) {
				if (__formalsIndex88 < __params88.formals.length) {
					r = __params88.formals[__formalsIndex88++];
				} else if ((v in __params88.keywords)) {
					r = __params88.keywords[v];
					delete __params88.keywords[v];
				}
			} else if (__formalsIndex88 < __args88.length) {
				r = __args88[__formalsIndex88++];
			}
			return r;
		}
		var other = __getParam88("other");
		return (function () {
			/*
        Returns Boolean True if an Element calling is less  or equal to
        second tensor

        Returns a new Tensor having boolean True values where an element
        of the calling tensor is less or equal than the second Tensor,
        false otherwise.
        The second Tensor can be a number or a tensor whose shape is
        broadcastable with the calling Tensor.

        Parameters
        ----------
        other: TensorBase
            Other Tensor to be compared with

        Returns
        -------
        Output Tensor
        */;
			var other = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(other));
			if (this.encrypted || other.encrypted) {
				return NotImplemented;
			}
			return new TensorBase(np.less_equal(this.data, other.data));
		}).call(this);
	};
	TensorBase.prototype.le_ = function () {
		var __params89 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex89 = 0;
		var __args89 = arguments;
		function __getParam89(v, d) {
			var r = d;
			if (__params89) {
				if (__formalsIndex89 < __params89.formals.length) {
					r = __params89.formals[__formalsIndex89++];
				} else if ((v in __params89.keywords)) {
					r = __params89.keywords[v];
					delete __params89.keywords[v];
				}
			} else if (__formalsIndex89 < __args89.length) {
				r = __args89[__formalsIndex89++];
			}
			return r;
		}
		var other = __getParam89("other");
		return (function () {
			/*
        Writes Boolean True if an Element calling is less or equal to
        second tensor

        Writes in-place, boolean True values where an element of the
        calling tensor is less or equal than the second Tensor,
        false otherwise.
        The second Tensor can be a number or a tensor whose shape is
        broadcastable with the calling Tensor.

        Parameters
        ----------
        other: TensorBase
            Other Tensor to be compared with

        Returns
        -------
        Caller with values in-place
        */;
			var other = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(other));
			if (this.encrypted || other.encrypted) {
				return NotImplemented;
			}
			this.data = np.less_equal(this.data, other.data);
			return self;
		}).call(this);
	};
	TensorBase.prototype.bernoulli = function () {
		var __params90 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex90 = 0;
		var __args90 = arguments;
		function __getParam90(v, d) {
			var r = d;
			if (__params90) {
				if (__formalsIndex90 < __params90.formals.length) {
					r = __params90.formals[__formalsIndex90++];
				} else if ((v in __params90.keywords)) {
					r = __params90.keywords[v];
					delete __params90.keywords[v];
				}
			} else if (__formalsIndex90 < __args90.length) {
				r = __args90[__formalsIndex90++];
			}
			return r;
		}
		var p = __getParam90("p");
		return (function () {
			/*
        Returns Tensor with random Numbers from Bernoulli Distri.

        Returns Tensor in-place with binary random numbers (0 or 1)
        from a bernoulli distribution with probability and shape
        specified by p(arr_like).

        The p Tensor should be a tensor containing probabilities to
        be used for drawing the binary random number.
        Hence, all values in p have to be in the range: 0<=p<=1

        Parameters
        ----------
        p:

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var p = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(p));
			return new TensorBase(np.random.binomial(1, p.data));
		}).call(this);
	};
	TensorBase.prototype.bernoulli_ = function () {
		var __params91 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex91 = 0;
		var __args91 = arguments;
		function __getParam91(v, d) {
			var r = d;
			if (__params91) {
				if (__formalsIndex91 < __params91.formals.length) {
					r = __params91.formals[__formalsIndex91++];
				} else if ((v in __params91.keywords)) {
					r = __params91.keywords[v];
					delete __params91.keywords[v];
				}
			} else if (__formalsIndex91 < __args91.length) {
				r = __args91[__formalsIndex91++];
			}
			return r;
		}
		var p = __getParam91("p");
		return (function () {
			/*
        Fills the Tensor with random Numbers from Bernoulli Distri.

        Fills the Tensor in-place with binary random numbers (0 or 1)
        from a bernoulli distribution with probability and shape
        specified by p(arr_like).

        The p Tensor should be a tensor containing probabilities to
        be used for drawing the binary random number.
        Hence, all values in p have to be in the range: 0<=p<=1

        Parameters
        ----------
        p:

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var p = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(p));
			this.data = np.random.binomial(1, p.data);
			return self;
		}).call(this);
	};
	TensorBase.prototype.uniform_ = function () {
		var __params92 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex92 = 0;
		var __args92 = arguments;
		function __getParam92(v, d) {
			var r = d;
			if (__params92) {
				if (__formalsIndex92 < __params92.formals.length) {
					r = __params92.formals[__formalsIndex92++];
				} else if ((v in __params92.keywords)) {
					r = __params92.keywords[v];
					delete __params92.keywords[v];
				}
			} else if (__formalsIndex92 < __args92.length) {
				r = __args92[__formalsIndex92++];
			}
			return r;
		}
		var low = __getParam92("low", 0);
		var high = __getParam92("high", 1);
		return (function () {
			/*
        Fills the tensor in-place with numbers sampled unifromly
        over the half-open interval [low,high) or from the uniform distribution

        Parameters
        -----------
        low: ,optional

        high: ,optional

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = np.random.uniform(low, low, high, high, size, this.shape());
			return self;
		}).call(this);
	};
	TensorBase.prototype.uniform = function () {
		var __params93 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex93 = 0;
		var __args93 = arguments;
		function __getParam93(v, d) {
			var r = d;
			if (__params93) {
				if (__formalsIndex93 < __params93.formals.length) {
					r = __params93.formals[__formalsIndex93++];
				} else if ((v in __params93.keywords)) {
					r = __params93.keywords[v];
					delete __params93.keywords[v];
				}
			} else if (__formalsIndex93 < __args93.length) {
				r = __args93[__formalsIndex93++];
			}
			return r;
		}
		var low = __getParam93("low", 0);
		var high = __getParam93("high", 1);
		return (function () {
			/*
        Returns a new tensor filled with numbers sampled uniformly
        over the half-open interval [low,high) or from the uniform distribution

        Parameters
        -----------
        low: ,optional

        high: ,optional

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = np.random.uniform(low, low, high, high, size, this.shape());
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.geometric_ = function () {
		var __params94 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex94 = 0;
		var __args94 = arguments;
		function __getParam94(v, d) {
			var r = d;
			if (__params94) {
				if (__formalsIndex94 < __params94.formals.length) {
					r = __params94.formals[__formalsIndex94++];
				} else if ((v in __params94.keywords)) {
					r = __params94.keywords[v];
					delete __params94.keywords[v];
				}
			} else if (__formalsIndex94 < __args94.length) {
				r = __args94[__formalsIndex94++];
			}
			return r;
		}
		var p = __getParam94("p");
		return (function () {
			/*Fills the given tensor in-place with samples from a geometric distribution
        with given probability of success of an individual trial.

        Parameters
        ----------
        p: float
            Probability of success of an individual trial

        Returns
        -------
        TensorBase
            Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = np.random.geometric(p, size, this.shape());
			return self;
		}).call(this);
	};
	TensorBase.prototype.cauchy_ = function () {
		var __params95 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex95 = 0;
		var __args95 = arguments;
		function __getParam95(v, d) {
			var r = d;
			if (__params95) {
				if (__formalsIndex95 < __params95.formals.length) {
					r = __params95.formals[__formalsIndex95++];
				} else if ((v in __params95.keywords)) {
					r = __params95.keywords[v];
					delete __params95.keywords[v];
				}
			} else if (__formalsIndex95 < __args95.length) {
				r = __args95[__formalsIndex95++];
			}
			return r;
		}
		var median = __getParam95("median", 0);
		var sigma = __getParam95("sigma", 1);
		return (function () {
			/*Fills the tensor in-place with numbers drawn from the Cauchy distribution:

        .. math:: P(x) = \frac{1}{\pi} \frac{\sigma}{(x - \textit{median})^2 + \sigma^2}

        Parameters
        ----------
        self : tensor
        median : scalar, optional
            Also known as the location parameter. Specifies the location of the distribution's peak.
        sigma : scalar, optional
            Also known as the scale parameter. Specifies the half-width at half-maximum (HWHM).

        Returns
        -------
        ret : tensor
            `self`, filled with drawn numbers.

        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = stats.cauchy.rvs(loc, median, scale, sigma, size, this.data.size).reshape(this.data.shape);
			return self;
		}).call(this);
	};
	TensorBase.prototype.fill_ = function () {
		var __params96 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex96 = 0;
		var __args96 = arguments;
		function __getParam96(v, d) {
			var r = d;
			if (__params96) {
				if (__formalsIndex96 < __params96.formals.length) {
					r = __params96.formals[__formalsIndex96++];
				} else if ((v in __params96.keywords)) {
					r = __params96.keywords[v];
					delete __params96.keywords[v];
				}
			} else if (__formalsIndex96 < __args96.length) {
				r = __args96[__formalsIndex96++];
			}
			return r;
		}
		var value = __getParam96("value");
		return (function () {
			/*
        Fills the tensor in-place with the specified value

        Parameters
        ----------
        value:
            Value to be filled

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data.fill(value);
			return self;
		}).call(this);
	};
	TensorBase.prototype.tolist = function () {
		return (function () {
			/*
        Returns a new tensor as (possibly a nested) list

        Parameters
        ----------

        Returns
        -------
        Output data in list of the tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = this.data.tolist();
			return out;
		}).call(this);
	};
	TensorBase.prototype.topk = function () {
		var __params98 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex98 = 0;
		var __args98 = arguments;
		function __getParam98(v, d) {
			var r = d;
			if (__params98) {
				if (__formalsIndex98 < __params98.formals.length) {
					r = __params98.formals[__formalsIndex98++];
				} else if ((v in __params98.keywords)) {
					r = __params98.keywords[v];
					delete __params98.keywords[v];
				}
			} else if (__formalsIndex98 < __args98.length) {
				r = __args98[__formalsIndex98++];
			}
			return r;
		}
		var k = __getParam98("k");
		var largest = __getParam98("largest", True);
		return (function () {
			/*
        Returns a new tensor with the sorted k largest (or smallest)
        values

        Parameters
        ----------
        k:

        largest: ,optional

        Returns
        -------
        Output Tensor; sorted k largest Values
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out_sort = np.sort(this.data);
			if (this.data.ndim > 1) {
				var out = np.partition(out_sort, kth, k);
				out = out._pySlice(null, new __pythonRuntime.objects.tuple(dummy59, -k), null);
				if (largest) {
					out._pySlice(null, new __pythonRuntime.objects.tuple(dummy61, dummy62), k);
				}
			} else {
				out = np.partition(out_sort, kth, k);
				out = out._pySlice(-k, null, null);
				if (largest) {
					out._pySlice(null, k, null);
				}
			}
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.trace = function () {
		var __params99 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex99 = 0;
		var __args99 = arguments;
		function __getParam99(v, d) {
			var r = d;
			if (__params99) {
				if (__formalsIndex99 < __params99.formals.length) {
					r = __params99.formals[__formalsIndex99++];
				} else if ((v in __params99.keywords)) {
					r = __params99.keywords[v];
					delete __params99.keywords[v];
				}
			} else if (__formalsIndex99 < __args99.length) {
				r = __args99[__formalsIndex99++];
			}
			return r;
		}
		var axis1 = __getParam99("axis1", None);
		var axis2 = __getParam99("axis2", None);
		return (function () {
			/*
        Returns a new tenosr with the sum along diagonals of a 2D tensor.

        Axis1 and Axis2 are used to extract 2D subarray for sum calculation
        along diagonals, if tensor has more than two dimensions.

        Parameters
        ----------
        axis1: ,optional
            Used to extract 2d subarray for sum calculation

        axis2: ,optional
            Used to extract 2d subarray for sum calculation

        Returns
        -------
        Output Tensor ; sum along diagonals
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			if (axis1 !== None && axis2 !== None && this.data.ndim > 2) {
				var out = np.trace(a, this.data, axis1, axis1, axis2, axis2);
			} else {
				out = np.trace(a, this.data);
			}
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.view = function () {
		var __params100 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex100 = 0;
		var __args100 = arguments;
		var args = [];
		if (__params100) {
			while (__formalsIndex100 < __realArgCount100) {
				args.push(arguments[__formalsIndex100++]);
			}
		} else {
			while (__formalsIndexundefined < __argsundefined.length) {
				args.push(__argsundefined[__formalsIndexundefined++]);
			}
		}
		return (function () {
			/*
        View the tensor.

        Parameters
        ----------
        args:
            Arguments to view

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			} else {
				var dt = np.copy(this.data);
				return new TensorBase(dt.reshape(__pythonRuntime.ops.multiply(dummy69, args)));
			}
		}).call(this);
	};
	TensorBase.prototype.view_as = function () {
		var __params101 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex101 = 0;
		var __args101 = arguments;
		function __getParam101(v, d) {
			var r = d;
			if (__params101) {
				if (__formalsIndex101 < __params101.formals.length) {
					r = __params101.formals[__formalsIndex101++];
				} else if ((v in __params101.keywords)) {
					r = __params101.keywords[v];
					delete __params101.keywords[v];
				}
			} else if (__formalsIndex101 < __args101.length) {
				r = __args101[__formalsIndex101++];
			}
			return r;
		}
		var tensor = __getParam101("tensor");
		return (function () {
			/*
        View as another tensor's shape

        Parameters
        ----------
        tensor:
            Input tensor

        Returns
        -------
        Output Tensor-View
        */;
			if (this.encrypted) {
				return NotImplemented;
			} else {
				return this.view(tensor.shape());
			}
		}).call(this);
	};
	TensorBase.prototype.resize_ = function () {
		var __params102 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex102 = 0;
		var __args102 = arguments;
		var size = [];
		if (__params102) {
			while (__formalsIndex102 < __realArgCount102) {
				size.push(arguments[__formalsIndex102++]);
			}
		} else {
			while (__formalsIndexundefined < __argsundefined.length) {
				size.push(__argsundefined[__formalsIndexundefined++]);
			}
		}
		return (function () {
			/*
        Resizes the input object.

        Parameters
        ----------
        size:
        */;
			var input_size = np.prod(size);
			var extension = input_size - this.data.size;
			var flattened = this.data.flatten();
			if (input_size >= 0) {
				if (extension > 0) {
					var data = np.append(flattened, np.zeros(extension));
					this.data = data.reshape(__pythonRuntime.ops.multiply(dummy70, size));
					__pythonRuntime.functions.print(this.data);
				} else if (extension < 0) {
					var size_ = __pythonRuntime.ops.add(this.data.size, extension);
					this.data = flattened._pySlice(null, size_, null);
					this.data = this.data.reshape(__pythonRuntime.ops.multiply(dummy71, size));
					__pythonRuntime.functions.print(this.data);
				} else {
					this.data = this.data.reshape(__pythonRuntime.ops.multiply(dummy72, size));
					__pythonRuntime.functions.print(this.data);
				}
			} else {
				ValueError('negative dimension not allowed');
			}
		}).call(this);
	};
	TensorBase.prototype.resize_as_ = function () {
		var __params103 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex103 = 0;
		var __args103 = arguments;
		function __getParam103(v, d) {
			var r = d;
			if (__params103) {
				if (__formalsIndex103 < __params103.formals.length) {
					r = __params103.formals[__formalsIndex103++];
				} else if ((v in __params103.keywords)) {
					r = __params103.keywords[v];
					delete __params103.keywords[v];
				}
			} else if (__formalsIndex103 < __args103.length) {
				r = __args103[__formalsIndex103++];
			}
			return r;
		}
		var tensor = __getParam103("tensor");
		return (function () {
			/*
        Resize Tensor

        Parameters
        ----------
        tensor:

        Returns
        -------
        */;
			var size = tensor.data.shape;
			this.resize_(size);
		}).call(this);
	};
	TensorBase.prototype.round = function () {
		var __params104 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex104 = 0;
		var __args104 = arguments;
		function __getParam104(v, d) {
			var r = d;
			if (__params104) {
				if (__formalsIndex104 < __params104.formals.length) {
					r = __params104.formals[__formalsIndex104++];
				} else if ((v in __params104.keywords)) {
					r = __params104.keywords[v];
					delete __params104.keywords[v];
				}
			} else if (__formalsIndex104 < __args104.length) {
				r = __args104[__formalsIndex104++];
			}
			return r;
		}
		var decimals = __getParam104("decimals", 0);
		return (function () {
			/*
        Returns a new tensor with elements rounded off to a nearest decimal place

        Parameters
        ----------
        decimals:

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = np.round(this.data, decimals, decimals);
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.round_ = function () {
		var __params105 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex105 = 0;
		var __args105 = arguments;
		function __getParam105(v, d) {
			var r = d;
			if (__params105) {
				if (__formalsIndex105 < __params105.formals.length) {
					r = __params105.formals[__formalsIndex105++];
				} else if ((v in __params105.keywords)) {
					r = __params105.keywords[v];
					delete __params105.keywords[v];
				}
			} else if (__formalsIndex105 < __args105.length) {
				r = __args105[__formalsIndex105++];
			}
			return r;
		}
		var decimals = __getParam105("decimals", 0);
		return (function () {
			/*
        Round the elements of tensor in-place to a nearest decimal place

        Parameters
        ----------
        decimal:

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = np.round(this.data, decimals, decimals);
			return self;
		}).call(this);
	};
	TensorBase.prototype.repeat = function () {
		var __params106 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex106 = 0;
		var __args106 = arguments;
		function __getParam106(v, d) {
			var r = d;
			if (__params106) {
				if (__formalsIndex106 < __params106.formals.length) {
					r = __params106.formals[__formalsIndex106++];
				} else if ((v in __params106.keywords)) {
					r = __params106.keywords[v];
					delete __params106.keywords[v];
				}
			} else if (__formalsIndex106 < __args106.length) {
				r = __args106[__formalsIndex106++];
			}
			return r;
		}
		var reps = __getParam106("reps");
		return (function () {
			/*
        Return a new tensor by repeating the values given by reps

        Parameters
        ----------
        reps:
            Number of Repeats

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = np.tile(this.data, reps, reps);
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.pow = function () {
		var __params107 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex107 = 0;
		var __args107 = arguments;
		function __getParam107(v, d) {
			var r = d;
			if (__params107) {
				if (__formalsIndex107 < __params107.formals.length) {
					r = __params107.formals[__formalsIndex107++];
				} else if ((v in __params107.keywords)) {
					r = __params107.keywords[v];
					delete __params107.keywords[v];
				}
			} else if (__formalsIndex107 < __args107.length) {
				r = __args107[__formalsIndex107++];
			}
			return r;
		}
		var exponent = __getParam107("exponent");
		return (function () {
			/*
        Return a new tensor by raising elements to the given exponent.

        If exponent is an array, each element of the tensor is raised positionally to the
        element of the exponent

        Parameters
        ----------
        exponent:

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = np.power(this.data, exponent);
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.pow_ = function () {
		var __params108 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex108 = 0;
		var __args108 = arguments;
		function __getParam108(v, d) {
			var r = d;
			if (__params108) {
				if (__formalsIndex108 < __params108.formals.length) {
					r = __params108.formals[__formalsIndex108++];
				} else if ((v in __params108.keywords)) {
					r = __params108.keywords[v];
					delete __params108.keywords[v];
				}
			} else if (__formalsIndex108 < __args108.length) {
				r = __args108[__formalsIndex108++];
			}
			return r;
		}
		var exponent = __getParam108("exponent");
		return (function () {
			/*
        Raise elements to the given exponent in-place.

        If exponent is an array, each element of the tensor is raised
        positionally to the element of the exponent

        Parameters
        ----------
        exponent:

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = np.power(this.data, exponent);
			return self;
		}).call(this);
	};
	TensorBase.prototype.prod = function () {
		var __params109 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex109 = 0;
		var __args109 = arguments;
		function __getParam109(v, d) {
			var r = d;
			if (__params109) {
				if (__formalsIndex109 < __params109.formals.length) {
					r = __params109.formals[__formalsIndex109++];
				} else if ((v in __params109.keywords)) {
					r = __params109.keywords[v];
					delete __params109.keywords[v];
				}
			} else if (__formalsIndex109 < __args109.length) {
				r = __args109[__formalsIndex109++];
			}
			return r;
		}
		var axis = __getParam109("axis", None);
		return (function () {
			/*
        Returns a new tensor with the product of (specified axis) all the elements

        Parameters
        ----------
        axis: ,optional

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = np.prod(this.data, axis, axis);
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.random_ = function () {
		var __params110 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex110 = 0;
		var __args110 = arguments;
		function __getParam110(v, d) {
			var r = d;
			if (__params110) {
				if (__formalsIndex110 < __params110.formals.length) {
					r = __params110.formals[__formalsIndex110++];
				} else if ((v in __params110.keywords)) {
					r = __params110.keywords[v];
					delete __params110.keywords[v];
				}
			} else if (__formalsIndex110 < __args110.length) {
				r = __args110[__formalsIndex110++];
			}
			return r;
		}
		var low = __getParam110("low");
		var high = __getParam110("high", None);
		var size = __getParam110("size", None);
		return (function () {
			/*
        Fill the tensor in-place with random integers from [low to high)

        Parameters
        ----------
        low:

        high: ,optional

        size: ,optional

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = np.random.randint(low, low, high, high, size, size);
			return self;
		}).call(this);
	};
	TensorBase.prototype.nonzero = function () {
		return (function () {
			/*
        Returns a new tensor with the indices of non-zero elements

        Parameters
        ----------

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = np.array(np.nonzero(this.data));
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.size = function () {
		return (function () {
			/*
        Size of tensor

        Parameters
        ----------

        Returns
        -------
        Size of the Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			} else {
				return this.data.size;
			}
		}).call(this);
	};
	TensorBase.prototype.cumprod = function () {
		var __params113 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex113 = 0;
		var __args113 = arguments;
		function __getParam113(v, d) {
			var r = d;
			if (__params113) {
				if (__formalsIndex113 < __params113.formals.length) {
					r = __params113.formals[__formalsIndex113++];
				} else if ((v in __params113.keywords)) {
					r = __params113.keywords[v];
					delete __params113.keywords[v];
				}
			} else if (__formalsIndex113 < __args113.length) {
				r = __args113[__formalsIndex113++];
			}
			return r;
		}
		var dim = __getParam113("dim", 0);
		return (function () {
			/*
        Returns the cumulative product of elements in the dimension dim.

        Parameters
        ----------
        dim:

        Returns
        -------
        compound product of the Input
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			return syft.math.cumprod(self, dim);
		}).call(this);
	};
	TensorBase.prototype.cumprod_ = function () {
		var __params114 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex114 = 0;
		var __args114 = arguments;
		function __getParam114(v, d) {
			var r = d;
			if (__params114) {
				if (__formalsIndex114 < __params114.formals.length) {
					r = __params114.formals[__formalsIndex114++];
				} else if ((v in __params114.keywords)) {
					r = __params114.keywords[v];
					delete __params114.keywords[v];
				}
			} else if (__formalsIndex114 < __args114.length) {
				r = __args114[__formalsIndex114++];
			}
			return r;
		}
		var dim = __getParam114("dim", 0);
		return (function () {
			/*
        calculate in-place the cumulative product of elements in the dimension dim.

        Parameters
        ----------
        dim: ,optional

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = syft.math.cumprod(self, dim).data;
			return self;
		}).call(this);
	};
	TensorBase.prototype.split = function () {
		var __params115 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex115 = 0;
		var __args115 = arguments;
		function __getParam115(v, d) {
			var r = d;
			if (__params115) {
				if (__formalsIndex115 < __params115.formals.length) {
					r = __params115.formals[__formalsIndex115++];
				} else if ((v in __params115.keywords)) {
					r = __params115.keywords[v];
					delete __params115.keywords[v];
				}
			} else if (__formalsIndex115 < __args115.length) {
				r = __args115[__formalsIndex115++];
			}
			return r;
		}
		var split_size = __getParam115("split_size");
		var dim = __getParam115("dim", 0);
		return (function () {
			/*
        Returns tuple of tensors of equally sized tensor/chunks (if possible)

        Parameters
        ----------
        split_size:

        dim:

        Returns
        -------
        Tuple of Tensors
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var splits = np.array_split(this.data, split_size, axis, 0);
			var tensors = __pythonRuntime.functions.list();
			{
				var __filbertRight3 = splits;
				if (__filbertRight3 instanceof Array) {
					for (var __filbertIndex3 = 0; __filbertIndex3 < __filbertRight3.length; ++__filbertIndex3) {
						var s = __filbertRight3[__filbertIndex3];
						tensors.append(new TensorBase(s));
					}
				} else {
					for (s in __filbertRight3) {
						tensors.append(new TensorBase(s));
					}
				}
			}
			var tensors_tuple = __pythonRuntime.functions.tuple(tensors);
			return tensors_tuple;
		}).call(this);
	};
	TensorBase.prototype.squeeze = function () {
		var __params116 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex116 = 0;
		var __args116 = arguments;
		function __getParam116(v, d) {
			var r = d;
			if (__params116) {
				if (__formalsIndex116 < __params116.formals.length) {
					r = __params116.formals[__formalsIndex116++];
				} else if ((v in __params116.keywords)) {
					r = __params116.keywords[v];
					delete __params116.keywords[v];
				}
			} else if (__formalsIndex116 < __args116.length) {
				r = __args116[__formalsIndex116++];
			}
			return r;
		}
		var axis = __getParam116("axis", None);
		return (function () {
			/*
        Returns a new tensor with all the single-dimensional entries removed

        Parameters
        ----------
        axis

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = np.squeeze(this.data, axis, axis);
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.expand_as = function () {
		var __params117 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex117 = 0;
		var __args117 = arguments;
		function __getParam117(v, d) {
			var r = d;
			if (__params117) {
				if (__formalsIndex117 < __params117.formals.length) {
					r = __params117.formals[__formalsIndex117++];
				} else if ((v in __params117.keywords)) {
					r = __params117.keywords[v];
					delete __params117.keywords[v];
				}
			} else if (__formalsIndex117 < __args117.length) {
				r = __args117[__formalsIndex117++];
			}
			return r;
		}
		var tensor = __getParam117("tensor");
		return (function () {
			/*
        Returns a new tensor with the expanded size as of the specified
        (input) tensor

        Parameters
        ----------
        tensor: TensorBase

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var shape = tensor.data.shape;
			var neg_shapes = np.where(shape == -1)[__pythonRuntime.ops.subscriptIndex(np.where(shape == -1), 0)];
			if (__pythonRuntime.functions.len(neg_shapes) > 1) {
				shape[__pythonRuntime.ops.subscriptIndex(shape, neg_shapes)] = this.data.shape[__pythonRuntime.ops.subscriptIndex(this.data.shape, neg_shapes)];
			}
			var out = np.broadcast_to(this.data, shape);
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.mean = function () {
		var __params118 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex118 = 0;
		var __args118 = arguments;
		function __getParam118(v, d) {
			var r = d;
			if (__params118) {
				if (__formalsIndex118 < __params118.formals.length) {
					r = __params118.formals[__formalsIndex118++];
				} else if ((v in __params118.keywords)) {
					r = __params118.keywords[v];
					delete __params118.keywords[v];
				}
			} else if (__formalsIndex118 < __args118.length) {
				r = __args118[__formalsIndex118++];
			}
			return r;
		}
		var dim = __getParam118("dim", None);
		var keepdim = __getParam118("keepdim", false);
		return (function () {
			/*
        Returns the mean of the tensor elements

        Parameters
        ----------
        dim: ,optional

        keepdim: ,optional

        Returns
        -------
        Output Tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = np.mean(this.data, axis, dim, keepdims, keepdim);
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.neg = function () {
		return (function () {
			/*
        Returns negative of the elements of tensor

        Parameters
        ----------

        Returns
        -------
        Negative of elements of tensor
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = __pythonRuntime.ops.multiply(-1, np.array(this.data));
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.neg_ = function () {
		return (function () {
			/*
        Sets negative of the elements of tensor in-place

        Parameters
        ----------

        Returns
        -------
        Caller with values in-place
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = __pythonRuntime.ops.multiply(-1, np.array(this.data));
			return self;
		}).call(this);
	};
	TensorBase.prototype.normal = function () {
		var __params121 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex121 = 0;
		var __args121 = arguments;
		function __getParam121(v, d) {
			var r = d;
			if (__params121) {
				if (__formalsIndex121 < __params121.formals.length) {
					r = __params121.formals[__formalsIndex121++];
				} else if ((v in __params121.keywords)) {
					r = __params121.keywords[v];
					delete __params121.keywords[v];
				}
			} else if (__formalsIndex121 < __args121.length) {
				r = __args121[__formalsIndex121++];
			}
			return r;
		}
		var mu = __getParam121("mu");
		var sigma = __getParam121("sigma");
		return (function () {
			/*
        Returns a Tensor of Random numbers

        Returns a Tensor of random numbers drawn from separate
        normal distributions who’s mean and standard deviation are given.

        Parameters
        ----------
        mu:

        sigma:

        Returns
        -------
        Tensor of Random Numbers
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			var out = np.random.normal(mu, sigma, this.data.shape);
			return new TensorBase(out);
		}).call(this);
	};
	TensorBase.prototype.normal_ = function () {
		var __params122 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex122 = 0;
		var __args122 = arguments;
		function __getParam122(v, d) {
			var r = d;
			if (__params122) {
				if (__formalsIndex122 < __params122.formals.length) {
					r = __params122.formals[__formalsIndex122++];
				} else if ((v in __params122.keywords)) {
					r = __params122.keywords[v];
					delete __params122.keywords[v];
				}
			} else if (__formalsIndex122 < __args122.length) {
				r = __args122[__formalsIndex122++];
			}
			return r;
		}
		var mu = __getParam122("mu");
		var sigma = __getParam122("sigma");
		return (function () {
			/*
        Returns a Tensor of random numbers

        Returns a Tensor of random numbers in-place drawn from separate
        normal distributions who’s mean and standard deviation are given.

        Parameters
        ----------
        mu:

        sigma:

        Returns
        -------
        Tensor of Random Numbers
        */;
			if (this.encrypted) {
				return NotImplemented;
			}
			this.data = np.random.normal(mu, sigma, this.data.shape);
			return self;
		}).call(this);
	};
	TensorBase.prototype.ne = function () {
		var __params123 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
		var __formalsIndex123 = 0;
		var __args123 = arguments;
		function __getParam123(v, d) {
			var r = d;
			if (__params123) {
				if (__formalsIndex123 < __params123.formals.length) {
					r = __params123.formals[__formalsIndex123++];
				} else if ((v in __params123.keywords)) {
					r = __params123.keywords[v];
					delete __params123.keywords[v];
				}
			} else if (__formalsIndex123 < __args123.length) {
				r = __args123[__formalsIndex123++];
			}
			return r;
		}
		var tensor = __getParam123("tensor");
		return (function () {
			/*
        Checks element-wise equality with the given tensor

        Parameters
        ----------
        tensor:

        Returns
        -------
        Boolean result with dimension of the input matrix
        */;
			if (this.encrypted) {
				return NotImplemented;
			} else {
				if (tensor.shape() == this.shape()) {
					var tensor2 = np.array((function () {
						var __tmpList124 = new __pythonRuntime.objects.list();
						dummy85
						return __tmpList124;
					})(), x, 0, __pythonRuntime.ops.in(x, np.equal(), false), tensor.data.flatten(), this.data.flatten()).tolist();
				}
				var result = tensor2.reshape(this.data.shape);
				return new TensorBase(result);
			}
			ValueError(('inconsistent dimensions {} and {}').format(), this.shape(), tensor.shape());
		}).call(this);
	};
}
function ne_() {
	var __params125 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex125 = 0;
	var __args125 = arguments;
	function __getParam125(v, d) {
		var r = d;
		if (__params125) {
			if (__formalsIndex125 < __params125.formals.length) {
				r = __params125.formals[__formalsIndex125++];
			} else if ((v in __params125.keywords)) {
				r = __params125.keywords[v];
				delete __params125.keywords[v];
			}
		} else if (__formalsIndex125 < __args125.length) {
			r = __args125[__formalsIndex125++];
		}
		return r;
	}
	var self = __getParam125("self");
	var tensor = __getParam125("tensor");
	return (function () {
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
	}).call(this);
}
function median() {
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
	var axis = __getParam126("axis", 1);
	var keepdims = __getParam126("keepdims", false);
	return (function () {
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
	}).call(this);
}
function mode() {
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
	return (function () {
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
	}).call(this);
}
function inverse() {
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
	return (function () {
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
	}).call(this);
}
function min() {
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
	var axis = __getParam129("axis", 1);
	var keepdims = __getParam129("keepdims", false);
	return (function () {
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
	}).call(this);
}
function histc() {
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
	var bins = __getParam130("bins", 10);
	var min = __getParam130("min", 0);
	var max = __getParam130("max", 0);
	return (function () {
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
			var __filbertTmp131 = np.histogram();
			var hist = __filbertTmp131[0];
			var edges = __filbertTmp131[1];
		}
		{
			var __filbertTmp132 = new __pythonRuntime.objects.tuple(bins, range);
			np.array(self.data) = __filbertTmp132[0];
			var bins = __filbertTmp132[1];
		}
		var dummy104 = new __pythonRuntime.objects.tuple(min, max);
		return new TensorBase(hist);
	}).call(this);
}
function scatter_() {
	var __params133 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex133 = 0;
	var __args133 = arguments;
	function __getParam133(v, d) {
		var r = d;
		if (__params133) {
			if (__formalsIndex133 < __params133.formals.length) {
				r = __params133.formals[__formalsIndex133++];
			} else if ((v in __params133.keywords)) {
				r = __params133.keywords[v];
				delete __params133.keywords[v];
			}
		} else if (__formalsIndex133 < __args133.length) {
			r = __args133[__formalsIndex133++];
		}
		return r;
	}
	var self = __getParam133("self");
	var dim = __getParam133("dim");
	var index = __getParam133("index");
	var src = __getParam133("src");
	return (function () {
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
			ValueError(__pythonRuntime.ops.add(__pythonRuntime.ops.add("Except for dimension ", __pythonRuntime.functions.str(dim)), dummy111));
			", all dimensions of index and output should be the same size";
		}
		if (index.data >= self.data.shape[__pythonRuntime.ops.subscriptIndex(self.data.shape, dim)]) {
			dummy113.any() || (index.data < 0).any();
		}
		IndexError();
		"The values of index must be between 0 and (self.data.shape[dim] -1)";
		function make_slice() {
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
			var arr = __getParam134("arr");
			var dim = __getParam134("dim");
			var i = __getParam134("i");
			return (function () {
				var slc = __pythonRuntime.ops.multiply(new __pythonRuntime.objects.list(slice(None)), arr.ndim);
				slc[__pythonRuntime.ops.subscriptIndex(slc, dim)] = i;
				return slc;
			}).call(this);
		}
		var idx = new __pythonRuntime.objects.list(new __pythonRuntime.objects.list(__pythonRuntime.ops.multiply(dummy116, np.indices(idx_xsection_shape).reshape(index.data.ndim - 1, -1))));
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
		var dummy119 = __pythonRuntime.functions.list(np.concatenate(idx, axis, 1));
		idx.insert(dim, idx.pop());
		if (!np.isscalar(src)) {
			var src = _ensure_tensorbase(__pythonRuntime.utils.createParamsObj(src));
			if (index.data.shape[__pythonRuntime.ops.subscriptIndex(index.data.shape, dim)] > src.data.shape[__pythonRuntime.ops.subscriptIndex(src.data.shape, dim)]) {
				IndexError(__pythonRuntime.ops.add(__pythonRuntime.ops.add("Dimension ", __pythonRuntime.functions.str(dim)), dummy122));
				"of index can not be bigger than that of src ";
			}
			var src_shape = __pythonRuntime.ops.add(src.data.shape._pySlice(null, dim, null), src.data.shape._pySlice(__pythonRuntime.ops.add(dim, 1), null, null));
			if (idx_xsection_shape != src_shape) {
				ValueError(__pythonRuntime.ops.add("Except for dimension ", dummy125));
				__pythonRuntime.ops.add(__pythonRuntime.functions.str(dim), ", all dimensions of index and src should be the same size");
			}
			var src_idx = __pythonRuntime.functions.list(idx);
			src_idx.pop(dim);
			src_idx.insert(dim, np.repeat(), np.arange(index.data.shape[__pythonRuntime.ops.subscriptIndex(index.data.shape, dim)]), np.prod(idx_xsection_shape));
		}
		self.data[__pythonRuntime.ops.subscriptIndex(self.data, idx)] = src.data[__pythonRuntime.ops.subscriptIndex(src.data, src_idx)];
	}).call(this);
}
self.data[__pythonRuntime.ops.subscriptIndex(self.data, idx)] = src;
return self;
function gather() {
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
	var self = __getParam135("self");
	var dim = __getParam135("dim");
	var index = __getParam135("index");
	return (function () {
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
			ValueError(__pythonRuntime.ops.add(__pythonRuntime.ops.add("Except for dimension ", __pythonRuntime.functions.str(dim)), dummy133));
			", all dimensions of index and self should be the same size";
		}
		if (index.data.dtype != np.dtype('int_')) {
			TypeError("The values of index must be integers");
		}
		var data_swaped = np.swapaxes(self.data, 0, dim);
		var index_swaped = np.swapaxes(index, 0, dim);
		var gathered = np.choose(index_swaped, data_swaped);
		return new TensorBase(np.swapaxes(gathered, 0, dim));
	}).call(this);
}
function serialize() {
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
	return (function () {
		/*
        Serializes Object to a pickle.

        Parameters
        ----------


        Returns
        -------
        pickle dumps
        */;
		return pickle.dumps(self);
	}).call(this);
}
function deserialize() {
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
	var b = __getParam137("b");
	return (function () {
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
	}).call(this);
}
function remainder() {
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
	var self = __getParam138("self");
	var divisor = __getParam138("divisor");
	return (function () {
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
	}).call(this);
}
function remainder_() {
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
	return (function () {
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
	}).call(this);
}
function index_select() {
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
	var dim = __getParam140("dim");
	var index = __getParam140("index");
	return (function () {
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
	}).call(this);
}
function mv() {
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
	var tensorvector = __getParam141("tensorvector");
	return (function () {
		if (self.encrypted) {
			NotImplemented;
		}
		return mv(__pythonRuntime.utils.createParamsObj(self, tensorvector));
	}).call(this);
}
function masked_scatter_() {
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
	var mask = __getParam142("mask");
	var source = __getParam142("source");
	return (function () {
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
			var __tmpList143 = new __pythonRuntime.objects.list();
			dummy139
			return __tmpList143;
		})();
		if (m == 0) {
			source_iter.__next__().item();
		}
		{
			var __filbertRight5 = mask_self_iter;
			if (__filbertRight5 instanceof Array) {
				for (var __filbertIndex5 = 0; __filbertIndex5 < __filbertRight5.length; ++__filbertIndex5) {
					var __filbertTmp144 = __filbertRight5[__filbertIndex5];
					var m = __filbertTmp144[0];
					var s = __filbertTmp144[1];
				}
			} else {
				for (var __filbertTmp145 = mask_self_iter in __filbertRight5) {
					m = __filbertTmp145[0];
					s = __filbertTmp145[1];
				}
			}
		}
		dummy142.data = np.reshape(out_flat, self.data.shape);
		return self;
	}).call(this);
}
function masked_fill_() {
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
	var mask = __getParam146("mask");
	var value = __getParam146("value");
	return (function () {
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
	}).call(this);
}
function masked_select() {
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
	return (function () {
		/*
        See :func:`tensor.masked_select`
        */;
		return masked_select(__pythonRuntime.utils.createParamsObj(self, mask));
	}).call(this);
}
function eq() {
	var __params148 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex148 = 0;
	var __args148 = arguments;
	function __getParam148(v, d) {
		var r = d;
		if (__params148) {
			if (__formalsIndex148 < __params148.formals.length) {
				r = __params148.formals[__formalsIndex148++];
			} else if ((v in __params148.keywords)) {
				r = __params148.keywords[v];
				delete __params148.keywords[v];
			}
		} else if (__formalsIndex148 < __args148.length) {
			r = __args148[__formalsIndex148++];
		}
		return r;
	}
	var self = __getParam148("self");
	var t = __getParam148("t");
	return (function () {
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
	}).call(this);
}
function eq_() {
	var __params149 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex149 = 0;
	var __args149 = arguments;
	function __getParam149(v, d) {
		var r = d;
		if (__params149) {
			if (__formalsIndex149 < __params149.formals.length) {
				r = __params149.formals[__formalsIndex149++];
			} else if ((v in __params149.keywords)) {
				r = __params149.keywords[v];
				delete __params149.keywords[v];
			}
		} else if (__formalsIndex149 < __args149.length) {
			r = __args149[__formalsIndex149++];
		}
		return r;
	}
	var self = __getParam149("self");
	var t = __getParam149("t");
	return (function () {
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
	}).call(this);
}
function mm() {
	var __params150 = arguments.length === 1 && arguments[0].formals && arguments[0].keywords ? arguments[0] : null;
	var __formalsIndex150 = 0;
	var __args150 = arguments;
	function __getParam150(v, d) {
		var r = d;
		if (__params150) {
			if (__formalsIndex150 < __params150.formals.length) {
				r = __params150.formals[__formalsIndex150++];
			} else if ((v in __params150.keywords)) {
				r = __params150.keywords[v];
				delete __params150.keywords[v];
			}
		} else if (__formalsIndex150 < __args150.length) {
			r = __args150[__formalsIndex150++];
		}
		return r;
	}
	var self = __getParam150("self");
	var tensor = __getParam150("tensor");
	return (function () {
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
	}).call(this);
}
function fmod_() {
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
	var divisor = __getParam151("divisor");
	return (function () {
		/*
        Performs the element-wise division of tensor by divisor.

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
	}).call(this);
}
function mv() {
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
	var tensormat = __getParam152("tensormat");
	var tensorvector = __getParam152("tensorvector");
	return (function () {
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
	}).call(this);
}
if (tensorvector.data.shape[__pythonRuntime.ops.subscriptIndex(tensorvector.data.shape, 0)] != tensormat.data.shape[__pythonRuntime.ops.subscriptIndex(tensormat.data.shape, 1)]) {
	ValueError(('vector dimensions {} not  \
            compatible with matrix {} ').format(tensorvector.data.shape, tensormat.data.shape));
} else {
	return new TensorBase(np.matmul(tensormat.data, tensorvector.data));
}
function masked_select() {
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
	var tensor = __getParam153("tensor");
	var mask = __getParam153("mask");
	return (function () {
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
			var __filbertTmp154 = np.broadcast_arrays();
			var mask_broadcasted = __filbertTmp154[0];
			var data_broadcasted = __filbertTmp154[1];
		}
		new __pythonRuntime.objects.tuple(mask.data, tensor.data);
		var indices = np.where(mask_broadcasted);
		return new TensorBase(data_broadcasted[__pythonRuntime.ops.subscriptIndex(data_broadcasted, indices)]);
	}).call(this);
}
