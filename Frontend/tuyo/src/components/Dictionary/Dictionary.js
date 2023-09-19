const axios = require('axios');

const apiKey = 'OxfordDictionaries_llave'; 
const language = 'en'; 

async function fetchWordData(word) {
  try {
    const response = await axios.get(`https://joughtred-oxford-dictionaries-v1.p.rapidapi.com/entries/${language}/${word.toLowerCase()}`, {
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'joughtred-oxford-dictionaries-v1.p.rapidapi.com'
      }
    });

    const data = response.data;

    const definitions = data.results[0].lexicalEntries[0].entries[0].senses.map(sense => sense.definitions[0]);
    console.log('Definitions:', definitions);

    const pronunciations = data.results[0].lexicalEntries[0].entries[0].pronunciations.map(pronunciation => pronunciation.phoneticSpelling);
    console.log('Pronunciations:', pronunciations);

    const synonyms = data.results[0].lexicalEntries[0].entries[0].senses[0].synonyms.map(synonym => synonym.text);
    console.log('Synonyms:', synonyms);

    const antonyms = data.results[0].lexicalEntries[0].entries[0].senses[0].antonyms.map(antonym => antonym.text);
    console.log('Antonyms:', antonyms);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

const word = 'funny'; 
fetchWordData(word);