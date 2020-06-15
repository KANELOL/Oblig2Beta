   // hjelpevariable for både view og controller
    var contentDiv = document.getElementById('content');

    // model
    let numbers = [7, 3, 1, 5, 8];
    let chosenBar; // Variabel for hvilken stolpe som er valgt
    let inputValue; // Variabel for hva som er skrevet i input-feltet
    let lastId = '';
    let isSelected = 0;
    // view
    function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    contentDiv.innerHTML = `
        <svg id="chart" width="500" viewBox="0 0 80 60">
         ${svgInnerHtml}
        </svg><br/>
        <div id="stolpeValg">Valgt stolpe: <i>Ingen Stolpe Valgt</i></div>
        <br />
        Verdi:
        <input type="number" min="1" max="10" oninput="inputValue = this.value" />
        <button onClick="addStolpe()">Legg til stolpe</button>
        <button id="endreStolpe" disabled>Endre valgt stolpe</button><br />
        <button id="fjernStolpe" disabled>Fjerne valgt stolpe</button>
        `;
}
    function createBar(number, barNo) {
        const width = 8;
        const spacing = 2;
        let x = (barNo - 1) * (width + spacing);
        let height = number * 5;
        let y = 60 - height;
        let color = calcColor(1, 10, barNo);
        return `<rect id="${barNo}" onClick="selectStolpe(${barNo})" width="${width}" height="${height}"
                            x="${x}" y="${y}" fill="${color}"></rect>`;
    }

    function calcColor(min, max, val) {
        var minHue = 240, maxHue = 0;
        var curPercent = (val - min) / (max - min);
        var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
        return colString;
    }
    function moveStolpe() {
        for (let i = 0; i < numbers.length; i++) {
            //var newX = (meh - 1) * (8 + 2); 
            contentdiv.createBar(numbers[lastId], lastId); //= createBar(numbers[lastId], lastId);
            //document.getElementById(''+meh+'').outerHTML = (meh - 1) * (8 + 2); `<rect id="${meh}" onClick="selectStolpe(${meh})" width="8" height="2"
            //x="${newX}" y="${y}" fill="${color}"></rect>`;
        }}

    // controller (ingenting her ennå)  
    function selectStolpe(id) {
    if (isSelected == 0) {
    lastId = id;
    document.getElementById('stolpeValg').innerHTML = "Valgt stolpe: <i>"+id+"</i> Med farge:";
    document.getElementById(''+id+'').style = "stroke:black;stroke-width:1;stroke-dasharray: 1";
    //Enable Stolpene
    document.getElementById("endreStolpe").outerHTML = '<button id="endreStolpe" onClick="endrStolpe('+id+')" enabled>Endre valgt stolpe</button>';
    document.getElementById("fjernStolpe").outerHTML = '<button id="fjernStolpe" onClick="dltStolpe('+id+')" enabled>Fjerne valgt stolpe</button>';
    isSelected = 1;
    //document.getElementById(''+id+'').style.stroke.dasharray = 10, 4;
    //alert(document.getElementById(''+id+''));
    return id;
     } else
         if (isSelected == 1) {
        document.getElementById(''+lastId+'').style = "";
        //Disable stolpene.
        document.getElementById("endreStolpe").outerHTML = '<button id="endreStolpe" disabled>Endre valgt stolpe</button>';
        document.getElementById("fjernStolpe").outerHTML = '<button id="fjernStolpe" disabled>Fjerne valgt stolpe</button>';
        lastId = '';
        isSelected = 0;
        return 0;
         }}
         //Slett Stolpe
    function dltStolpe(tilfTall) {
        numbers.splice(tilfTall-1, 1);
        isSelected = 0;
        document.getElementById(''+tilfTall+'').outerHTML = "";
        show();
        //Endrer selectedStolpe automatisk til noe nært du klikker.
        if (tilfTall <= numbers.length)
        selectStolpe(tilfTall);
      else {
        return selectStolpe(tilfTall-1);
        //moveStolpe();
        }}
        //Endrer StolpeVerdi
        function endrStolpe(tilfTall) {
            numbers.splice(tilfTall-1, 1 ,inputValue);
            selectStolpe(tilfTall);
            show();
            console.log(tilfTall);
            selectStolpe(tilfTall);
        }
        function addStolpe() {
            if (inputValue > 0 && inputValue <= 10) {
            numbers.splice(numbers.length, 0, inputValue);
            //svgInnerHtml += createBar(inputValue, numbers.length);
            createBar(inputValue, numbers.length);
            //createBar(inputValue, numbers.length);
            show();
        } else {
            alert('Please choose a number between 1-10.');
        }}