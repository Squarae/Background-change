//Gera numeros aleatorios e atribui à cada valor do gradiente linear.

const linearGradiente = [{deg: Math.floor(Math.random() * 360 + 0)}, {corR: Math.floor(Math.random() * 255 + 0)}, {corG: Math.floor(Math.random() * 255 + 0)}, {corB: Math.floor(Math.random() * 255 + 0)}, {altCorR: Math.floor(Math.random() * 255 + 0)}, {altCorG: Math.floor(Math.random() * 255 + 0)}, {altCorB: Math.floor(Math.random() * 255 + 0)}, {tpr: Math.floor(Math.random() * 90 + 0)}];
let imagem = Math.floor(Math.random() * 20 + 1);
let bg = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.png", "./img/05.png", "./img/06.jpg", "./img/07jpg", "./img/08.png", "./img/09.jpeg", "./img/10jpg", "./img/11.jpg", "./img/12.jpg", "./img/13.jpg", "./img/14.jpg", "./img/15.jpg", "./img/16.jpg", "./img/17.jpg", "./img/18.png", "./img/19.jpg", "./img/20.jpg"];
let gradiente;
let cont = 0;
	
//Coloca o plano de fundo junto com um gradiente linear.
	
function incrementarGradiente() {
    
    //Incrementa todos os valores do gradiente.
    
    linearGradiente[0].deg++;
    linearGradiente[1].corR++;
    linearGradiente[2].corG++;
    linearGradiente[3].corB++;
    linearGradiente[4].altCorR++;
    linearGradiente[5].altCorG++;
    linearGradiente[6].altCorB++;
    linearGradiente[7].tpr++;

	//Gira o gradiente linear entorno do "canvas".

	if(linearGradiente[0].deg == 360){
		linearGradiente[0].deg = 0;
	}

    gradiente = `linear-gradient(${linearGradiente[0].deg}deg, rgba(${linearGradiente[1].corR}, ${linearGradiente[2].corG}, ${linearGradiente[3].corB}, 0.${linearGradiente[7].tpr}), rgba(${linearGradiente[4].altCorR}, ${linearGradiente[5].altCorG}, ${linearGradiente[6].altCorB}, 0.${linearGradiente[7].tpr}))`;
    document.body.style.transition = `opacity 4s`;
    document.body.style.backgroundImage = `${gradiente}, url("${bg[imagem]}")`;

    if (linearGradiente[1].corR >= 255 || linearGradiente[2].corG >= 255 || linearGradiente[3].corB >= 255 || linearGradiente[4].altCorR >= 255 || linearGradiente[5].altCorG >= 255 || linearGradiente[6].altCorB >= 255 || linearGradiente[7].tpr >= 90) {
        clearInterval(intervalIncremento);
        intervalDecremento = setInterval(decrementarGradiente, 50);
    }
}

function decrementarGradiente() {
    
	//Decrementa todos os valores do gradiente.

    linearGradiente[0].deg--;
    linearGradiente[1].corR--;
    linearGradiente[2].corG--;
    linearGradiente[3].corB--;
    linearGradiente[4].altCorR--;
    linearGradiente[5].altCorG--;
    linearGradiente[6].altCorB--;
    linearGradiente[7].tpr--;
	cont++;
	
	//Muda o plano de fundo e os demais valores do gradiente linear.
	
	if(cont == 300){
		linearGradiente = [{deg: Math.floor(Math.random() * 360 + 0)}, {corR: Math.floor(Math.random() * 255 + 0)}, {corG: Math.floor(Math.random() * 255 + 0)}, {corB: Math.floor(Math.random() * 255 + 0)}, {altCorR: Math.floor(Math.random() * 255 + 0)}, {altCorG: Math.floor(Math.random() * 255 + 0)}, {altCorB: Math.floor(Math.random() * 255 + 0)}, {tpr: Math.floor(Math.random() * 90 + 0)}];
		imagem = Math.floor(Math.random() * 20 + 1);
		cont = 0;
	}
	
	gradiente = `linear-gradient(${linearGradiente[0].deg}deg, rgba(${linearGradiente[1].corR}, ${linearGradiente[2].corG}, ${linearGradiente[3].corB}, 0.${linearGradiente[7].tpr}), rgba(${linearGradiente[4].altCorR}, ${linearGradiente[5].altCorG}, ${linearGradiente[6].altCorB}, 0.${linearGradiente[7].tpr}))`;
	document.body.style.transition = `opacity 4s`;
	document.body.style.backgroundImage = `${gradiente}, url("${bg[imagem]}")`;

	if (linearGradiente[1].corR <= 0 || linearGradiente[2].corG <= 0 || linearGradiente[3].corB <= 0 || linearGradiente[4].altCorR <= 0 || linearGradiente[5].altCorG <= 0 || linearGradiente[6].altCorB <= 0 || linearGradiente[7].tpr <= 10) {
	    clearInterval(intervalDecremento);
	    intervalIncremento = setInterval(incrementarGradiente, 50);
	}

}

// Inicia tudo.
let intervalIncremento = setInterval(incrementarGradiente, 50);
let intervalDecremento;
