---
path: '/second-post'
title: ' file frustration'
---

I first want to start this piece by saying that although this specific example is about the Apache and the mod_rewrite library that powers the .htaccess file.  This piece in no way reflects on the quality of the library.

I was digging through the the files, I changed mod_rewwrite about 5 different times.  I was banging my head on the table trying to understand where the IP redirect was coming from.  According to the rules of mod_rewrite in the Apache docs, that should not be active. But it was still redirecting.  I preformed a hard refresh and even killed the DNS responder.

> For those who don't know the hard refresh is a sub option below refresh in Google Chrome that is only accessable when the developer tools are open.

>sudo killall -HUP mDNSResponder
 is the command I used to 