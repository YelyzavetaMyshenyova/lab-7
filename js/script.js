  function init(){
  document.getElementById("entrybutton").addEventListener("click", dothis);
  }

  function dothis(){
  alert("Yelyzaveta Myshenyova:" + document.getElementById("textentry").value);
  }

  window.addEventListener('load', init);
