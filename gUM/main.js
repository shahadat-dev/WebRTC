'use strict';

var video = document.getElementById("gum");
var btn = document.getElementById("snap");
var canvas = document.getElementById("canvas");
//canvas.width = 500;
//canvas.height = 600;

var constraints = {
  audio: false,
  video: true
};

function handleSuccess(stream) {
  video.src = window.URL.createObjectURL(stream);
}

function handleError(error) {
	console.log(error);
}

navigator.mediaDevices.getUserMedia(constraints).
    then(handleSuccess).catch(handleError);

btn.onclick = function(){
	canvas.width = video.videoWidth;
	canvas.height = video.videoHeight;
	canvas.getContext('2d').
    drawImage(video, 0, 0, canvas.width, canvas.height);
}