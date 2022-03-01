
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
    const detailsContainer = document.getElementById('details-container');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-75 ">
                <div class="d-flex justify-content-center p-3">
                    <img src="${phone.image}" class="card-img-top w-50"
                        alt="...">
                </div>
                <div class="card-body  p-1 d-flex justify-content-center">
                    <h5 class="card-title">${phone.name}</h5>
                </div>
                <div class="p-1 d-flex justify-content-center">
                    <table>
                        <tbody>
                            <tr class="table-color1">
                                <td>Release</td>
                                <td>${phone.releaseDate}</td>
                            </tr>

                            <tr class="table-color2">
                                <td>Brand</td>
                                <td>${phone.brand}</td>
                            </tr>
                            <tr class="table-color3">
                                <td class="fw-bold">Connective</td>
                                <td></td>
                            </tr>
                            <tr class="table-color1">
                                <td>Bluetooth</td>
                                <td>${phone.others.Bluetooth}</td>
                            </tr>

                            <tr class="table-color2">
                                <td>GPS</td>
                                <td>${phone.others.GPS}</td>
                            </tr>
                            <tr class="table-color1">
                                <td>NFC</td>
                                <td>${phone.others.NFC}</td>
                            </tr>
                            <tr class="table-color2">
                                <td>Radio</td>
                                <td>${phone.others.Radio}</td>
                            </tr>

                            <tr class="table-color1">
                                <td>USB</td>
                                <td>${phone.others.USB}</td>
                            </tr>
                            <tr class="table-color2">
                                <td>WLAN</td>
                                <td>${phone.others.WLAN}</td>
                            </tr>
                            <tr class="table-color1">
                                <td>Sensors</td>
                                <td>${phone.mainFeatures.sensors[0]},${phone.mainFeatures.sensors[1]},${phone.mainFeatures.sensors[2]}, ${phone.mainFeatures.sensors[3]},${phone.mainFeatures.sensors[4]}, ${phone.mainFeatures.sensors[5]}}</td>
                            </tr>

                            <tr class="table-color3">
                                <td class="fw-bold">Display</td>
                                <td></td>
                            </tr>
                            <tr class="table-color2">
                                <td>Size</td>
                                <td>${phone.mainFeatures.displaySize}</td>
                            </tr>
                            <tr class="table-color1">
                                <td>Storage</td>
                                <td>${phone.mainFeatures.storage}</td>
                            </tr>

                            <tr class="table-color2">
                                <td>ChipSet</td>
                                <td>${phone.mainFeatures.chipSet}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    
    `
    detailsContainer.appendChild(div);

    console.log(phone)
    // console.log(phone.image)
    // console.log(phone.name)
    // console.log(phone.releaseDate)
    // console.log(phone.brand)
    // console.log(phone.mainFeatures.chipSet)
    // console.log(phone.mainFeatures.displaySize)
    // console.log(phone.mainFeatures.storage)
    // sensor    
    console.log(phone.mainFeatures.sensors[0])
    console.log(phone.mainFeatures.sensors[1])
    // console.log(displaySensor(phone.mainFeatures.sensors))
    // others
    // console.log(phone.others.Bluetooth)
    // console.log(phone.others.GPS)
    // console.log(phone.others.NFC)
    // console.log(phone.others.Radio)
    // console.log(phone.others.USB)
    // console.log(phone.others.WLAN)

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
