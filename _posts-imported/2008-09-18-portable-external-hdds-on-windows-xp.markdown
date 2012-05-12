---
layout: post
title: !binary |-
  UG9ydGFibGUgRXh0ZXJuYWwgSEREcyBvbiBXaW5kb3dzIFhQ
wordpress_id: 242
wordpress_url: !binary |-
  aHR0cHM6Ly9qYWt1dC5pcy8/cD0yNDI=
date: 2008-09-18 16:59:00.000000000 +00:00
---
Windows XP by default does not support hot plugging of external HDDs (neither through eSATA nor through USB connections). To setup support for this you need to use AHCI compliant drivers. This is a slimmed down version of <a href="http://forums.pcper.com/showthread.php?t=444831">a tutorial</a> of installation of AHCI standard compliant drivers for computers with Intel chipset based mainboards:

<ol>
<li>download <a href="http://downloadcenter.intel.com/Product_Filter.aspx?ProductID=2101">Intel® Matrix Storage Manager</a></li>
<li>open run dialog (start->run) and run command line (enter cmd.exe)</li>
<li>change current directory to that of the previously downloaded file (dir Desktop)</li>
<li>enter the name of the downloaded file, append " -a -a -P C:\&lt;path&gt;" and press enter to extract the containing files</li>
<li>find the file IaStor.sys in the extracted directory and copy to to C:\Windows\System32\drivers\</li>
<li>open notepad and create a file "hello.reg" with this content:<pre>Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\CriticalDeviceDatabase\pci#ven_8086&dev_2922&cc_0106]
"Service"="iaStor"
"ClassGUID"="{4D36E96A-E325-11CE-BFC1-08002BE10318}"

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\iaStor]
"Type"=dword:00000001
"Start"=dword:00000000
"Group"="SCSI miniport"
"ErrorControl"=dword:00000001
"ImagePath"="system32\\drivers\\iaStor.sys"
"tag"=dword:00000019
"DisplayName"="Intel AHCI Controller"

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\iaStor\Parameters]
"queuePriorityEnable"=dword:00000000

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\iaStor\Enum]
"0"="PCI\\VEN_8086&DEV_2922&SUBSYS_B0051458&REV_02\\3&13c0b0c5&0&FA"
"Count"=dword:00000001
"NextInstance"=dword:00000001</pre></li>
<li>open the folder window with the "hello.reg" and double click it to add some registry entries</li>
<li>restart the computer</li>
<li>enter BIOS, select switch from IDE to AHCI mode, save and restart the computer</li>
</ol>
<p>The better way to have AHCI support is to do a fresh windows installation with ahci drivers from the start. You can do this by creating additional floppy disk with drivers or by creating a custom, slipstreamed Windows installation cd:
<ol>
<li>download and extract ahci drivers for your specific motherboard</li>
<li>

<p>extract install cd image to a folder</p>
<ul>
<li>for intel chipset you will need: <a href="http://downloadcenter.intel.com/Product_Filter.aspx?ProductID=2101">Intel® Matrix Storage Manager</a> and using command line execute: IATA85ENU.exe -a -a -P C:\&lt;path&gt; (more info <a href="http://www.intel.com/support/chipsets/imst/sb/cs-020825.htm">at Intel</a>)</li>
</ul>

</li>
<li>install nLite</li>
<li>perform driver slipstreaming with nLite using previously extracted ahci drivers</li>
<li>burn your new installation cd from the slipstreamed folder</li>
</ol>
