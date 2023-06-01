function searchTitle(e){
    let url = 'https://jsonplaceholder.typicode.com/todos/';

    fetch(url).then((response) => 
        response.json().then((data) => {
            let inputVal = document.getElementById('cp').value;
            let songFilter = data.filter((song) => {
                return song.id == inputVal;
            }) 
            document.getElementById('title').innerHTML =  `<div class="h4 pt-5"> Tile song: ${songFilter[0].title}</div>`;
            // console.log(songFilter[0].title)
    })
    ).catch(err => console.log(`Error : ${err}`));
    e.preventDefault();
}
// searchTitle();

document.querySelector('#cp').addEventListener('input', searchTitle);

