  function init(){
  document.getElementById("entrybutton").addEventListener("click", dothis);
  }

  function dothis(){
  alert("Yelyzaveta Myshenyova:" + document.getElementById("entryinput").value);
  }

  window.addEventListener('load', init);
