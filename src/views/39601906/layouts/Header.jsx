export default function Header({ count= 0 , data }){
    return (
        <header>
            <div className="container">
                 <h3>Hamed</h3>
                 <div className="cart">
                     <h3>
                         سبد شما
                         <span>{count}</span>
                     </h3>
                     <ul className= "cart-content">
                         <li>هنوز محصولی اضافه نشده</li>
                     </ul>
                 </div>
            </div>

        </header>
    )
}