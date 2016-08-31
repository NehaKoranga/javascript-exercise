var t= 10;
var str ="";
var s = t-1;
for(var i=0; i<t; i++)
{
	var k=i;
	for(var j=0; j<s;j++)
	{
		str = str + " ";
	}
	s--;
	while(k+1>0)
	{
		str = str + " * ";
		k--;
	}
	console.log(str);
	str="";
}
