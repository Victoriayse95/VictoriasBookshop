
const books=[
{title:"ChatGPT Mastery",category:"AI",price:"SGD 1",cover:"https://placehold.co/300x400?text=AI+Book"},
{title:"Prompt Engineering",category:"AI",price:"SGD 1",cover:"https://placehold.co/300x400?text=Prompt"},
{title:"Business Growth",category:"Business",price:"SGD 1",cover:"https://placehold.co/300x400?text=Business"},
{title:"Romance Forever",category:"Romance",price:"SGD 1",cover:"https://placehold.co/300x400?text=Romance"},
{title:"Investing 101",category:"Finance",price:"SGD 1",cover:"https://placehold.co/300x400?text=Finance"},
{title:"Healthy Living",category:"Health",price:"SGD 1",cover:"https://placehold.co/300x400?text=Health"}
];

const grid=document.getElementById('grid');
const filters=document.getElementById('filters');
const search=document.getElementById('search');

const cats=['All',...new Set(books.map(b=>b.category))];
let current='All';

cats.forEach(c=>{
 const el=document.createElement('span');
 el.className='chip';
 el.textContent=c;
 el.onclick=()=>{current=c;render();};
 filters.appendChild(el);
});

function render(){
 const q=search.value.toLowerCase();
 grid.innerHTML='';
 books.filter(b=>(current==='All'||b.category===current)&&b.title.toLowerCase().includes(q))
 .forEach(b=>{
  grid.innerHTML+=`
  <div class="card">
    <img src="${b.cover}">
    <div class="info">
      <div class="title">${b.title}</div>
      <div>${b.category}</div>
      <div class="price">${b.price}</div>
      <button>View Details</button>
    </div>
  </div>`;
 });
}
search.oninput=render;
render();
