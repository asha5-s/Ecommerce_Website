function validate() {

    var username = document.getElementById('username').innerHTML
    var email = document.getElementById('email').innerHTML
    var password = document.getElementById('password').innerHTML
    var cpassword = document.getElementById('cpassword').innerHTML

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkcpassword(password, cpassword)

}
function checkusername(username) {
    if (username.length > 7) {

        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error', 'success')
        document.getElementById('username_error').innerHTML = ''

    }
    else {
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText = 'Username must contain atleast 8 letters'
    }
}
function checkemail(email) {
    if (username.length > 7 && email.includes('@gmail')) {

        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error', 'success')
        document.getElementById('email_error').innerHTML = ''

    }
    else {
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText = 'email must contain atleast 8 letters and "@gmail" must be included'
    }
}
function checkusername(username) {
    if (username.length > 7) {

        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error', 'success')
        document.getElementById('username_error').innerHTML = ''

    }
    else {
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText = 'Username must contain atleast 8 letters'
    }
}
function checkusername(username) {
    if (username.length > 7) {

        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error', 'success')
        document.getElementById('username_error').innerHTML = ''

    }
    else {
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText = 'Username must contain atleast 8 letters'
    }
}