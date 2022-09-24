## 어학공부를 도와주는 웹어플리케이션

원어민과 대화하면서, 표현하고 싶은 게 있는데, 막히는 경우,  
이 어플리케이션에 기록해두면, 반복적으로 복습할 수 있다.
그렇게 조금씩 조금씩, 타언어로, 원하는 표현을 하는 방법을 익혀나갈 수 있도록 보조해주는 웹어플리케이션이다.

### TODO

-   HINT 및 Self Quiz 기능
-   EDIT 기능
-   서버 업로드(환경변수추가)
-   예문 말고 설명란 추가하기
-   하루에 최대 4개까지만 작성할 수 있도록 제한을 걸자
-   로딩바를, 캐릭터 이미지로 하는 건 어떨까
-   힌트 데이터 구조잘못됬으니까 수정해야 됨 , 힌트가 퀴즈 안에 포함되야 됨
-   어떤 상황에서 쓸 수 있는지 추가해야 됨 + 누앙스, 다양한 상황에서, 문맥에 따라 다양한 뜻으로 변하는 단어의 경우는, 한국어로 매칭해서 외우는 게 오히려 독이 되는듯 -> 상황을 잘 서술 할 수 있도록, 상황을 매핑 한다는 느낌으로 갈것
-   필요한것 -> 상황, 특정상황 적절한 표현방법, 예문, 퀴즈 및 힌트, 문장 변형(가정,과거가정, 미래, 미래완료, 3,2,1인칭, 의문문) 종류
-   사진을 추가할 수 있도록 하자
    [features]

1. 복습이 누적되면서 너무 많다. filtering 기능을 달자
    - 맞춘횟수가 5회가 넘어가면, 장기로 넣을 수 있다.
    - 장기에서도 랜덤으로 단어가 나오는데, 횟수를 기록해 두고, 나온적 없는 데이터들 을 우선순위로 보내주어야 한다.
    - 각 표현에 대한 메타데이터(그림, gif,나름의 정의, 상황묘사 등) 를 넣을 수 있는 인터페이스 또는 스킴이 있으면 좋겠다.
    - 검색? 필요한가 달력으로 확인가능한데
2. 나 책읽은 거 표현도 정리를 해야됨
    - 책 이미지를 리스트처럼 보여주자, 아이패드에 앨범 리스트 나오는 것처럼, 클릭하면 정리한 표현 쫙 나오도록
3. 로그인 기능 달아야 됨

season2

-   이걸 타입스크립트로 바꿀 수 있을까 -> 있음
-   노드JS-> GraphQL 로 바꾸고 싶다.. 마이그레이션 너무 힘듬, DB 도 MongoDB 같은 거 쓰는 게 더 편하지 않을까 -> 좀더 개발을 해보고, 바꿀 수 없는 상황에 직면할 때까지 개발을 하는 게 더 낫지 않을까?

구획을 나눠서
최근 1주일것은 전부 나오고 -> 근데 몇일 동안 안하게 되면?
-> ... 솔루션 요망

나머지는, 랜덤으로 돌림, 근데 맞은 횟수, 틀린횟수 기록, 등장횟수 기록,
등장횟수가 적은 것을 우선으로 추리고
모두 3번이상 나왔으면,
그담부터는, 틀린 횟수로 우선순위를 준다.

너무 복잡한가??

```
https://developers.google.com/identity/gsi/web/guides/client-library

<script src="https://accounts.google.com/gsi/client" async defer></script>


```

vs코드 사용시, tab으로 jsx태그 생성 안될 때(emmet) 사용이 안될 때
참조 https://code.visualstudio.com/docs/editor/emmet

```
// setting.json

    "emmet.triggerExpansionOnTab": true, // tab키로, 태그를 가져온다.  ex) div -> <div></div>


    // 다른 파일확장자에서도 사용 할 수 있도록 한다.(js)
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "razor": "html",
        "plaintext": "pug"
    }
```

//

snippet

```

	"initReactComponentTamplete:":{
		"prefix": "cfc",
		"body": [
			"import React from 'react'",
			"import styled from `styled-components`;",
			"\n",
			"const ${TM_FILENAME_BASE}Block = styled.$1``;",
			"\n",
			"function ${TM_FILENAME_BASE}({children}){",
			"\treturn (",
			"\t\t<${TM_FILENAME_BASE}Block>$0</${TM_FILENAME_BASE}Block>",
			"\t)",
			"}",
			"\n",
			"export default ${TM_FILENAME_BASE};"

		]
	}
```

```

// Actions must be plain objects. Use custom middleware for async actions
// function을 사용할 수 없다. 미들웨어 안쓰면
export const setExpressions = (expressions) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'expressions/set_expressions',
            payload: expressions,
        });
    };
};

        const successCallback = (result) => {
            dispatch(setExpressions(result.data));
            // dispatch({
            //     type: 'expressions/set_expressions',
            //     payload: result.data,
            // });
            // setPageState({
            //     ...pageState,
            //     events: processEventData(result.data),
            // });
        };

```

footer 하단고정

```
https://angelplayer.tistory.com/185

```

여기서 우아함을 추구하면 결과물을 낼 수 없음
일단 하기로 한 범위까지는 완성해야함

사진을 먼저 주고, 그것을 묘사할 수 있게 끔 해줘야되
그게 훨씬 중요함

결국엔 사진을 묘사하는 연습을 시켜주는 게 목적임

stomp her foot
이렇게 덩어리가 아니라

stomp 가 어떤 뉘양스를 가지는 동사인지 아는 게 중요하다. 한국말 뜻은 가급적 적지 말것 의미를 제한한다.
stomp up
stomp down
stomp over
stomp off
영어는 이런식으로 의미가 확장되면서 사용되는 특징 때문에, 한국말 뜻을 달면 공부가 제대로 안됨,
think in english
if that's hard use images

31.08.22
labeling 박스를 어떻게
to create my own source that will reduce my time later, you should write down more, and manage the designs of components.

story book
componet page 를 만들어야 겠다.
I

좋은 복습 방법이 떠올랐다.
달별로 시험 보기 프로세스를 추가한다.
채점을 한 후에 틀린 문제는,
추가한다.

그리고 복습에 추가해서 나오게 하도록 한다.

말하는 버튼 추가할 것
또는 컨베이어 버튼(말풍선이 막오락가락 하면서 얘기함)

meaning should be fixed in the way that it must be able to be added with multiple of it

세션이 있는 상태에선 대시보드로 가지지 않음
