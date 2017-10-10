{
	__init__() {
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
		var sk = __getParam0("sk");
		return NotImplemented;
	}
	decrypt() {
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
		var x = __getParam1("x");
		return NotImplemented;
	}
	serialize() {
		return NotImplemented;
	}
}
{
	__init__() {
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
		var pk = __getParam3("pk");
		return NotImplemented;
	}
	encrypt() {
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
		var x = __getParam4("x");
		return NotImplemented;
	}
	serialize() {
		return NotImplemented;
	}
}
{
	__init__() {
		"";
	}
	deserialize() {
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
		var pubkey = __getParam7("pubkey");
		var seckey = __getParam7("seckey");
		return NotImplemented;
	}
	generate() {
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
		var n_length = __getParam8("n_length", 1024);
		return NotImplemented;
	}
}
