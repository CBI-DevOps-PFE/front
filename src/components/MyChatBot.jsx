import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#ff0000',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#ff0000',
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
    message: 'Welcome! How can I help you today?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 1, label: 'Information about Morocco', trigger: 'moroccoInfo' },
      { value: 2, label: 'Information about cities', trigger: 'cityInfo' },
      { value: 3, label: 'Dining and Cuisine', trigger: 'diningInfo' },
      { value: 4, label: 'Outdoor Activities and Adventure', trigger: 'outdoorInfo' },
      { value: 5, label: 'Shopping and Souvenirs', trigger: 'shoppingInfo' },
      { value: 6, label: 'Cultural Events and Festivals', trigger: 'culturalInfo' },
    ],
  },
  {
    id: 'moroccoInfo',
    message: 'Morocco is a North African country known for its cultural diversity and rich history.',
    trigger: 'options',
  },
  {
    id: 'cityInfo',
    message: 'Morocco has many beautiful cities, each with its own unique charm and attractions. Some popular cities to explore include Casablanca, Marrakech, Fes, and Rabat.',
    trigger: 'options',
  },
  {
    id: 'diningInfo',
    message: 'Moroccan cuisine is renowned for its flavorful tagines, couscous dishes, and aromatic spices. Some must-try dishes include tagine with lamb and prunes, couscous with vegetables, and pastilla (a savory pie with layers of pastry, meat, and spices). I can recommend popular restaurants in various cities known for their authentic Moroccan cuisine!',
    trigger: 'options',
  },
  {
    id: 'outdoorInfo',
    message: 'Morocco offers a wide range of outdoor adventures for thrill-seekers! You can explore the stunning landscapes of the Atlas Mountains, embark on a desert safari in the Sahara, or enjoy water sports along the Atlantic coast. Let me know your preferences, and I can suggest exciting activities and tour operators to make your adventure unforgettable!',
    trigger: 'options',
  },
  {
    id: 'shoppingInfo',
    message: 'Shopping in Morocco is a delightful experience, with bustling souks (markets) offering a variety of goods, from vibrant textiles and intricate ceramics to handcrafted leather goods and spices. I can recommend popular souks to visit in various cities and suggest unique souvenirs to commemorate your trip!',
    trigger: 'options',
  },
  {
    id: 'culturalInfo',
    message: 'Morocco hosts numerous cultural events and festivals throughout the year, showcasing its rich heritage and diverse traditions. Whether you\'re interested in music, art, or religious celebrations, there\'s always something happening in Morocco. I can provide you with a calendar of upcoming events and help you plan your itinerary around these exciting festivals!',
    trigger: 'options',
  },
];

const SimpleChatbot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} {...config} />
  </ThemeProvider>
);

export default SimpleChatbot;