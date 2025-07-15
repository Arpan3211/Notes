function f() {
    e = 1;

    function g() {
        console.log(e)
    }
    return g();
}

f();