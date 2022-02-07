안녕하십니까 금일 테크세션에서 ‘tdd란 무엇인가’ 라는 주제로 발표를 준비해본 신입 프론트엔드 개발자 김 순홍 이라고 합니다.

이미 tdd 뿐만아니라 cicd를 하고있는 상황으로 알고 있는데
이제와서 제가 tdd 를 사용합시다. 
혹은 생활화 합시다
혹은 테스트 코드는 이렇게 작성하는겁니다. 
라기보단
왜써야 하는지
우리는 실제 어떤 이점을 누리고 있었는지 어떻게 더 잘 사용 할 수 있을지  혹은 혹시라도 tdd가 무엇인지 전혀 모르는 분들에게 포커스를 맞춰서 준비해 보았습니다.

오늘 발표는 총 여섯개의 파트로 구성되어 있는데 
Tdd가 무엇인지
이 tdd의 장점과 단점 Tdd가 왜 필요한지
그리고 필요하다면 어떤상황에 어떻게 적용하는지 이야기 하고 
짧게나마 저의 토이프로젝트에 적용해보며 
어떤 시행착오가 있었고
어떻게 극복했는지

마지막으로 tdd를 적용하며 느꼈던 저의 성찰을 나누고자 합니다. 

테스팅이란 제품 혹은 서비스의 품질을 확인 하는 과정의 총칭입니다. 

과거 저는 선박 안전품질팀에서 선박내 설비들이 정상적으로 작동하는지 , 선내 필수증서를 포함한 서류, 시스템은 올바르게 작성 유지 되어지고 있는지
에방하고 점검하고 지적하고 시정조치해나가는 업을 약 10년간 해오면서 검사라는 단어를 접했었는데요 

오늘 우리가 마주할 테스트,
 tdd는 우리가 생산해내는 제품 
즉 소프트웨어의 의도하지 않은 버그를 찾거나
 배포전 우리가 작성한 코드에 특정 기능, 함수, ui 등이 문제 없이 작성되어지고 있는지
 검사하는 일련의 과정으로서 
우리가 어느 환경이나  플랫폼위에서 동작하기 원하는지,
이 제품을 통해 무엇을 목표로 하는지에 따라 

테스트 코드를 작성해서 우리가 작성한 코드가 원하는데로 동작해 주는지 확인하고  

 검증하며 코드를 작성해 나가는 과정이 tdd의 기본이자 전부 라고 할 수있습니다.


이런 tdd는 목적에 따라
 또 목표와 플랫폼에 따라 다양한 테스트가 있지만 
 필수적으로  테스트 하여야 하는 
음… 작성하면 좋은? 기본적인로 작성해야 하는?  
또 tdd를 한다면 알고 있어야 세가지 테스트를 알아보도록 하겠습니다.
테스트는 딱잘라 어디서부터 어디까지가 단위테스트이고 통합테스트인지 어디서부터 어디까지가 e2e테스트 인지는  정의 할 수는 없지만

일반적으로 독립적인 함수, 모듈, 클래스등을 개별적으로  테스트하는 단위테스트와   
  
여러개의 단위를 묶었을떄 상호작용을 테스트 하는 통합테스트
  
ui테스트, 사용자테스트라고 불리는 e2e테스트가 있습니다.



자동차를 예를 들어 설명하면 바퀴하나, 헨들 하나를 검사하는건 단위 테스트

이 핸들과 바퀴의 상호작용 및 각 기능의 양립성을 테스트하는게 통합테스트. 

그리고 완선된차를 고객에게 인도하기앞서 시운전해보는 과정을 e2e과정이라고 할 수 있습니다.

앞서 다른 여러가지 테스트가 있다고 하였고 또 필요에 따라 더 세부적인 테스트를 진행 할 수도 있겠지만 
 위  세가지의 테스트만 잘 수행하여도 tdd를 진행하는데 크게 문제가 없다고 생각됩니다.

  
이러한 테스트들은 테스트가 간단할 수록 비용과 작성 난이도의 코스트가 저렴하고 
점점 위로 올라가 고도화된 테스트 일수록 작성비용이 상승하고 작성 난이도가 어려워집니다.
  
또한 효율성측면에서도 개발을 할때  유닛테스트는 즉각적인 피드백을통해  버그나 문제점을 확인 할 수 있지만
이미 상호작용을 하고 있거나 사용자가 사용하는 시점에는 버그를 찾아내거나 문제를 추적하는 과정에서 개발 비용의 상승을 야기 할 수 있습니다.


해서 목적에 따라 어느 부분에 더 집중하여 테스트를 진행 하는지
그 모양이 트로피 모양이거나 구형의 모양일수도 있어 선택의 문제이겠지만
  
 우리는 일반적으로 이러한 피라미드형태의 테스트를 진행하게되며 이 모양을 테스트 피리마드라고 부르게 됩니다.


 자동차의 바퀴가 튼튼하다고 해서 자동차의 성능이 담보되는것이 아니며, 
에어백의 품질만으로는 자동차의 안전이 담보되는것이 아니기 떄문에
Tdd가 너무 좋다고 해서 지나치게 남발하여 과용하는 것은 오히려 의욕이 떨어지거나 테스트를 진행하면 할 수록 비효율에 가까워 지기도하니 
어느정도의 수준을 유지해야 할지 잘 결정하여 선택하여야 할것입니다.


이런 tdd는 

단위 테스트 , 통합테스트, e2e테스트 , ab테스트, 스트레스 테스트 ,함수, 기능,ui, api  테스트 등등
 다양한 종류와 이름의 테스트가 있어  어렵게 느껴질 수 있지만 모든 테스트는 단 하나의 프로세스로 움직이게 됩니다.
  
특정한 기능을 수행하는 코드를 테스트할 수 있는 테스트 코드를 작성하고 
테스트 코드에 맞춰 우리가 원하는, 의도한 기능을 수행할 수 있는 제품코드를 작성하고 
테스트 코드를 주기적으로 실행하여 요구사항에 맞게끔 제품이 동작하는지 검사하고 실패했다면 보수하는 작업의 연속과정입니다.

앞서 말씀드렸듯 우리가 작성한 코드가 원하는데로 동작하는지 확인하며 작성해내는 과정이 tdd의 기본이고 전부입니다.
 
디테일하게 설명 드리자면
Given,when.then 단계를 거쳐서 
 실패가 가능한 테스트코드를 작성합니다.

그럼 당연히 코드가 없이 실행된 테스트코드는  실패 하게 되는데요.
그후 작성된 테스트 코드가 통과될 수 있도록 코드를 작성해 줍니다.

  
여기서 중요한점은 코드를 전부 작성하는게 아닌 앞서 작성한 테스트를 겨우 통과할 정도의 최소한의 코드만 우선 작성한다는 점인데요.
그 후 테스트를 실행해 보면 앞서 작성한 테스트 코드는 성공하게 됩니다.
그리고 나서 다시 필요한 기능의 테스트를 작성하고 
테스트를 통과시키고 다시 작성하고 실패하고 통과시키고 이것이 테스트 주도 개발 tdd의 작성 방법인데요 .

즉 이런식으로 개발해나가는 방식을 우리는 tdd라고 합니다.
이 테스트 코드기반으로 작성된 코드가 우리가 원하는 기능을 모두 수행하여 테스트를 통과하게 되면 그 이후 코드를 다듬는 리팩토링 작업을 시작하게 됩니다.

테스트코드를 작성해놓는다면 코드를 어떻게 수정하더라도 이 코드는 내가 원하는데로 동작하는 코드임을 테스트 코드가 보증 한다는 점에서
우리는 테스트코드 작성 전보다 조금더 자신있고 과감하게
그리고 계획적으로 리팩토링이 가능해지며 
즉흥적인 리팩토링에서 오는 실수를 막아줍니다.

또한 tdd를 하게 되면 우리가 얻게 되는 더 많은 이점이 있는데요 


자연스럽게 다음 챕터로 넘어와 tdd의 장점에 대해 발표 해보도록 하겠습니다.


tdd의 장점 첫번째 요구사항의 이해입니다.

앞서 말씀드린 테스트주도개발, 테스트가 우선적으로 수행되려면 
우리는 당연히 우리가 작성하고자 하는 코드의 요구사항에 대한 철저한 이해가 기반이 되어야 합니다.

이는 자연스럽게 설계 단계에서의 디테일의 향상효과를 가지고 오는데요 .
우리가 원하는 기능이 무엇인지, 
어떤 기능을 구현해야 하는지에 대한 테스트가 우선시 되는 부분이니 너무나 당연한 부분입니다.

코딩을 본격적으로 시작하기전 모든 요구사항에 대한 점검과 이해의 시간을 가질 수 있다는점 ,
그리고 우리가 예상하는 기능이 수행 되길 기대하기 때문에 조금은 사용자 입장에서 코드를 작성해 볼 수 있다는점
 
이부분이 제가 생각하는 첫번째 tdd의 큰 장점이고  두번째로는 바로 문서화입니다.

기본적으로 우리가 tdd를 적극적으로 도입했다 함은
다만 코드 한줄이 변경되거나 작성되어도 테스트 코드가 붙어 있다는 가정이 전제가 되어있어야 할것입니다.
테스트 코드를 작성할때 우리는 우리가 원하는 기능의 설명을 테스트 코드에 작성하여 넣게 되는데 이러한 부분이 모이고 모여 문서화의 기능을 하게 됩니다.

즉 
내가 코드리뷰를 요청하거나 혹은 남이 나의 코드를 보고 수정해야할 일이 생겼을때 
우리는 가끔 이 코드가 어떤기능을 어떻게 수행하는지 파악하는데만 많은 시간을 허비하기도 하는데 

문서화 함으로서 이코드가 무슨 역활을 하고 어떤 결과를 도출해낼지 알아 볼 수 있게 하고
이 뜻은 누군가 내 코드를 보고 
“아 ~이런 기능이 실행되길 기대하며 작성했구나~이렇게 동작하는구나~”
하고 한눈에 코드의 기능과 역활을 파악하는 효과를 기대할 수 있게 됩니다.

이는 자연스럽게 협업하는 과정에서 서로간 오해의 여지를 줄여주며 
기능을 요청하는  입장에서 뭔가 명세표의 역활 을 할 수 있게되어 기능을 구현하는 입장의 편리를 또한 도모하게 됩니다.
이러이러한 기능이 필요하여 테스트를 만들어 봤는데 이테스트를 통과할 수 있는 기능을 개발해주세요.
와 같은 훈훈한 과정을 기대 할 수 있습니다.
  
세번째로는 이슈의 예측입니다.
내가 원하지 않는 방향으로 기능이 동작했을때 테스트 과정에서 이를 한번 걸러낼 수 있다는점입니다.
자잘한 코드의 버그들을 단위테스트를 통해 걸러내고 이는 자연스럽게 높은 확율의 통합테스트 통과율을 기대할 수 있게 합니다.

이러한 결과를 기대하고 테스트를 돌렸는데 다른 결과를 내놓지 않길바라며 테스트하는것이 
우리가 tdd를 하는 가장 근원적인 이유이기도하지만 이 단순한 메커니즘이 좀더 상위 레벨의 테스팅을 할때 불필요한 리소스들을 사전에 차단해주는 효과를 기대할 수 있게 해주며
이는 생상선 향상, 고도화의 근간을 마련해주기도 합니다. 

정리해보면
편리한 유지보수
품질의 향상 / 설개의 향상
요구사항에 대한 이해
문서화의 장점이 있지만

단점으로는
약간의 번거로움과 귀찮음을 동반합니다.
또한 개발자 모두가 tdd에 익숙하기 전에는 개발속도가 상대적으로 더디게 느껴질 수가 있습니다.

그리고 저같은 초보 개발자에겐 약간의 러닝커브도 있다는 점입니다. 
무언가 다른 기술을 하나 더 습득한다는것은 어떤걸 배워도 똑같긴 하겠지만
 tdd를 왜 써야 하는지 쓰게 되면 어떤점이 좋은지 그리고 언제 어디에 어떻게 써야 하는지를 본인이 느끼고서 주도적으로 작성하고 사용하지 않는다면 귀찮은 프로세스의 추가일 뿐입니다. 

또한 
한번 작성된 코드는 영원히 유지 보수 되야 되며 배포용 코드와 철저히 분리하여야 하기 때문에  테스트 코드 자체를 별도로 관리 할 수 있는 인원과 프로세스가 필요합니다.
결국 누군가의 역량이 투입되어 테스트 코드를 관리하고 유지하여야 한다는 것인데 이는 더 나아가 
배포 전/후 수정하는 과정에서 혹은 배포이후 유지/보수 단계에서 조그마한 수정이라도 테스트 코드에 자칫 얽매일 수 있다는 단점이 있습니다.

정리해보면 
관리의 불편함으로 줄일 수 있겠습니다.

심리적 기술적 러닝커브,
 리소스의 낭비 등이 단점에 해당하는 부분이지만
전반적으로 tdd문화가 자리잡게 된다면 결과적으로는 개발 시간을 줄일 수 있게 됩니다.

예를들면 점과 쉼표나 탈자에서 오는 사소한 지만 조그마한 디버깅같은것을이요.

그렇다면 tdd는 언제 필요한가 입니다.

아까부터 계속 개발을 해나가는 과정 중에 지속적으로 설계해야 한다고 말씀드리고 있기 때문에 
사실 언제라는 명제는 그렇게 중요한 부분이 아닙니다.
 테스트코드를 작성하고 소스코드를 작성하느니 
소스코드를 작성해놓고 테스트를 붙히느니 하는 문제를 말씀드리고 싶은게 아니기 때문이죠.

주목해야 할점은 필요한가 입니다.

Tdd가 보급되기 전의 개발은
개발자가 개발을 하고 qa팀이 검수를 하고 이 검사에서 이상이 없으면, 배포가 되는 과정을 거쳐 배포가 되었습니다.
물론 대부분의 개발은  지금도 이런 방법으로 진행되고 있지만 
이러한 일반적인 배포 과정은 우리에겐 너무나 익숙한  문제점을 던저줍니다.


첫번째로는 
개발단계에서 철저한 작성을 통해 동작에 문제가 없음을 확신하면 바로 출시 할 수 있겠지만 
그렇지 못하기에 검증기간에 많은 시간과 자원을 소모하게 됩니다.
사실 긴 설명이 필요 없이 단위 단계의 테스트 과정중에 문제가 발생하게 된다면 개발자에게 피드백을 줘야하고
 당연히 상위 복합적인 동작의 테스트의 통과를 기대하기 어렵게 됩니다.

우리는 이러한 불편함과 문제점에 익숙해져있기 때문에 어쩌면 당연하고 자연스럽게 넘기곤 합니다.
사실은 큰문제인데 말이죠.
물론 개발과 테스트를 동시에 병렬로 진행하는 방법도 있긴하지만 
그게 바로.. tdd아닌가.. 싶기도 하고 그렇습니다.

두번쨰로는 
개발팀에서 아무리 빨리 개발을 하더라도 검증팀에서 시간이 많이 소모되다 보니 경우에 따라 병목현상이 발생 할 수 있다는 점입니다. 

정말 대단한 실력자가 완벽하게 개발하여 문제가 없다고 확신하고 개발을 해서 검수과정으로 넘기더라도
테스트가 통과가 되야 다음진도로 넘어 갈 수 있는 부분이 존재 할 수도 있고 
사실 qa를 끝내지 않고 배포하는 경우는 드물기 때문입니다

심지어 우리는 완벽하지도 않은데 피드백을 받고 다시 작성한 코드가 통과 할때까지 기다리고 있어야 하거나 
완벽하지 않기 때문에 내가 만들어낸 코드가 복합적인 문제를 야기하기도하고,
 그렇게 된다면 뭔가 다시 시작하게 되어버리는 최악의 상황까지 예상해볼 수 있습니다.

또한 테스트를 빨리 진행하기 위해 qa를 위한 인원을 채용한다거나 리소스를 분배하는 방식은 그 자체만으로도 회사의 입장에서 달갑지만은 않은 상황일겁니다.


하여 우리는 개발을 하면서 테스트 코드를 작성함으로서 자동화의 편리를 누릴 수 있습니다. 
개발하는 과정에서 테스트가 잘 동작하는지 보고 확인하고 수정함으로서  

즉각적인 피드백을 얻을 수 있게 됩니다.
누군가 검수 해주지 않아도 내가 원하는 기능을 수행하고 있지 않다는 즉각적인 피드백은 멀리보면 배포일정을 앞당기게 되는 효과를 기대 할 수 있습니다.



그리고 qa단계에서 미처 확인하지 못한 부분까지 커버할 수 있다는 장점또한 있습니다.
즉 통합테스트 단계에서의 통과율 상승을 기대할 수 있게 합니다.
앞서 작성프로세스에서 말씀드렸다싶이 통과할 수 있는 최소한의 단위를 테스트하고 통과시키기 때문에 
작성당시엔 번거로울 수 있었겠지만 길게 보았을때 사람이 확인하지 못한 의도하지 않은 기능을 사전에 예방 함을 물론
 사람이라면 할 수도 있는 실수의 영역을 높은 커버리지로 대응 할 수 있다는 점입니다.


그렇다면 qa는 동작이 기안대로 작동하는지 하지않는지와 같은 단순한 테스트가 아닌 
사용자 입장에서 제품이 어떻게 동작해야 하는지  어떻게 ui/ux를 구성해야 사용자 친화적인지 등의 
조금 더 다양하고 고차원적인 qa 진행에 조금더 집중할 수 있게 되는 효과를 기대 할 수 있습니다.


그렇다면 결과적으로 제품의 품질이 올라가고  그리고 생산시이 단축되길 기대해 볼 수 있는 tdd를 어떻게 사용하는게  잘 사용하는걸까요?
몇가지 원칙에 대해서 간단히 설명 해드리려고 합니다.

첫번째 first 원칙인데요.

처음 f 는 fast의 약자입니다.
느린것에대한 의존성을 낮추자는 의미인데요.
빈번히, 자주 실행되어야 하는 테스트 코드가 데이터베이스나 네트워크또는 파일에 접근하게 되면 테스트 코드가 느려지게 되는데요.
 이는 올바를 테스트 원칙이 아닙니다.
자주 빈번히 실행되어야 하는 테스트 코드가 한번 테스트 하는데 1분씩 걸린다고 하면 이 자체만으로도 비효율을 야기 할 수 있기 때무입니다.
또한 테스트 코드가 독립적이지 못하고 어딘가 크게 의존하게 된다면 테스트 코드 자체가 불안해지기때문입니다.
이는 목함수나 스턱들을 사용하여 효과적으로 대체 할 수 있으며 이렇게 어딘가 의존하지 않은 독립적인 코드는 재사용 면에서도 유리하게 활용될 수 있습니다.
  
두번째의 i 는 
Isolated - 독립적 고립적 집중적
정막 작은 최소한의 단위로 집중적으로 유닛으로 테스트하는것을 뜻합니다.
앞서 계속 말씀드렸듯이 최소한의 통과가가능한 테스트와 기능을 만드는것이 커버리지를 높혀 종국에는 테스트 효율을 높이는 방법이라고 말씀드렸었는데요.
또한 테스트내용 자체가 너무 큰 단위의 테스트 결과를 요구하거나 너무 다양한 기능을 한개의 테스트 코드로 수행하지 말자는 의미 또한 가지고 있습니다.

세번째 r은 repeatable블 의 약자입니다.
Repeatable - 반복가능하도록만들라는 의미 입니다.
동일한 결과가 유지 될 수 있도록하자는 의미도 갖고 있는데 네트워크나 데이터 베이스의 데이터에 환경 변화에 따라
 어쩔때는 성공하고 어쩔떄는 실패 한다면 
그 테스트코드는 누가 보더라도 좋은 테스트 코드라고 볼 수 없게 됩니다. 
또한 테스트 순서에 따라 결과값이 다르다면 그 코드를 재사용 하는데도 큰 문제를 야기 할 수 있게 됩니다.
즉 환경에 영향을 덜 받는 테스트 코드를 작성하자라는 원칙이였습니다.

다음 s는 Self-validating 의 약자로서 

스스로 검증 가능한 코드를 작성하도록 하는것입니다.
우리는 jset와 같은 외부라이브러리를 통해 이문제를 효과적으로 해결할 수 있는데요
 어떤 결과가 도출되었는지 만약  테스트가 실패 했다면어디서 실패 하였는지 스스로 알아낼 수 수 있도록 작성하자는 원칙입니다.

더 나아가 내가 작성한 테스트코드가 기존 리파지토리에 추가가 될때 기존의 우리가 작성한 코드에 어떤 영향을 주는지
 혹시 기존에 코드에 어떤 문제를 야기하진 않을지 까지 스스로 점검가능한 환경을 만드는것 
즉 자동화를 통한 검증단계 까지를 이야기하는 부분입니다.

이부분은 cicd와 직접적으로 맞닿아 있는 부분이기도 한데요.
사실 tdd발표를 준비하며 cicd를 간접적으로 경험해볼 수 있었습니다.

 작성하는 모든 코드는 테스트코드를 포함하여 메인리파지토리에 푸쉬 된다는 가정이 있다면 이 cicd는 200% 활용 될  수 있습니다.
지속적 통합, ci의 단계에서는 코드의 변경사항을 주기적으로 자주 머지되어야 하는데 
당연히 빌드하여 컴파일 되는과정중에 서로 부딪치는 코드는 없는지 테스트코드를 통해 점검되어야 합니다.
테스트코드가 없는 ci는 사실 올바르게 작동하기 힘들며, 빌드되는 과정중에 문제점이 빠르게 발견되어 수정 될수 있도록 하여야 합니다.
개발자가 코드를 추가하는 순간 모든 테스트가 수행되며 모든 테스트가 통과 되는지 추가된 테스트가 기존에 테스트에 영향이 있진 않은지 확인되어야 
지속적 배포, cd가 올바르게 작동 할 수 있다는 점이 흥미로웠습니다.


마지막 t는 Timely
시기적절하게 추가하자는 것인데요.
당연한이야기이지만 코드를 작성하기전에, 사용자한테 배포되기 전에, 리팩토링하기 전에 작성하자는 원칙입니다.
즉 조금더 작은 단위일떄 디테일하게 작성하고 사전에 예기치 못한 문제를 차단하자는 의미도 갖고있습니다.

최소한의 단위를 독립적으로 자동화하자.
였구요.


두번째로는 테스트를 할떄 고려해야 하는 사항에 대한  Correct 원칙입니다.

 1. C
        1. Conformance  - 특정한 포맷을 준수하는지 확인하지 확인하여야 합니다..
        2. 인풋이 전화번호,이메일, 아이디 , 확장자 처럼 요구하는 데이터의 포맷과 다를경우 어떻게 작동하는지 예상할 수 있어야 하고 
        3. 만약에 다르다면 어떻결과를 받아오는 지 확인하여 수정할 수 있어야 합니다.
    
 2. O
        1. Ordering - 순서 조건확인을 하여야 합니다.
        2. 순서가 중요한 경우 순서대로 들어오지 않을경우를 예상하여야 합니다.
        3. 마찬가지로 원하는 순서데로 데이터가 들어오지 않았을때 어떤 결과가 나오는지 작성도어 있어야 합니다.

 3. R
        1. Range - 숫자의 범위를 고려하여야 합니다.
            1. 범위를 벗어나면 어떻게 작성하는지 예상
            2. 예를들어 넘버인풋이 들어간다면 의도치않게 음수나 소수점이 들어가면 어떻게 대응해야 하는지 이것을 원천적으로 차단할지의 대한 고려입니다. 
 4. R
        1. Reference - 외부 의존성 유뮤, 특정 조건의 유무
        2. 좋은 테스트 코드라면 특정상황이 아니라면 어떻게 작동하는지 예할 수 있어야 합니다.
        3. 예를들어 코드가 실행되기 전 선행되어 실행되어야 하는 코드가 있다면 선행코드가 정상적으로 들어오는지의 여부를 테스트 할 수 있어야 합니다.
        4. 원하는 함수가 선행되어 실행되지 않았을떄 어떤 결과가 나오는지 또한 테스트코드로서 작성이 되어 있어야 합니다.  
 5. E
        1. Existence
        2. 값이 존재하지 않을경우 어떻게 동작할지 예상하는 코드가 있어야 합니다
        3. 널일떄 언디파인드일뗴 빈문자열일때 등등의 상황에서 동작하는 테스트 코드가 작성되어 있으면 좋습니다.  
 6. C
        1. Cardinality- o-1-n 법직에 따라 검증
        2. 중복도가 높을때나 낮을때 어떤 결과를 예측 할 수 있는지.
        3. 하나도 없을떄/ 하나만 있을떄/ 많을때 어떤 결과일지 예상하는 코드가 있어야 합니다.  

 1. T
        1. Time -
        2. 순서가 맞지 않은경우 / 오래걸린 경우 시간에 따른 결과값이 다를 경우를 테스트하는 코드가 작성되어야 합니다.
       
이러한 고려사항을 일일히 모든 코드에 적용하고 매번 모든경우의 예외를 고려할 수는 없습니다.
애초에 코드의 단위를 잘개 쪼개어 복잡하지 않게 최소한의 기능만이 구현되어 있다면 필요한 몇가지의 요소만 고려되어도 충분히 훌륭한 테스트 코드라고 할 수 있겁니다.

이외에도 여러가지 양질의 테스트 코드를 위한 여러가지 원칙들이 있지만 이정도로 간략하게 설명하고 다음 챕터로 넘어가도록 하겠습니다.
이번 챕터에선 제가 , 토이프로젝트를 작성하고 테스트 코드를 적용한 과정과 이를통해 느겼덧 몇몇 고난과 느낀점들을 공유하고서 길었던 발표를 마치고자 합니다.

이번 기회를 통해 저는 직접 만들어본 토이프로젝트에 test코드를 붙혀 봤는데요.
보시다 싶이 두가지의 토이프로젝트를 만들어 보았습니다.

첫번째 토이프로잭트는 counter라는 토이 프로잭트인데요
인풋값에 숫자를 입력 받고 입력받은 숫자만큼 카운터를 증가 또는 감소시키는 장난감입니다.
카운터가 100이 넘거나 100보다 작아젔을때 색이 바뀌도록 하였으며 최대값과 최소값은 없습니다.

두번째 토이프로잭트는 stack이라는 장난감입니다.
Stack의 last in first out 자료구조를 만들어 보았으며 
stack값은 최대 5개 까지만 저장 될 수 있도록 만들어 보았습니다.

첫번째 프로잭트의 핵심기능은 인풋값만큼 카운터를 더하거나 빼는 기능이니 만큼 
인풋값이 정확이 입력 되는지
입력된 값만큼 카운터에 추가 되는지 등을 테스트 하였으며 

두번째 프로잭트는 
인풋에 입력된 값이 순차적으로 쌓여 나가는지 그리고 위에서부터 빠져나가는지
5개이상 추가되면 더이상 추가 되지 않는지
더이상 뺄것이 없을땐 빠지지 않는지 테스트 해보았습니다.

테스트는 jest와 리액트라이브러리테스트를 사용하였으며 보시는 바와 같이 제가 의도한 기능대로 함수가 잘 잘동되고 있음을 확인 할 수 있습니다.
이를통해 내가 구현하고자 하는 기능과 각 함수의 의도가 무엇인지 제 3자가 한눈에 파악 할 수 있으며
 요구사항의 이해를 확인 할 수 있게됩니다.


테스트코드를 붙히는동안 제가 순탄치만은 않았는데 

첫번쨰 이유는 바로 
환경설정 이였습니다.
아마 초보자의 러닝커브일텐데요
대부분의 검색결과는 cra 크리에이트 리엑트 앱 환경을 가정하고 이루어 졌으나
저는 cna 크리에이트 넥스트 앱 환경에서 작업하고자 하여 별도의 컴파일 설치나 바벨등의 설치가 필요 했습니다

또한
Jest 경우 테스트의 도움을 주는 라이브러리
테스트의 범위를 포착 한다던지 테스트의 시각화, 콘솔의 표시등에 활용되는 실행기
리엑트 라이브러리 테스트는 랜더, 파이어테스트, 스크린의 가상돔과 같은 역활임에도
  jest 와 리액트 라이브러리 테스트의 동작 환경에 대한 이해가 부족하여 react 라이브러리 테스트 없이 jset만 가지고 테스트를 시도한다거나
cra환경에서 버전을 맞추지 못한다거나 하는 두번쨰 난관이 있었고

세번째 난관은 단위테스트, 통합테스트, e2e 테스트에 대한 개념이 없었다는 것이였습니다.
단위테스트의 경우 테스트를 성공하는데 많은 시간이 소요되지 않았지만
앞서 잠시 언급한 state의 의존성에 의해 react 환경에서 통합 테스트를 진행하며 꽤나 많은 시간을 소비하였습니다.
결국 바퀴만 만들어서는 자동차라고 할 수 없다는 내용을 이해하고서야 본격적으로 제가 요구하는 기능을 적은 테스트코드를 통해 
해당 기능을 수행하는 코드를 작성 해나가며 코딩을 할 수 있었습니다.

실제 제가 적용해보고 테스트 해본 코드는 기초중에 기초로서 싸이프레스니 스넵샷테스트 와같은 좀더 다양한 라이브러리나
목함수,  비동기 함수처럼 복잡한 함수를 다룬것은 아니지만 
어떻게 테스트코드를 붙히고 적용해볼지는 사실 제가 그랬듯 유튜브와 구글링을 통해 삽질을 하다보면 어렵지 않게 알게 됩니다.


하지만 tdd와 cicd ,
 스크럼 방식의 애자일 뿐만 아니라 
이전 제가 근무했던 환경에서 kpi, 위험성평가, 각종 체크리스트들로 대표되었던 모든 시스템의도입은

이걸 왜 도입하게 됐으며 도입하게 되면 어디에 어떻게 좋은지 본인 스스로가 필요에 공감하고 
적극적으로 수용하고자 하는 마음이 선행되어야 온전히 장점들이 발휘 될 수 있다고 생각합니다.

하여 테스트와 tdd란 무엇인지,
어떻게 적용하고
어떻게 활용되는지

어떠한 장점이 있고 
어떠한 방식으로 적용하는게 올바를 적용방식인지 
에 대하여 주로 설명드렸고 
실제 토이프로젝트에 적용해보며 사용방법에 대해 간략하게 알아보는 시간을 가져봤습니다.

저의 발표를 통해 저처럼 tdd를 처음 접하신 분들이 있다면 그분들의 이해를 돕는데 도움이 되었음 하며 발표를 마치겠습니다.

이상입니다.
감사합니다.
