const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const customform = document.getElementById("custom")
const deleteBtn = document.getElementById("deleteBtn")
const replaceForm = document.getElementById("replace")
const customInput = document.getElementById("customInput")
const replacementInput = document.getElementById("replacementInput")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

function getFortune () {
    axios.get("http://localhost:4000/api/fortune/")
        .then((result) => {
            const data = result.data
            alert(data)
        })
}

//takes the input of the form and appends it onto the end of the
//the fortune array in the back end
//alerts the with a success or an error if there
// is already a custome fortune
function createCustomeFortune (event) {
    event.preventDefault()
    body = {
        input: customInput.value
    }
    axios.post("http://localhost:4000/api/fortune/", body)
        .then((result) => {
            alert("fortune was successfully added")
        }).catch((err)=>{
            console.log(err)
            console.log("unable to add fortune")
            alert("Unable to add fortune. There may already be a custome fortune.")
        })

}

//deletes the custome fortune from the fortune array
function deleteFortune () {
    axios.delete("http://localhost:4000/api/fortune/")
        .then(()=>{
            alert("Custom fortune DELETED!")
        }).catch((err)=>{
            console.log(err)
            alert("Delete failed")
        })
}

//if there is currently a fortune in the custom fortune slot this will
//replace it with the input from the form and alert with a success
//or alerts that there is no form custome fortune
function replaceFortune (event) {
   event.preventDefault()

    let body = {
        input: replacementInput.value
    }

    axios.put("http://localhost:4000/api/fortune/", body)
        .then((result) => {
            alert("fortune successfully added")
        }).catch((err)=>{
            console.log(err)
            alert("replace failed")
        })
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener("click", getFortune)
customform.addEventListener("submit", createCustomeFortune)
deleteBtn. addEventListener("click", deleteFortune)
replaceForm.addEventListener("submit", replaceFortune)