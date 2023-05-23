var promise = new Promise(function(resolve, reject) { 
    const x = "Constant"; 
    const y = "Constant";
    if(x === y) { 
      resolve(); 
    } else { 
      reject(); 
    } 
  }); 
      
promise. 
    then(function () { 
        console.log('Success, Constant'); 
    }). 
    catch(function () { 
        console.log('Some error has occurred'); 
    });

// async
const getData = async() => {
    let data = "Hello World";
    return data;
}
     
getData().then(data => console.log(data));

//Await
const getData1 = async() => {
    let y = await "Hello World";
    console.log(y);
}
 
console.log(1);
getData1();
console.log(2);