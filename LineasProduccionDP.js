// A space optimized solution for assembly line scheduling
 
    function carAssembleTime(a , t , e , x) {
        var n = a[0].length;
 
        // time taken to leave first station in line 1
        var first = e[0] + a[0][0];
 
        // time taken to leave first station in line 2
        var second = e[1] + a[1][0];
 
        for (var i = 1; i < n; i++) {
            var up = Math.min(first + a[0][i], second + t[1][i] + a[0][i]),
                    down = Math.min(second + a[1][i], first + t[0][i] + a[1][i]);
            first = up;
            second = down;
        }
 
        first += x[0];
        second += x[1];
 
        return Math.min(first, second);
        }
       var a = [ [ 4, 5, 3, 2 ], [ 2, 10, 1, 4 ] ];
        var t = [ [ 0, 7, 4, 5 ], [ 0, 9, 2, 8 ] ];
        var e = [ 10, 12 ], x = [ 18, 7 ];
 
        document.write(carAssembleTime(a, t, e, x));
     
// This code is contributed by gauravrajput1