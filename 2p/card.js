const Vector = require('./vector')

class Card{
    constructor(numCard=null, cantCards=13){
        this.cantCards = cantCards;
        this.card = numCard; 
    }
    
    //Cards: 0 = clubs, 1= diamonds, 2 = hearts, and 3 = spades(pica)
    printCard(n=this.card){//return Vector [tipo,carta]
        if(n <= this.cantCards){//clubs
            return new Vector(['clubs',n % this.cantCards])
        }
        else if(n <= this.cantCards*2){//diamonds
            return new Vector(['diamonds',n % this.cantCards])
        }
        else if(n <= this.cantCards*3){//hearts
            return new Vector(['hearts',n % this.cantCards])
        }
        else if(n <= this.cantCards*4){//spades
            return new Vector(['spades',n % this.cantCards])
        }
        else
            console.log('Error: invalid value')
    }
    printNumber(n,k){//return int
        if((k == 'clubs' || k == 1) && (n > 0 && n <= this.cantCards)){//clubs
            return n;
        }
        else if((k == 'diamonds' || k == 2) && (n > 0 && n <= this.cantCards)){//diamonds
            return n + this.cantCards;
        }
        else if((k == 'hearts' || k == 3) && (n > 0 && n <= this.cantCards)){//hearts
            return n + this.cantCards*2;
        }
        else if((k == 'spades' || k == 4) && (n > 0 && n <= this.cantCards)){//spades
            return n + this.cantCards*3;
        }
        else
            console.log('Error: invalid value')
        
    }
    //calculate probabilities
    onePair(){
        //Combinación sin repetición -> C(n,r) = n!/(n-r)!*r!

        function factorial(n) {
            return n <= 1 ? 1 : n * factorial(n - 1);
        }
        // total de cartas 52
        //13 tipos 4 iguales
        // 5 cartas por mano

        // parejas
        // parejas * 3 cartas 
        //podria ser  A y A y las demás
        // (13 de 1) (4 de 2)


        //formula = n! -/ (((n-k)!)*(k!))

        //posibilidades con pares 
        //primer  n=13 k=1 
        let primer= (factorial(13) / (factorial(13-1)*(factorial(1))));
        // segundo n=4 k=2
        let seg= (factorial(4) / (factorial(4-2)*(factorial(2))))
        //n=12 k=3
        let tercer= (factorial(12) / (factorial(12-3)*(factorial(3))))
        //n=4 K=1
        let cuartoFir=(factorial(4) / (factorial(4-1)*(factorial(1))))
        let cuatro= Math.pow(cuartoFir,3);

        let num_posibles=(factorial(52) / (factorial(52-5)*(factorial(5))))
        let operacion= primer*seg*tercer*cuatro;
        let prob=operacion/num_posibles;

        //probabilidad se define por  P= casos favorables/casos posibles
       

        return ((prob.toFixed(4))*100)+"%";
    }
}

(()=>{
    c = new Card()
    console.log(c.printCard(50))
    console.log(c.printNumber(1,'hearts'))
    console.log(c.onePair())
})()
