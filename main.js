let item = document.querySelector('.item')
let cells = document.querySelectorAll('.cell')

item.addEventListener('dragstart', function(){
    setTimeout( ()=> {
        this.classList.add('hidden')
    }, 0)
})

item.addEventListener('dragend', function(){
    this.classList.remove('hidden')
})

cells.forEach(cell =>{

    cell.addEventListener('dragenter', function(){
        this.classList.add('selected')
    })

    cell.addEventListener('dragleave', function(){
        this.classList.remove('selected')
    })

    cell.addEventListener('dragover', function(e){
        e.preventDefault()
    })
    cell.addEventListener('drop', function(){
        this.append(item)
        this.classList.remove('selected')
    })
})