function generate() {
    const input = document.getElementById("input").value.toLowerCase();
    let output = "";
  
    if (input.includes("mavi arka plan")) {
      output += "<div style='background-color: blue; padding: 20px'>";
    } else {
      output += "<div>";
    }
  
    if (input.includes("başlık")) {
      output += "<h1>Bu bir başlıktır</h1>";
    }
  
    if (input.includes("liste")) {
      output += "<ul><li>1. madde</li><li>2. madde</li><li>3. madde</li></ul>";
    }
  
    output += "</div>";
    document.getElementById("output").innerHTML = output;
  }
  