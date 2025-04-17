function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	let radius = document.getElementById("radius").value;

	if (isNaN(radius)) {
        document.getElementById("volume").value = "NaN";
        return;
    }
	
	
	let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("volume").value = volume.toFixed(4); 
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
