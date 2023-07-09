export function exportcsv(headers,totaldata,title)
{

if(!totaldata || totaldata.length==0)
{return null}

const jsondata = JSON.stringify(totaldata)
const result = convertoCSV(jsondata,headers)
if(result==null) return null
const blob = new Blob([result])
const exportfilename = title ? title +'.csv' : 'export.csv'
const Link  = document.createElement("a")

if(Link.download !==undefined)
{

    const url = URL.createObjectURL(blob)
    Link.setAttribute("href" ,url)
    Link.setAttribute("download",exportfilename)
    Link.style.visibility='hidden'
    document.body.appendChild(Link)
    Link.click()
    document.body.removeChild(Link)
}

function convertoCSV(objarray,headers)
{
const delimeter = ','
const linedelimeter ='\r\n'
const actualheader = Object.keys(headers)
const headertoShow = Object.values(headers)
let str=''
str+=headertoShow.join(delimeter);
str+=linedelimeter
const data =typeof objarray!=='object' ? JSON.parse(objarray) : objarray

data.forEach(element => {
    let line=''
    actualheader.forEach(key=>{
if(line !='')
{

    line+=delimeter
}
let stritem = element[key] +''
line+=stritem ? stritem.replace(/,/g,'') : stritem

    }) 
str+= line + linedelimeter

});
console.log("str",str)
return str

}

}