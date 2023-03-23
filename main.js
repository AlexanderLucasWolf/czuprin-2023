
const api = 'http://czuprin.com:3000/api/devices'

/*------------------------------Variables Declaration-------------------*/

const draggableSpace = document.querySelector('.draggableSpace')
const draggableIcon = document.querySelector('.draggableIcon')
const draggableIconImage = document.querySelector('.draggableIconImage')
const availableDevicesWindow = document.querySelector('.available-devices')
const openAvailableDevices = document.querySelector('.available-devices-outline')
const closeAvailableDevices = document.querySelector('.available-devices-close')
let isMoving = false

/*------------------------------Moving Icon on Mouse Move ----------------*/


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

      fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(true)
      })
