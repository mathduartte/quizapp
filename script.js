import {trocarTema, verificarTema} from "./helpers/tema-helpers"

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})

verificarTema(body, botaoTema)