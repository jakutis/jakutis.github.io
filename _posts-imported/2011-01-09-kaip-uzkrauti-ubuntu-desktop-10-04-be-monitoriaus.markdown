---
layout: post
title: !binary |-
  S2FpcCB1xb5rcmF1dGkgVWJ1bnR1IERlc2t0b3AgMTAuMDQgYmUgbW9uaXRv
  cmlhdXM=
wordpress_id: 179
wordpress_url: !binary |-
  aHR0cHM6Ly9qYWt1dC5pcy8/cD0xNzk=
date: 2011-01-09 20:28:24.000000000 +00:00
---
Faile "/etc/default/grub" turi būti atkomentuotas:
<code>
GRUB_TERMINAL=console
</code>
ir GRUB_CMDLINE_LINUX nustatymas turi turėti nomodeset parametrą, pvz:
<code>
GRUB_CMDLINE_LINUX="nomodeset"
</code>
arba:
<code>
GRUB_CMDLINE_LINUX="bootdegraded=true nomodeset"
</code>

Tai padarius reikia įvykdyti komandą update-grub.

Be to, dar nepakenktų įvykdyti šias komandas (priklausomai nuo vaizdo plokštės):
Jei AMD Radeon:
<code>
echo options radeon modeset=0 > /etc/modprobe.d/radeon-kms.conf
</code>
Jei Intel:
<code>
echo options i915 modeset=0 > /etc/modprobe.d/i915-kms.conf
</code>
Jei Nvidia:
<code>
echo options nouveau modeset=0 > /etc/modprobe.d/nouveau-kms.conf
</code>
