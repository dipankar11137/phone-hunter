
const inputData = () => {
    const inputPhoneName = document.getElementById('input-phone').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputPhoneName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))

}
const displayPhone = (phones) => {
    for (const phone of phones) {
        const phoneDivContainer = document.getElementById('phone-div-container');
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 rounded shadow-lg">
                    <div class="p-1 shadow-lg">
                        <img src="${phone.image}"
                            class="card-img-top img-fluid" alt="...">
                    </div>
                    <div class="card-body shadow-lg ">
                        <h3>Name : ${phone.phone_name}</h3>
                        <h5>Brand : ${phone.brand}</h5>
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div> 
        `
        phoneDivContainer.appendChild(div);


        // console.log(phone);
        // console.log(phone.image);
        // console.log(phone.phone_name);
        // console.log(phone.brand);
        // console.log(phone.slug);
    }

}
