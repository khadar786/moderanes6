//Higher Order Functions

//forEach
//filter
//map
//sort
//reduce

const companies=[
  {name:"Goolge",category:"Product Based",start:1981,end:2004},
  {name:"Amazon",category:"Product Based",start:1992,end:2008},
  {name:"Paytm",category:"Product Based",start:1999,end:207},
  {name:"Coforge",category:"Service Based",start:1989,end:2010},
  {name:"Mindtree",category:"Service Based",start:1989,end:2010}
];

const ages=[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

//forEach
/* companies.forEach((company,index)=>{
  console.log(company);
}); */

//companies.forEach((company)=>(console.log(company.name)));

//filter
/* const filterAges=ages.filter((age)=>{
  if(age>=30){
    return true;
  }
});
console.log(filterAges); */
/* const filterAges=ages.filter((age)=>age>=20);
console.log(filterAges); */
/* 
const filterCompanies=companies.filter((company)=>company.category=="Service Based");
console.log(filterCompanies); */

//map
/* const dummyCompanies=companies.map((company,index)=>{
  //console.log(company.name,index);
  return `${company.name} ${company.category}`;
});
console.log(dummyCompanies); */

const noOfServicebasedCompanies=companies.map((company,index)=>{
    if(company.category=="Service Based"){
      return true;
    }else{
      return;
    }
});

console.log(noOfServicebasedCompanies);