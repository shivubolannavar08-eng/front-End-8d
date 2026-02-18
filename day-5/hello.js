const kle = ["veena","laxmi","Rohini","s cube"] // record 
let personname = "Vasu"; 
let puc = 69.0 ;  


if(puc>=60){
  console.log(personname +" Congratulations you are Qualified");
  kle.push(personname);
  console.log(kle);
  let status= "Rejected"; //Accepted or rejected 
  if(status==="Accepted"){
    console.log("Thank you for your time ,our Team get back to you withour 24hours ,gO and explore .... kle website ")
  }else{
    console.log("Thank you for your time we are deleting your recoords ")
    kle.pop();
    console.log(kle);

  }

}else{
  console.log(personname+" sorry you are not Qualified")
}

///var_name.push(value) 
//var_name.pop()