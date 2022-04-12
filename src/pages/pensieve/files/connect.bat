REM Change the following command to the path of your sdk on platform tools
cd C:\Users\User\AppData\Local\Android\Sdk\platform-tools
adb usb
pause

adb tcpip 5555
pause

REM change the following command to ip of your android device
adb connect your.device.ip.adress
adb devices

REM thanks for using follow me on github @tomvargas
pause
exit