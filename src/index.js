import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Ingredients from './components/Ingredients';
import Picture from './components/Picture';
import Preperation from './components/Preperation';
import QuickFacts from './components/QuickFacts';
import Wrapper from './components/Wrapper';

render(
    <div>
        <Header />
        <QuickFacts />
        <Wrapper />
        <Ingredients />
        <Picture />
        <Preperation />
        <Footer />
    </div>,
document.querySelector('#main'));

module.exports = () => 'Ahoy, world!';