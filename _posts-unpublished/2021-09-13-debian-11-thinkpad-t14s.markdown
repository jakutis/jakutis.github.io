`mokutil --import-hash $(pesign -P -h -i /boot/vmlinuz-4.18.0-193.el8.x86_64  | cut -f 2 -d ' ')`
plius nurasyti grub debian iso boot komandas iš nuotraukų ir parašyti blogpost kaip bootinti debian (paminėt, kad teko naudot usb-flash su tokiu pat iso dd) - gal į wiki/References/ failą - padaryti flat konvenciją kaip ir Journal.pdf

audiofix https://www.google.com/search?q=debian+t14s+audio
https://alexandra-zaharia.github.io/posts/solve-audio-issues-on-lenovo-thinkpad-t14s/
I spent more than an hour on this issue. I just got a Lenovo T14s and my sound card was not detected with alsa-lib 1.2.4-3 on Manjaro Linux. I was getting a “dummy output” in PulseAudio’s Volume Control (pavucontrol).
After trying various things, what solved the problem was installing sof-firmware and rebooting. Whew!
