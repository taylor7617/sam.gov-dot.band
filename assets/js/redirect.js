(function(){
  const host = window.location.hostname.toLowerCase();
  if(host.endsWith("samgov-dotband.digital")){
    const target = "https://samgov-dotband.net" + window.location.pathname + window.location.search + window.location.hash;
    window.location.replace(target);
  }
})();

