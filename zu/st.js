function areaOfTriangle(obj){
    var a=1*obj.st1.value;
    var b=1*obj.st2.value;
    var c=1*obj.st3.value;
    var p=(a+b+c)/2;
    var s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    var h=Math.round(s*100)/100;
    var j=Math.min(a,b,c);
    var g=Math.max(a,b,c);
    obj.res.value=h;
    obj.res1.value=j;
    obj.res2.value=g;
}
function area(obj1){
    var a1=1*obj1.st4.value;
    var b2=1*obj1.st5.value;
    var c3=1*obj1.st6.value;
    var d4 = ((Math.pow(b2,2) - (4*a1*c3)));
    var res3 = ((-1*b2) - Math.sqrt(d4))/(2*a1)
    var res4 = ((-1*b2) + Math.sqrt(d4))/(2*a1)
    obj1.res3.value=res3;
    obj1.res4.value=res4;
    
}