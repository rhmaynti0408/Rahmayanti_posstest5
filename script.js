var container = document.querySelector('#container');
var panorama = new PANOLENS.ImagePanorama('gambar 1.jpg');
var panorama2 = new PANOLENS.ImagePanorama('gambar 2.jpg');
var panorama3 = new PANOLENS.ImagePanorama('gambar 3.jpg');

var viewer = new PANOLENS.Viewer({container: container});
viewer.add(panorama, panorama2, panorama3);

var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);
panorama.add(infospot);

infospot.addEventListener('click', function(){
    viewer.setPanorama(panorama);
});

infospot.addEventListener('click', function(){
    viewer.setPanorama(panorama2);
});

infospot.addEventListener('click', function(){
    viewer.setPanorama(panorama3);
});