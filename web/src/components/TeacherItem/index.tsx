import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/25092787?s=460&u=9ab949f358e235341c3b075f8615b2201abf2ce6&v=4" alt="Luis Henrique Claudino Silva"/>
                <div>
                    <strong>Luis Henrique Claudino Silva</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
                Mestrando em Ciências de Computação pelo ICMC-USP.
                <br/><br/>

                Apaixonado por novas tecnologias e suas aplicações na nossa sociedade.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato.
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;