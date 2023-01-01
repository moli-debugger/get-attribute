var cssSelector = []
var element = ''
let elemetAttributes=''
document.addEventListener('click',(e)=>{
    element = e.target;
    var att = element.attributes;
    for(var i=0;i<att.length;i++){
        console.log(att[i]);
        elemetAttributes = elemetAttributes + att[i].name;
    }
    console.log(elemetAttributes);

})
