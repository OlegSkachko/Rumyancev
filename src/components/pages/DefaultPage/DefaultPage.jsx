import React, { useState } from 'react';
import Head from '../../molecules/head/Head.jsx';
import './DefaultPage.css'
import Equipment from '../../organisms/Equipment/Equipment.jsx';
import Project from '../../organisms/Project/Project.jsx';
import SKRK from '../../organisms/SKRK/SKRK.jsx';

const DefaultPage = () => {
    const [q, setQ] = useState('2')
    const [log, setLog] = useState('1')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

  

    const LOGIN = 'admin'
    const PASSWORD = 'admin'
  
    function logOn() {

        if(login=== LOGIN && password === PASSWORD) {
            setLog('1')
            
        } else {
            alert("Вы ввели неверный логин или пароль. Попробуйте еще.")
        } 
        
    }

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
    {
        log === '0' ?
        
            <div className='post'>
                <div className='post-block'>
                    <form>
                    <div className='post-block-inputs'>
                        <h2 className="post-block-zag">Вход</h2>
                      
                        <p className="post-block-p">логин</p>
                        <input className='post-block-input' onChange={(e) => setLogin(e.target.value)} ></input>
                        <p className="post-block-p">пароль</p>
                        <input type='password' className='post-block-input' onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button 
                        className='post-block-btn'
                        onClick={logOn}
                    >
                        Войти
                    </button>
                    </form>
                    
            </div>
        </div>
  

       :<> 
        <Head 
            project = {() => setQ('1')}
            skrk = {()=>setQ('2')}
            equipment = {()=>setQ('3')}
        />
        {view()}  
       </>
    }
       
    </>);
};

export default DefaultPage;