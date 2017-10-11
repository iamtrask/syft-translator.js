class Benchmark {
	/*
    This is a testing class for the benchmarking of functions.
    Input of the Benchmark class should be the function to test
    and the params (optional)
    */;
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
		var function = __getParam0("function");
		var params = {};
		if (__params0) {
			params = __params0.keywords;
		}
		this.function = function;
		this.params = params;
	}
	exec_time() {
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
		var reps = __getParam1("reps", 1);
		"""
        Calls function x-times and returns an array of computed execution times
        """;
		var results = new __pythonRuntime.objects.list();
		{
			var __filbertRight0 = __pythonRuntime.functions.range(reps);
			if (__filbertRight0 instanceof Array) {
				for (var __filbertIndex0 = 0; __filbertIndex0 < __filbertRight0.length; ++__filbertIndex0) {
					var rep = __filbertRight0[__filbertIndex0];
					var t0 = time();
					this.function(Math.pow(dummy194, this.params));
					var t1 = time();
					results.append(t1 - t0);
				}
			} else {
				for (rep in __filbertRight0) {
					var t0 = time();
					this.function(Math.pow(dummy194, this.params));
					var t1 = time();
					results.append(t1 - t0);
				}
			}
		}
		return results;
	}
	profile_lines() {
		"""
        A simple wrapper to call the line_profiler.
        Prints the line_profiler output
        """;
		var lp = LineProfiler();
		var lp_wrapper = lp(this.function);
		lp_wrapper(Math.pow(dummy195, this.params));
		lp.print_stats();
	}
}
