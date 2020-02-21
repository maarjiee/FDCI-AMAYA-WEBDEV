var arrayList1 = [];
var arrayList2 = [];
var myObject1 = {};
var myObject2 = {};
/*
Disable first the TOTAL button
Since there's nothing to Calculate unless there is a product added
 */
disabled();
// ADDING PROCUT
function addProduct(){
	getProductVal();
}
// GETTING THE TOTAL VALUES OF THE PRODUCT WHEN CLICKED
function totalVal(){
	if(arrayList2.length == 0){
		alert("Some fields are empty! Please input");
		return;
	}
	getProductTotal(arrayList2);
	//disable the TOTAL button after Calculation of all value
	disabled();
}
// GETTING THE VALUES FROM THE PERSONS INFORMATION
document.getElementById("addPerson").addEventListener("click", getInfo);
function getInfo(e){
	var nameVal = document.getElementById('name').value;
	var ageVal = parseInt(document.getElementById('age').value);
	var tr = validate(nameVal);
	e.preventDefault();
	if(!checkForm(tr)) {
		return false;
	}
	if(!checkForm(ageVal)) {
		return false;
	}
	if(!checkDouble(arrayList1,tr)){
		return false ;
	}
	
	myObject1.name = tr;
	myObject1.age = ageVal;
	arrayList1.push(myObject1);
	//Creating new object for the list
	myObject1 = new Object();
	
	var read = document.getElementById('readable').innerHTML = "";
	for(var i in arrayList1){
		document.getElementById('readable').innerHTML += "name: " + arrayList1[i].name + ", age: "+ arrayList1[i].age + "<br>";
	}
		document.getElementById('final').innerHTML = "FINAL OBJECT : <br>" + JSON.stringify(arrayList1);

		// Clearing fields
		document.getElementById("name").value = "";
		document.getElementById("age").value = "";
	
}
// GETTINT THE PRODUCT VALUE
function getProductVal(){
	var prodName = document.getElementById('pname').value;
	var tr = validate(prodName);
	var stock = parseInt(document.getElementById('stock').value);
	var prodPrice = document.getElementById('price').value;

	if(!checkForm(stock)) {
		return false;
	}
	if(!checkForm(prodPrice)) {
		return false;
	}
	if(!checkDouble(arrayList2,tr)){
		return false ;
	}
	
	myObject2.name = tr; 
	myObject2.stock = stock;
	myObject2.price = prodPrice; 
	arrayList2.push(myObject2);
	
	myObject2 = new Object();

	document.getElementById('prodDisplay').innerHTML = "";
	// Displaying the List
	for(var i in arrayList2){
		document.getElementById('prodDisplay').innerHTML += "Product name: " + arrayList2[i].name + ", Stock: "+ arrayList2[i].stock + ", Price : "+arrayList2[i].price + "<br>";
	}
	
	//Clearing fields
	document.getElementById('pname').value = "";
	document.getElementById('stock').value = "";
	document.getElementById('price').value ="";
	

	// Enable the TOTAL Button IF has added product
	enabled();
	
}
// GETTING THE TOTAL VALUE OF THE PRODUCT AND DISPLAY
function getProductTotal(productList){
	var eachVal = 0;
	var totalValue = 0;
	var total = document.getElementById('total');
	total.innerHTML = "";
	for(var i in productList){
		eachVal = productList[i].stock * productList[i].price
		totalValue +=  eachVal;	
		// Displaying the total value of each product
		total.innerHTML += productList[i].name +" will have a total value of " + eachVal.toFixed(2) +"<br>" ;
	}
	// Displaying the TOTAL VALUE of all products
	document.getElementById('totalVal').innerHTML =  "TOTAL VALUE : "+ totalValue.toFixed(2);

}

/*----------------VALIDATIONS--------------------- */ 

// CHECKING INPUT VALUES
function checkForm(input){
	var retVal = true;

	if(!input || input == undefined  || input == null){
		alert("All fields are required!");
		retVal = false;
	}else if(input < 1 || input > 100){
		alert("Please enter correct age!");
		retVal = false;
	}else if(input != "" || input > 1 || input < 100){
		retVal = true;
	}else if(isNaN(input)){
		alert("Please enter correct age!");
		retVal = false;
	}else if(input != "" || input < 1 || input > 100 ){
		alert("Please enter correct age!");
		retVal = false;
	}
	return retVal;
}
// CHECKING IF DUPLICATE
function checkDouble(list,input){
	var retVal = true;
	for(var i in list){
		var list2 = list[i].name;

		if(list.length == 0){
			retVal = false;
		}else{
			if(input === list2){
				alert("Already exist! Please change");
				retVal = false;
			}
		}
	
	}
	return retVal;
}
//VALIDATE IF THE INPUT HAS SPECIAL CHARACTERS AND MANY SPACES
function validate(s) {
	 if (/^(\w+\s?)*\s*$/.test(s)) {
        return s.replace(/\s+$/, '');
    }
    alert("Input might have special characters and many spaces! Please check!");
}
//DISABLED THE TOTAL BUTTON
function disabled() {
	document.getElementById("btn2").disabled = true;

}
// ENABLED THE TOTAL BUTTON
function enabled() {
	document.getElementById("btn2").disabled = false;
	
}

