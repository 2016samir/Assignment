var SiteName = document.getElementById('SiteName')
var SiteURL = document.getElementById('SiteURL')
var siteList;



if(localStorage.getItem('site') !== null){
    siteList = JSON.parse(localStorage.getItem('site'));
    displaySite();
}
else{
    siteList = [];
}


submit.onclick = Addsite

function Addsite(){

    if(validateSiteName()){
    if(validateSiteURL()){
        var site ={
        SName : SiteName.value,
        SURL : SiteURL.value
    }

    siteList.push(site);
    localStorage.setItem('site',JSON.stringify(siteList));
    displaySite();
    console.log(siteList);
}else{
alert('invalid site url')
}

}
else{
    alert('invalid site name')
}

}

// display

function displaySite(){
    var theSite = ``;
    for(var i = 0 ; i < siteList.length ; i++){
        theSite += `<div class="row bg-white align-items-center text-center py-2">
    <div class="col-md-3">
    <h3>${(i+1)}</h3>
    </div>
    <div class="col-md-3">
    <h3>${siteList[i].SName}</h3>    
    </div>
    <div class="col-md-3">
    <button onclick="openUrl('https://${siteList[i].SURL}')" class="btn btn-success text-white"><i class="fa-solid fa-eye me-2"></i>Visit</button>    
    </div>
    <div class="col-md-3">
    <button onclick="deleteSite(${i})" class="btn btn-danger text-white delete me-2"><i class="fa-solid fa-trash me-2"></i>Delete</button>    
    </div>
</div>`
    }
    document.getElementById('theinputs').innerHTML = theSite;
}


// visit

function openUrl(url) {
    window.open(url);
}

// delete

function deleteSite(index){
    siteList.splice(index,1);
    displaySite();
    localStorage.setItem('site',JSON.stringify(siteList));
}


// validate

function validateSiteName(){
    var SiteNameRegex = /^[a-zA-Z]{1,10}$/;
    return SiteNameRegex.test(SiteName.value);
}


function validateSiteURL(){
    var SiteURLRegex = /^www\.[a-z]{1,12}\.com$/;
    return SiteURLRegex.test(SiteURL.value);
}