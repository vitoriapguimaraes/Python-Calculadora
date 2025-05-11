let historyData = [];

let ctx = document.body.classList;
let mdbc = document.getElementsByClassName("md-background")[0];
let mdb = mdbc.classList;
let modal = document.getElementsByClassName("modal");
mdbc.style.zIndex = '3';

document.getElementById('fab').addEventListener('click', () => openFAB());
document.getElementsByClassName('md-background')[0].addEventListener('click', () => openHistory(0));

function modalExport(){
    toggleFAB();
    
    mdbc.style.zIndex = '4';
    ctx.add("md-ctx");
    ctx.add("modal-two");
    ctx.remove("fab-ctx");
    modal[1].classList.add("backshow");
}

function modalHistory(){
    toggleFAB();
    
    mdbc.style.zIndex = '4';
    ctx.add("md-ctx");
    ctx.add("modal-one")
    ctx.remove("fab-ctx");
    modal[0].classList.add("backshow");
}

function openFAB(){
    toggleFAB();
    
    ctx.toggle("fab-ctx");
    mdbc.style.zIndex = '0';
    mdb.toggle("backshow");
    return 0;
}

function openHistory(state){
// todo: para ser somente um "onBackgroundClick"
    const FAB = 1;
    const MODAL = 2;
    
    let ctx = document.body.classList;
    let mdbc = document.getElementsByClassName("md-background")[0];
    let mdb = mdbc.classList;
    let modal = document.getElementsByClassName("modal")[1];
    
    try{
        if (ctx.contains("modal-two")){
            modal = document.getElementsByClassName("modal")[1];
            ctx.remove("modal-two");
        } else if (ctx.contains("modal-one")){
            modal = document.getElementsByClassName("modal")[0];
            ctx.remove("modal-one");
        };
        
        mdb.remove("backshow");
        
        if (ctx.contains("md-ctx")){
            modal.classList.remove("backshow");
            ctx.remove("md-ctx");
        } else {
            toggleFAB();
        }
        
    } catch (err) {
        alert(err);
    }
}

// colocar em.um script-tag separado

function createHistoryRow(operation, result) {
  // Cria os elementos
  const container = document.createElement('div');
  container.className = 'modal-content';

  const op = document.createElement('p');
  op.className = 'md-operation';
  op.textContent = operation;

  const trash = document.createElement('p');
  trash.className = 'md-exclude fa-solid fa-trash';
  trash.addEventListener('click', () => {
    container.remove(); // Remove o componente do DOM
  });

  const res = document.createElement('p');
  res.className = 'md-result';
  res.textContent = result;

  // Junta tudo
  container.appendChild(op);
  container.appendChild(trash);
  container.appendChild(res);

  return container;
}

const app = document.getElementById('app');
historyData.forEach(item => {
  const row = createHistoryRow(item.operation, item.result);
  app.appendChild(row);
});

function toggleFAB() {
  const options = document.querySelector('.fab-options');
  options.classList.toggle('show');
}
