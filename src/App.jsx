import './App.css'
import Hero from './components/Hero/Hero'

function App() {
  // взял рандомные картинки с инета , мог бы и локально но так будет необычней
  const images = [
    'https://picsum.photos/1200/675?random=1',
    'https://picsum.photos/1200/675?random=2',
    'https://picsum.photos/1200/675?random=3',
    'https://picsum.photos/1200/675?random=4',
    'https://picsum.photos/1200/675?random=5',
  ];

  return (
    <div className="app">
      <h1 className='title'>Тестовое задание 1</h1>
      <Hero images={images} />
    </div>
  )
}

export default App
