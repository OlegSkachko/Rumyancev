import React from 'react';
import './Project.css'
import q from './../../../img/q.mp3'

const Project = () => {
    let audio = new Audio(q)
    audio.play()
    return (
        <div className='content' style={{'padding': 10}}>
<p>    Квантовая криптография – направление квантовой информатики. 
Привлекательность идеи квантовой криптографии состоит в том,
что предложен метод создания абсолютно случайного секретного ключа 
между пользователями квантовой линии связи. Секретность формирования
ключа и невозможность незаметного несанкционированного доступа (НСД)
к линии связи основаны на законах квантовой физики. Классическая 
криптография в противоположность квантовой криптографии, основана на
математических закономерностях и, в принципе, поддаётся расшифровке.
Достичь полной секретности при передаче сообщений, 
возможно только решив проблему распределения ключей. </p>
<p>    Одним из физических решений проблемы распределения ключей является 
квантовая криптография, которая базируется на фундаментальных свойствах
квантовой физики. Методы квантовой криптографии реализованы в системах 
квантового распределения ключей (КРК), принцип действия которых основан 
на кодировании квантового состояния одиночной частицы.</p>
<p>   Основная цель данной программы состоит в представлении на конкретном 
примере проектирования системы квантового распределения ключа по протоколу 
B92 с интерферометрами Маха-Цендера.
Данная программа имеет практическую направленность и ориентировано на специалистов, 
которые будут заниматься эксплуатацией волоконно-оптических систем передачи (ВОСП) 
и систем квантовой криптографии.</p>
<p>    Программа будет полезна для подготовки дипломированных специалистов по 
специальностям и направлению укрупнённой группы 10.00.00 «Информационная 
безопасность».</p>

        </div> 
    );
};

export default Project;