( () => {

    let colors = ['red', 'blue', 'green', 'yellow']

    colors.forEach(elem => {
        let button = document.getElementById(`title-switch-${elem}`)
        button.onclick = toggleTitle(elem)
    })

    function toggleTitle(color) {
        return () => {
            let title = document.getElementById('title')

            title.classList.toggle(`${color}-glow`)
        }
    }
} )()