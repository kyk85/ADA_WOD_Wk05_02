var numArray=[];
var button=document.getElementById("tryme");
button.addEventListener("click", 
function palindromicNum(x,y) {
  numArray=[]
  var x=Number(document.getElementById("num1").value)
  var y=Number(document.getElementById("num2").value)
  for (i=x;i<=y;i++){
    for (j=x;j<=y;j++){
      var k = (i*j).toString()
      var K = k.toString().split("").reverse().join("");
      if (k==K) {
        numArray.push(i + "x" + j +"=" + k)
      }
    }
  } 
  if (numArray.length!==0){
  document.getElementById("output").innerHTML=numArray.pop()
  } else {
    document.getElementById("output").innerHTML="There are no palindromes"
  }
} )


