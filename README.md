# APIpractice

# Json-server npm

- 서버를 빌드업 하기 위해서 해야하는 작업을 대신 해주는 **“json-server”**라는 패키지를 이용해보자!
- json-server를 이용해서 api를 호출하고 정보를 주고 받는다
- **json-server npm 검색**
- npm ⇒ node package manager 유용한 노드 패키지들이 다 있다. 남들이 잘 만들어 놓은 거 다운받아서 사용하면 됨!

[npm: json-server](https://www.npmjs.com/package/json-server)

- API 호출하는 작업 할 때, 호출하면  json파일이 오는데, 그 타입은 object 문법을 따른다. (api 호출할 때 제일 많이 사용되는 파일형식)
- npm start로 우리가 리액트를 실행 시키듯이, json-server도 시작을 해줘야한다.
    
    ```jsx
    json-server --watch db.json
    ```
    
1. Restful API 규칙 (react-router-dom 페이지 참고)
- `GET /posts` : 전체의 포스트를 가져오겠다.
- 우리는 제공하는 애들이 만들어둔 Restful API 규칙에 맞춰서 api를 호출해주면 데이터를 알아서 보내준다!
- 제일 밖에 root에다 **db.json** 파일 생성
- Array가 있고, Array안에 객체 형식으로 데이터들이 쭉 들어있다. 이 Array는 products라는 key값 안에 들어있다. → 이 데이터를 호출할 때는 /products 를 끝에 앤드 포인트로 넣어줘야 한다.
1. db.json 데이터가 완성 됐으면 서버를 시작해준다 ⇒ `json-server --watch db.json`
- ****Alternative port 검색****
- json이라는 서버를 시작할건데 db.json 파일을 지켜보겠다. 근데 이 json.server라는걸 시작하려면 어디서 동작하라는 포트넘버를 보내줘야 한다. 이걸 지정하지 않으면 3000번에서 시작하는데 react가 3000번에서 시작하기 때문에 따로 지정을 해주는 게 좋다.
