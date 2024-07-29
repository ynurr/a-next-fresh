export default function List() {
  let 상품 = ['Tomatoes','Pasta','Coconut']
  let 어레이 = [2,3,4]
  어레이.map(function(a,i){

  })

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        상품.map(function(a,i){
          return (
            <div className="food">
              <h4>{a} $40</h4>
            </div>
          )
        })
      }
    </div>
  )
} 