//your code here
function countWords() {
			let text = document.getElementById("evaluatedText").value;
			let wordCount = 0;
			if (text.trim() !== "") {
				// regx '\s+' will split at one or more spaces
				// trim() will remove trailing and leading spaces
				wordCount = text.trim().split(/\s+/).length;
			}
			document.getElementById("wordCount").textContent = wordCount;
		}