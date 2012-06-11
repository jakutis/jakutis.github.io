---
layout: post
title: SVN Cleanup Rage
date: 2011-07-15 13:34:26.000000000 +00:00
---
Subversion story of the day:

    tahu@desktop:~/trunk$ svn up
    svn: Working copy '.' locked
    svn: run 'svn cleanup' to remove locks (type 'svn help cleanup' for details)
    tahu@desktop:~/trunk$ svn cleanup
    svn: Your .svn/tmp directory may be missing or corrupt; run 'svn cleanup' and try again

WTF

    tahu@desktop:~/trunk$ svn cleanup
    svn: Your .svn/tmp directory may be missing or corrupt; run 'svn cleanup' and try again

RAGE

GOOGLE

    tahu@desktop:~/trunk$ find . -iname '.svn' -exec mkdir {}/tmp \;
    tahu@desktop:~/trunk$ svn cleanup
    tahu@desktop:~/trunk$
