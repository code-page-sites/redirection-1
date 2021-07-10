cloudinary.config({ 
  cloud_name: 'kayden', 
  api_key: '389325557239844', 
  api_secret: 'e-hx0d2hLynhy2wXmcCqEulg-KI' 
});

cloudinary.v2.uploader.upload("https://replace.vercel.app/download.png",
  { public_id: "download" }, 
  function(error, result) {console.log(result); });
