const DB={getInspekcje:()=>JSON.parse(localStorage.getItem('bl_ins')||'[]'),saveInspekcje:d=>localStorage.setItem('bl_ins',JSON.stringify(d)),getReklamacje:()=>JSON.parse(localStorage.getItem('bl_rek')||'[]'),saveReklamacje:d=>localStorage.setItem('bl_rek',JSON.stringify(d)),getProfil:()=>JSON.parse(localStorage.getItem('bl_profil')||'{}'),saveProfil:d=>localStorage.setItem('bl_profil',JSON.stringify(d)),newId:()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6)};
const KLASY_LP=['WA0','WA1','WB0','WB1','WC0','WC1','WD0','WK','S2a','S2b','S4','S3a','S3b','S1','M1','M2','X','ODRZUT'];
const GATUNKI=['SO - Sosna','SW - Swierк','JD - Jodla','MD - Modrzew','DB - Dab','BK - Buk','Inne'];
const WADY=['Seki (zdrowe/suche/chore)','Zgnilizna (brunatna/biala)','Skrzywienie podluzne','Pekniecia (czolowe/mrozowe)','Chodniki owadzie','Sinizna','Zbiezystosc','Wymiary niezgodne','Rak / skret wlokien','Uszkodzenia mechaniczne'];
function klasaBadge(k){const m={WA0:'green',WA1:'green',WB0:'green',WB1:'green',WC0:'orange',WC1:'orange',WD0:'orange',WK:'orange',S2a:'gray',S2b:'gray',S4:'gray',M1:'gray',M2:'gray',X:'red',ODRZUT:'red'};return'<span class="badge badge-'+(m[k]||'gray')+'">'+escHtml(k||'-')+'</span>'}
function statusBadge(s){const m={'Robocza':'gray','Wyslana':'green','W toku':'orange','Rozpatrzona':'blue'};return'<span class="badge badge-'+(m[s]||'gray')+'">'+escHtml(s||'Robocza')+'</span>'}
function fmtDate(iso){if(!iso)return'-';try{return new Date(iso).toLocaleDateString('pl-PL')}catch(e){return iso}}
function escHtml(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function wadyCount(ins){return(ins.wady||[]).filter(w=>w.checked).length}
function wadyList(ins){return(ins.wady||[]).filter(w=>w.checked).map(w=>w.name+(w.note?' ('+w.note+')':'')).join(', ')||'-'}
