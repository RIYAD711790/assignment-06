function scrollToDiv() {
    document.getElementById("targetdiv").scrollIntoView({ behavior: "smooth" });
}
function scrollToDi() {
    document.getElementById("learn-container").scrollIntoView({ behavior: "smooth" });
}


function removeActiveClass(){
    const activeBtns=document.getElementsByClassName('active')
    for(let btn of activeBtns ){
        btn.classList.remove('active')
    }
    }


function loadData(){
    //fecth
   fetch("https://openapi.programming-hero.com/api/levels/all")
   .then(res=>res.json())
   //3rd display
   .then(data=>displayData(data.data))
}
function loadDATA(){
    fetch("https://openapi.programming-hero.com/api/level/5")
    .then(res=>res.json())
    .then(data=>displayDATA(data.data))
}
const loadDataID=(id)=>{
    //console.log(id)
    const url=`https://openapi.programming-hero.com/api/level/${id}`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        removeActiveClass()
        const clickedButton=document.getElementById(`${id}`)
        clickedButton.classList.add('active')
        console.log(clickedButton)
        displayDATA(data.data)})
    

}
const loadDatadetail=(id)=>{
    console.log(id);
    const url=`https://openapi.programming-hero.com/api/word/${id}`
    console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDataDetail(data.data))
}
const displayDataDetail=(data)=>{
    console.log(data)
    document.getElementById('id_detail').showModal()
    const detailContainer=document.getElementById('detail-container')
    detailContainer.innerHTML=`
    <h1 class="font-bold text-xl">${data.word}</h1>
    <p  class="font-bold mb-3" >meaning-<br> ${data.meaning}</p>
    <p  class="font-bold mb-3 " >Example-<br> ${data.sentence}</p>
    <p  class="font-bold " >সমার্থক শব্দ গুলো-<br>[${data.synonyms}]</p>
   
    
    `
}



//display data
function displayData(datas){
//get container
const dataContainer=document.getElementById('data-container')
//loop
for(let data of datas){
    //console.log(data)
    
    //creat elements
    const dataDiv=document.createElement("div")
    dataDiv.innerHTML=`
    <button id="${data.level_no}" onclick="loadDataID(${data.level_no})" class="btn border-blue-700 text-blue-700 hover:bg-blue-600 hover:text-white">${data.lessonName}</button>
    `
    dataContainer.appendChild(dataDiv)

//append

}
}
//include loadDATA()
const displayDATA=(DATAS)=>{
    const dataContainer=document.getElementById('DATA-container')
    dataContainer.innerHTML=""
    if(DATAS.length==0){
        dataContainer.innerHTML=`
        <div class=" bg-slate-200 rounded-xl col-span-full w-full flex flex-col justify-center items-center mx-auto py-20 ">
        <img  src="assets/alert-error.png" alt="">
        <p class="text-gray-500">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h1 class="text-xl">নেক্সট Lesson এ যান</h1>
      </div> `

        return;
    }
    DATAS.forEach(DATA=>{
        //console.log(DATA)
        const dataCard=document.createElement('div')
        dataCard.innerHTML=`
       <div class="p-5 bg-slate-100 rounded-xl mb-5 text-center "><!--main-->
        <div>
            <h1 class="font-bold text-xl " > ${DATA.word}</h1>
            <p class="font-medium mt-3">Meaning /Pronounciation</p>
            <h1 class="font-semibold text-xl mt-3 mb-10">${DATA.meaning}</h1>
        </div>
        <div class="flex justify-between">
         <button onclick=loadDatadetail(${DATA.id})  class="btn btn-sm"><img src="assets/icons8-exclamation-mark-30.png" alt=""> </button>
    <img  class="w-4" src="assets/icons8-sound-50.png" alt="">

        </div>

    </div><!--main-->
        `
        dataContainer.appendChild(dataCard)
    })

}

function checkAndHide() {
    let number = document.getElementById("inputNumber").value;
    let targetDiv = document.getElementById("targetDiv");

    
    if (number === "123456") {
        alert('your are right')
        targetDiv.classList.add("hidden"); // TailwindCSS hidden ক্লাস ব্যবহার
    } else {
        targetDiv.classList.remove("hidden");
    }
}



loadData()
