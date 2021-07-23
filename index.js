// čia dėti visą pavyzdinį kodą, kuris turėtų paaiškinti, kaip naudotis jūsų sukurtu kodu

const ClassDiary = require('./ClassDiary');

const Diary = new ('Leftovers');

Diary.pridetiMokini('Jonas');
Diary.pridetiMokini('NotGoodEnough');


Diary.pridetiPamoka('Lietuviu kalba');
Diary.pridetiPamoka('Matematika');
Diary.pridetiPamoka('Fizika');

Diary.pridetiPazymi('2021-07-23', 'Jonas', 'Lietuviu kalba', 7);
Diary.pridetiPazymi('2021-07-23', 'Jonas', 'Matematika', 6);
Diary.pridetiPazymi('2021-07-23', 'Jonas', 'Fizika', 10);
Diary.pridetiPazymi('2021-07-23', 'NotGoodEnough', 'Lietuviu kalba', 5);
Diary.pridetiPazymi('2021-07-23', 'NotGoodEnough', 'Matematika', 4);
Diary.pridetiPazymi('2021-07-23', 'NotGoodEnough', 'Fizika', 3);


Diary.isspaudintiPazymius('2021-07-23', 'Jonas');
Diary.isspaudintiPazymius('2021-07-23', 'NotGoodEnough');

Diary.isspausdintiVidurkius('2021-07-23', 'Jonas');
Diary.isspausdintiVidurkius('2021-07-23', 'NotGoodEnough');