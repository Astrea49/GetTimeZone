let date=Date.now();function getTimeZoneName(e){return new Intl.DateTimeFormat([],{timeZoneName:e}).formatToParts(date).find((e=>"timeZoneName"===e.type)).value}document.getElementById("timezone_text").innerText="Your time zone is: "+getTimeZoneName("short"),document.getElementById("fullname_text").innerText="Full name: "+getTimeZoneName("long");const zoneName=(new Intl.DateTimeFormat).resolvedOptions().timeZone;var temp_link=document.createElement("a");temp_link.href="https://www.iana.org/time-zones",temp_link.innerHTML="IANA",document.getElementById("othername_text").innerHTML=temp_link.outerHTML+" name: "+zoneName;
