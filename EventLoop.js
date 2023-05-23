
function LevelTwo() {
   console.log("Inside Level Two!")
}
 
function LevelOne() {
   LevelTwo()
}
 
function main() {
   LevelOne()
}
 
console.log(main());