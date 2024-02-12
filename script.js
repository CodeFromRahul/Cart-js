

    var arr = [
        {name:"Blue table " , price:"13,400" , image:"https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,caption:"Blue table"},
        {name:"Red table" , price:"12.342" , image:"https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,caption:"Blue table"},
        {name:"pink table" , price:"23,532" , image:"https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,caption:"Blue table"},
        {name:"purple table" , price:"13,000" , image:"https://plus.unsplash.com/premium_photo-1670950411934-e21abf39191e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,caption:"Blue table"},
        {name:"white table" , price:"15,000" , image:"https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,caption:"Blue table"},
        {name:"Yellow table" , price:"14,000" , image:"https://images.unsplash.com/photo-1565374395542-0ce18882c857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvZmF8ZW58MHx8MHx8fDA%3D" ,caption:"Blue table"}
    ];
    var product = [{name:"red table " , price:"13,400" , image:"https://images.unsplash.com/photo-1620145648299-f926ac0a9470?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,caption:"Blue table"},
    {name:"Red table" , price:"12.342" , image:"https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,caption:"Blue table"},
    {name:"pink table" , price:"23,532" , image:"https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,caption:"Blue table"},
    {name:"purple table" , price:"13,000" , image:"https://plus.unsplash.com/premium_photo-1670950411934-e21abf39191e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,caption:"Blue table"},
    {name:"white table" , price:"15,000" , image:"https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,caption:"Blue table"},
    {name:"Yellow table" , price:"14,000" , image:"https://images.unsplash.com/photo-1565374395542-0ce18882c857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvZmF8ZW58MHx8MHx8fDA%3D" ,caption:"Blue table"}
];


    function addProduct(){
       
    var cluter = "";
   arr.forEach(function(product){
    cluter+=` <div class="product w-fit rounded-xl p-2 bg-white overflow-hidden">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"><img class="w-full h-full object-cover"  src="${product.image}"></div>
    <div class="data w-full px-2 py-5">
    
        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.caption}</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.name}</h3>
                <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
            </div>
            <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                    class="ri-add-line"></i></button>
        </div>
    </div>
</div>
`
   });

   document.querySelector(".products").innerHTML = cluter;
    }


function popular(){
    var cluter = "";

    product.forEach(function(pop){
        cluter+=` <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${pop.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">Eyes Lounge</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">Bisco Do Lobo</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">$12,000</h4>
        </div>
    </div>`
    })
    document.querySelector(".populars").innerHTML = cluter;
}
    
    popular();

    addProduct();


  