import React, { useState } from 'react';
import Head from '../../molecules/head/Head.jsx';
import './DefaultPage.css'
import Equipment from '../../organisms/Equipment/Equipment.jsx';
import Project from '../../organisms/Project/Project.jsx';
import SKRK from '../../organisms/SKRK/SKRK.jsx';

const DefaultPage = () => {
    const [q, setQ] = useState('1')
  
    function view() {
        if(q == '1') {
            return <Project/>
        } else if(q == '2') {
            return <SKRK/>
        } else {
            return <Equipment/>
        }
    }

    return (
    <>
        <Head 
        project = {() => setQ('1')}
        skrk = {()=>setQ('2')}
        equipment = {()=>setQ('3')}
        />
       {view()}  
    </>);
};

export default DefaultPage;