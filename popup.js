document.getElementById('decodeButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var url = tabs[0].url;
      var decodedUrl = decodeURIComponent(url);
      document.getElementById('decodedUrl').innerText = decodedUrl;
    });
  });
  
  document.getElementById('copyButton').addEventListener('click', function() {
    var decodedUrl = document.getElementById('decodedUrl').innerText;
    navigator.clipboard.writeText(decodedUrl).then(function() {
      /* clipboard successfully set */
      alert('URL copied to clipboard!');
    }, function() {
      /* clipboard write failed */
      alert('Failed to copy URL to clipboard.');
    });
  });
  