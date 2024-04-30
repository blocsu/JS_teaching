//Урок о35-  Async, defer, динамические скрипты
'use strict';

const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src) {
    const script = document.createElement('script');
    //динамически загружаемые скрипты по умолчанию ведут себя как asynk т.е:
    script.src = src; //src загрузится после выполнения стрчки: document.body.append(script);
    script.async = false; //отменяет дефолтный режим asynk
    document.body.append(script);
}
//В дефолтном режиме asynk порядок загрузки непредсказуем т.к. легкие скрипты загрузятся быстрее тяжелых
//т.к. строчкой script.async = false; отменен дефолтный режим asynk, строки будут загружаться по порядку.
loadScript("js/test.js");//независимо от веса загрузится первым
loadScript("js/some.js");//независимо от веса загрузится вторым
