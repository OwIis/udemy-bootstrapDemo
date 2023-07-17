const express = require('express');
const app = express();
//뷰디렉토리 다른경로에서도 동작되도록하기
const path = require('path');

//뷰디렉토리 다른경로에서도 동작되도록하기
app.set('views', path.join(__dirname, '/views'));   //'/veiws'는 다른 이름으로 변경해도되지만 지금은 views로 폴더이름이 정해졋기에 그냥 그대로 쓰기. template같은걸로 바꾸면 에러남

//ejs를 사용한다는 명령어. app.set자체가 query parser이나 view engine을 바꿀 수 잇음.
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})
app.get('/', (req, res) => {
    res.render('home.ejs')
})
