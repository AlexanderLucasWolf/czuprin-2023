
/*const api = 'http://czuprin.com:3000/api/devices'*/



/*------------------------------Variables Declaration-------------------*/

const createDevices = document.querySelector('.create-devices')
const draggableSpace = document.querySelector('.draggableSpace')
const draggableIcon = document.querySelector('.draggableIcon')
const draggableIconImage = document.querySelector('.draggableIconImage')
const availableDevicesWindow = document.querySelector('.available-devices')
const openAvailableDevices = document.querySelector('.available-devices-outline')
const closeAvailableDevices = document.querySelector('.available-devices-close')
let isMoving = false
const listAvailableDevices = document.querySelector('.available-devices-inner-list')
let deviceListNumber = 0

  /*--------------------------------------Generate------------------------------*/

  generate()

  function generate() {
    generateDevices()
    generateDeviceList()
  }

  /*------------------------------Variables Declaration-------------------*/

  const listAvailableDevicesitem = document.querySelector('.device-list-item')

  /*--------------------------------Open available Devices----------------------*/

    openAvailableDevices.addEventListener('click', openAvailableDevicesWindow)
    closeAvailableDevices.addEventListener('click', closeAvailableDevicesWindow)

    function openAvailableDevicesWindow() {
        availableDevicesWindow.style = 'display: block'
    }

    function closeAvailableDevicesWindow() {
        availableDevicesWindow.style = 'display: none'
    }

      /*---------------------------------Create Devices on Map--------------------*/

      function renderDevices(i) {
        let image = ""
        deviceListNumber += 1
        if(api[i].product_name == "CSM Project") {
          image = "images/csm-station.svg"
        } else if(api[i].product_name == "Temperatur Module"){
          image = "images/w-sensor.svg"
        } else if(api[i].product_name == "CSM Mini") {
          image ="images/csm-mini.svg"
        } else {
          image = "images/censor-not-found.svg"
        }
        return `
        <div id ="device${i}" style="
        top: calc(50% + ${(api[i].postition.y)}rem);
        left: calc(50% + ${(api[i].postition.x)}rem - (var(--sidebar-width) / 2));
        transform: translate(-50%, -50%);
        "
        class="draggableIcon"> <img draggable="false" src="${image}" alt=""> <span class="device-position-span" >(${api[i].postition.x} | ${api[i].postition.y} )</span> </div>
        `
      }

      function generateDevices() {
        let displayDevices = " "
        createDevices.innerHTML = displayDevices;
        for (var i = 0; i < api.length; i++) {
             displayDevices += renderDevices(i);
             createDevices.innerHTML = displayDevices;
            }
      }

      /*-----------------------------------Device List--------------------------------------*/

      function renderDeviceList(i) {
        let image = ""
        if(api[i].product_name == "CSM Project") {
          image = "images/csm-station.svg"
        } else if(api[i].product_name == "Temperatur Module"){
          image = "images/w-sensor.svg"
        } else if(api[i].product_name == "CSM Mini") {
          image ="images/csm-mini.svg"
        } else {
          image = "images/censor-not-found.svg"
        }
        return `<div class="device-list-item" id="device-list-item-${i + 1}" >
            <p>${api[i].product_name}</p>
            <img src="${image}" alt="">
            <div class="device-list-item-mini-describtion">
              <p>Seriennummer: ${api[i].serial_id}</p>
              <p>Produktnummer: ${api[i].product_id}</p>
            </div>
        </div>`
      }

      function generateDeviceList() {
        let displayDevices = " "
        listAvailableDevices.innerHTML = displayDevices;
        for (var i = 0; i < api.length; i++) {
             displayDevices += renderDeviceList(i);
             listAvailableDevices.innerHTML = displayDevices;
            }
      }

      /*----------------------------Show Describtion-----------------------------*/

      listAvailableDevicesitem.addEventListener('click', showDescribtion)

      function showDescribtion() {
        console.log(true)
      }

      /*------------Moving Icon on Mouse Move - Currently disabled---------------*/

/*function move () {
    draggableIcon.onmousedown = function(e) {
    showInformation()
      isMoving = true
      let draggableSpaceRect = draggableSpace.getBoundingClientRect()
      let sx = e.clientX - draggableSpaceRect.left - e.offsetX + 25
      let sy = e.clientY - draggableSpaceRect.top - e.offsetY + 25
      let ofX = e.offsetX
      let ofY = e.offsetY
      this.style.left = `${sx}px`
      this.style.top = `${sy}px;`
      this.style.pointerEvents = 'none'
      draggableSpace.onmousemove = function(e) {
          let draggableSpaceRect1 = draggableSpace.getBoundingClientRect()
          let draggableIconRect1 = draggableIcon.getBoundingClientRect()
          if(isMoving) {
              let cx = Math.max(0, e.offsetX - ofX + 25)
              let cy = Math.max(0, e.offsetY - ofY + 25)
              cx = Math.min(cx, draggableSpaceRect1.width - draggableIconRect1.width)
              cy = Math.min(cy, draggableSpaceRect1.height - draggableIconRect1.height)
              draggableIcon.style.left = `${cx}px`
              draggableIcon.style.top = `${cy}px`
          }
      }
  }

  window.onmouseup = function() {
      draggableIcon.style.pointerEvents = 'all'
      isMoving = false
  }
}

move()

/*--------------------------------API access------------------------------*/

      /*fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(true)
      })
      
  */