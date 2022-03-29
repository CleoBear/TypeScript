// 以class的方式實作形狀面積及周長的計算
namespace shap {

    // 長方形
    class Retangle {
        public length:number = 0;
        public width:number = 0;

        constructor(length:number, width:number){
            this.length = length;
            this.width = width;
        }
        //長*寬
        get area(){
            return this.length * this.width;
        }
        //(長+寬)*2
        get perimeter() {
            return (this.length + this.width)*2;
        }
    }

    let retangle = new Retangle (8, 10);
    console.log('The retangle length:' + retangle.length + ' width:' + retangle.width);
    console.log('area:' + retangle.area);
    console.log('perimeter:'+retangle.perimeter);

    // 正方形
    class Square {
        public length:number = 0;

        constructor(length:number){
            this.length = length;
        }
        // 邊長*邊長
        get area(){
            return this.length * this.length;
        }
        // 邊長*4
        get perimeter() {
            return this.length * 4;
        }
    }

    let square = new Square (8);
    console.log('The square side length:' + square.length);
    console.log('area:' + square.area);
    console.log('perimeter:'+square.perimeter);

    // 平行四邊形
    class Parallelogram {
        public length:number = 0;
        public width:number = 0;
        public height:number = 0;

        constructor(length:number, width:number, height:number){
            this.length = length;
            this.width = width;
            this.height = height;
        }
        // 寬*高
        get area(){
            return this.width * this.height;
        }
        //(長+寬)*2
        get perimeter() {
            return (this.length + this.width)*2;
        }
    }

    let parallelogram = new Parallelogram (8, 10, 5);
    console.log('The parallelogram length:' + parallelogram.length + " witdth:" + parallelogram.width + "height:" + parallelogram.height);
    console.log('area:' + parallelogram.area);
    console.log('perimeter:'+parallelogram.perimeter);

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
    console.log('perimeter:'+circle.perimeter);

}