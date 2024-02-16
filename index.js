document.querySelector('#dad').innerHTML = 'Wanna hear a Joke ?';

const dadJokes= async () =>{
    
    const config = { headers : { Accept : 'application/json' }}
    const joke = await axios.get(`https://icanhazdadjoke.com/`, config );
    console.log(joke.data.joke);
    return joke.data.joke;

}

document.querySelector('#click').addEventListener('click',async ()=>{
    
    const joke = await dadJokes(); 
    console.log(joke) 
    document.querySelector('#dad').innerHTML = joke ;
})

