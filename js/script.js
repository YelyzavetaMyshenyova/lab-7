  function init(){
  document.getElementById("entrybutton").addEventListener("click", dothis);
  }

  function dothis(){
  alert("Yelyzaveta Myshenyova: " + document.getElementById("entryinput").value);
    document.getElementById("textoutput").innerHTML = "entryinput";
  }

  window.addEventListener('load', init);
