
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
                            <button onclick="detailsPhone('${phone.slug}')" class="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div> 
        `
        phoneDivContainer.appendChild(div);
        // console.log(phone.slug);
    }
}

const detailsPhone = (phoneId) => {
    url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetailsPhone(data.data))
}

const displayDetailsPhone = (phone) => {
    console.log(phone)
    console.log(phone.image)
    console.log(phone.name)
    // console.log(phone.releaseDate)
    // console.log(phone.brand)
    // console.log(phone.mainFeatures.chipSet)
    // console.log(phone.mainFeatures.displaySize)
    // console.log(phone.mainFeatures.storage)
    // sensor    
    console.log(phone.mainFeatures.sensors[0])
    console.log(phone.mainFeatures.sensors[1])
    console.log(displaySensor(phone.mainFeatures.sensors))
    // others
    // console.log(phone.others.Bluetooth)
    // console.log(phone.others.GPS)
    // console.log(phone.others.NFC)
    // console.log(phone.others.Radio)
    // console.log(phone.others.USB)
    // console.log(phone.others.WLAN)
    // console.log(phone)
    // console.log(phone)
}

/*
 onst displaySensor = (sensors) => {
    console.log(sensors);
    let sumSensor;
    for (const sensor of sensors) {
        // console.log(sensor)
        sumSensor = sensor

    }
    return sumSensor;

} 
*/
