
/*const api = 'http://czuprin.com:3000/api/devices'*/

/*------------------------------Generate Devices-------------------*/

const createDevices = document.querySelector('.create-devices')
generateDevices()

/*------------------------------Variables Declaration-------------------*/

const draggableSpace = document.querySelector('.draggableSpace')
const draggableIcon = document.querySelector('.draggableIcon')
const draggableIconImage = document.querySelector('.draggableIconImage')
const availableDevicesWindow = document.querySelector('.available-devices')
const openAvailableDevices = document.querySelector('.available-devices-outline')
const closeAvailableDevices = document.querySelector('.available-devices-close')
let isMoving = false

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

move()*/

    let devices = []

    for (var i = 0; i < api.length; i++) {
        devices[i] = document.getElementById(`device${i}`)
    }


  /*------------------------------Open Information-----------------------------*/

  function showInformation() {
        console.log("Information shown")
    }

  /*--------------------------------Open available Devices----------------------*/

    openAvailableDevices.addEventListener('click', openAvailableDevicesWindow)
    closeAvailableDevices.addEventListener('click', closeAvailableDevicesWindow)

    function openAvailableDevicesWindow() {
        availableDevicesWindow.style = 'display: block'
    }

    function closeAvailableDevicesWindow() {
        availableDevicesWindow.style = 'display: none'
    }

      /*--------------------------------API access------------------------------*/

      /*fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(true)
      })*/

      /*---------------------------------Create Devices on Map--------------------*/

      function renderDevices(i) {
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
        return `
        <div id ="device${i}" style="
        top: calc(50% + ${(api[i].postition.y)}rem);
        left: calc(50% + ${(api[i].postition.x)}rem - (var(--sidebar-width) / 2));
        "
        class="draggableIcon"> <img draggable="false" src="${image}" alt=""> </div>
        `
      }

      function generateDevices() {
        displayDevices = " "
        createDevices.innerHTML = displayDevices;
        for (var i = 0; i < api.length; i++) {
             displayDevices += renderDevices(i);
             createDevices.innerHTML = displayDevices;
            }
      }

      draggableIcon.addEventListener('click', test())

      function test() {
        console.log(true)
      }
