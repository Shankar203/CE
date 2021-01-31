console.log("kittens of the world, unite as one!");
let kits=["kit1.jpg","kit2.jpg","kit3.jpg","kit4.jpg","kit5.jpg","kit6.jpg","kit7.jpg","kit8.jpg","kit9.jpg","kit10.jpg","kit11.jpg","kit12.jpg"];
let imgs=document.getElementsByTagName('img');

for (i of imgs) {
    let r= Math.floor(Math.random() * kits.length);
    let f= "kit/" + kits[r];
    let u=chrome.extension.getURL(f);
    i.src=u;
    console.log(u);
}