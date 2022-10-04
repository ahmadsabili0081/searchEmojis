import {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import ContainerApps from './components/ContainerApps/ContainerApps';
import Empty from './components/Empty/Empty';
import Emojis from './components/Emojis/Emojis';
import Search from './components/Search/Search';


function App() {
  const  [emojiData,setEmojiData] = useState ([]);
  const [searchText,setSearchText] = useState('');
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  // use effect akan menjalanakn sebuah function apapun yang kita masukkan didalaamnnya terlebih dahulu
  useEffect (() => {
   async function fetchEmojies(){
      setLoading(true);
      try{
        const res = await axios.get('https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28')
        setEmojiData(res.data);
        setLoading(false);
      }catch(error){
        console.error(error);
        setError(true);
        setLoading(false);
      }
    }
    fetchEmojies()
  },[]);
  let handleSearchEmojis = (e) => {
    setSearchText(e.target.value);
  }
  console.log(searchText)
  return (
    <Container>
      <Navbar />
      <ContainerApps>
        <Search onChange={handleSearchEmojis} value={searchText} />
        {loading && <Empty text='Loading...' />}
        {error && <Empty text='Error!' /> }
        {emojiData.length > 0 && <Emojis emojisData = {emojiData} searchText={searchText} />}
      </ContainerApps>
    </Container>
   );
}

export default App;
 