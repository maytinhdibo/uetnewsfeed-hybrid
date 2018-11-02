function scan()
{
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if(!result.cancelled)
            {
                   document.getElementById("result").innerText=result.text;
            }
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
   );
}
