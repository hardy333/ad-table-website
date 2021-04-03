const addBtn = document.querySelector(".add-bnt");
const table = document.querySelector(".table-section table");
const searchInput = document.querySelector(".search-input");
const filterSelect = document.querySelector(".ad-filter");
const trNames = document.querySelectorAll(".table-section table tbody tr td:first-child");

const searchIntable = () => { 
    const { value } = searchInput;

    trNames.forEach(trName => {
        let text = trName.innerText.toLowerCase();
        
        if(text.includes(value.trim().toLowerCase())){
            trName.parentElement.style.display = "table-row";
        }else{
            trName.parentElement.style.display = "none";
        }

    })

}

const filterTable = () => {
    const value = filterSelect.value.toLowerCase();

    trNames.forEach(trName => {
        if(value === "all"){
            trName.parentElement.style.display = "table-row";
            return;
        }

        if(trName.parentElement.classList.contains(value)){
            trName.parentElement.style.display = "table-row";
        }else{
            trName.parentElement.style.display = "none";
        }


    })

}
const removeRow = (e) => {
    if(e.target.tagName === "I"){
        console.log(e.target);
        e.target.parentElement.parentElement.style.display = "none";
    }else if(e.target.children[0] && e.target.children[0].tagName === "I"){
        e.target.parentElement.style.display = "none";
        console.log(e.target);
    }

}

table.addEventListener("click", removeRow);
filterSelect.addEventListener("change", filterTable);
searchInput.addEventListener("input", searchIntable);
