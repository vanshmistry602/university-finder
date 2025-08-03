let url =
	"https://corsproxy.io/http://universities.hipolabs.com/search?country=";
let setCountryName = document.querySelector(".country-heading");
let countryInput = document.querySelector("#countryInput");
let ol = document.querySelector(".university-list");
let resultsPanel = document.querySelector(".results-panel");
let searchPanel = document.querySelector(".search-panel");

async function loadData(event) {
	event.preventDefault();
	ol.innerHTML = "";
	let countryName = countryInput.value.trim();

	if (!countryName) {
		setCountryName.innerText = "Country Name";
		resultsPanel.classList.add("hidden");
		searchPanel.classList.add("full-width");
		return;
	}

	try {
		let res = await axios.get(url + countryName);
		setCountryName.innerText = countryName || "Universities";

		if (res.data.length === 0) {
			resultsPanel.classList.add("hidden");
			searchPanel.classList.add("full-width");
			return;
		}

		// Show results panel
		resultsPanel.classList.remove("hidden");
		searchPanel.classList.remove("full-width");

		for (const object of res.data) {
			let li = document.createElement("li");
			let ul = document.createElement("ul");

			ul.innerHTML = `
				<li><b>Name:</b> ${object.name}</li>
				<li><b>Website:</b> <a href="${object.web_pages[0]}" target="_blank">${
				object.web_pages[0]
			}</a></li>
				<li><b>State:</b> ${object["state-province"] ?? "Not Available"}</li>
			`;

			li.appendChild(ul);
			ol.appendChild(li);
		}
	} catch (error) {
		setCountryName.innerHTML = `<b>Error:</b> ${error}`;
		resultsPanel.classList.add("hidden");
		searchPanel.classList.add("full-width");
	}
}
