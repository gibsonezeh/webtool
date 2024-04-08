const video = document.getElementById('video');

navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }}) 
.then(function (stream) {
    video.srcObject = stream;
})
.catch(function (error) {
    console.log("Error", error);
})
