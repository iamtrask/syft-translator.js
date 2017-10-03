{
	function PrecisionConfig() {
		object.call(this);
		return (function () {
			this.BASE = 10;
			this.PRECISION_INTEGRAL = 8;
			this.PRECISION_FRACTIONAL = 8;
			this.Q = 293973345475167247070445277780365744413;
			this.PRECISION = __pythonRuntime.ops.add(this.PRECISION_INTEGRAL, this.PRECISION_FRACTIONAL);
			this.Q > Math.pow(this.BASE, this.PRECISION);
			this.INVERSE = 104491423396290281423421247963055991507;
			this.KAPPA = 6;
			__pythonRuntime.ops.multiply(this.INVERSE, Math.pow(this.BASE, this.PRECISION_FRACTIONAL)) % this.Q == 1;
			this.Q > Math.pow(this.BASE, __pythonRuntime.ops.add(__pythonRuntime.ops.multiply(2, this.PRECISION), this.KAPPA));
		}).call(this);
	}
	PrecisionConfig.prototype = Object.create(object.prototype);
}
