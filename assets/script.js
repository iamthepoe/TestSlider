

imagens = [];
imagens.push("https://images.wallpaperscraft.com/image/single/outer_space_galaxy_constellation_119797_800x600.jpg");
imagens.push("https://images.wallpapersden.com/image/download/planet-in-space_a2pnZmyUmZqaraWkpJRtZWWta2Vl.jpg");
imagens.push("https://images.wallpaperscraft.com/image/single/stars_space_galaxy_117958_800x600.jpg");
imagens.push("https://cutewallpaper.org/21/space-pc-background/Download-wallpaper-800x600-space-background-blue-dots-.jpg");

var botao = 0;

function TrocarImagem(){
	var painel = document.getElementById("painel");
	$("button").click(function(){
    	botao = $(this).val();
	});
	painel.src = imagens[botao];
}