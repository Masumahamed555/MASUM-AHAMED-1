## ABOUT ME

name : ```Hm Masum Ahamed```</br>
age : ```N\A```</br>
link :``` [facebook]```<br>[(https://www](https://www.facebook.com/profile.php?id=100078624862893)</br>

## CONTACT

modified : ```[ALVI](https://www.facebook.com/PINIK.MR.ALVI.CHOWDHURY.YOUR.NEXT.VATAR.XAN)```</br>

## UPDATES

• configure console output in ``ALVI/configs/console.js``.</br>
• fixed spam in ban system.</br>
• discover the new feature with ```premium command```, you can enable it by adding a variable named ```premium``` and the value is boolean</br></br>
```premium ussage example```
```js
module.exports.config = {
  name: "example",
  version: "example",
  credits: "ALVI",
  permission: 0,
  description: "example",
  category: "example",
  usages: "example",
  prefix: true,
  premium: true, // this is the example of premium feature ussage
  cooldown: 0,
  dependencies: {
    "": ""
  }
}
```
```txt
UPCOMING UPDATE :
adding aliases for each commands
```

## CONFIG AND CUSTOM

Alvi.js : ``configure auto restart and auto accept pending messages.``</br>
Alvi.json : ``configure bot name, bot prefix, bot operators and admins.``</br>
Alvistate.json : ``account cache data.``

## BOX APPROVAL

``box approval`` is set as default, you can disable it on ``Alvi.json`` by setting the ``approval`` value into ``false``</br>

you can approve box by using ``approve`` command without using prefix, how to use? just type ``approve (box/remove) (uid/tid)``</br>

EXAMPLES : </br>

view approved list 
```txt 
approve list
```
add box from approved list 
```txt
approve box 4834812366643016
```
remove box from approved list 
```txt
approve remove 4834812366643016
```

## HOW TO GET 'AlviSTATE.JSON' DATA?

to get ``Alvitate.json`` data, please follow these steps :</br>

step 1 : download fbstate exporter
step 2 : download ``kiwi browser`` from the play store.</br>

step 3 : open kiwi browser and tap on the three dots at the top right corner.</br>

step 4 : select ``extensions`` from the menu.</br>

step 5 : tap on ``+ from (.zip/ .crx/ .user.js)`` and choose the file "fbstate_exporter-1.0.xpi (1).zip" that you downloaded.</br>

step 6 : once the extension is added, go to ``www.facebook.com`` and log in to the account you want to use as a bot.</br>

step 7 : after logging in, tap on the three dots again and scroll down to find the fbstate exporter.</br>

step 8 : click on it and then click on ``copy fbstate``.</br>

step 9 : paste the copied data into the ``Alvistate.json`` file.</br>

step 10 : finally, click on ``run`` to initiate the bot.</br>


## HOW TO ADD COMMANDS?
```js
module.exports.config = {
  name: "example", // command name.
  version: "1.0.0", // command version.
  permission: 0, // set to 1 if you want to set the permission into a group admins, set to 2 if you want to set the permission into a bot admins, set to 3 if you want to set the permission into a bot operators.
  credits: "ALVI",
  description: "example", // command description.
  prefix: false, // set to true if you want to use the command with prefix, set to false if you want to use the commands without prefix.
  category: "example", // command category.
  usages: "example", // command ussage.
  cooldowns: 5, // 5 seconds command cooldown.
  dependencies: {
    "name": "version" // not required but if the command have a npm packages, you can type the package name and version to automatically install the package.
  }
};

module.exports.run = async ({api, event, args}) => {
  // start coding
}
```
