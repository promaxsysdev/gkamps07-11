

alert("Inside INput Process\n");

window.onload = function () {
  document.getElementById("drpIdle").addEventListener("change", printValue);
  function printValue() {
    
    alert(document.getElementById("drpIdle").value);
    alert(document.getElementById("drp3rdGearlowAc").value);
    //,document.getElementById("drp3rdGearHighAcc").value,document.getElementById("drp3rdGearCruise40kmph").value,document.getElementById("drp4thGearCruise60kmph").value
    
   
  }
  ;
}
