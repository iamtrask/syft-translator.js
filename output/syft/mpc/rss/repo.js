var Q = 293973345475167247070445277780365744413;
{
	function MPCRepo() {
		object.call(this);
		return (function () {
			this.ints = new __pythonRuntime.objects.dict();
		}).call(this);
	}
	MPCRepo.prototype = Object.create(object.prototype);
	MPCRepo.prototype.set_siblings = function () {
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
		var a = __getParam1("a");
		var b = __getParam1("b");
		return (function () {
			this.siblings = __pythonRuntime.functions.list();
			this.left = a;
			this.right = b;
			this.siblings.append(a);
			this.siblings.append(b);
		}).call(this);
	};
	MPCRepo.prototype.create_float = function () {
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
		var secret = __getParam2("secret");
		return (function () {
			return MPCFixedPoint(secret, self);
		}).call(this);
	};
	MPCRepo.prototype.create_natural = function () {
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
		var secret = __getParam3("secret");
		return (function () {
			var shares = this.share(secret);
			return this.create_natural_with_shares(shares);
		}).call(this);
	};
	MPCRepo.prototype.create_natural_with_shares = function () {
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
		var shares = __getParam4("shares");
		return (function () {
			var id = np.random.randint(0, Math.pow(2, 32));
			this.create_share(id, shares[__pythonRuntime.ops.subscriptIndex(shares, 0)]);
			this.siblings[__pythonRuntime.ops.subscriptIndex(this.siblings, 0)].create_share(id, shares[__pythonRuntime.ops.subscriptIndex(shares, 1)]);
			this.siblings[__pythonRuntime.ops.subscriptIndex(this.siblings, 1)].create_share(id, shares[__pythonRuntime.ops.subscriptIndex(shares, 2)]);
			return MPCNatural(id, self);
		}).call(this);
	};
	MPCRepo.prototype.create_share = function () {
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
		var id = __getParam5("id");
		var share = __getParam5("share");
		return (function () {
			if (__pythonRuntime.ops.in(id, this.ints.keys(), true)) {
				this.ints[__pythonRuntime.ops.subscriptIndex(this.ints, id)] = share;
				return True;
			} else {
				return False;
			}
		}).call(this);
	};
	MPCRepo.prototype.get_share = function () {
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
		var id = __getParam6("id");
		return (function () {
			return this.ints[__pythonRuntime.ops.subscriptIndex(this.ints, id)];
		}).call(this);
	};
	MPCRepo.prototype.add = function () {
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
		var new_id = __getParam7("new_id");
		var id1 = __getParam7("id1");
		var id2 = __getParam7("id2");
		var populate_to_siblings = __getParam7("populate_to_siblings", false);
		return (function () {
			var share = __pythonRuntime.ops.add(this.ints[__pythonRuntime.ops.subscriptIndex(this.ints, id1)], this.ints[__pythonRuntime.ops.subscriptIndex(this.ints, id2)]) % Q;
			this.create_share(new_id, share);
			if (populate_to_siblings) {
				{
					var __filbertRight0 = this.siblings;
					if (__filbertRight0 instanceof Array) {
						for (var __filbertIndex0 = 0; __filbertIndex0 < __filbertRight0.length; ++__filbertIndex0) {
							var s = __filbertRight0[__filbertIndex0];
							s.add(new_id, id1, id2);
						}
					} else {
						for (s in __filbertRight0) {
							s.add(new_id, id1, id2);
						}
					}
				}
			}
			return MPCNatural(new_id, self);
		}).call(this);
	};
	MPCRepo.prototype.sub = function () {
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
		var new_id = __getParam8("new_id");
		var id1 = __getParam8("id1");
		var id2 = __getParam8("id2");
		var populate_to_siblings = __getParam8("populate_to_siblings", false);
		return (function () {
			var share = (this.ints[__pythonRuntime.ops.subscriptIndex(this.ints, id1)] - this.ints[__pythonRuntime.ops.subscriptIndex(this.ints, id2)]) % Q;
			this.create_share(new_id, share);
			if (populate_to_siblings) {
				{
					var __filbertRight1 = this.siblings;
					if (__filbertRight1 instanceof Array) {
						for (var __filbertIndex1 = 0; __filbertIndex1 < __filbertRight1.length; ++__filbertIndex1) {
							var s = __filbertRight1[__filbertIndex1];
							s.sub(new_id, id1, id2);
						}
					} else {
						for (s in __filbertRight1) {
							s.sub(new_id, id1, id2);
						}
					}
				}
			}
			return MPCNatural(new_id, self);
		}).call(this);
	};
	MPCRepo.prototype.share = function () {
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
		var secret = __getParam9("secret");
		return (function () {
			var first = random.randrange(Q);
			var second = random.randrange(Q);
			var third = (secret - first - second) % Q;
			return new __pythonRuntime.objects.list(first, second, third);
		}).call(this);
	};
	MPCRepo.prototype.mult_local = function () {
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
		var id1 = __getParam10("id1");
		var id2 = __getParam10("id2");
		return (function () {
			var x_0 = this.ints[__pythonRuntime.ops.subscriptIndex(this.ints, id1)];
			var y_0 = this.ints[__pythonRuntime.ops.subscriptIndex(this.ints, id2)];
			var x_1 = this.left.ints[__pythonRuntime.ops.subscriptIndex(this.left.ints, id1)];
			var y_1 = this.left.ints[__pythonRuntime.ops.subscriptIndex(this.left.ints, id2)];
			var z0 = __pythonRuntime.ops.add(__pythonRuntime.ops.add(__pythonRuntime.ops.multiply(x_0, y_0), __pythonRuntime.ops.multiply(x_0, y_1)), __pythonRuntime.ops.multiply(x_1, y_0)) % Q;
			return this.create_natural(z0);
		}).call(this);
	};
	MPCRepo.prototype.mult = function () {
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
		var new_id = __getParam11("new_id");
		var id1 = __getParam11("id1");
		var id2 = __getParam11("id2");
		var populate_to_siblings = __getParam11("populate_to_siblings", false);
		return (function () {
			var z0 = this.mult_local(id1, id2);
			var z1 = this.left.mult_local(id1, id2);
			var z2 = this.right.mult_local(id1, id2);
			return __pythonRuntime.ops.add(__pythonRuntime.ops.add(z0, z1), z2);
		}).call(this);
	};
	MPCRepo.prototype.mult_scalar = function () {
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
		var new_id = __getParam12("new_id");
		var id1 = __getParam12("id1");
		var scalar = __getParam12("scalar");
		var populate_to_siblings = __getParam12("populate_to_siblings", false);
		return (function () {
			var share = __pythonRuntime.ops.multiply(this.ints[__pythonRuntime.ops.subscriptIndex(this.ints, id1)], scalar) % Q;
			this.create_share(new_id, share);
			if (populate_to_siblings) {
				{
					var __filbertRight2 = this.siblings;
					if (__filbertRight2 instanceof Array) {
						for (var __filbertIndex2 = 0; __filbertIndex2 < __filbertRight2.length; ++__filbertIndex2) {
							var s = __filbertRight2[__filbertIndex2];
							s.mult_scalar(new_id, id1, scalar);
						}
					} else {
						for (s in __filbertRight2) {
							s.mult_scalar(new_id, id1, scalar);
						}
					}
				}
			}
			return MPCNatural(new_id, self);
		}).call(this);
	};
	MPCRepo.prototype.div_scalar = function () {
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
		var new_id = __getParam13("new_id");
		var id1 = __getParam13("id1");
		var scalar = __getParam13("scalar");
		var populate_to_siblings = __getParam13("populate_to_siblings", false);
		return (function () {
			var share = __pythonRuntime.functions.int(this.ints[__pythonRuntime.ops.subscriptIndex(this.ints, id1)] / scalar) % Q;
			this.create_share(new_id, share);
			if (populate_to_siblings) {
				{
					var __filbertRight3 = this.siblings;
					if (__filbertRight3 instanceof Array) {
						for (var __filbertIndex3 = 0; __filbertIndex3 < __filbertRight3.length; ++__filbertIndex3) {
							var s = __filbertRight3[__filbertIndex3];
							s.div_scalar(new_id, id1, scalar);
						}
					} else {
						for (s in __filbertRight3) {
							s.div_scalar(new_id, id1, scalar);
						}
					}
				}
			}
			return MPCNatural(new_id, self);
		}).call(this);
	};
}
