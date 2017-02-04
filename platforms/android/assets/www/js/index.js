var texto = 'Desligando...';

document.getElementById("lanterna").addEventListener("click", toggle);

function toggle() {
	if (texto == 'Desligando...') {
		texto = 'Ligando...';
	} else {
		texto = 'Desligando...'
	}
    window.plugins.flashlight.toggle();
    window.plugins.toast.showShortBottom(texto, 3000);
}

document.addEventListener("backbutton", function() {
    window.plugins.flashlight.switchOff(exitApp, exitApp);
}, false);
 
function exitApp() {
    navigator.app.exitApp();
}