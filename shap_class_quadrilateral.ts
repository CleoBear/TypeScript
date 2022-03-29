// 以 abstract class的方式實作四邊形的形狀面積及周長的計算
namespace shap.quadrilateral {
    
    abstract class Quadrilateral {

        protected a:number = 0;
        protected b:number = 0;
        protected c:number = 0;
        protected d:number = 0;
        protected height:number = 0;

        constructor(a:number, b:number, c:number, d:number, height:number){
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.height = height;
        }
        
        public abstract getArea():number;
        
        get area(){
            return this.getArea();
        }
        get perimeter(){
            return this.a + this.b + this.c + this.d;
        }

        protected result(): void{
            console.log('area:' + this.area);
            console.log('perimeter:'+this.perimeter);
        }
         
    }

    // 長方形
    class Retangle extends Quadrilateral{

        constructor(length:number, width:number){
            // 必須呼叫服類別的constructor
            super(length, width, length, width, length);
        }
        //必須要實作 setAarea() 計算面積：長*寬
        public getArea(){
            return this.a * this.b;
        }

        public result(): void {
            console.log('The retangle length:' + this.a + ' width:' + this.b);
            super.result();
        }
    }

    let retangle = new Retangle (8, 10);
    retangle.result();

    // 正方形
    class Square extends Quadrilateral{
        constructor(side:number){
            // 必須呼叫服類別的constructor
            super(side, side, side, side, side);

        }
        //必須要實作 setAarea() 邊長＊邊長
        public getArea(){
            return Math.pow(this.a,2);
        }

        public result(): void {
            console.log('The square side:' + this.a);
            super.result();
        }
    }

    let square = new Square (8);
    square.result();
  
    // 平行四邊形
    class Parallelogram extends Quadrilateral{

        constructor(length:number, width:number, height:number){
            // 必須呼叫服類別的constructor
            super(length, width, length, width, height);
        }

        //必須要實作 setAarea() 寬*高
        public getArea(){
            return this.b * this.height;
        }

        public result(): void {
            console.log('The parallelogram length:' + this.a + " witdth:" + this.b + " height:" + this.height);
            super.result();
        }
        
    }

    let parallelogram = new Parallelogram (8, 10, 5);
    parallelogram.result();

    /*
    // 三角形
    class Triangle {
        
        public a:number = 0;
        public b:number = 0;
        public c:number = 0;
        public height:number = 0;

        constructor(
            a:number,
            b:number,
            c:number,
            height:number
        ){

            this.a = a;
            this.b = b;
            this.c = c;
            this.height = height;

        }
        // 底＊高/2
        get area(){
            return this.c * this.height / 2;
        }
        // 邊長相加 a+b+c
        get perimeter() {
            return this.a + this.b + this.c;
        }
    }

    let triangle = new Triangle (2, 3, 4, 5);
    console.log('The triangle a:' + triangle.a + " b:" + triangle.b + "c:" + triangle.c + ' height:'+ triangle.height);
    console.log('area:' + triangle.area);
    console.log('perimeter:'+triangle.perimeter);

    // 圓形
    class Circle {
        //!! class中不能使用const，改用static readlonly
        //const pi:number =3.1415926;
        static readonly pi:number = 3.1415926;

        public radius = 0;

        constructor(radius:number) {
            this.radius = radius;
        }
        // 底＊高/2
        get area(){
            return this.radius * this.radius * Circle.pi; //使用靜態方法取得成員
        }

        // 邊長相加 a+b+c
        get perimeter() {
            return this.radius * this.radius * Circle.pi;
        }
    }

    let circle = new Circle(2);
    console.log('The circle radius:' + circle.radius);
    console.log('area:' + circle.area);
    console.log('perimeter:'+circle.perimeter);*/
}