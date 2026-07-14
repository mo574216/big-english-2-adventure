export type Activity={id:string;kind:string;prompt:string;answer:string|string[];options?:string[];hintFa:string;unit:string};
export const activities:Activity[]=[
{id:'welcome-vocab',unit:'welcome',kind:'multiple-choice',prompt:'Choose the classroom object: book',options:['book','run','sister'],answer:'book',hintFa:'کلمه مربوط به کلاس را انتخاب کن.'},
{id:'welcome-grammar',unit:'welcome',kind:'fill-blank',prompt:'The pencil is ___ the desk.',answer:'on',hintFa:'برای روی میز از on استفاده می‌کنیم.'},
{id:'welcome-listening',unit:'welcome',kind:'listening',prompt:'Listen and choose: chair',options:['chair','father','jump'],answer:'chair',hintFa:'گوش کن و واژه را انتخاب کن.'},
{id:'welcome-reading',unit:'welcome',kind:'reading',prompt:'Mina has a backpack. What does Mina have?',answer:['backpack','a backpack'],hintFa:'متن کوتاه را بخوان.'},
{id:'welcome-speaking',unit:'welcome',kind:'speaking',prompt:'Say: I have a book.',answer:'I have a book',hintFa:'جمله را با صدای خود تمرین کن.'},
{id:'welcome-writing',unit:'welcome',kind:'writing',prompt:'Write a sentence with desk.',answer:'desk',hintFa:'یک جمله کوتاه با desk بنویس.'},
{id:'welcome-dictation',unit:'welcome',kind:'dictation',prompt:'Type: She is reading.',answer:'She is reading',hintFa:'جمله شنیده‌شده را تایپ کن.'},
{id:'welcome-review',unit:'welcome',kind:'mixed-review',prompt:'Does Ali have a sister? Answer yes.',answer:['yes','yes he does'],hintFa:'پاسخ کوتاه قابل قبول است.'},
{id:'unit1-vocab',unit:'unit-1',kind:'matching',prompt:'Match the action: drawing',answer:'drawing',options:['drawing','sleeping','cooking'],hintFa:'فعالیت کلاسی را پیدا کن.'},
{id:'unit1-grammar',unit:'unit-1',kind:'fill-blank',prompt:'There ___ three crayons.',answer:'are',hintFa:'برای چند چیز از are استفاده کن.'},
{id:'unit1-listening',unit:'unit-1',kind:'listening',prompt:'Listen and choose: writing',options:['writing','swimming','eating'],answer:'writing',hintFa:'واژه فعالیت کلاسی است.'},
{id:'unit1-reading',unit:'unit-1',kind:'reading',prompt:'Sara is counting ten blocks. How many blocks?',answer:['ten','10'],hintFa:'عدد را از متن پیدا کن.'},
{id:'unit1-speaking',unit:'unit-1',kind:'speaking',prompt:'Say: He is drawing.',answer:'He is drawing',hintFa:'با he جمله بساز.'},
{id:'unit1-writing',unit:'unit-1',kind:'writing',prompt:'Write how many: There are two desks.',answer:['two','2'],hintFa:'تعداد را بنویس.'},
{id:'unit1-dictation',unit:'unit-1',kind:'dictation',prompt:'Type: There is one board.',answer:'There is one board',hintFa:'به is برای یک چیز دقت کن.'},
{id:'unit1-phonics',unit:'unit-1',kind:'phonics',prompt:'Sort the word with voiced th: this',answer:'this',hintFa:'صدای th در this نرم و صدادار است.'},
{id:'unit1-clil',unit:'unit-1',kind:'clil',prompt:'2 + 3 = ?',answer:['5','five'],hintFa:'جمع ساده ریاضی است.'},
{id:'unit1-culture',unit:'unit-1',kind:'culture',prompt:'Some classes meet outside. Type outside.',answer:'outside',hintFa:'کلاس‌ها می‌توانند در فضای باز باشند.'},
{id:'unit1-values',unit:'unit-1',kind:'values',prompt:'A friend needs the crayon. What value? take turns',answer:'take turns',hintFa:'نوبت گرفتن یعنی همه فرصت دارند.'},
{id:'unit1-challenge',unit:'unit-1',kind:'unit-challenge',prompt:'How many students are reading? Three.',answer:['three','3'],hintFa:'پرسش با How many است.'}
];
