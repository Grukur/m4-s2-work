/* mejorar validacion del checkbox.... */
$('#signSign').click(() => {
    $('#signForm').toggleClass('d-block')
    $('#vipForm').toggleClass('d-block')
})
$('#vipSign').click(() => {
    $('#signForm').toggleClass('d-none')
    $('#vipForm').toggleClass('d-none')
})
$('#signVip').click(() => {
    $('#signForm').toggleClass('d-none')
    $('#vipForm').toggleClass('d-none')
})
$('#vipVip').click(() => {
    $('#signForm').toggleClass('d-block')
    $('#vipForm').toggleClass('d-block')
})

let mortalUsers = [];
let vipUsers = [];
class Cuentas {
    constructor(name, email, pass) {
        this.name = name;
        this.email = email;
        this.pass = pass;
    }
    mostrarInfo() {
        $('#modalTitle').text(`Bienvenido ${this.name}`)
        $('#modalBody').text(`Nombre: ${this.name} Email: ${this.email} Contraseña ${this.pass}`)
        $('#myModal').modal('show')
    }
};

class Vip extends Cuentas {
    constructor(name, email, pass) {
        super(name, email, pass)
    }
};

const normalCheckBox = (user) => {
    if (checkSign.checked == true) {
        user.mostrarInfo()
    }else{
        alert('por favor acepte nuestros terminos y condiciones')
    }
}
const vipCheckBox = (user) => {
    if (checkVip.checked == true) {
        user.mostrarInfo()
    }else{
        alert('por favor acepte nuestros terminos y condiciones')
    }
}

const constructor = (name, email, pass)=>{
    let user = new Cuentas(name, email, pass)
    return user
}

const vipConstructor = (name, email, pass)=>{
    let user = new Cuentas(name, email, pass)
    return user
}

$('#btnSign').click((event) => {
    event.preventDefault()
    let email = $('#emailSign').val()
    let pass = $('#passSign').val()
    let nameId = email.split('@')
    let id = Math.floor(Math.random() * 500)
    let name = nameId[0] + id
    let user = constructor(name, email, pass)
    mortalUsers.push(user)
    normalCheckBox(user)
    /* user.mostrarInfo() */
});

$('#btnVip').click((event) => {
    event.preventDefault()
    let name = $('#nameVip').val()
    let email = $('#emailVip').val()
    let pass = $('#passVip').val()
    let user = vipConstructor(name, email, pass)
    vipUsers.push(user)
    vipCheckBox(user)
    /* user.mostrarInfo() */
});

