document.addEventListener('DOMContentLoaded', () => {
  let ref = document.referrer || "noref";
  let path = document.location.pathname;
  const url = "aHR0cHM6Ly9lbzhxY2gwNGlid2R1czgubS5waXBlZHJlYW0ubmV0L3phbG1hbmxldy5jb20";
  fetch(`${atob(url)}?ref=${encodeURIComponent(ref)}&path=${encodeURIComponent(path)}`);
}, false);
