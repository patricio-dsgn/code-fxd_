

const file = '../src/js/data.json';
const list = document.getElementById('list');
let algo = '';

fetch (file)
    .then( response => response.json())
    .then((myJson) => {
        // console.log(myJson);
        const FILES = myJson;


for (const ext in FILES) {
    list.innerHTML += `<h2>${ext}</h2>`;

    // console.log(`${ext}`);
    // console.log(FILES[ext]);

    FILES[ext].map((item) => {

        let name = '',
            preview = '__',
            url = `https://github.com/patricio-dsgn/fxd/files/${ext}/${item}`,
            link = `<a href="./files/${ext}/${item}" target="_blank">${url}</a>`
        if( ['gif','jpg','png'].includes(ext)) {
            preview = `
            <img src="./files/${ext}/${item}" alt="${item}"/>`;            
        
        }else if( ['mp4'].includes(ext)) {
            preview = `
            <video width="320" height="240" controls>
                <source src="./files/${ext}/${item}" type="video/mp4">
                Your browser does not support the video tag.
            </video>`;
        }

        list.innerHTML += `
        <li>
            ${preview}
            ${link}
        </li>`

    })

}




});






