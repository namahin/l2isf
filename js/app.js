// dropdown js
function searchDrop() {
    document.getElementById("search_drop").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.drop-btn')) {
        var dropdowns = document.getElementsByClassName("drop-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// search auto complete js

const searchBox = document.querySelector(".search-box");
const searchField = searchBox.querySelector(".search-field");
const investorType = searchBox.querySelector(".investor");
const entrepreneurType = searchBox.querySelector(".entrepreneur");
const freelancerType = searchBox.querySelector(".freelancer");
const investorSubmit = searchBox.querySelector(".investor-submit");
const entrepreneurSubmit = searchBox.querySelector(".entrepreneur-submit");
const freelancerSubmit = searchBox.querySelector(".freelancer-submit");
let linkTag = searchBox.querySelector("a");
let webLink;
let suggestions = [];


searchBox.onkeyup = (e) => {
    let searchFieldData = e.target.value;
    let emptyArray = [];
    if (searchFieldData) {
        let searchFieldRecycleData = searchFieldData.split(" ").join("+");
        investorSubmit.onclick = () => {
            webLink = `https://matthewc199.sg-host.com/investor-search/?username=${searchFieldRecycleData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        entrepreneurSubmit.onclick = () => {
            webLink = `https://matthewc199.sg-host.com/entrepreneur-search/?username=${searchFieldRecycleData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        freelancerSubmit.onclick = () => {
            webLink = `https://matthewc199.sg-host.com/freelancer-search/?username=${searchFieldRecycleData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(searchFieldData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = '<div>' + data + '</div>';
        });
        console.log(emptyArray);
        showSuggestion(emptyArray);
        let allList = investorType.querySelectorAll("div");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this);");
        }
    } else {

    }
}

function select(element) {
    let selectUserData = element.textContent;
    searchField.value = selectUserData;
    investorSubmit.onclick = () => {
        webLink = `https://matthewc199.sg-host.com/investor-search/?username=${searchFieldRecycleData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    entrepreneurSubmit.onclick = () => {
        webLink = `https://matthewc199.sg-host.com/entrepreneur-search/?username=${searchFieldRecycleData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    freelancerSubmit.onclick = () => {
        webLink = `https://matthewc199.sg-host.com/freelancer-search/?username=${searchFieldRecycleData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
}

function showSuggestion(single) {
    let singleData;
    if (!single.length) {
        userValue = searchField.value;
        singleData = userValue;

    } else {
        singleData = single.join('');
    }
    investorType.innerHTML = singleData;
    entrepreneurType.innerHTML = singleData;
    freelancerType.innerHTML = singleData;
}