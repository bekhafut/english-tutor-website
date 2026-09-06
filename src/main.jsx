import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlogArticle from './BlogArticle.jsx'
import BlogVocabulary from './BlogVocabulary.jsx'
import BlogGrammar from './BlogGrammar.jsx'
import ContactButtons from './ContactButtons.jsx'

const path = window.location.pathname

const seo = {
  '/': {
    title: 'English with Muhammad | Дарсҳои забони англисӣ онлайн ва офлайн',
    description:
      'Дарсҳои забони англисӣ бо Muhammad — дар Душанбе ва онлайн барои кӯдакон ва калонсолон.',
    canonical: 'https://mr-muhammad.vercel.app/',
  },

  '/blog/speak-english-confidently': {
    title: 'Чӣ тавр бо боварӣ бо забони англисӣ ҳарф занем? | Mr. Muhammad',
    description:
      '4 маслиҳати оддӣ барои бо боварии бештар бо забони англисӣ ҳарф задан ва аз хатогиҳо натарсидан.',
    canonical:
      'https://mr-muhammad.vercel.app/blog/speak-english-confidently',
  },

  '/blog/improve-vocabulary': {
    title: '5 роҳи осони зиёд кардани захираи луғат | Mr. Muhammad',
    description:
      '5 усули оддӣ барои зиёд кардани захираи луғати англисӣ ва беҳтар дар хотир нигоҳ доштани калимаҳои нав.',
    canonical:
      'https://mr-muhammad.vercel.app/blog/improve-vocabulary',
  },

  '/blog/english-grammar': {
    title: 'Чӣ тавр грамматикаи англисиро осон омӯзем? | Mr. Muhammad',
    description:
      'Усулҳои оддӣ барои фаҳмидан ва омӯзиши грамматикаи забони англисӣ бе аз ёд кардани қоидаҳои зиёд.',
    canonical:
      'https://mr-muhammad.vercel.app/blog/english-grammar',
  },
}

const currentSeo = seo[path] || seo['/']

document.title = currentSeo.title

const description = document.querySelector('meta[name="description"]')
if (description) {
  description.setAttribute('content', currentSeo.description)
}

let canonical = document.querySelector('link[rel="canonical"]')

if (!canonical) {
  canonical = document.createElement('link')
  canonical.setAttribute('rel', 'canonical')
  document.head.appendChild(canonical)
}

canonical.setAttribute('href', currentSeo.canonical)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {window.location.pathname === '/blog/speak-english-confidently' ? (
  <BlogArticle />
) : window.location.pathname === '/blog/improve-vocabulary' ? (
  <BlogVocabulary />
) : window.location.pathname === '/blog/english-grammar' ? (
  <BlogGrammar />
) : (
  <App />
)}
    <ContactButtons /> 

  </StrictMode>,
)
