function read(fname) {
	return open(os.path.join(os.path.dirname(__file__), fname)).read();
}
var requirements = read(__pythonRuntime.utils.createParamsObj('requirements.txt')).split();
setup();
var name = new __pythonRuntime.objects.tuple("syft");
var version = new __pythonRuntime.objects.tuple("0.1.0");
var author = new __pythonRuntime.objects.tuple("Amber Trask");
var author_email = new __pythonRuntime.objects.tuple("contact@openmined.org");
var description = new __pythonRuntime.objects.tuple("A library for Encrypted Deep Learning Algorithms");
var license = new __pythonRuntime.objects.tuple("Apache-2.0");
var keywords = new __pythonRuntime.objects.tuple("deep learning artificial intelligence homomorphic encryption");
var packages = new __pythonRuntime.objects.tuple(find_packages(exclude, new __pythonRuntime.objects.list('notebooks', 'test*', 'dist')));
var include_package_data = new __pythonRuntime.objects.tuple(True);
var long_description = new __pythonRuntime.objects.tuple(read(__pythonRuntime.utils.createParamsObj('README.md')));
var url = new __pythonRuntime.objects.tuple('github.com/OpenMined/Syft');
var classifiers = new __pythonRuntime.objects.list(dummy1);
new __pythonRuntime.objects.tuple("Development Status :: 1 - Alpha");
new __pythonRuntime.objects.tuple(dummy3);
var scripts = new __pythonRuntime.objects.tuple(new __pythonRuntime.objects.list('bin/syft_cmd'));
var install_requires = new __pythonRuntime.objects.tuple(requirements);
var setup_requires = new __pythonRuntime.objects.tuple(new __pythonRuntime.objects.list('pytest-runner'));
var tests_require = new __pythonRuntime.objects.list('pytest', 'pytest-flake8');
