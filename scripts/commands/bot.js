const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  prefix: 'awto',
  premium: false,
  version: "1.0.1",
  permssion: 0,
  credits: "ALVI",
  description: "goibot",
  category: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["-যেহেতু তুমি সিঙ্গেল তাই-🙂-মানবতার খাতিরে 𝗜 𝗟𝗼𝘃𝗲 𝗬𝗼𝘂.___/🙂👀" , "যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂", "--°পাঞ্জাবি পড়া পিক চাইবা নাকি খুলে ফেলব 🙂💔" , "𒁍࿇⃝🥺"আ্ঁস্ঁল্ঁ"পু্ঁ"রু্ঁ"ষ্ঁ"⎯͢⎯⃝💦🥵😽" , "ওই বেডি তোমার বাসায় না আমার বস মাসুম মেয়ে দেখতে গেছিলো-🙃-নাস্তা আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-/nআমার বস মাসুম কে জানে মারার কি দরকার-🙄🤧" , "__বড় আর হইলাম কই, এখনো \n\n-আকাশ দিয়ে হেলিকপ্টার গেলে তাকাই থাকা আমি...! 🌻🙂", "--বুকের বাম পাশে এসি সহ একটা \nফ্লাট খালি আছে...\nএকজন বিশ্বস্ত ভাড়াটিয়া চাই😊...!🙈👀" , "-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱" , "-🦋🌻\n\n•— আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস মাসুম কে দান করেন-🥱🐰🍒" , "-🧠🌻\n\n•- ｢｣ যেই দুধ ওজনে না মেপে , সাইজে মাপা হয় তাকে পম পম বলে🌝" , "--নাটক কম করো প্রিয় তুমি যে অন্য জনে আসক্ত তা তোমার ব্যবহারেই বুঝা যায় প্রিয়__😒🦋" , "-°নক দিও আমিও তোমাকে পছন্দ করি..!😽🫶" , "ভাই আপনার ইনবক্সে গালি দিছি চেক দিয়েন 🙂🫰🏻" , "-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱" , "চাইয়া থাকস কেন কি কবি ক -🌚🐸🔪" , "-বেডি মানুষ বড় ভেজাইল্লা🤧🔪" , "- ছেলেদের দায়িত্ব বোধ শিখিয়ে দিতে হয় না -😅\n- পরিস্থিতিই তাদের দায়িত্ববান বানিয়ে দেয়..!!🙂💔🥀" , "-আপনি ফুল চাইবেন আর আমি এক ঝাক --°\n\nফুল দিয়ে আপনাকে চাইবো.!☺️✨🌸" , "জান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽" , "-আন্টি-🙆-আপনার মেয়ে-👰‍♀️-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤💦" , "-°তোর কথা তোর বাড়ি কেউ শুনে না তো আমি কোনো শুনবো__🤔😂" , "-🌻🫰🏻•— হারাতে চাচ্ছি নিজেকে আর একবার হারিয়ে গেলে ফিরব না তোমাদের ভদ্র সমাজে...!!😊💔" , "দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস মাসুম কে সন্দেহ করে.!🐸" , "-°ভাই তুই একটু আমার কাছে আই তরে মাইরা আমি ঘুমামু_👊😴" , "-ওই সুন্দরী তোমার কিন্তু উচিত আমার বস মাসুম'কে পটানো! 😒🙈" , "যদি ভালো রাখার নাম'ই ভালোবাসা হয় তাহলে আমায় বস মাসুম'কে কেও কখনো ভালোবাসে নাই । 😞😔" , "এই নাও বাবু ফিডার খাও আমাকে তো আর খাইতে পারবা না__/😩🤭🥵" , "- ভালোবাসা দূর থেকেই সুন্দর-!!🥹🫶\n\n- কাছে আসলে ঘর  নষ্ট হয়-!!🥵😸" , "_♡আমি বিচ্ছেদ চাইই্ নাহহ্ প্রিয়্যুহহ্ ৬০ বচ্ছর বয়সেও আপনার হাত টাহহ্ ধরে রাখতে চাইই্♡_🥺💜🌻" , "যার মনে আমি নাই তার মনে কুত্তায় মুইতা দিক..!!😏🐸🍒" , "-অনুভূতি গুলো আজ..!🙂\n-বড্ড ক্লান্ত_..!😓 \nআমি মরে \nগেলে আমার গল্প টা এখানেই সমাপ্ত_😅" , "পারিলে মানুষের হাসির কারণ হইও_☺️\n -মানুষ আর বাঁচেই' বা কয় দিন..✍️🌸🤎" , "তোর কি চোখে পড়ে না আমি boss মাসুম এ'র সাথে ব্যাস্ত আছি😒","SORRY - শব্দটা ___কি আজব তাই না 😌..!!\nপ্রিয় মানুষ বললেই ঝগড়া শেষ \n আর ডাক্তার বললে জীবন শেষ.!😌🥲💔" , "আহ্ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘" , "-যাকে যত বেশি ভালোবাসবে মিস করবে কেয়ার করবে সব সময় খোঁজ খবর নেবে..🖤\n-সেই তোমাকে অবহেলা করবে.!😅💔" , "হুম জান তোমার ওই'খানে উম্মমাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "আমাকে এতো না ডেকে আমার বস মাসুম'কে একটা Gf দে 🙄" , "যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস মাসুম এ'র সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗" , "-🌻🦋\n\n•- সপ্ন আমার একটাই বন্ধুর বউকে জড়িয়ে ধরব__🥹🫶🏻" , "_একটা বেডি দেন আসক্ত হই...!☹️🫴", "-তোমার একটা BF দরকার তাই না...!🫵🥺",];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "miss you bot") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘  : ) 🎀 🍒:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
   };

    if ((event.body.toLowerCase() == "👍🏼") || (event.body.toLowerCase() == "👍")) {
     return api.sendMessage("সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kya Tera Bap LagaYega? Pehle Prefix Laga Fir Likh Sim", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("এত হাই-হ্যালো চুদাছ কেনো বোকাচোদা..!🍆⛏️🐸🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOU😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "pro") || (event.body.toLowerCase() == "lol")) {
     return api.sendMessage("Khud k0o KYa LeGend SmJhTi Hai 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
   };

   if ((event.body.toLowerCase() == "tor ball") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("~ তোমার বাল উঠে নাই নাকি তোমার?? 🤖", threadID);
   };

  if ((event.body.toLowerCase() == "Alvi vai") || (event.body.toLowerCase() == "আলভী ভাই") || (event.body.toLowerCase() == "আলভী") || (event.body.toLowerCase() == "Alvi")) {
     return api.sendMessage("উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",threadID);


   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞𝐌𝐑.𝐁𝐎𝐒𝐒 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐀𝐋𝐕𝐈.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/PINIK.MR.ALVI.CHOWDHURY.YOUR.NEXT.VATAR.XAN\nতার সাতে যোগা যোগ করবেন WhatsApp :- +60135647836", threadID);
   };

   if ((event.body.toLowerCase() == "tor boss ke") || (event.body.toLowerCase() == "admin ke ")) {
     return api.sendMessage("My Creator:𝐌𝐑. 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 ❤️\n হাই আমি মেছেন্জার ROBOT  আামার বস আলভী চৌধুরী  আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য\n আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   };

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "bot admin")) {
     return api.sendMessage("He is 𝐌𝐑.𝐁𝐎𝐒𝐒 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 ❤️\n তাকে সবাই 𝐀𝐋𝐕𝐈 নামে  চিনে🤙", threadID);
   };

   if ((event.body.toLowerCase() == "bhabi") || (event.body.toLowerCase() == "vabi")) {
     return api.sendMessage("এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে😍.", threadID);
   };


   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("তুই চুপ তোর ১৪ গুষ্টি চুপ😼", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "....") || (event.body.toLowerCase() == "....") || (event.body.toLowerCase() == "opoman korli")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "sumaiya") || (event.body.toLowerCase() == "megla borsha")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস আলভী চৌধুরী'র বউ এর নাম..!😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ধন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️সব কিছুর জবাব দেওয়া যায়😊 ,কিন্তু হুম এর জবাব কিভাবে দিবো 😅💔", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "tumar nam ki")) {
     return api.sendMessage("️MY NAME IS °_>👅-✘ robot🤖 : ) 🎀 🍒", threadID);
   };

   if ((event.body.toLowerCase() == "BOT ER BACCHA") || (event.body.toLowerCase() == "বট এর বাচ্চা বট")) {
     return api.sendMessage("️আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "pic de") || (event.body.toLowerCase() == "ss dew")) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   };

   if ((event.body.toLowerCase() == "moriom") || (event.body.toLowerCase() == "ex")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == "tor nani re xudi")) {
     return api.sendMessage("️এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️কি গো কলিজা তোমার কি মন খারাপ🥺", threadID);
   };

   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘", threadID);
   };

   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "aj kew nai bole")) {
     return api.sendMessage("️চিন্তা করো কেন আমি তো আছি🫶\nতোমাকে রাইতে ভালোবাসবো", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("খালি কি তোরাই পেম করবি আমাকেও একটা গফ দে<🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে বস আলভী চৌধুরী'র ইনবক্সে চলে যা পাগল ছাগল🌚🐸🌶️🍆", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "Kemon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
     return api.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("হুম আমার বস আলভী চৌধুরী ও তেমাকে ভালোবাসে🥰🥱", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "tmi khaiso") || (event.body.toLowerCase() == "kheyeso")) {
     return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
     return api.sendMessage("হুম ঝাং আমি তোমাকে রাইতে ভলোপাসি <🥵", threadID);
   };

   if ((event.body.toLowerCase() == "ami alvi") || (event.body.toLowerCase() == "kire")) {
     return api.sendMessage("হ্যাঁ বস আলভী চৌধুরী কেমন আছো?", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `╭──────•◈•──────╮\n         🄰🄻🅅🄸🄱🄾🅃        \n\n 🗣️Dᴇᴀʀ, ${name}\n 💌:${rand} \n\n╰──────•◈•──────╯`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
