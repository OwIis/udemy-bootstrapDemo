const express = require('express');
const app = express();
//뷰디렉토리 다른경로에서도 동작되도록하기
const path = require('path');
//ejs 복잡한 서브레딧데모
const redditData = require('./data.json');


//뷰디렉토리 다른경로에서도 동작되도록하기
app.set('views', path.join(__dirname, '/views'));   //'/veiws'는 다른 이름으로 변경해도되지만 지금은 views로 폴더이름이 정해졋기에 그냥 그대로 쓰기. template같은걸로 바꾸면 에러남

//ejs를 사용한다는 명령어. app.set자체가 query parser이나 view engine을 바꿀 수 잇음.
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})

//home ejs를 뷰디렉터리로 지정
app.get('/', (req, res) => {
    res.render('home.ejs')
})

//난수만들기&render 두번째 인수 템플릿에 가져가기
app.get('/rand', (req, res) => {
    let num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { randomNum: num })
})

//서브레딧 템플릿 데모
app.get('/r/:subreddit', (req, res) => {
    let {subreddit} = req.params;

    //ejs 복잡한서브레딧데모, 검색한 결과값이 redditData로 넘어가게하기. redditData에 [subreddit]을 붙여 검색한 단어와 연결된 데이터를 불러온다
    let data = redditData[subreddit];
    
    if(data){
        res.render('subreddit', {...data})
    } else {
        res.render('notfound', {subreddit})
    }
    
})

//ejs 루프문
app.get('/cats', (req, res) => {
    let cats=  ['나비','까미','옹이','미미','달래'];
    res.render('cats', {allCats : cats});

})

//정적애셋
//app.use(express.static('public'));    //정적폴더
app.use(express.static(path.join(__dirname, 'public')));  //index.js가 절대경로가 되도록변경
