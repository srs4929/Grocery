function result()
{
    const dairyElement = document.querySelector('#dairy');
    const button=document.querySelector('button')
   
    dairyElement.innerHTML = `
        <li>Price: 2$</li>
        <li>Fresh and Healthy</li>
        <button onclick="buyItem('dairy')" class=" text-white border border-yellow-300 font-semibold italic rounded-3xl px-6 py-2 mt-2 hover:bg-green-900 hover:text-yellow-400 hover:border-none">Buy</button>
    `;
   

    
    dairyElement.classList.remove('hidden');
}

function hello()
{
    const tomato = document.querySelector('#tomato');
  
    tomato.innerHTML = `
        <li>Price: 5$</li>
        <li>Fresh and Healthy</li>
        <button onclick="buyItem('tomato')" class=" text-white border border-yellow-300 font-semibold italic rounded-3xl px-6 py-2 mt-2 hover:bg-green-900 hover:text-yellow-400 hover:border-none">Buy</button>
    `;
    tomato.classList.remove('hidden');
}

function ok()
{
    const veg = document.querySelector('#cumcumber');
    
   
    veg.innerHTML = `
        <li>Price: 3$</li>
        <li>Fresh and Healthy</li>
        <button onclick="buyItem('cumcumber')" class=" text-white border border-yellow-300 font-semibold italic rounded-3xl px-6 py-2 mt-2 hover:bg-green-900 hover:text-yellow-400 hover:border-none">Buy</button>
    `;

    veg.classList.remove('hidden');
}