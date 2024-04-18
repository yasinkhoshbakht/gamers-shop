let deviceForm = document.querySelector(".deviceInformation");
let device = [];
let preview = document.querySelector(".preview");
let previewNumber = 0;
deviceForm.addEventListener("submit", (e) => {
  let deviceInformation = {
    platform: e.target.platform.value,
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
  preview.innerHTML = "";
  if (device.length > 0) {
    device.forEach((item, index) => {
      previewNumber++;
      let previewBox = document.createElement("div");
      previewBox.innerHTML = `
      <h1>Preview ${index + 1}</h1>
      <h1 class = "platformText">${item.platform}</h1>
        <pre>Device Type:   ${item.deviceType}</pre>
        <pre>Model:   ${item.model}</pre>
        <pre>CPU:   ${item.CPU}</pre>
        <pre>Graphic Card:   ${item.graphicCard}</pre>
        <pre>VRAM:   ${item.vram}</pre>
        <pre>Memory:   ${item.memory}</pre>
        <pre>Hard:   ${item.hard}</pre>
        <pre>Price:   ${item.price}</pre>
        <pre>Compani:   ${item.compani}</pre>
        <pre>Property:   ${item.property}</pre>
      `;
      preview.appendChild(previewBox);
    });
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
