var arrayList1 = [];
var arrayList2 = [];
var myObject1 = {};
var myObject2 = {};


function addInfo(){
	getInfo();
	document.getElementById("form1").reset();
}
function addProduct(){
	getProductVal();
	document.getElementById("form2").reset();

}
function totalVal(){
	getProductTotal(arrayList2);
}

function getInfo(){
	var nameVal = document.getElementById('name').value;
	var ageVal = document.getElementById('age').value;
	var tr = nameVal.trim();

	if(!nameVal || !ageVal ){
		alert("Empty fields! Please input");
		return;
	}else if( ageVal < 0){
		alert("Please enter number not less than 0");
		return;
	}
	
	myObject1.name = tr;
	myObject1.age = ageVal;

	arrayList1.push(myObject1);

	myObject1 = new Object();

	var read = document.getElementById('readable').innerHTML = "";
	
	for(var i in arrayList1){
		document.getElementById('readable').innerHTML += "name: " + arrayList1[i].name + ", age: "+ arrayList1[i].age + "<br>";
	}
	document.getElementById('final').innerHTML = "FINAL OBJECT : <br>" + JSON.stringify(arrayList1);
}

function getProductVal(){
	var prodName = document.getElementById('pname').value;
	var tr = prodName.trim();
	var stock = document.getElementById('stock').value;
	var prodPrice = document.getElementById('price').value;
	if(!prodName || !stock ||  !prodPrice){
		alert("Some fields are empty ! Please input");
		return;
	}else if(isNaN(stock) || isNaN(prodPrice)){
		alert("Please input number please");
		return;
	}else{

	myObject2.pName = tr;
	myObject2.stock = stock;
	myObject2.price = prodPrice;
	arrayList2.push(myObject2);

	myObject2 = new Object();
	
	document.getElementById('prodDisplay').innerHTML = "";
	
	for(var i in arrayList2){
		document.getElementById('prodDisplay').innerHTML += "Product name: " + arrayList2[i].pName + ", Stock: "+ arrayList2[i].stock + ", Price : "+arrayList2[i].price + "<br>";
	}
}
}

function getProductTotal(productList){
	var totalValue = 0;
	var total = document.getElementById('total');
	for(var i in productList){
		total.innerHTML += productList[i].pName +" will have a total value of " + productList[i].stock * productList[i].price +"<br>" ;
		totalValue +=  productList[i].stock * productList[i].price;
	}
	
	document.getElementById('totalVal').innerHTML = "TOTAL VALUE : " + totalValue.toFixed(2);
}


// VALIDATIONS






