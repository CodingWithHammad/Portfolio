function sendMail() {
    const data = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_3fm5d7l", "template_nus7hac", data).then(
        (response) => {
            alert('SUCCESS!', response.status, response.text);
        },
        (error) => {
            alert('FAILED...', error);
        },
    );
}
document.querySelector(".send").addEventListener("click", () => {
    sendMail()
})
