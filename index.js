function generateColorScheme(){
    const colorPicker = document.getElementById("colorPicker")
    const schemeSelect = document.getElementById("schemeSelect")
    const colorSchemeDiv = document.getElementById("colorScheme")
    const color = colorPicker.value
    const scheme = schemeSelect.value

fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1)}&mode=${scheme}&format=json`)
.then(request => request.json())
.then(data => {
    colorSchemeDiv.innerHTML = ""
    data.colors.forEach(colorInfo => {
        
        const colorBoxContainer = document.createElement("div");
            colorBoxContainer.classList.add("colorBoxContainer");
        
        const colorBox = document.createElement("div")
            colorBox.classList.add("colorBox")
            colorBox.style.backgroundColor = colorInfo.hex.value
        
        const hexText = document.createElement('p')
            hexText.classList.add('hexText')
            hexText.textContent = colorInfo.hex.value
        
        colorBoxContainer.appendChild(colorBox)
        colorBoxContainer.appendChild(hexText)
        colorSchemeDiv.appendChild(colorBoxContainer)
    })
})
}


document.addEventListener('DOMContentLoaded', function () {
    const colorSchemeDiv = document.getElementById('colorScheme');
         colorSchemeDiv.addEventListener('click', function (event) {
            const clickedElement = event.target

        // Check if the clicked element is a hex value element
                if (clickedElement.classList.contains('hexText')) {
            // Get the hex value text
                    const hexValue = clickedElement.textContent

            // Copy the hex value to the clipboard
                        copyToClipboard(hexValue)

            // Optionally, provide visual feedback or notification
                        alert(`Hex value "${hexValue}" copied to clipboard!`)
        }
    })

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea')
        textarea.value = text
        document.body.appendChild(textarea)
        textarea.select();
        document.execCommand('copy')
        document.body.removeChild(textarea)
    }
})