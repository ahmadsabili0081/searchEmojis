export const filterEmojis = ({emojisData,searchText = '', maxResults = 20}) => {
  const filteredEmojis = emojisData.filter((item) => {
     if(item.title.toLowerCase().includes(searchText.toLowerCase())){
        return true
     }
     if(item.keywords.includes(searchText.toLowerCase())){
      return true
     }
     return false;
  })
  return filteredEmojis.slice(0, maxResults)
}