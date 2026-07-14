export const normalizeAnswer=(s:string)=>s.toLowerCase().replace(/[’']/g,"'").replace(/[^a-z0-9' ]/g,'').replace(/\s+/g,' ').trim();
export function scoreAnswer(answer:string, expected:string|string[]){const list=Array.isArray(expected)?expected:[expected];return list.some(e=>normalizeAnswer(answer)===normalizeAnswer(e));}
export function dictationFeedback(answer:string, expected:string){const a=normalizeAnswer(answer).split(' '), e=normalizeAnswer(expected).split(' ');return e.map((word,i)=>({word,correct:a[i]===word,given:a[i]??''}));}
export type Progress={stars:number;completed:string[];mastery:Record<string,number>;recordings:string[]};
const KEY='english-adventure-2-progress';
export const emptyProgress=():Progress=>({stars:0,completed:[],mastery:{},recordings:[]});
export function loadProgress():Progress{try{return {...emptyProgress(),...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return emptyProgress()}}
export function saveProgress(p:Progress){localStorage.setItem(KEY,JSON.stringify(p));}
export function completeActivity(id:string, correct:boolean){const p=loadProgress();if(!p.completed.includes(id))p.completed.push(id);p.stars+=correct?2:1;p.mastery[id]=correct?100:50;saveProgress(p);return p;}
export function speakEnglish(text:string){return new Promise<boolean>(resolve=>{if(!('speechSynthesis'in window)||!('SpeechSynthesisUtterance'in window)){resolve(false);return}const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.onend=()=>resolve(true);u.onerror=()=>resolve(false);window.speechSynthesis.cancel();window.speechSynthesis.speak(u);});}
export function supportsRecording(){return typeof MediaRecorder!=='undefined' && !!navigator.mediaDevices?.getUserMedia;}
