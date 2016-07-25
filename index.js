function receivesAFunction(callback) {
	callback()
}

function returnsANamedFunction() {
	return function stuff() {
	}
}

function returnsAnAnonymousFunction(argument) {
	return function () {
	}
}