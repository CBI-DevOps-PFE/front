import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#ff0000',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#ff0000', // Red color
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const config = {
  width: "400px",
  height: "500px",
  floating: true,
};

const steps = [
  {
    id: 'welcome',
    message: 'Welcome! Comment puis-je vous aider aujourd\'hui?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 1, label: 'Infos sur le Maroc', trigger: 'marocDescription' },
      { value: 2, label: 'Infos sur les villes', trigger: 'villeOptions' },
      { value: 3, label: 'Description du site web', trigger: 'siteDescription' },
    ],
  },
  {
    id: 'marocDescription',
    message: 'Le Maroc est un pays d\'Afrique du Nord connu pour sa diversité culturelle et sa riche histoire. Il est célèbre pour ses villes impériales, ses plages magnifiques, ses montagnes majestueuses et son désert spectaculaire.',
    trigger: 'showAllOptions',
  },
  {
    id: 'villeOptions',
    message: 'Quelle ville voudriez-vous en savoir plus?',
    trigger: 'villeChoice',
  },
  {
    id: 'villeChoice',
    options: [
      { value: 'casablanca', label: 'Casablanca', trigger: 'showAllOptions' },
      { value: 'tanger', label: 'Tanger', trigger: 'tangerDescription' },
      { value: 'fes', label: 'Fès', trigger: 'fesDescription' },
      { value: 'agadir', label: 'Agadir', trigger: 'agadirDescription' },
      { value: 'rabat', label: 'Rabat', trigger: 'rabatDescription' },
      { value: 'marrakech', label: 'Marrakech', trigger: 'marrakechDescription' },
    ],
  },
  {
    id: 'showAllOptions',
    message: 'Voici toutes les options disponibles:',
    trigger: 'options',
  },
  {
    id: 'siteDescription',
    message: 'Ce site web est une plateforme qui fournit des informations sur le Maroc, ses villes et diverses autres fonctionnalités. Il est conçu pour vous aider à découvrir et à explorer le Maroc de manière interactive.',
    trigger: 'showAllOptions',
  },
  {
    id: 'tangerDescription',
    message: 'Tanger est une ville portuaire du nord du Maroc, connue pour son mélange unique de cultures africaines et européennes. Elle est célèbre pour sa médina pittoresque et son histoire fascinante.',
    trigger: 'showAllOptions',
  },
  {
    id: 'fesDescription',
    message: 'Fès est l\'une des quatre villes impériales du Maroc, réputée pour sa vieille ville historique, sa médina médiévale préservée et ses artisans traditionnels.',
    trigger: 'showAllOptions',
  },
  {
    id: 'agadirDescription',
    message: 'Agadir est une ville balnéaire située sur la côte atlantique du Maroc, réputée pour ses plages de sable doré, son climat ensoleillé et ses stations balnéaires modernes.',
    trigger: 'showAllOptions',
  },
  {
    id: 'rabatDescription',
    message: 'Rabat est la capitale politique du Maroc, située sur la côte atlantique. Elle est connue pour son architecture mauresque, ses jardins luxuriants et sa médina animée.',
    trigger: 'showAllOptions',
  },
  {
    id: 'marrakechDescription',
    message: 'Marrakech est l\'une des villes les plus célèbres du Maroc, réputée pour sa médina animée, ses souks colorés, ses palais historiques et sa place Jemaa el-Fna.',
    trigger: 'showAllOptions',
  },
  
];

const SimpleChatbot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} {...config} />
  </ThemeProvider>
);

export default SimpleChatbot;
