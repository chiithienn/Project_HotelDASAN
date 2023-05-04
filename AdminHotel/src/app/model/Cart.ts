export class CartOrder{
  constructor(
    public _id:any=null,
    public AccountID:any=null,
    public DateCreated:string='',
    public OrderDetails:Array<CartOrderDetail>
  ){}
}

export class CartOrderDetail{
  constructor(
    public _id:any=null,
    public CartOrderID:any=null,
    public Branch:string='',
    public RoomType:string='',
    public Price:number=0,
    public RoomQuantity:number=1,
    public Adults:number=1,
    public Children:number=0,
    public CheckInDate:string='',
    public CheckOutDate:string=''
  ){}
}
