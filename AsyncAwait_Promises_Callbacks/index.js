//Async JS Programing
//Callbacks,Promises & Async & Await

/* const datas=[
              {name:"Khadar",profression:"Software engineer"},
              {name:"Basha",profression:"Software engineer"}
            ];

function getData(){
  setTimeout(()=>{
    let output='';  
    datas.forEach((data,index)=>{
      output+=`<li>${data.name}</li>`;
    });

    document.body.innerHTML=output;
  },1000);
}

function createdata(newdata){
  setTimeout(()=>{
    datas.push(newdata);
    getData();  
  },2000);
}

createdata({name:"Nagoor",profression:"Railway enginer"});
getData(); */

/* //Callbacks
const datas=[
  {name:"Khadar",profression:"Software engineer"},
  {name:"Basha",profression:"Software engineer"}
];

function getData(){
setTimeout(()=>{
  let output='';  
  datas.forEach((data,index)=>{
  output+=`<li>${data.name}</li>`;
  });

  document.body.innerHTML=output;
},1000);
}

function createdata(newdata,callback){
setTimeout(()=>{
  datas.push(newdata);
  callback();  
},2000);
}

createdata({name:"Nagoor",profression:"Railway enginer"},getData); */


/* //Promises
const datas=[
  {name:"Khadar",profression:"Software engineer"},
  {name:"Basha",profression:"Software engineer"}
];

function getData(){
setTimeout(()=>{
  let output='';  
  datas.forEach((data,index)=>{
  output+=`<li>${data.name}</li>`;
  });
  document.body.innerHTML=output;
},1000);
}

function createdata(newdata){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      datas.push(newdata);
      let error=false;
      if(!error){
        resolve();
      }else{
        reject("error");
      }
      
    },2000);
  });

}

let result=createdata({name:"Nagoor",profression:"Railway enginer"});
result.then(getData).catch(err=>console.log(err)); */

//Async & Await
const datas=[
  {name:"Khadar",profression:"Software engineer"},
  {name:"Basha",profression:"Software engineer"}
];

function getData(){
  setTimeout(()=>{
    let output='';  
    datas.forEach((data,index)=>{
    output+=`<li>${data.name}</li>`;
    });
    document.body.innerHTML=output;
  },1000);
}

function createdata(newdata){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      datas.push(newdata);
      let error=false;
      if(!error){
        resolve();
      }else{
        reject("error");
      }
      
    },2000);
  });

}

/* let result=createdata({name:"Nagoor",profression:"Railway enginer"});
result.then(getData).catch(err=>console.log(err)); */

async function start(){
  await createdata({name:"Nagoor",profression:"Railway enginer"});
  getData();
}

start();
