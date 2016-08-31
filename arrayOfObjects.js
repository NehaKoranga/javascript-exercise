var myObj =[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

var newObject={};
var newArray=[];
for(var i=0; i<myObj.length;i++)
{
	var myList=myObj[i].occupation;
	if(!newArray[myList]){
		newObject[myList]=[];
		newArray[myList]=[];}
	newObject[myList].push({"name ":myObj[i].name, "age" :myObj[i].age});
}
console.log(newObject)
