import { Link } from "react-router-dom"

function Vistoria(){
    const enviarFotos = () =>{
        alert ("Fotos enviadas com sucesso!")
    }
    const enviarVideos = () =>{
        alert("Vídeos enviados com sucesso!")
    }
    return(
        <main>
            <h1>Vistoria</h1>
            <div id="fotosVistoria">
            <h2>Fotos</h2>
            <p>Envie fotos dos pontos chaves da sua bike listados abaixo</p>
            <ul>
                <li>Foto da bike inteira de lado: </li>
                <input type="text" id="ftBikeInteira" placeholder="Digite aqui"/>
                <li>Foto do número: </li>
                <input type="text" id="ftNumero" placeholder="Digite aqui"/>
                <li>Foto da roda: </li>
                <input type="text" id="ftRoda" placeholder="Digite aqui"/>
                <li>Foto dos freios: </li>
                <input type="text" id="ftFreios" placeholder="Digite aqui"/>
                <li>Foto do guidão: </li>
                <input type="text" id="ftGuidao" placeholder="Digite aqui"/>
                <li>Foto dos pedais: </li>
                <input type="text" id="ftPedais" placeholder="Digite aqui"/>
                <li>Foto sua com a bike: </li>
                <input type="text" id="ftSelfieBike" placeholder="Digite aqui"/>
                <li>Foto da bike de frente: </li>
                <input type="text" id="ftBikeFrente" placeholder="Digite aqui"/>
                <li>Foto dos acessórios (se for visível): </li>
                <input type="text" id="ftAcessorios" placeholder="Digite aqui"/>
            </ul>
            <button type="button" id="enviaFotos" onClick={enviarFotos}>Enviar</button>
            </div>
            <div id="videosVistoria">
                <h2>Videos</h2>
                <p>Envie vídeos dos pontos chaves da sua bike listados abaixo: </p>
                <ul>
                    <li>Vídeo mostrando a bike completa: </li>
                    <input type="text" id="vdBikeCompleta" placeholder="Digite aqui"/>
                    <li>Vídeo mostrando com mais ênfase cada ponto chave que foi tirado foto:  </li>
                    <input type="text" id="vdPontoChave" placeholder="Digite aqui"/>
                </ul>
            <button type="button" id="enviaVideos" onClick={enviarVideos}>Enviar</button>
            </div>
            <div>
                <p><Link to='/simulacao/identificacao/tipodoseguro/vistoria/validacaodavistoria'>Próxima etapa: </Link> Conferir status de vistoria: </p>
                <p>Observação: neste momento, como ainda nào aprendemos a abrir a câmera e capturar a imagem, colocamos temporariamente a opção do formulário de pegar a foto da galeria - apenas para simulação.</p>
            </div>
        </main>
    )
}

export default Vistoria