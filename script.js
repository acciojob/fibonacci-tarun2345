function fibonacci(n) {
// your code here
	if(n==0)return 0;
	if(n==1)return 1;
	var fib = fibonacci(n-1)+fibonacci(n-2);
	return fib;
}

module.exports = fibonacci;
