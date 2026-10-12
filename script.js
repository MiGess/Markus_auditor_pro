const btnIniciar  = document.getElementById("btn__iniciar-sesion");
const btnRegistrar = document.getElementById("btn__registrarse");

const contenedor = document.querySelector(".contenedor__todo");
const cajaLogin    = document.querySelector(".caja__trasera-login");
const cajaRegister = document.querySelector(".caja__trasera-register");

btnIniciar.addEventListener("click", () => {
    contenedor.classList.remove("modo-registro");

    cajaLogin.style.opacity = "0";
    cajaRegister.style.opacity = "1";
});

btnRegistrar.addEventListener("click", () => {
    contenedor.classList.add("modo-registro");

    cajaLogin.style.opacity = "1";
    cajaRegister.style.opacity = "0";
});