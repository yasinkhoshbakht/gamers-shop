let deviceForm = document.querySelector(".deviceInformation");
let device = [];
let deviceNamePreview = document.getElementsByTagName("p")[0];
let cpuPreview = document.getElementsByTagName("p")[1];
let graphicCardPreview = document.getElementsByTagName("p")[2];
let vramPreview = document.getElementsByTagName("p")[3];
let memoryPreview = document.getElementsByTagName("p")[4];
let hardPreview = document.getElementsByTagName("p")[5];
let pricePreview = document.getElementsByTagName("p")[6];
let modelPreview = document.getElementsByTagName("p")[7];
let propertyPreview = document.getElementsByTagName("p")[8];
let typeText = document.getElementsByClassName("typeText")[0];
let preview = document.querySelector(".preview");
deviceForm.addEventListener("submit", (e) => {
  let deviceInformation = {
    deviceType: e.target.deviceType.value,
    model: e.target.model.value,
    CPU: e.target.CPU.value,
    graphicCard: e.target.graphicCard.value,
    vram: e.target.vram.value,
    memory: e.target.memory.value,
    hard: e.target.hard.value,
    price: e.target.price.value,
    compani: e.target.compani.value,
    property: e.target.property.value,
  };
  device.push(deviceInformation);
  if (device.length > 0) {
    preview.classList.add("visible");
    typeText.innerText = device[device.length - 1].deviceType;
    deviceNamePreview.innerText = device[device.length - 1].model;
    cpuPreview.innerText = device[device.length - 1].CPU;
    graphicCardPreview.innerText = device[device.length - 1].graphicCard;
    vramPreview.innerText = device[device.length - 1].vram;
    memoryPreview.innerText = device[device.length - 1].memory;
    hardPreview.innerText = device[device.length - 1].hard;
    pricePreview.innerText = device[device.length - 1].price;
    modelPreview.innerText = device[device.length - 1].compani;
    propertyPreview.innerText = device[device.length - 1].property;
  }
  e.target.type.value = "";
  e.target.model.value = "";
  e.target.CPU.value = "";
  e.target.graphicCard.value = "";
  e.target.vram.value = "";
  e.target.memory.value = "";
  e.target.hard.value = "";
  e.target.price.value = "";
  e.target.compani.value = "";
  e.target.property.value = "";
  e.preventDefault();
});
