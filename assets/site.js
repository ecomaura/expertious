
document.querySelector('.burger').onclick=function(){var n=document.getElementById('nav');var o=n.classList.toggle('open');this.setAttribute('aria-expanded',o)};
var f=document.getElementById('enq');if(f){
var S={solutions:['Digital Marketing','SEO','AIO / GEO / AEO'],capital:['Real Estate','Capital Markets','Forex & Crypto Markets','Long-term Investment','Short-term Trading','Algo & Automations']};
var d=f.division,s=f.service;function fill(){s.innerHTML='';(S[d.value]||[]).forEach(function(x){var o=document.createElement('option');o.textContent=x;s.appendChild(o)})}
var q=new URLSearchParams(location.search);if(q.get('division'))d.value=q.get('division');if(q.get('service')){fill();[].forEach.call(s.options,function(o){if(o.textContent.toLowerCase().indexOf(q.get('service'))>-1)o.selected=true})}else fill();
d.onchange=fill;
f.onsubmit=function(e){e.preventDefault();var m=document.getElementById('msg'),em=f.dataset.email;
if(!em){m.className='err';m.textContent='The enquiry form is not connected to an email address yet. Please check back shortly.';return}
var b=['Name: '+f.fname.value,'Organisation: '+f.org.value,'Email: '+f.email.value,'Phone: '+f.phone.value,'Division: '+d.options[d.selectedIndex].text,'Service: '+s.value,'Link: '+f.link.value,'Preferred contact: '+f.pref.value,'','Requirement:',f.req.value].join('\n');
location.href='mailto:'+em+'?subject='+encodeURIComponent('Enquiry: '+d.options[d.selectedIndex].text+' - '+s.value)+'&body='+encodeURIComponent(b);
m.className='ok';m.textContent='Thank you for contacting Expertious. Your email app should open with your enquiry. Send it to complete your request.'}}
