function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("result").innerText = `${celsius} °C = ${fahrenheit.toFixed(2)} °F`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid Celsius temperature.";
    }
}

function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("result").innerText = `${fahrenheit} °F = ${celsius.toFixed(2)} °C`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid Fahrenheit temperature.";
    }
}




