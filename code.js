contentElement = document.getElementById("content");
albumsElement = document.getElementById("albums");
milesElement = document.getElementById("miles");

function clickFunction(obj) {
	pLocal = document.getElementById("paragraph" + obj.id);
	if (pLocal.style.display=="none") {
		pLocal.style.display="";
	} else {
		pLocal.style.display = "none";
	}
}

window.onload = function() {
	// Set the albumsElement innerHTML
	albumsElement.innerHTML = "Albums: " + runs.length; 

	var totMiles = 0;

	// Parse the runs list and generate HTML elements
	for (var i=0; i<runs.length; i++) {
		run = runs[i];

		//add up miles
		totMiles = totMiles + parseFloat(run.miles);

		// for each run object, add a new div
		entryDiv = document.createElement("div");
		entryDiv.id = i;
		entryDiv.classList.add('entry');
		//entryDiv.onclick = function() {clickFunction(this)};
		contentElement.appendChild(entryDiv);

		// img (in span)
		img = document.createElement("img");
		img.src = "images/" + run.img;
		img.classList.add("images");
		entryDiv.appendChild(img);

		// header
		entryHeader = document.createElement("h4");
		entryHeader.innerHTML = run.date + "&nbsp;&nbsp;&nbsp; #" + run.rsnum + " " + run.title + " - " + run.artist + " (" + run.year + ")";
		entryDiv.appendChild(entryHeader);

		// span
		imgQuoteDiv = document.createElement("div");
		imgQuoteDiv.classList.add('quote');
		entryDiv.appendChild(imgQuoteDiv);

		// quote (in span)
		imgQuoteDiv.innerHTML = imgQuoteDiv.innerHTML + "\"" + run.quote + "\"";

		// paragraph
		p = document.createElement("p");
		p.innerHTML = run.text + "<br><br>";
		p.id = "paragraph"+i;
		//p.style.display = "none";

		// span in p
		milesSpan = document.createElement("span");
		milesSpan.classList.add("miles");
		milesSpan.innerHTML = "Miles run: " + run.miles;
		p.appendChild(milesSpan);

		// append p to entryDiv
		entryDiv.appendChild(p);


		if (i < (runs.length-1)) {
			// also put a horizontal line
			hr = document.createElement("hr");
			content.appendChild(hr);
		}
	}

	totMiles = totMiles.toFixed(2);
	milesElement.innerHTML = "Miles: " + totMiles; 


}
