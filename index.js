const upload = document.getElementsByClassName("upload")[0];
const inputFile = document.getElementsByClassName("inputFile")[0];
const savedImage = document.getElementsByClassName("saved-image")[0];
const Result = document.getElementsByClassName("result")[0];
const editedImage = document.getElementById('cropped_result');
const rotateButton = document.getElementById('rotate-button');
const Transform = document.getElementById('Transform-img');
const heartBtn = document.getElementById('heart-btn');
const rectBtn = document.getElementById('rectangle-btn');
const circleBtn = document.getElementById('circle-btn');
const squareBtn = document.getElementById('square-btn');
var uploadedImage = "";
let rotation = 0;

upload.addEventListener("click", function () {
  inputFile.click(inputFile.value);
});

rotateButton.addEventListener('click', () => {
  rotation += 90;
  editedImage.style.transform = `rotate(${rotation}deg)`;
});

Transform.addEventListener('click', () => {
  if (editedImage.classList.contains('flip-x')) {
    editedImage.classList.remove('flip-x');
  } else {
    editedImage.classList.add('flip-x');
  }
});

heartBtn.addEventListener('click', () => {
  editedImage.classList.toggle('heart-clip');
  editedImage.classList.remove('rect-clip');
  editedImage.classList.remove('circle-clip');
  editedImage.classList.remove('square-clip');
});

rectBtn.addEventListener('click', () => {
  editedImage.classList.toggle('rect-clip');
  editedImage.classList.remove('heart-clip');
  editedImage.classList.remove('circle-clip');
  editedImage.classList.remove('square-clip');
});

circleBtn.addEventListener('click', () => {
  editedImage.classList.toggle('circle-clip');
  editedImage.classList.remove('heart-clip');
  editedImage.classList.remove('rect-clip');
  editedImage.classList.remove('square-clip');
});
squareBtn.addEventListener('click', () => {
  editedImage.classList.toggle('square-clip');
  editedImage.classList.remove('heart-clip');
  editedImage.classList.remove('rect-clip');
  editedImage.classList.remove('circle-clip');
});


function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#blah').attr('src', e.target.result)
    };
    reader.readAsDataURL(input.files[0]);
    setTimeout(initCropper, 1000);
  }
}
function initCropper() {
  var image = document.getElementById('blah');
  var cropper = new Cropper(image, {
    aspectRatio: 16 / 9,
    crop: function (e) {
      console.log(e.detail.x);
      console.log(e.detail.y);
    }
  });

  document.getElementById('crop_button').addEventListener('click', function () {
    var imgurl = cropper.getCroppedCanvas().toDataURL();
    var img = document.createElement("img");
    img.src = imgurl;
    document.getElementById('cropped_result').src = img.src;
    document.getElementById("image-crop").style.display = "none";
    var crop = document.getElementById("image-crop");
    var cropResult = document.getElementById('cropped_result');
    crop.parentNode.appendChild(cropResult);
    editedImage.classList.add('image_container');
  })
}