// input phone 
const inputData = () => {
    const inputPhoneName = document.getElementById('input-phone').value;
    const phoneDivContainer = document.getElementById('phone-div-container');
    const detailsContainer = document.getElementById('details-container');
    const error = document.getElementById('error');
    document.getElementById('spiner').style.display = 'block';
    if (isNaN(inputPhoneName)) {
        document.getElementById('input-phone').value = '';
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputPhoneName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayPhone(data.data))

        phoneDivContainer.innerHTML = '';
        detailsContainer.innerHTML = '';
        error.innerText = '';
    }
    else {
        error.innerText = "Plaease entar a Phone name";
        document.getElementById('input-phone').value = '';
        phoneDivContainer.innerHTML = '';
        detailsContainer.innerHTML = '';
    }

}
// display phone
const displayPhone = (phones) => {
    document.getElementById('spiner').style.display = 'none';
    const noResult = document.getElementById('no-result');
    if (phones.length == 0) {
        noResult.innerText = "No Result Font";
        noResult.style.display = 'block';
        document.getElementById('see-more-button').style.display = 'none';
    }
    else {
        const first20Phones = phones.slice(0, 20);

        const phoneDivContainer = document.getElementById('phone-div-container');

        phoneDivContainer.innerHTML = '';
        noResult.style.display = 'none';
        for (const phone of first20Phones) {
            // console.log(phone);
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

        }
        // more 20 phone
        if (phones.length > 20) {
            document.getElementById('see-more-button').style.display = 'block';

            document.getElementById('see-more-button').addEventListener("click", function () {
                const allPhones = phones.slice(20, phones.length);

                for (const phone of first20Phones) {
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

                }
                document.getElementById('see-more-button').style.display = 'none';
            });
        }
    }
}

// details phone
const detailsPhone = (phoneId) => {
    url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetailsPhone(data.data))
}

const displayDetailsPhone = (phone) => {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card ">
                <div class="d-flex justify-content-center p-3">
                    <img src="${phone?.image}" class="card-img-top w-50"
                        alt="...">
                </div>
                <div class="card-body mt-2 mb-4 table-color2 shadow p-1 d-flex justify-content-center">
                    <h2 class="card-title fw-bold">${phone?.name}</h2>
                </div>
                <div class="p-1 pb-2 d-flex justify-content-center">
                    <table>
                        <tbody>
                            <tr class="table-color1">
                                <td>Release</td>
                                <td>${displayRelease(phone?.releaseDate)}</td>
                            </tr>

                            <tr class="table-color2">
                                <td>Brand</td>
                                <td>${phone?.brand}</td>
                            </tr>
                            <tr class="table-color3">
                                <td class="fw-bold">Connective</td>
                                <td></td>
                            </tr>
                            <tr class="table-color1">
                                <td>Bluetooth</td>
                                <td>${phone?.others?.Bluetooth}</td>
                            </tr>

                            <tr class="table-color2">
                                <td>GPS</td>
                                <td>${phone?.others?.GPS}</td>
                            </tr>
                            <tr class="table-color1">
                                <td>NFC</td>
                                <td>${phone?.others?.NFC}</td>
                            </tr>
                            <tr class="table-color2">
                                <td>Radio</td>
                                <td>${phone?.others?.Radio}</td>
                            </tr>

                            <tr class="table-color1">
                                <td>USB</td>
                                <td>${phone?.others?.USB}</td>
                            </tr>
                            <tr class="table-color2">
                                <td>WLAN</td>
                                <td>${phone?.others?.WLAN}</td>
                            </tr>
                            <tr class="table-color1">
                                <td>Sensors</td>
                                <td>${phone?.mainFeatures?.sensors[0]}, ${phone?.mainFeatures?.sensors[1]}, ${phone?.mainFeatures?.sensors[2]}, ${phone?.mainFeatures?.sensors[3]}, ${phone?.mainFeatures?.sensors[4]}, ${phone?.mainFeatures?.sensors[5]}}</td>
                            </tr>

                            <tr class="table-color3">
                                <td class="fw-bold">Display</td>
                                <td></td>
                            </tr>
                            <tr class="table-color2">
                                <td>Size</td>
                                <td>${phone?.mainFeatures?.displaySize}</td>
                            </tr>
                            <tr class="table-color1">
                                <td>Storage</td>
                                <td>${phone?.mainFeatures?.storage}</td>
                            </tr>

                            <tr class="table-color2">
                                <td>ChipSet</td>
                                <td>${phone?.mainFeatures?.chipSet}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    
    `

    detailsContainer.appendChild(div);

}

const displayRelease = (release) => {

    if (release == '') {
        return 'Up comming';
    } else {
        return release;
    }

}


