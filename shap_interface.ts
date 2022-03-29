// 以 abstract class的方式實作四邊形的形狀面積及周長的計算
namespace shap.interfaces{
    
    interface Shap{
        getArea():number;
        getPerimeter():number;
    }

    /*===========================================================
                            多邊形
    ============================================================*/
    abstract class Polygon implements Shap{

        protected sides: Array <number> = [];
        protected height:number = 0;

        constructor(sides: Array <number>, height:number){
            this.sides = sides;
            this.height = height;
        }
        
        public abstract getArea():number;

        getPerimeter(): number {
            return this.sides.reduce((a,b)=>a+b);  
        }
        
        get area(){
            return this.getArea();
        }
        get perimeter(){
            return this.getPerimeter(); 
        }

        protected result(): void{
            console.log('area:' + this.area);
            console.log('perimeter:'+this.perimeter);
        }
         
    }

    abstract class Quadrilateral extends Polygon{
        
        protected a:number = 0;
        protected b:number = 0;
        protected c:number = 0;
        protected d:number = 0;

        constructor(a:number, b:number, c:number, d:number, height:number){
            super([a, b, c, d], height);
            this.a=this.sides[0];
            this.b=this.sides[1];
            this.c=this.sides[2];
            this.d=this.sides[3];
        }
    }

    abstract class Triangle extends Polygon{
        
        protected a:number = 0;
        protected b:number = 0;
        protected c:number = 0;

        constructor({ a, b, c, height }: { a: number; b: number; c: number; height: number; }){
            super([a, b, c], height);
            this.a=this.sides[0];
            this.b=this.sides[1];
            this.c=this.sides[2];
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

    
    // 三角形
    class IsoscelesTriangle extends Triangle{

        constructor(hypotenuse:number, baseSide:number, height:number){
            // 必須呼叫服類別的constructor
            super({ a: hypotenuse, b: hypotenuse, c: baseSide, height });
        }

        //必須要實作 setAarea() 寬*高
        public getArea(){
            return this.c * this.height/2;
        }
        public result(): void {
            console.log('The triangle hypotenuse:' + this.a + " baseSide:" + this.c + ' height:'+ this.height);
            super.result();
        }
    }

    let isoscelesTriangle = new IsoscelesTriangle (5, 6, 4);
    isoscelesTriangle.result();

    /*===========================================================
                            圓形
    ============================================================*/

    abstract class BasicCircle implements Shap{
        static readonly pi = 3.1415926;
        
        protected majorAxis = 0;
        protected minorAxis = 0;
        
        constructor(majorAxis:number, minorAxis:number){
            this.majorAxis = majorAxis;
            this.minorAxis = minorAxis;
        }
        
        getArea(): number {
            return this.majorAxis * this.minorAxis * BasicCircle.pi;
        };

        public abstract getPerimeter(): number;

        get area(){
            return this.getArea();
        }
        get perimeter(){
            return this.getPerimeter(); 
        }

        protected result(): void{
            console.log('area:' + this.area);
            console.log('perimeter:'+this.perimeter);
        }

    }

    // 圓形
    class Circle extends BasicCircle{
        constructor(radius:number) {
            super(radius, radius);
        }

        getPerimeter(): number {
            return this.majorAxis * 2 * Circle.pi;
        }
        
        public result(): void {
            console.log('The circle radius:' + this.majorAxis);
            super.result();
        }
    }

    let circle = new Circle(2);
    circle.result();

    // 橢圓形
    class Oval extends BasicCircle{
        constructor(majorAxis:number, minorAxis:number) {
            super(majorAxis, minorAxis);
        }
        //L=2πb+4(a-b)。
        getPerimeter(): number {
            return 2 * BasicCircle.pi * this.minorAxis + 4 * (this.majorAxis - this.minorAxis);
        }
        
        public result(): void {
            console.log('The oval majorAxis:' + this.majorAxis + ' minorAxis:' + this.minorAxis);
            super.result();
        }
    }

    let oval = new Oval(4,2);
    oval.result();
    
    //！！instanceof 只能用在繼承物件
    //console.log(oval instanceof BasicCircle);
    //console.log(oval.perimeter);

    /*===========================================================
                    假設今天要實作一個圓形的盾牌
    ============================================================*/
    interface Armor{
        protect():void;
    }
    interface Wapen {
        attack():void;
    }

    class Shield extends Circle implements Armor, Wapen{
        protect(){
            return '減少傷害';
        }
        attack(){
            return '反傷';
        }

    }

    let shield = new Shield(5);
    console.log('盾牌面積:' + shield.area);
    console.log('盾牌周長:' + shield.perimeter);
    console.log(shield.protect());
    console.log(shield.attack());
}