(function(){"use strict";var E={6687:function(E,e,t){var n=t(9242),i=t(3396);function o(E,e){const t=(0,i.up)("router-link"),n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",null,[(0,i.Wm)(t,{to:{name:"home"}},{default:(0,i.w5)((()=>[(0,i.Uk)("Home")])),_:1}),(0,i.Uk)(" | "),(0,i.Wm)(t,{to:{name:"MPD-transformation"}},{default:(0,i.w5)((()=>[(0,i.Uk)("Application")])),_:1})]),(0,i.Wm)(n)],64)}var l=t(89);const r={},A=(0,l.Z)(r,[["render",o]]);var T=A,L=t(2483);function R(E,e,t,n,o,l){const r=(0,i.up)("home");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r)])}const a=(0,i._)("h1",null,"HOME",-1),C=(0,i._)("p",null,"This application allows to transform the data related to the MPD from the excel file given by Airbus, to the excel file needed to enter this data with Amasis.",-1),s=(0,i._)("p",null,"To understand be",-1);function u(E,e,t,n,o,l){const r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[a,C,(0,i._)("p",null,[(0,i.Uk)("In order to do that, go to the "),(0,i.Wm)(r,{to:{name:"MPD-transformation"}},{default:(0,i.w5)((()=>[(0,i.Uk)("Application")])),_:1}),(0,i.Uk)(" tab and follow the instructions.")]),s])}var O={name:"Home"};const S=(0,l.Z)(O,[["render",u]]);var c=S,N={name:"HomeView",components:{Home:c}};const d=(0,l.Z)(N,[["render",R]]);var M=d;function H(E,e,t,n,o,l){const r=(0,i.up)("MPDTransformation");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(r)])}var I=t(7139);const f=E=>((0,i.dD)("data-v-6177a5e4"),E=E(),(0,i.Cn)(),E),h=f((()=>(0,i._)("div",{class:"background"},null,-1))),D={id:"main-container",class:"p-5 text-center border rounded-5 shadow bg-white"},P=f((()=>(0,i._)("h1",{class:"mb-5"},"🚀 MPD APP 🚀",-1))),p=f((()=>(0,i._)("p",null,"This application allows to transform the data related to the MPD from the excel file given by Airbus, to the excel file needed to enter this data with Amasis.",-1))),F={class:"parameter-container"},m={class:"checkbox-container"},U=f((()=>(0,i._)("label",{for:"optimized-checkbox"},"FH & FC optimized",-1))),v={class:"radio-btn-container"},V=f((()=>(0,i._)("label",{for:"radio-320"},"320",-1))),b=f((()=>(0,i._)("label",{for:"radio-330"},"330",-1)));function g(E,e,t,o,l,r){return(0,i.wg)(),(0,i.iD)("div",null,[h,(0,i._)("div",D,[P,p,(0,i._)("div",F,[(0,i._)("div",m,[(0,i.wy)((0,i._)("input",{type:"checkbox",id:"optimized-checkbox","onUpdate:modelValue":e[0]||(e[0]=E=>l.optimized=E)},null,512),[[n.e8,l.optimized]]),U]),(0,i._)("div",v,[(0,i._)("div",null,[(0,i.wy)((0,i._)("input",{type:"radio",id:"radio-320",name:"aircraft-model",value:"320","onUpdate:modelValue":e[1]||(e[1]=E=>l.aircraftModel=E)},null,512),[[n.G2,l.aircraftModel]]),V]),(0,i._)("div",null,[(0,i.wy)((0,i._)("input",{type:"radio",id:"radio-330",name:"aircraft-model",value:"330","onUpdate:modelValue":e[2]||(e[2]=E=>l.aircraftModel=E)},null,512),[[n.G2,l.aircraftModel]]),b])])]),(0,i._)("input",{class:"form-control mt-4",type:"file",accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",onChange:e[3]||(e[3]=(...E)=>r.readFile&&r.readFile(...E))},null,32),(0,i._)("button",{class:(0,I.C_)(["btn btn-primary mt-3",[""===this.workbook?"disabled":""]]),onClick:e[4]||(e[4]=(...E)=>r.transformFile&&r.transformFile(...E))},"TRANSFORM",2),(0,i._)("a",{class:(0,I.C_)(["btn mt-3",[""===this.download_workbook?"disabled btn-secondary":"btn-success"]]),onClick:e[5]||(e[5]=(...E)=>r.downloadFile&&r.downloadFile(...E))},"DOWNLOAD",2)])])}t(7658);const w=function(E){let e=E["TASK NUMBER"];return void 0===e?"":(e=e.replaceAll("\n",""),e)},k=function(E){let e=E["SKILL CODE"];return void 0===e?"":e.substring(0,3)},Y=function(E){let e=E["SOURCE"];return void 0===e?"":e.toUpperCase().match(/5|8|CMR|ALI|FAL/)?"O":"N"},_=function(E){let e=E["SOURCE"];return void 0===e?"":e.toUpperCase().match(/\*|ALI|FAL|CMR/)?"N":"Y"},B=function(E){return E.toUpperCase().match(/TCC/)?"N":E.toUpperCase().match(/NT/)?"Y":'"to be filled"'},y=function(E){let e=E["SOURCE"];if(void 0===e)return"";if(e.match(/\*\*/)){const E=["9","8","7","6","5"].filter((E=>e.match(E)));return E.length>0?E[0]+"**":"**"}if(e.match(/\*/)){const E=["9","8","7","6","5"].filter((E=>e.match(E)));return E.length>1?E[1]+E[0]+"*":E.length>0?E[0]+"*":"*"}if(e.match(/FAL/))return"FAL";if(e.match(/ALI/))return"ALI";if(e.match(/9|8|7|6|5/)){const E=["9","8","7","6","5"].filter((E=>e.match(E)));return E.length>2?E[2]+E[1]+E[0]:E.length>1?E[1]+E[0]:E[0]}return e.match(/MRB/)?"MRB":e.match(/CMP/)?"CMP":e.match(/LUR/)?"LUR":e.match(/SEMR/)?"SEM":e.match(/CPCP/)?"CPC":e.match(/VSB/)?"VSB":void 0},j=function(E){let e=E["TASK CODE"];return void 0===e?"":e.toUpperCase().substring(0,3)},Q=function(E,e=!1,t="default"){let n;return"default"===t?n=e?E["SAMPLE THRESHOLD"]:E["100% THRESHOLD"]:"FH"===t?n=e?E["SAMPLE THRESHOLD FH"]:E["100% THRESHOLD FH"]:"FC"===t&&(n=e?E["SAMPLE THRESHOLD FC"]:E["100% THRESHOLD FC"]),void 0===n?"":n.match(/FH/)?"FH":""},$=function(E,e=!1,t="default"){let n;if("default"===t?n=e?E["SAMPLE THRESHOLD"]:E["100% THRESHOLD"]:"FH"===t?n=e?E["SAMPLE THRESHOLD FH"]:E["100% THRESHOLD FH"]:"FC"===t&&(n=e?E["SAMPLE THRESHOLD FC"]:E["100% THRESHOLD FC"]),void 0===n)return"";let i=n.split("OR"),o=i.filter((E=>E.match(/FH/)));if(0==o.length)return"";let l=o[0].replaceAll("\n","").split(" ")[0];return l.length>6?l.substring(0,6):l},K=function(E,e=!1,t="default"){let n;return"default"===t?n=e?E["SAMPLE THRESHOLD"]:E["100% THRESHOLD"]:"FH"===t?n=e?E["SAMPLE THRESHOLD FH"]:E["100% THRESHOLD FH"]:"FC"===t&&(n=e?E["SAMPLE THRESHOLD FC"]:E["100% THRESHOLD FC"]),void 0===n?"":n.match(/FC/)?"CY":""},x=function(E,e=!1,t="default"){let n;if("default"===t?n=e?E["SAMPLE THRESHOLD"]:E["100% THRESHOLD"]:"FH"===t?n=e?E["SAMPLE THRESHOLD FH"]:E["100% THRESHOLD FH"]:"FC"===t&&(n=e?E["SAMPLE THRESHOLD FC"]:E["100% THRESHOLD FC"]),void 0===n)return"";let i=n.split("OR"),o=i.filter((E=>E.match(/FC/)));if(0==o.length)return"";let l=o[0].replaceAll("\n","").split(" ")[0];return l.length>6?l.substring(0,6):l},X=function(E,e=!1,t="default"){let n;return"default"===t?n=e?E["SAMPLE THRESHOLD"]:E["100% THRESHOLD"]:"FH"===t?n=e?E["SAMPLE THRESHOLD FH"]:E["100% THRESHOLD FH"]:"FC"===t&&(n=e?E["SAMPLE THRESHOLD FC"]:E["100% THRESHOLD FC"]),void 0===n?"":n.match(/MO/)?"MO":n.match(/YE/)?"YE":n.match(/DY/)?"DY":""},z=function(E,e=!1,t="default"){let n;if("default"===t?n=e?E["SAMPLE THRESHOLD"]:E["100% THRESHOLD"]:"FH"===t?n=e?E["SAMPLE THRESHOLD FH"]:E["100% THRESHOLD FH"]:"FC"===t&&(n=e?E["SAMPLE THRESHOLD FC"]:E["100% THRESHOLD FC"]),void 0===n)return"";let i=n.split("OR"),o=i.filter((E=>E.match(/MO|YE|DY/)));if(0==o.length)return"";let l=o[0].replaceAll("\n","").split(" ")[0];return l.length>6?l.substring(0,6):l},G=function(E,e=!1,t="default"){let n;if("default"===t?n=e?E["SAMPLE INTERVAL"]:E["100% INTERVAL"]:"FH"===t?n=e?E["SAMPLE INTERVAL FH"]:E["100% INTERVAL FH"]:"FC"===t&&(n=e?E["SAMPLE INTERVAL FC"]:E["100% INTERVAL FC"]),void 0===n)return"";let i=n.split("OR"),o=i.filter((E=>E.match(/FH/)));if(0==o.length)return"";let l=o[0].replaceAll("\n","").split(" ")[0];return l.length>6?l.substring(0,6):l},Z=function(E,e=!1,t="default"){let n;if("default"===t?n=e?E["SAMPLE INTERVAL"]:E["100% INTERVAL"]:"FH"===t?n=e?E["SAMPLE INTERVAL FH"]:E["100% INTERVAL FH"]:"FC"===t&&(n=e?E["SAMPLE INTERVAL FC"]:E["100% INTERVAL FC"]),void 0===n)return"";let i=n.split("OR"),o=i.filter((E=>E.match(/FC/)));if(0==o.length)return"";let l=o[0].replaceAll("\n","").split(" ")[0];return l.length>6?l.substring(0,6):l},W=function(E,e=!1,t="default"){let n;return"default"===t?n=e?E["SAMPLE INTERVAL"]:E["100% INTERVAL"]:"FH"===t?n=e?E["SAMPLE INTERVAL FH"]:E["100% INTERVAL FH"]:"FC"===t&&(n=e?E["SAMPLE INTERVAL FC"]:E["100% INTERVAL FC"]),void 0===n?"":n.match(/MO/)?"MO":n.match(/YE/)?"YE":n.match(/DY/)?"DY":""},q=function(E,e=!1,t="default"){let n;if("default"===t?n=e?E["SAMPLE INTERVAL"]:E["100% INTERVAL"]:"FH"===t?n=e?E["SAMPLE INTERVAL FH"]:E["100% INTERVAL FH"]:"FC"===t&&(n=e?E["SAMPLE INTERVAL FC"]:E["100% INTERVAL FC"]),void 0===n)return"";let i=n.split("OR"),o=i.filter((E=>E.match(/MO|YE|DY/)));if(0==o.length)return"";let l=o[0].replaceAll("\n","").split(" ")[0];return l.length>6?l.substring(0,6):l},J=function(E,e="default"){const t=E["TCI"];if(void 0!==t&&t.match(/T/))return"TCC";let n,i;return"default"===e?n=E["100% THRESHOLD"]:"FH"===e?n=E["100% THRESHOLD FH"]:"FC"===e&&(n=E["100% THRESHOLD FC"]),void 0!==n&&n.match(/NOTE/)&&n.match(/FH|FC|DY|YE|MO/)?"NT":("default"===e?i=E["100% INTERVAL"]:"FH"===e?i=E["100% INTERVAL FH"]:"FC"===e&&(i=E["100% INTERVAL FC"]),void 0!==i&&i.match(/NOTE/)&&i.match(/FH|FC|DY|YE|MO/)?"NT":'"To be filled"')},EE=function(E){let e=E["ZONE"];if(void 0===e)return"";let t=e.split("\n");while(t.length<22)t.push("");return t},eE=function(E){let e=E["ACCESS"];if(void 0===e)return"";e=e.replaceAll("\n"," ");let t=e.split(" ").filter((E=>""!=E));if(t.length>=50)return t.slice(0,50);while(t.length<50)t.push("");return t},tE=function(E){let e=E["TASKM.H."];return void 0===e||e.match(/N\/A|TBC/)||""==e?"":e.split("\n")[0].replaceAll(".",",")},nE=function(E){let e=E["MEN"];return void 0===e?"":e.split("\n")[0]},iE=function(E){let e=E["DESCRIPTION"];if(void 0===e)return"";let t=e.split("\n")[0];while(t.length>40)t=t.split(" ").slice(0,-1).join(" ");return t.toUpperCase()},oE=function(E){let e=E["DESCRIPTION"],t=E["PREPARATION"],n=E["APPLICABILITY"];if(""!==t&&(e+="\nPREPARATION\n"+t),""!==n&&(e+="\nEFFECTIVITY\n"+n),void 0===e)return"";e=e.replaceAll("\\","");let i=e.split("\n").filter(((E,e)=>""!=E&&0!==e));for(let l=0;l<i.length;l++)if(i[l].length>75){let E=i[l].split(" ");i=[...i.slice(0,l),E.slice(0,Math.round(E.length/2)).join(" "),E.slice(Math.round(E.length/2)).join(" "),...i.slice(l+1)],l=0}if(16==i.length)return i;if(i.length<16){while(i.length<16)i.push("");return i}i=[""];let o=e.split("\n").join(" ").replaceAll("  "," ").replaceAll("  "," ").split(" ");for(let l of o)i[i.length-1].length+l.length+1<=75?i[i.length-1]+=`${l} `:(i[i.length-1]=i[i.length-1].trim(),i.push(`${l} `));if(16==i.length)return i;if(i.length<16){while(i.length<16)i.push("");return i}return i.slice(0,16)},lE=function(E){let e=E["TASK NUMBER"];return void 0===e?"":e.substring(0,2)},rE=function(E){const e=E["REFERENCE"],t=E["SOURCE TASK REFERENCE"];let n;if((void 0===e||""===e)&&(void 0===t||""===t))return["","","","","","","","","",""];n=void 0===e||""===e?t.split("\n"):void 0===t||""===t?e.split("\n"):[...e.split("\n"),...t.split("\n")];let i=n.filter((E=>0!==E.trim().length)).reduce(((E,t,n)=>{if(n>4)return E;{const i=t.split(" ");return 1===i.length?0===n&&void 0!==e&&""!==e?[...E,i[0],"AMM"]:[...E,i[0],"unknown"]:2===i.length?[...E,i[1],i[0]]:t.match(/APX|APPENDIX/)?[...E,t,"MPD"]:[...E,i.slice(1).join(" "),i[0]]}}),[]);while(i.length<10)i.push("");return i},AE=function(E){return Object.values(E.slice(0,1)[0]).map((E=>E.toLowerCase())).filter((E=>E.includes("revision")))[0].split("\n")[0].split(":")[1].trim()},TE=function(E){const e=Object.values(E.slice(0,1)[0]).map((E=>E.toLowerCase())).filter((E=>E.includes("revision")))[0].split("\n")[1].split(":")[1].trim();let t;switch(e.split(" ")[0]){case"jan":t="01";break;case"feb":t="02";break;case"mar":t="03";break;case"apr":t="04";break;case"may":t="05";break;case"jun":t="06";break;case"jul":t="07";break;case"aug":t="08";break;case"sep":t="09";break;case"oct":t="10";break;case"nov":t="11";break;case"dic":t="12";break;default:t="to-be-specifyed"}return e.split("/")[0].split(" ")[1]+"/"+t+"/"+e.split("/")[1]},LE=function(E){let e=E["REV CODE"];return void 0===e?"":e},RE=function(E,e){let t="",n=E["ZONE"];if(void 0!==n){let E=n.split("\n");E.length>22&&(t+="(more than 22 zones)")}let i=E["ACCESS"];if(void 0!==i){i=i.replaceAll("\n"," ");let E=i.split(" ").filter((E=>""!=E));E.length>50&&(t+="(more than 50 access)")}const o=E["REFERENCE"],l=E["SOURCE TASK REFERENCE"];let r;void 0!==o&&""!==o&&void 0!==l&&""!==l?r=[...o.split("\n"),...l.split("\n")]:void 0===o||""===o?r=l.split("\n"):void 0!==l&&""!==l||(r=o.split("\n")),r.length>5&&(t+="(more than 5 references)");const A=e?["SAMPLE THRESHOLD","SAMPLE INTERVAL","100% THRESHOLD","100% INTERVAL","SAMPLE THRESHOLD FH","SAMPLE INTERVAL FH","100% THRESHOLD FH","100% INTERVAL FH","SAMPLE THRESHOLD FC","SAMPLE INTERVAL FC","100% THRESHOLD FC","100% INTERVAL FC"]:["SAMPLE THRESHOLD","SAMPLE INTERVAL","100% THRESHOLD","100% INTERVAL"];return A.forEach((e=>{const n=E[e];n&&n.includes("CRR")&&(t+=`(CRR in "${e}")`)})),t},aE=t(7092);var CE={name:"MPDTransformation",data(){return{optimized:!1,aircraftModel:320,workbook:"",download_workbook:"",numRevisionValue:"",dateRevisionValue:""}},methods:{readFile(){const E=document.querySelectorAll("input")[3];this.file=E.files[0];const e=new FileReader;return e.onload=E=>{const e=E.target.result,t=aE.read(e,{type:"binary"});this.workbook=t},e.readAsBinaryString(this.file)},transformFile(){this.optimized?this.transformFileOptimized():this.transformFileNormal()},transformFileNormal(){const E=this.workbook.Sheets["MPD"],e=aE.utils.sheet_to_json(E,{header:["REV CODE","SECTION","TASK NUMBER","SOURCE TASK REFERENCE","ACCESS","PREPARATION","ZONE","DESCRIPTION","SKILL CODE","TASK CODE","SAMPLE THRESHOLD","SAMPLE INTERVAL","100% THRESHOLD","100% INTERVAL","SOURCE","TCI","RSC","TPS","REFERENCE","MEN","TASKM.H.","ACCESSM.H.","PREP.M.H.","APPLICABILITY"]});this.numRevisionValue="R"+AE(e),this.dateRevisionValue=TE(e);let t=e.slice(2),n=[];t.forEach((E=>{n.push({"REFERENCE DE LA CARTE":w(E),"TYPE DE LA CARTE":"MC",SPECIALITE:k(E),CONTROLE:Y(E),REPORT:_(E),"OUT OF PHASE":B(J(E)),PHASE:"",POSTE:"",MRB:y(E),"CODE TACHE":j(E),NOTE:320===this.aircraftModel?'"to be filled"':"N","TEXT NOTE 1":"","TEXT NOTE 2":"","TEXT NOTE 3":"","COMPTEUR SEUIL 1":Q(E),"VALEUR SEUIL 1":$(E),"COMPTEUR SEUIL 2":K(E),"VALEUR SEUIL 2":x(E),"COMPTEUR SEUIL 3":X(E),"VALEUR SEUIL 3":z(E),HEURES:G(E),CYCLES:Z(E),"CODE CAL":W(E),CALENDAIRE:q(E),"CODE CHECK":J(E),"CODE ATYPIQUE 1":"","INTERVAL ATYPIQUE 1":"","CODE ATYPIQUE 2":"","INTERVAL ATYPIQUE 2":"","CODE ATYPIQUE 3":"","INTERVAL ATYPIQUE 3":"","TOLERANCE - TOLERANCE":"N","TOLERANCE - NAME":"","TOLERANCE - HEURES":"","TOLERANCE-CYCLES":"","TOLERANCE - CALENDAIRE":"","TOLERANCE - COD CALENDAIRE":"","TOLERANCE - CPT1":"","TOLERANCE - CPT2":"","TOLERANCE - CPT3":"","METHOD CALC CALENDAIRE":"","METHOD CALC AUTRES":"",...EE(E).reduce(((E,e,t)=>(E[`A/C ZONE ${t+1}`]=e,E)),{}),...eE(E).reduce(((E,e,t)=>(E[`ACCESS ${t+1}`]=e,E)),{}),"FAMILLE MSN 1":"","FAMILLE MSN 2":"","FAMILLE MSN 3":"","FAMILLE MSN 4":"","FAMILLE MSN 5":"",RESSOURCE:k(E),"CHARGE HH":tE(E),NOMBRE:nE(E),"RESSOURCE 2":"","CHARGE HH 2":"","NOMBRE 2":"","RESSOURCE 3":"","CHARGE HH 3":"","NOMBRE 3":"","LIBELLE DE LA CARTE":iE(E),...oE(E).reduce(((E,e,t)=>(E[`TEXTE ${t+1}`]=e,E)),{}),ATA:lE(E),"LIBELLE DE L'ATA":"",...rE(E).reduce(((E,e,t)=>(t%2===0?E["REFERENCE DOCUMENT LIE "+(t+1-t/2)]=e:E["TYPE DOCUMENT LIE "+(t+1)/2]=e,E)),{}),"NUMERO AMENDEMENT":'"to be filled"',"DATE AMENDEMENT":'"to be filled"',"NUMERO REVISION":this.numRevisionValue,"DATE REVISION":this.dateRevisionValue,"TYPE DE MODIFICATION":LE(E),COMMENTS:RE(E,this.optimized)}),(void 0!==E["SAMPLE THRESHOLD"]&&""!==E["SAMPLE THRESHOLD"]||void 0!==E["SAMPLE INTERVAL"]&&""!==E["SAMPLE INTERVAL"])&&n.push({"REFERENCE DE LA CARTE":w(E)+"S","TYPE DE LA CARTE":"MC",SPECIALITE:k(E),CONTROLE:Y(E),REPORT:_(E),"OUT OF PHASE":B(J(E)),PHASE:"",POSTE:"",MRB:y(E),"CODE TACHE":j(E),NOTE:320===this.aircraftModel?'"to be filled"':"N","TEXT NOTE 1":"","TEXT NOTE 2":"","TEXT NOTE 3":"","COMPTEUR SEUIL 1":Q(E,!0),"VALEUR SEUIL 1":$(E,!0),"COMPTEUR SEUIL 2":K(E,!0),"VALEUR SEUIL 2":x(E,!0),"COMPTEUR SEUIL 3":X(E,!0),"VALEUR SEUIL 3":z(E,!0),HEURES:G(E,!0),CYCLES:Z(E,!0),"CODE CAL":W(E,!0),CALENDAIRE:q(E,!0),"CODE CHECK":J(E),"CODE ATYPIQUE 1":"","INTERVAL ATYPIQUE 1":"","CODE ATYPIQUE 2":"","INTERVAL ATYPIQUE 2":"","CODE ATYPIQUE 3":"","INTERVAL ATYPIQUE 3":"","TOLERANCE - TOLERANCE":"N","TOLERANCE - NAME":"","TOLERANCE - HEURES":"","TOLERANCE-CYCLES":"","TOLERANCE - CALENDAIRE":"","TOLERANCE - COD CALENDAIRE":"","TOLERANCE - CPT1":"","TOLERANCE - CPT2":"","TOLERANCE - CPT3":"","METHOD CALC CALENDAIRE":"","METHOD CALC AUTRES":"",...EE(E).reduce(((E,e,t)=>(E[`A/C ZONE ${t+1}`]=e,E)),{}),...eE(E).reduce(((E,e,t)=>(E[`ACCESS ${t+1}`]=e,E)),{}),"FAMILLE MSN 1":"","FAMILLE MSN 2":"","FAMILLE MSN 3":"","FAMILLE MSN 4":"","FAMILLE MSN 5":"",RESSOURCE:k(E),"CHARGE HH":tE(E),NOMBRE:nE(E),"RESSOURCE 2":"","CHARGE HH 2":"","NOMBRE 2":"","RESSOURCE 3":"","CHARGE HH 3":"","NOMBRE 3":"","LIBELLE DE LA CARTE":iE(E),...oE(E).reduce(((E,e,t)=>(E[`TEXTE ${t+1}`]=e,E)),{}),ATA:lE(E),"LIBELLE DE L'ATA":"",...rE(E).reduce(((E,e,t)=>(t%2===0?E["REFERENCE DOCUMENT LIE "+(t+1-t/2)]=e:E["TYPE DOCUMENT LIE "+(t+1)/2]=e,E)),{}),"NUMERO AMENDEMENT":'"to be filled"',"DATE AMENDEMENT":'"to be filled"',"NUMERO REVISION":this.numRevisionValue,"DATE REVISION":this.dateRevisionValue,"TYPE DE MODIFICATION":LE(E),COMMENTS:RE(E,this.optimized)})}));const i=aE.utils.json_to_sheet(n);this.download_workbook=aE.utils.book_new(),this.download_workbook.SheetNames.push("MPD induction AMASIS"),this.download_workbook.Sheets["MPD induction AMASIS"]=i},transformFileOptimized(){const E=this.workbook.Sheets["MPD"],e=aE.utils.sheet_to_json(E,{header:["REV CODE","SECTION","TASK NUMBER","SOURCE TASK REFERENCE","ACCESS","PREPARATION","ZONE","DESCRIPTION","SKILL CODE","TASK CODE","SAMPLE THRESHOLD","SAMPLE INTERVAL","100% THRESHOLD","100% INTERVAL","SAMPLE THRESHOLD FH","SAMPLE INTERVAL FH","100% THRESHOLD FH","100% INTERVAL FH","SAMPLE THRESHOLD FC","SAMPLE INTERVAL FC","100% THRESHOLD FC","100% INTERVAL FC","SOURCE","TCI","RSC","TPS","REFERENCE","MEN","TASKM.H.","ACCESSM.H.","PREP.M.H.","APPLICABILITY"]});this.numRevisionValue="R"+AE(e),this.dateRevisionValue=TE(e);let t=e.slice(3),n=[[],[],[]];t.forEach((E=>{["FH","FC"].forEach(((e,t)=>{let i;i=void 0!==E[`100% THRESHOLD ${e}`]&&""!==E[`100% THRESHOLD ${e}`]||void 0!==E[`100% INTERVAL ${e}`]&&""!==E[`100% INTERVAL ${e}`]?e:"default",n[t].push({"REFERENCE DE LA CARTE":w(E),"TYPE DE LA CARTE":"MC",SPECIALITE:k(E),CONTROLE:Y(E),REPORT:_(E),"OUT OF PHASE":B(J(E,i)),PHASE:"",POSTE:"",MRB:y(E),"CODE TACHE":j(E),NOTE:320===this.aircraftModel?'"to be filled"':"N","TEXT NOTE 1":"","TEXT NOTE 2":"","TEXT NOTE 3":"","COMPTEUR SEUIL 1":Q(E,!1,i),"VALEUR SEUIL 1":$(E,!1,i),"COMPTEUR SEUIL 2":K(E,!1,i),"VALEUR SEUIL 2":x(E,!1,i),"COMPTEUR SEUIL 3":X(E,!1,i),"VALEUR SEUIL 3":z(E,!1,i),HEURES:G(E,!1,i),CYCLES:Z(E,!1,i),"CODE CAL":W(E,!1,i),CALENDAIRE:q(E,!1,i),"CODE CHECK":J(E,i),"CODE ATYPIQUE 1":"","INTERVAL ATYPIQUE 1":"","CODE ATYPIQUE 2":"","INTERVAL ATYPIQUE 2":"","CODE ATYPIQUE 3":"","INTERVAL ATYPIQUE 3":"","TOLERANCE - TOLERANCE":"N","TOLERANCE - NAME":"","TOLERANCE - HEURES":"","TOLERANCE-CYCLES":"","TOLERANCE - CALENDAIRE":"","TOLERANCE - COD CALENDAIRE":"","TOLERANCE - CPT1":"","TOLERANCE - CPT2":"","TOLERANCE - CPT3":"","METHOD CALC CALENDAIRE":"","METHOD CALC AUTRES":"",...EE(E).reduce(((E,e,t)=>(E[`A/C ZONE ${t+1}`]=e,E)),{}),...eE(E).reduce(((E,e,t)=>(E[`ACCESS ${t+1}`]=e,E)),{}),"FAMILLE MSN 1":"","FAMILLE MSN 2":"","FAMILLE MSN 3":"","FAMILLE MSN 4":"","FAMILLE MSN 5":"",RESSOURCE:k(E),"CHARGE HH":tE(E),NOMBRE:nE(E),"RESSOURCE 2":"","CHARGE HH 2":"","NOMBRE 2":"","RESSOURCE 3":"","CHARGE HH 3":"","NOMBRE 3":"","LIBELLE DE LA CARTE":iE(E),...oE(E).reduce(((E,e,t)=>(E[`TEXTE ${t+1}`]=e,E)),{}),ATA:lE(E),"LIBELLE DE L'ATA":"",...rE(E).reduce(((E,e,t)=>(t%2===0?E["REFERENCE DOCUMENT LIE "+(t+1-t/2)]=e:E["TYPE DOCUMENT LIE "+(t+1)/2]=e,E)),{}),"NUMERO AMENDEMENT":'"to be filled"',"DATE AMENDEMENT":'"to be filled"',"NUMERO REVISION":this.numRevisionValue,"DATE REVISION":this.dateRevisionValue,"TYPE DE MODIFICATION":LE(E),COMMENTS:RE(E,this.optimized)}),(void 0!==E["SAMPLE THRESHOLD"+("default"===i?"":` ${i}`)]&&""!==E["SAMPLE THRESHOLD"+("default"===i?"":` ${i}`)]||void 0!==E["SAMPLE INTERVAL"+("default"===i?"":` ${i}`)]&&""!==E["SAMPLE INTERVAL"+("default"===i?"":` ${i}`)])&&n[t].push({"REFERENCE DE LA CARTE":w(E)+"S","TYPE DE LA CARTE":"MC",SPECIALITE:k(E),CONTROLE:Y(E),REPORT:_(E),"OUT OF PHASE":B(J(E,i)),PHASE:"",POSTE:"",MRB:y(E),"CODE TACHE":j(E),NOTE:320===this.aircraftModel?'"to be filled"':"N","TEXT NOTE 1":"","TEXT NOTE 2":"","TEXT NOTE 3":"","COMPTEUR SEUIL 1":Q(E,!0,i),"VALEUR SEUIL 1":$(E,!0,i),"COMPTEUR SEUIL 2":K(E,!0,i),"VALEUR SEUIL 2":x(E,!0,i),"COMPTEUR SEUIL 3":X(E,!0,i),"VALEUR SEUIL 3":z(E,!0,i),HEURES:G(E,!0,i),CYCLES:Z(E,!0,i),"CODE CAL":W(E,!0,i),CALENDAIRE:q(E,!0,i),"CODE CHECK":J(E,i),"CODE ATYPIQUE 1":"","INTERVAL ATYPIQUE 1":"","CODE ATYPIQUE 2":"","INTERVAL ATYPIQUE 2":"","CODE ATYPIQUE 3":"","INTERVAL ATYPIQUE 3":"","TOLERANCE - TOLERANCE":"N","TOLERANCE - NAME":"","TOLERANCE - HEURES":"","TOLERANCE-CYCLES":"","TOLERANCE - CALENDAIRE":"","TOLERANCE - COD CALENDAIRE":"","TOLERANCE - CPT1":"","TOLERANCE - CPT2":"","TOLERANCE - CPT3":"","METHOD CALC CALENDAIRE":"","METHOD CALC AUTRES":"",...EE(E).reduce(((E,e,t)=>(E[`A/C ZONE ${t+1}`]=e,E)),{}),...eE(E).reduce(((E,e,t)=>(E[`ACCESS ${t+1}`]=e,E)),{}),"FAMILLE MSN 1":"","FAMILLE MSN 2":"","FAMILLE MSN 3":"","FAMILLE MSN 4":"","FAMILLE MSN 5":"",RESSOURCE:k(E),"CHARGE HH":tE(E),NOMBRE:nE(E),"RESSOURCE 2":"","CHARGE HH 2":"","NOMBRE 2":"","RESSOURCE 3":"","CHARGE HH 3":"","NOMBRE 3":"","LIBELLE DE LA CARTE":iE(E),...oE(E).reduce(((E,e,t)=>(E[`TEXTE ${t+1}`]=e,E)),{}),ATA:lE(E),"LIBELLE DE L'ATA":"",...rE(E).reduce(((E,e,t)=>(t%2===0?E["REFERENCE DOCUMENT LIE "+(t+1-t/2)]=e:E["TYPE DOCUMENT LIE "+(t+1)/2]=e,E)),{}),"NUMERO AMENDEMENT":'"to be filled"',"DATE AMENDEMENT":'"to be filled"',"NUMERO REVISION":this.numRevisionValue,"DATE REVISION":this.dateRevisionValue,"TYPE DE MODIFICATION":LE(E),COMMENTS:RE(E,this.optimized)})}))}));const i=aE.utils.json_to_sheet(n[0]),o=aE.utils.json_to_sheet(n[1]);this.download_workbook=aE.utils.book_new(),this.download_workbook.SheetNames.push("MPD FH induction AMASIS"),this.download_workbook.Sheets["MPD FH induction AMASIS"]=i,this.download_workbook.SheetNames.push("MPD FC induction AMASIS"),this.download_workbook.Sheets["MPD FC induction AMASIS"]=o},downloadFile(){let E="file";aE.writeFile(this.download_workbook,`${E}.xlsx`)}},watch:{optimized(){this.download_workbook=""},workbook(){this.download_workbook=""}}};const sE=(0,l.Z)(CE,[["render",g],["__scopeId","data-v-6177a5e4"]]);var uE=sE,OE={name:"MPDTransformationView",components:{MPDTransformation:uE}};const SE=(0,l.Z)(OE,[["render",H]]);var cE=SE;const NE=[{path:"/",name:"home",component:M},{path:"/MPD-transformation",name:"MPD-transformation",component:cE}],dE=(0,L.p7)({history:(0,L.r5)(),routes:NE});var ME=dE,HE=t(65),IE=(0,HE.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});t(2166);(0,n.ri)(T).use(IE).use(ME).mount("#app")}},e={};function t(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return E[n].call(o.exports,o,o.exports,t),o.exports}t.m=E,function(){var E=[];t.O=function(e,n,i,o){if(!n){var l=1/0;for(L=0;L<E.length;L++){n=E[L][0],i=E[L][1],o=E[L][2];for(var r=!0,A=0;A<n.length;A++)(!1&o||l>=o)&&Object.keys(t.O).every((function(E){return t.O[E](n[A])}))?n.splice(A--,1):(r=!1,o<l&&(l=o));if(r){E.splice(L--,1);var T=i();void 0!==T&&(e=T)}}return e}o=o||0;for(var L=E.length;L>0&&E[L-1][2]>o;L--)E[L]=E[L-1];E[L]=[n,i,o]}}(),function(){t.n=function(E){var e=E&&E.__esModule?function(){return E["default"]}:function(){return E};return t.d(e,{a:e}),e}}(),function(){t.d=function(E,e){for(var n in e)t.o(e,n)&&!t.o(E,n)&&Object.defineProperty(E,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(E){if("object"===typeof window)return window}}()}(),function(){t.o=function(E,e){return Object.prototype.hasOwnProperty.call(E,e)}}(),function(){t.r=function(E){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(E,"__esModule",{value:!0})}}(),function(){var E={143:0};t.O.j=function(e){return 0===E[e]};var e=function(e,n){var i,o,l=n[0],r=n[1],A=n[2],T=0;if(l.some((function(e){return 0!==E[e]}))){for(i in r)t.o(r,i)&&(t.m[i]=r[i]);if(A)var L=A(t)}for(e&&e(n);T<l.length;T++)o=l[T],t.o(E,o)&&E[o]&&E[o][0](),E[o]=0;return t.O(L)},n=self["webpackChunkproject"]=self["webpackChunkproject"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(6687)}));n=t.O(n)})();
//# sourceMappingURL=app.874b5945.js.map