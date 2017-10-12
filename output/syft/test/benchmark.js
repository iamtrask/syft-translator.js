class Benchmark {
	/*
    This is a testing class for the benchmarking of functions.
    Input of the Benchmark class should be the function to test
    and the params (optional)
    */;
	constructor(function) {
		var params = {};
		if (__params0) {
			params = __params0.keywords;
		}
		this.function = function;
		this.params = params;
	}
	exec_time(reps) {
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
