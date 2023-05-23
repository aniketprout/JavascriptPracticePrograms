function First() {
    var a = 123
    var b = 145

    try {
        console.log("Division of " + a + " by " + b + "=" + a / b);
    } 
    catch (e) {
      console.log(e.description);
    }
    finally{
        console.log("The End");
    }
}

console.log(First())