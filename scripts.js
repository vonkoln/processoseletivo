const handleSubmit = (event) => {
    event.preventDefaut();

    const firstname = document.querySelector('input[name=firstname]').value;
    const lastname = document.querySelector('input[name=lastname]').value;
    const email = document.querySelector('input[name=email]').value;
    const number = document.querySelector('input[name=number]').value;
    const nascimento = document.querySelector('input[name=nascimento]').value;

    fetch('https://api.sheetmonkey.io/form/acuQdn5GVSTyVCM8iVpQEB', {

    method: 'post',
    headers: {
        'Accept': 'application/jason',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstname, lastname, email, number, nascimento }),
   });
}

document.querySelector('form').addEventListener('submit', handleSubmit);



