
var a = prompt("Enter Your Name Please","Enter Your Name");
var b = +prompt("English Marks","Enter Obtained Marks in English");
var c = +prompt("Urdu Marks","Enter Obtained Marks in Urdu");
var d = +prompt("Mathemaics Marks","Enter Obtained Marks in Mathematics");
var e = +prompt("Science Marks","Enter Obtained Marks in Science");
var sum = (b+c+d+e);
var per = (sum/400)*100;
if(per<40)
{
    alert("Sorry, You are Fail: " +a+ "Your PErcentage is:" +per);
}
else if(per>40 && per<60)
{
    alert("You are an Average student: " +a+ "Your percentage is:" +per);
}
else if(per>60 && per<80)
{
    alert("You are Good student: "+a+ "Your percentage is:"+per);
}
else if(per>80 && per<100)
{
    alert("You are an Brilliant student: "+a+ "Your percentage is:"+per);
}
